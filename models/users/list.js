/* eslint-disable prettier/prettier */
module.exports = (knex, User) => {
  return async () => {
    const allUsers = await knex.select("id", "username").from("users"); // fix me!
    console.log("ALLUSEEEERS", allUsers);
    return allUsers;

    //const singleUsers = allUsers.map(user => user)
    //console.log("SERIALIZEEEE", allUsers[0].serialize())
    // let resultObj = {};
    // allUsers.forEach((item) => resultObj = item)
    // console.log("RESULTOBJJJJ", resultObj)

    // allUsers.map(user => user.id);
  };
};
