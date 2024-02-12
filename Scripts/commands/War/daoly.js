const config = {
  name: "daoly",
  aliases: ["daoly"],
  description: "Đạo lý tung lồn đứa sủa dơ",
  usage: "/daoly [mention]",
  cooldown: 3,
  permissions: [2],
  isAbsolute: false,
  isHidden: false,
  credits: "SINGU-💌💌",
  extra: {
    // will be saved in config.plugins.json
    extraProp: "This is an extra property"
  }
}

async function Running( {
  message,
  args,
  getLang,
  extra,
  data,
  userPermissions,
  prefix
}) {
  // Do something
  const mention = Object.keys(message.mentions)[0];
  var arraytag = [];
  var name = message.mentions[mention];
  arraytag.push({
    id: mention,
    tag: name
  })
  if (!mention) return message.send(`Vui lòng tag đứa muốn chửi`, message.threadID, message.messageID);
  const Nhatvu = (data) => {
    message.send(data);
  }
  Nhatvu("Ê con đĩ nghe cho rõ lời chuỵ nói nè !");
  setTimeout(() => {
    Nhatvu({
      body: "Đã là chim cú mà còn đòi ra vẻ phượng hoàng\nChỉ là thứ chó hoang mà cứ tưởng mình là bà hoàng thiên hạ." + " " + name,
      mentions: arraytag
    })
  }, 3000);
  setTimeout(() => {
    Nhatvu({
      body: "Đã là đĩ còn ra vẻ tiến sĩ\nĐã xấu lại còn bày kiêu sa, quyền quý\nBên ngoài thì giả nai, bên trong thì giả tạo. Vậy cưng có cái gì là hàng thật không hay toàn hàng fake." + " " + name,
      mentions: arraytag
    })
  }, 5000);
  setTimeout(() => {
    Nhatvu({
      body: "Thứ chó cỏ nhà quê mà đòi ngang hàng bẹc zê thành phố\nCỏ dại ven đường thì tuổi lồn sánh vai với mây" + " " + name,
      mentions: arraytag
    })
  }, 7000);
  setTimeout(() => {
    Nhatvu({
      body: "Nước rửa bồn cầu mà đòi so với nước hoa Chanel\nCứt hạng 3 mà cứ tưởng mình là socola loại 1" + " " + name,
      mentions: arraytag
    })
  }, 9000);
  setTimeout(() => {
    Nhatvu({
      body: "Sinh ra làm phận 2 chân thì đừng nên sống như lũ 4 cẳng." + " " + name,
      mentions: arraytag
    })
  }, 12000);
  setTimeout(() => {
    Nhatvu({
      body: "Ừ thì tao xấu nhưng kết cấu tao hài hòa còn đỡ hơn mày xấu từ xương chậu xấu ra\nĐến ma còn phải tránh xa khi gặp mày ăn ở bầy hầy mà cứ như sạch sẽ thân hình đầy ghẻ mà cứ tưởng hột xoàn\nĐéo đựơc đàng hoàng mà ra giọng thanh cao\nchơi xấu với tao thì tao cho phắn ra nghĩa địa" + " " + name,
      mentions: arraytag
    })
  }, 15000);
  setTimeout(() => {
    Nhatvu({
      body: "Mở mồm ra chửi tao là CHÓ văn vẻ méo mó thích gây sóng gió đòi làm khó tao sao ??!\nĐừng nghĩ trình độ cao mà khiến tao lao đao chưa đủ xôn xao đâu con cáo." + " " + name,
      mentions: arraytag
    })
  }, 17000);
  setTimeout(() => {
    Nhatvu({
      body: "Sống trên đời phải biết mình là ai\nLịch sự thì không có chỉ có cái máu chơi chó thì không ai sánh bằng" + " " + name,
      mentions: arraytag
    })
  }, 20000);
  setTimeout(() => {
    Nhatvu({
      body: "Nếu đã là Cáo thì đừng tập diễn thành Nai\nCòn nếu đã cố gắng diễn hơp vai thì về sau đừng lộ ra cái đuôi chồn giả tạo" + " " + name,
      mentions: arraytag
    })
  }, 23000);
  setTimeout(() => {
    Nhatvu({
      body: "Mày lâu lâu lại ngu một phát, hay mà đã ngu học thường niên\nKhoe mày đã tốt nghiệp đại học mà lại cần chị giáo dục thường xuyên" + " " + name,
      mentions: arraytag
    })
  }, 25000);
  setTimeout(() => {
    Nhatvu({
      body: "Mới có chút mà cứ tưởng mình 9 nút" + " " + name,
      mentions: arraytag
    })
  }, 28500);
  setTimeout(() => {
    Nhatvu({
      body: "Tuổi con cặc mà cứ tưởng mình con cọp" + " " + name,
      mentions: arraytag
    })
  }, 31000);
  setTimeout(() => {
    Nhatvu({
      body: "Dòng thứ lồn tơm lồn đậm, lồn đười ươi nó địt\nLồn con vịt nó phang, lồn giang mai lồn ỉa chảy" + " " + name,
      mentions: arraytag
    })
  }, 36000);
  setTimeout(() => {
    Nhatvu({
      body: "Lồn nhảy hiphop, lồn hàng triệu con súc vật" + " " + name,
      mentions: arraytag
    })
  }, 39000);
  setTimeout(() => {
    Nhatvu({
      body: "Đợi chị mày xíu, chị gắn cu giả để địt con đĩ mẹ mày" + " " + name,
      mentions: arraytag
    })
  }, 40000);
  setTimeout(() => {
    Nhatvu({
      body: "Ớ ớ yamate" + " " + name,
      mentions: arraytag
    })
  }, 65000);
  setTimeout(() => {
    Nhatvu({
      body: "Xong rồi nè" + " " + name,
      mentions: arraytag
    })
  }, 70000);
  setTimeout(() => {
    Nhatvu({
      body: "Địt mẹ mày lất phất như mưa rơi, địt tơi bời như bom đạn\nĐịt lãng mạn như romeo và juliet" + " " + name,
      mentions: arraytag
    })
  }, 75000);
  setTimeout(() => {
    Nhatvu({
      body: "Địt đứng tim phổi, địt cặp mắt nai\nĐịt chai lỗ đít, địt khít cái lỗ lồn con đĩ mẹ mày" + " " + name,
      mentions: arraytag
    })
  }, 80000);
  setTimeout(() => {
    Nhatvu({
      body: "Địt như mấy con điếm bên chợ đồng xuân, địt đằng chân mà lên đằng đầu" + " " + name,
      mentions: arraytag
    })
  }, 85000);
  setTimeout(() => {
    Nhatvu("Địt sập cầu, sập cống")
  }, 90000);
  setTimeout(() => {
    Nhatvu({
      body: "Địt rớt xuống sông rồi địt xuống âm phủ" + " " + name,
      mentions: arraytag
    })
  }, 95000);
  setTimeout(() => {
    Nhatvu({
      body: "Để cho mày đầu thai" + " " + name,
      mentions: arraytag
    })
  }, 100000);
  setTimeout(() => {
    Nhatvu({
      body: "Hoá kiếp con chó như mày từng mong ước" + " " + name,
      mentions: arraytag
    })
  }, 105000);
  setTimeout(() => {
    Nhatvu("Chửi ít hiểu nhe nghe hum con ôn lồn")
  }, 110000);



}

export default {
  config,
  Running
}