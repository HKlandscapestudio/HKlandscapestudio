window.GREEN365 = Array.from({length: 30}, (_, i) => {
  const day = i + 1;
  return {
    id: `day-${day}`,
    day,
    title: `GREEN365 JOURNAL – DAY ${String(day).padStart(3,"0")}`,
    image: `assets/green365/day-${String(day).padStart(3,"0")}.jpg`,
    date: "2026",
    achievements: day === 10 ? ["Hoàn thiện kiến trúc Website V2.0", "Xây dựng giao diện và hệ thống card", "Chuẩn hóa dữ liệu và nhận diện thương hiệu"] : ["Nội dung thành quả đang cập nhật"],
    lessons: day === 10 ? ["Kiến trúc rõ ràng giúp website dễ mở rộng", "Tách dữ liệu khỏi giao diện giúp cập nhật nhanh hơn"] : ["Bài học trong ngày đang cập nhật"],
    nextGoals: day === 10 ? ["Bổ sung logo, ảnh Hero và QR Zalo", "Cập nhật ảnh và nội dung cho từng card", "Kiểm tra và triển khai GitHub Pages"] : ["Mục tiêu ngày tiếp theo đang cập nhật"],
    content: "Nhật ký xây dựng Hoàng Kim Landscape Studio bằng 10 giờ mỗi tuần và AI."
  };
});
