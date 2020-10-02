const VkBot = require('node-vk-bot-api');
const { vk_long_poll_token } = require('./configs/');

global.bot = new VkBot(vk_long_poll_token);

require('./databases/');
require('./commands');
require('./controllers/ScheduleController');

bot.on((ctx) => {
  ctx.reply(`You are ${ctx.message.body} years old.`);
});

bot.startPolling((err) => {
    if(err) {
      console.error(err);
    }
});