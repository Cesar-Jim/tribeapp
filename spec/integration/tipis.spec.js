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
        description: "Only food discussions in here."
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
});
