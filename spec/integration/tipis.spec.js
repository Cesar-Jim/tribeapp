const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/tipis/";

const sequelize = require("../../src/db/models/index").sequelize;
const Tipi = require("../../src/db/models").Tipi;

describe("routes : tipis", () => {
  beforeEach(done => {
    this.tipi;
    sequelize.sync({ force: true }).then(res => {
      Tipi.create({
        name: "Teepee",
        description: "Chat only about food in here"
      })
        .then(tipi => {
          this.tipi = tipi;
          done();
        })
        .catch(err => {
          console.log(err);
          done();
        });
    });
  });

  describe("GET /tipis", () => {
    it("should return a status code 200 and all tipis", done => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(err).toBeNull();
        expect(body).toContain("Tipis");
        expect(body).toContain("Teepee");
        done();
      });
    });
  });

  describe("GET /tipis/new", () => {
    it("should render a new tipi form", done => {
      request.get(`${base}new`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain("New Tipi");
        done();
      });
    });
  });

  describe("POST /tipis/create", () => {
    const options = {
      url: `${base}create`,
      form: {
        name: "Teepee",
        description: "Chat only about food in here"
      }
    };

    it("should create a new tipi and redirect", done => {
      request.post(options, (err, res, body) => {
        Tipi.findOne({ where: { name: "Teepee" } })
          .then(tipi => {
            expect(res.statusCode).toBe(303);
            expect(tipi.name).toBe("Teepee");
            expect(tipi.description).toBe("Chat only about food in here");
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
      });
    });

    it("should not create a new tipi that fails validations", done => {
      const options = {
        url: `${base}create`,
        form: {
          title: "x",
          description: "y"
        }
      };
      request.post(options, (err, res, body) => {
        Tipi.findOne({ where: { name: "x" } })
          .then(tipi => {
            expect(tipi).toBeNull();
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
      });
    });
  });

  describe("GET /tipis/:id", () => {
    it("should render a view with the selected tipi", done => {
      request.get(`${base}${this.tipi.id}`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain("Chat only about food in here");
        done();
      });
    });
  });

  describe("POST /tipis/:id/destroy", () => {
    it("should delete the tipi with the associated ID", done => {
      Tipi.all().then(tipis => {
        const tipiCountBeforeDelete = tipis.length;

        expect(tipiCountBeforeDelete).toBe(1);

        request.post(`${base}${this.tipi.id}/destroy`, (err, res, body) => {
          Tipi.all().then(tipis => {
            expect(err).toBeNull();
            expect(tipis.length).toBe(tipiCountBeforeDelete - 1);
            done();
          });
        });
      });
    });
  });

  describe("GET /tipis/:id/edit", () => {
    it("should render a view with an edit tipi form", done => {
      request.get(`${base}${this.tipi.id}/edit`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain("Edit Tipi");
        expect(body).toContain("Chat only about food in here");
        done();
      });
    });
  });

  describe("POST /tipis/:id/update", () => {
    it("should update the tipi with the given values", done => {
      const options = {
        url: `${base}${this.tipi.id}/update`,
        form: {
          name: "Teepee II",
          description: "Discuss about films"
        }
      };
      request.post(options, (err, res, body) => {
        expect(err).toBeNull();
        Tipi.findOne({
          where: { id: this.tipi.id }
        }).then(tipi => {
          expect(tipi.description).toBe("Discuss about films");
          done();
        });
      });
    });
  });
});
