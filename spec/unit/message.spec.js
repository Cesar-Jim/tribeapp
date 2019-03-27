const sequelize = require("../../src/db/models/index").sequelize;
const Tipi = require("../../src/db/models").Tipi;
const Message = require("../../src/db/models").Message;

describe("Message", () => {
  beforeEach(done => {
    this.tipi;
    this.message;
    sequelize.sync({ force: true }).then(res => {
      Tipi.create({
        name: "Teepee",
        description: "Only soccer discussions."
      })
        .then(tipi => {
          this.tipi = tipi;
          Message.create({
            body: "ManU is the best!",
            tipiId: this.tipi.id
          }).then(message => {
            this.message = message;
            done();
          });
        })
        .catch(err => {
          console.log(err);
          done();
        });
    });
  });

  describe("#create()", () => {
    it("should create a message object with a body, and assigned tipi", done => {
      Message.create({
        body: "Go Real Madrid!",
        tipiId: this.tipi.id
      })
        .then(message => {
          expect(message.body).toBe("Go Real Madrid!");
          done();
        })
        .catch(err => {
          console.log(err);
          done();
        });
    });

    it("should not create a message with missing body, or assigned tipi", done => {
      Message.create({
        body: "Go Barcelona"
      })
        .then(message => {
          done();
        })
        .catch(err => {
          expect(err.message).toContain("Message.body cannot be null");
          expect(err.message).toContain("Message.tipiId cannot be null");
          done();
        });
    });
  });

  describe("#setTipi()", () => {
    it("should associate a tipi and a message together", done => {
      Tipi.create({
        name: "White tipi",
        description: "Discussion: animals"
      }).then(newTipi => {
        expect(this.message.tipiId).toBe(this.tipi.id);
        this.message.setTipi(newTipi).then(message => {
          expect(message.tipiId).toBe(newTipi.id);
          done();
        });
      });
    });
  });

  describe("#getTipi()", () => {
    it("should return the associated tipi", done => {
      this.message.getTipi().then(associatedTipi => {
        expect(associatedTipi.name).toBe("Teepee");
        done();
      });
    });
  });
});
