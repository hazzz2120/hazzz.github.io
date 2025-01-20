// Đặt thời gian giao thừa 2025
const newYearTime = new Date('January 28, 2025 00:00:00').getTime();

// Hàm cập nhật bộ đếm
function updateCountdown() {
  const currentTime = new Date().getTime();
  const timeLeft = newYearTime - currentTime;

  // Tính số ngày, giờ, phút, giây còn lại
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Hiển thị kết quả
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;

  // Khi đếm ngược xong
  if (timeLeft <= 0) {
    clearInterval(interval);
    document.querySelector('.countdown h1').textContent = '🎆 CHÚC MỪNG NĂM MỚI 2025 🎉';
  }
}

// Cập nhật mỗi giây
const interval = setInterval(updateCountdown, 1000);

// Gọi hàm lần đầu để tránh chờ 1 giây
updateCountdown();
