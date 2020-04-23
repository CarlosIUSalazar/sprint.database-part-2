module.exports = (knex, Channel) => {
  return async () => {
    const allChannels = await knex.select("id", "name").from("channels");
    const serializedChannels = allChannels.map(
      (channel) => new Channel(channel)
    );

    return serializedChannels;
  };
};
