const { dbPost } = require("./.env");

module.exports = {
  development: {
    client: "pg",
    connection: dbPost,
    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/src/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`,
    },
  },
};
