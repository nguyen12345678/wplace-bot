// bot.js
(function () {
  // ===== CONFIG =====
  const IMAGE_URL = "https://raw.githubusercontent.com/<user>/<repo>/main/f927f888.png"; 
  const START_X = 1943;   // vị trí X (thay theo bạn muốn)
  const START_Y = 2823;   // vị trí Y (thay theo bạn muốn)
  const DELAY = 30000;    // 30s mỗi pixel

  // ===== BOT =====
  async function startBot() {
    try {
      if (!window.wplaceBot) {
        console.error("❌ wplaceBot chưa load, hãy chắc chắn script chính đã được nhúng!");
        return;
      }

      console.log("🚀 Bot khởi động...");
      // nạp ảnh từ link
      await window.wplaceBot.loadImageFromUrl(IMAGE_URL, START_X, START_Y);

      // thiết lập
      window.wplaceBot.setStartPosition(START_X, START_Y);
      window.wplaceBot.setDelay(DELAY);

      // bắt đầu vẽ
      window.wplaceBot.start();
      console.log("✅ Bot đang vẽ tự động...");
    } catch (err) {
      console.error("⚠️ Lỗi bot:", err);
    }
  }

  // expose để gọi lại nếu muốn
  window.myPixelBot = { start: startBot };

  // chạy ngay
  startBot();
})();
