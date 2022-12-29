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
  onUpdateTrigger: (table) => `
  CREATE TRIGGER ${table}_update_at
  BEFORE UPDATE ON ${table}
  FOR EACH ROW
  EXECUTE PROCEDURE on_update_timestamp();
  `,
};
