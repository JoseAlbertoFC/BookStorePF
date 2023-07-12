require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/books`,
  {
    logging: false,
    native: false,
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { User, Book, Comment, Pay } = sequelize.models;

User.hasMany(Pay, { as: "pays", foreignKey: "userId" });
User.hasMany(Comment, { as: "comments", foreignKey: "userId" });
User.hasMany(Book, { as: "books", foreignKey: "userId" });

Book.hasMany(Comment, { as: "comments", foreignKey: "bookId" });
Book.belongsTo(User, { as: "user", foreignKey: "userId" });
Book.belongsTo(Pay, { as: "pay", foreignKey: "payId" });

Pay.belongsTo(User, { as: "user", foreignKey: "userId" });
Pay.hasMany(Book, { as: "books", foreignKey: "payId" });

Comment.belongsTo(Book, { as: "book", foreignKey: "bookId" });
Comment.belongsTo(User, { as: "user", foreignKey: "userId" });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
