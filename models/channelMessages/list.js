/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
module.exports = (knex, ChannelMessage) => {
  return async () => {
    const allMessages = await knex
      .select("id", "from_id", "channel_id", "message", "sent_at")
      .from("channel_messages");
    //console.log("ALLMESSAGEEES",allMessages)

    const serializedMessages = allMessages.map(
      (msg) => new ChannelMessage(msg)
    );
    console.log("ALLMESSAGEEES", serializedMessages[0]);

    //return serializedMessages.knex.select('id', 'message', 'sent_at');
    return serializedMessages;
  };
};

// module.exports = (knex, ChannelMessage) => (params) => Promise.resolve([]);
