/**
 * HOÀNG KIM LANDSCAPE STUDIO
 * Cấu hình thông tin chung của website
 *
 * Chỉ cần chỉnh sửa file này khi muốn thay đổi:
 * - Tên thương hiệu
 * - Slogan
 * - Thông tin liên hệ
 * - Nội dung Hero
 * - Liên kết mạng xã hội
 * - Thiết lập SEO cơ bản
 */

const siteConfig = {
    brand: {
        name: "Hoàng Kim Landscape Studio",
        shortName: "HK Landscape Studio",
        slogan: "Đẹp hôm nay, bền nhiều năm sau.",
        description:
            "Tư vấn, thiết kế, thi công và bảo dưỡng cảnh quan thực tế, phù hợp khí hậu, ngân sách và nhu cầu sử dụng.",
        logo: {
            main: "assets/logo/logo-hoang-kim-landscape-studio.png",
            light: "assets/logo/logo-hoang-kim-landscape-studio-light.png",
            favicon: "assets/logo/favicon.png",
            alt: "Logo Hoàng Kim Landscape Studio"
        }
    },

    contact: {
        phone: "CẬP NHẬT_SỐ_ĐIỆN_THOẠI",
        phoneDisplay: "Cập nhật số điện thoại",
        email: "CẬP_NHẬT_EMAIL",
        address: "TP. Quy Nhơn, Gia Lai",
        website: "https://hklandscapestudio.github.io",
        workingHours: "Thứ Hai – Thứ Bảy | 08:00 – 17:30"
    },

    social: {
        facebook: "",
        zalo: "",
        youtube: "",
        instagram: "",
        linkedin: ""
    },

    hero: {
        eyebrow: "HOÀNG KIM LANDSCAPE STUDIO",
        title: "Kiến tạo không gian xanh",
        highlightedText: "đẹp, thực tế và bền vững",
        description:
            "Giải pháp cảnh quan từ ý tưởng đến thi công, dựa trên kinh nghiệm thực tế và sự am hiểu cây xanh, vật liệu, kỹ thuật và vận hành lâu dài.",

        primaryButton: {
            label: "Xem dự án",
            href: "#projects"
        },

        secondaryButton: {
            label: "Liên hệ tư vấn",
            href: "#contact"
        },

        backgroundImage: "assets/hero/hero-landscape.jpg",

        statistics: [
            {
                value: "10+",
                label: "Năm kinh nghiệm"
            },
            {
                value: "03",
                label: "Dịch vụ cốt lõi"
            },
            {
                value: "365",
                label: "Ngày xây dựng Studio"
            }
        ]
    },

    about: {
        title: "Thiết kế để thi công được",
        description:
            "Hoàng Kim Landscape Studio tập trung vào những giải pháp cảnh quan có tính thẩm mỹ, khả thi khi thi công, phù hợp điều kiện khí hậu và dễ chăm sóc trong quá trình sử dụng.",

        highlights: [
            "Thiết kế bám sát điều kiện thực tế",
            "Lựa chọn cây phù hợp khí hậu và vị trí",
            "Tối ưu chi phí đầu tư",
            "Dễ thi công và bảo trì",
            "Đồng hành từ ý tưởng đến vận hành"
        ]
    },

    navigation: [
        {
            label: "Trang chủ",
            href: "#home"
        },
        {
            label: "Dịch vụ",
            href: "#services"
        },
        {
            label: "Hồ sơ năng lực",
            href: "#portfolio"
        },
        {
            label: "Dự án",
            href: "#projects"
        },
        {
            label: "Green365",
            href: "#green365"
        },
        {
            label: "Liên hệ",
            href: "#contact"
        }
    ],

    footer: {
        description:
            "Tư vấn – Thiết kế – Thi công – Bảo dưỡng cảnh quan.",

        copyright:
            "Hoàng Kim Landscape Studio. All rights reserved.",

        quickLinks: [
            {
                label: "Dịch vụ",
                href: "#services"
            },
            {
                label: "Hồ sơ năng lực",
                href: "#portfolio"
            },
            {
                label: "Dự án",
                href: "#projects"
            },
            {
                label: "Green365 Journal",
                href: "#green365"
            }
        ]
    },

    seo: {
        title:
            "Hoàng Kim Landscape Studio | Tư vấn, thiết kế và thi công cảnh quan",

        description:
            "Hoàng Kim Landscape Studio cung cấp dịch vụ tư vấn, thiết kế, thi công và bảo dưỡng cảnh quan cho nhà phố, biệt thự, homestay, quán cafe, trường học và công trình thương mại.",

        keywords: [
            "thiết kế cảnh quan",
            "thi công cảnh quan",
            "bảo dưỡng cảnh quan",
            "landscape design",
            "cảnh quan Quy Nhơn",
            "Hoàng Kim Landscape Studio",
            "thiết kế sân vườn",
            "thi công sân vườn"
        ],

        author: "Hoàng Kim Landscape Studio",

        canonicalUrl: "https://hklandscapestudio.github.io",

        openGraph: {
            type: "website",
            title: "Hoàng Kim Landscape Studio",
            description:
                "Giải pháp cảnh quan đẹp, thực tế, bền vững và dễ chăm sóc.",
            image: "assets/hero/og-cover.jpg",
            url: "https://hklandscapestudio.github.io"
        }
    },

    settings: {
        language: "vi",
        locale: "vi_VN",
        currency: "VND",
        postsPerPage: 6,
        projectsPerPage: 6,
        enableAnimations: true,
        enableLoader: true,
        enableBackToTop: true
    }
};

// Hỗ trợ cách nhúng JavaScript thông thường.
window.siteConfig = siteConfig;
