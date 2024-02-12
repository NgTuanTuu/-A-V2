const config = {
  name: "ChangePrefix",
  aliases: ["prefix"],
  permissions: [2],
  description: "Thay đổi Prefix cục bộ",
  usage: "<script>",
  credits: "SINGU-💌💌",
  isAbsolute: true
}

function Running( {
  message, args
}) {
  const prefix = args[0];
  if (prefix === global.config.PREFIX) {
    message.reply("Prefix mới với prefix cũ giống nhau mà đổi làm đéo gì ?");
  } else {
    global.config.PREFIX = prefix;
    global.config.save();
    message.reply("Prefix mới đã được đổi thàng: "+prefix);
  }
}

export default {
  config,
  Running
}