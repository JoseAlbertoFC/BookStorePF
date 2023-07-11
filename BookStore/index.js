const server = require("./src/app");
const { conn } = require("./src/db");


conn.sync({ force : false }).then(() => {
  server.listen(process.env.PORT || 8000, () => {
    console.log(`Listening on port ${process.env.PORT}`);
  });
});