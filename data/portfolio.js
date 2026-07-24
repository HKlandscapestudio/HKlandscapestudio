window.PORTFOLIOS = Array.from({length: 6}, (_, i) => ({
  id: `portfolio-${i+1}`,
  title: i === 0 ? "Hồ sơ năng lực" : `Portfolio ${String(i+1).padStart(2,"0")}`,
  subtitle: i === 0 ? "Hoàng Kim Landscape Studio 2026" : "Đang cập nhật nội dung",
  image: `assets/portfolio/portfolio-${String(i+1).padStart(2,"0")}.jpg`,
  description: "Bạn có thể thay ảnh bìa, nội dung mô tả, đường dẫn PDF hoặc thêm bộ ảnh chi tiết trong file data/portfolio.js.",
  pdf: "",
  gallery: [
    `assets/portfolio/portfolio-${String(i+1).padStart(2,"0")}-01.jpg`,
    `assets/portfolio/portfolio-${String(i+1).padStart(2,"0")}-02.jpg`,
    `assets/portfolio/portfolio-${String(i+1).padStart(2,"0")}-03.jpg`
  ]
}));
