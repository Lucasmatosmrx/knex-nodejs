exports.up = (knex) =>
  knex.schema.alterTable("users", (table) => {
    table.timestamp("delete_at");
  });

exports.down = (knex) =>
  knex.schema.alterTable("users", (table) => {
    table.dropColumn("delete_at");
  });
