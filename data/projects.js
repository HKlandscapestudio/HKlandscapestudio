window.PROJECTS = Array.from({length: 9}, (_, i) => ({
  id: `project-${i+1}`,
  title: i === 0 ? "Hải Giang MerryLand Quy Nhơn" : i === 1 ? "FPT University Quy Nhơn" : `Dự án ${String(i+1).padStart(2,"0")}`,
  location: i === 0 ? "Quy Nhơn" : i === 1 ? "TP Quy Nhơn, Gia Lai" : "Đang cập nhật địa điểm",
  year: i === 0 ? "2021" : i === 1 ? "2023 – nay" : "2026",
  role: i === 0 ? "Giám sát thi công cảnh quan" : i === 1 ? "Quản lý vận hành cảnh quan" : "Tư vấn – Thiết kế – Thi công",
  image: `assets/projects/project-${String(i+1).padStart(2,"0")}.jpg`,
  description: "Nội dung mô tả dự án đang chờ bạn cập nhật. Toàn bộ thông tin được quản lý trong file data/projects.js.",
  gallery: [1,2,3,4].map(n => `assets/projects/project-${String(i+1).padStart(2,"0")}-${String(n).padStart(2,"0")}.jpg`)
}));
const projects = [
  {
    id: 1,
    title: "Hải Giang MerryLand Quy Nhơn",
    location: "Quy Nhơn, Gia Lai",
    cover: "assets/projects/project-01.jpg",

    gallery: [
      "assets/projects/project-01.jpg",
      "assets/projects/project-01-2.jpg",
      "assets/projects/project-01-3.jpg"
    ],

    description:
      "Giám sát thi công cảnh quan khu đô thị nghỉ dưỡng Hải Giang MerryLand.",

    year: "2021"
  }
];
