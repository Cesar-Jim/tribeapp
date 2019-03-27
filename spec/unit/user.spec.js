const sequelize = require("../../src/db/models/index").sequelize;
const User = require("../../src/db/models").User;

describe("User", () => {
  beforeEach(done => {
    sequelize
      .sync({ force: true })
      .then(() => {
        done();
      })
      .catch(err => {
        console.log(err);
        done();
      });
  });

  describe("#create()", () => {
    it("should create a User object with a valid name, email and password", done => {
      User.create({
        name: "John",
        email: "john@example.com",
        password: "111111"
      })
        .then(user => {
          expect(user.email).toBe("john@example.com");
          expect(user.id).toBe(1);
          done();
        })
        .catch(err => {
          console.log(err);
          done();
        });
    });

    it("should not create a user with invalid name, email or password", done => {
      User.create({
        name: "John",
        email: "hi!",
        password: "111111"
      })
        .then(user => {
          done();
        })
        .catch(err => {
          expect(err.message).toContain(
            "Validation error: must be a valid email"
          );
          done();
        });
    });

    it("should not create a user with an email already taken", done => {
      User.create({
        name: "John",
        email: "john@example.com",
        password: "111111"
      })
        .then(user => {
          User.create({
            name: "Johnny",
            email: "john@example.com",
            password: "222222"
          })
            .then(user => {
              done();
            })
            .catch(err => {
              expect(err.message).toContain("Validation error");
              done();
            });

          done();
        })
        .catch(err => {
          console.log(err);
          done();
        });
    });
  });
});
