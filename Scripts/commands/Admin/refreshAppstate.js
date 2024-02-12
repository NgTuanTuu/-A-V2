import {
  resolve as resolvePath
} from 'path';
import fs from 'fs';
const config = {
  name: "refresh Appstate",
  aliases: ["appstate",
    "newappstate",
    "cookie"],
  permissions: [2],
  description: "Làm mới appstate thành công",
  usage: "<script>",
  credits: "SINGU-💌💌",
  isAbsolute: true
}

function Running( {
  message, args
}) {
  const appstate = JSON.stringify(global.api.getAppState());
  fs.writeFileSync(resolvePath(global.mainPath, global.config.APPSTATE_PATH), appstate);
  message.reply("Appstate đã được làm mới!");
}

export default {
  config,
  Running
}