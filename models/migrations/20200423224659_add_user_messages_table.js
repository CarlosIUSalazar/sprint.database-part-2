exports.up = function(knex, Promise) {
  // create the 'users' table with three columns
  return knex.schema.createTable("user_messages", (t) => {
    t.increments() // auto-incrementing id column
      .index(); // index this column

    t.string("from_id", 15) // maximum length of 15 characters
      //.unique() // add a unique constraint to this column
      .notNullable() // add a not-null constraint to this column
      .index(); // index it

    t.string("to_id", 15) // maximum length of 15 characters
      //.unique() // add a unique constraint to this column
      .notNullable() // add a not-null constraint to this column
      .index(); // index it

    t.string("message", 215) // maximum length of 15 characters
      //.unique() // add a unique constraint to this column
      .notNullable() // add a not-null constraint to this column
      .index(); // index it

    t.timestamp("sent_at")
      .notNullable()
      .defaultTo(knex.fn.now()); // default to the current time
  });
};

exports.down = function(knex, Promise) {
  // undo this migration by destroying the 'users' table
  return knex.schema.dropTable("channels");
};

// exports.up = function(knex, Promise) {

// };

// exports.down = function(knex, Promise) {

// };

// exports.up = function(knex, Promise) {

// };

// exports.down = function(knex, Promise) {

// };
