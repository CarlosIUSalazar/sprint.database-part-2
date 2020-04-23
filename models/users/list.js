/* eslint-disable prettier/prettier */
module.exports = (knex, User) => {
  return async () => {
    const allUsers = await knex.select("id", "username").from("users");

    const serializedUsers = allUsers.map((user) => new User(user));

    return serializedUsers;
  };
};
