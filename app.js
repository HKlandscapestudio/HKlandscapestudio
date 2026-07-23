/* ===================================================
   HOÀNG KIM LANDSCAPE STUDIO
   APP.JS — PART 1/10
=================================================== */

"use strict";


/* ===================================================
   APP NAMESPACE
=================================================== */

const HKApp = {

    state: {

        isReady: false,

        isMenuOpen: false,

        isModalOpen: false,

        activeSection: "hero",

        currentModalItem: null,

        currentModalType: null

    },

    elements: {},

    config: {}

};
/* ===================================================
   DOM CACHE
=================================================== */

function cacheDOM() {

    HKApp.elements = {

        html: document.documentElement,

        body: document.body,

        loader: document.getElementById("loader"),

        header: document.getElementById("header"),

        main: document.getElementById("mainContent"),

        menuToggle: document.getElementById("menuToggle"),

        mainNav: document.getElementById("mainNav"),

        menuOverlay: document.getElementById("menuOverlay"),

        navLinks: document.querySelectorAll("#mainNav a"),

        hero: document.getElementById("hero"),

        servicesGrid: document.getElementById("servicesGrid"),

        portfolioGrid: document.getElementById("portfolioGrid"),

        projectsGrid: document.getElementById("projectsGrid"),

        green365Grid: document.getElementById("green365Grid"),

        modal: document.getElementById("modal"),

        modalBackdrop: document.querySelector(".modal-backdrop"),

        modalContainer: document.querySelector(".modal-container"),

        modalClose: document.getElementById("modalClose"),

        modalContent: document.getElementById("modalContent"),

        backToTop: document.getElementById("backToTop"),

        footerYear: document.getElementById("footerYear")

    };

}
/* ===================================================
   DOM CACHE
=================================================== */

function cacheDOM() {

    HKApp.elements = {

        html: document.documentElement,

        body: document.body,

        loader: document.getElementById("loader"),

        header: document.getElementById("header"),

        main: document.getElementById("mainContent"),

        menuToggle: document.getElementById("menuToggle"),

        mainNav: document.getElementById("mainNav"),

        menuOverlay: document.getElementById("menuOverlay"),

        navLinks: document.querySelectorAll("#mainNav a"),

        hero: document.getElementById("hero"),

        servicesGrid: document.getElementById("servicesGrid"),

        portfolioGrid: document.getElementById("portfolioGrid"),

        projectsGrid: document.getElementById("projectsGrid"),

        green365Grid: document.getElementById("green365Grid"),

        modal: document.getElementById("modal"),

        modalBackdrop: document.querySelector(".modal-backdrop"),

        modalContainer: document.querySelector(".modal-container"),

        modalClose: document.getElementById("modalClose"),

        modalContent: document.getElementById("modalContent"),

        backToTop: document.getElementById("backToTop"),

        footerYear: document.getElementById("footerYear")

    };

}
/* ===================================================
   SAFE SELECTORS
=================================================== */

function select(selector, scope = document) {

    try {

        return scope.querySelector(selector);

    } catch (error) {

        console.error(
            `[HKApp] Selector không hợp lệ: ${selector}`,
            error
        );

        return null;

    }

}


function selectAll(selector, scope = document) {

    try {

        return Array.from(
            scope.querySelectorAll(selector)
        );

    } catch (error) {

        console.error(
            `[HKApp] Selector không hợp lệ: ${selector}`,
            error
        );

        return [];

    }

}
/* ===================================================
   CREATE ELEMENT
=================================================== */

function createElement(
    tagName,
    className = "",
    attributes = {}
) {

    const element = document.createElement(tagName);

    if (className) {

        element.className = className;

    }

    Object.entries(attributes).forEach(
        ([key, value]) => {

            if (
                value === null ||
                value === undefined
            ) {

                return;

            }

            if (key === "text") {

                element.textContent = value;

                return;

            }

            if (key === "html") {

                element.innerHTML = value;

                return;

            }

            element.setAttribute(key, value);

        }
    );

    return element;

}
/* ===================================================
   CLEAR ELEMENT
=================================================== */

function clearElement(element) {

    if (!elementExists(element)) {

        return;

    }

    element.replaceChildren();

}
/* ===================================================
   SET HTML
=================================================== */

function setHTML(element, html = "") {

    if (!elementExists(element)) {

        return;

    }

    element.innerHTML = html;

}
/* ===================================================
   SET HTML
=================================================== */

function setHTML(element, html = "") {

    if (!elementExists(element)) {

        return;

    }

    element.innerHTML = html;

}
/* ===================================================
   SLUGIFY
=================================================== */

function slugify(value = "") {

    return String(value)

        .normalize("NFD")

        .replace(
            /[\u0300-\u036f]/g,
            ""
        )

        .replace(/đ/g, "d")

        .replace(/Đ/g, "D")

        .toLowerCase()

        .trim()

        .replace(
            /[^a-z0-9]+/g,
            "-"
        )

        .replace(
            /^-+|-+$/g,
            ""
        );

}
/* ===================================================
   FORMAT NUMBER
=================================================== */

function formatNumber(
    value,
    locale = "vi-VN"
) {

    const number = Number(value);

    if (!Number.isFinite(number)) {

        return "0";

    }

    return new Intl.NumberFormat(locale)
        .format(number);

}
/* ===================================================
   CLAMP
=================================================== */

function clamp(
    value,
    min = 0,
    max = 100
) {

    const number = Number(value);

    if (!Number.isFinite(number)) {

        return min;

    }

    return Math.min(
        Math.max(number, min),
        max
    );

}
/* ===================================================
   CLAMP
=================================================== */

function clamp(
    value,
    min = 0,
    max = 100
) {

    const number = Number(value);

    if (!Number.isFinite(number)) {

        return min;

    }

    return Math.min(
        Math.max(number, min),
        max
    );

}
/* ===================================================
   ARRAY HELPERS
=================================================== */

function ensureArray(value) {

    return Array.isArray(value)
        ? value
        : [];

}
/* ===================================================
   ARRAY HELPERS
=================================================== */

function ensureArray(value) {

    return Array.isArray(value)
        ? value
        : [];

}
/* ===================================================
   STRING HELPERS
=================================================== */

function hasText(value) {

    return (
        typeof value === "string" &&
        value.trim().length > 0
    );

}
/* ===================================================
   DEBOUNCE
=================================================== */

function debounce(
    callback,
    delay = 150
) {

    let timeoutId = null;

    return function debounced(...args) {

        window.clearTimeout(timeoutId);

        timeoutId = window.setTimeout(
            () => {

                callback.apply(this, args);

            },
            delay
        );

    };

}
/* ===================================================
   DEBOUNCE
=================================================== */

function debounce(
    callback,
    delay = 150
) {

    let timeoutId = null;

    return function debounced(...args) {

        window.clearTimeout(timeoutId);

        timeoutId = window.setTimeout(
            () => {

                callback.apply(this, args);

            },
            delay
        );

    };

}
/* ===================================================
   WAIT
=================================================== */

function wait(duration = 0) {

    return new Promise(
        resolve => {

            window.setTimeout(
                resolve,
                duration
            );

        }
    );

}
/* ===================================================
   WAIT
=================================================== */

function wait(duration = 0) {

    return new Promise(
        resolve => {

            window.setTimeout(
                resolve,
                duration
            );

        }
    );

}
/* ===================================================
   SCROLL TO ELEMENT
=================================================== */

function scrollToElement(
    target,
    offset = 0
) {

    const element = typeof target === "string"
        ? select(target)
        : target;

    if (!elementExists(element)) {

        return;

    }

    const headerHeight =
        HKApp.elements.header
            ?.offsetHeight || 0;

    const top =
        element.getBoundingClientRect().top +
        window.scrollY -
        headerHeight -
        offset;

    window.scrollTo({

        top,

        behavior: "smooth"

    });

}
function prefersReducedMotion() {

    return window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

}
function prefersReducedMotion() {

    return window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

}
/* ===================================================
   FOOTER YEAR
=================================================== */

function updateFooterYear() {

    const yearElement =
        HKApp.elements.footerYear;

    if (!elementExists(yearElement)) {

        return;

    }

    yearElement.textContent =
        new Date().getFullYear();

}
/* ===================================================
   EMPTY DATA UI
=================================================== */

function renderEmptyData(
    container,
    title = "Chưa có nội dung",
    message = "Dữ liệu sẽ được cập nhật trong thời gian tới."
) {

    if (!elementExists(container)) {

        return;

    }

    container.innerHTML = `

        <div class="empty-data generated">

            <h3>${escapeHTML(title)}</h3>

            <p>${escapeHTML(message)}</p>

        </div>

    `;

}
/* ===================================================
   EMPTY DATA UI
=================================================== */

function renderEmptyData(
    container,
    title = "Chưa có nội dung",
    message = "Dữ liệu sẽ được cập nhật trong thời gian tới."
) {

    if (!elementExists(container)) {

        return;

    }

    container.innerHTML = `

        <div class="empty-data generated">

            <h3>${escapeHTML(title)}</h3>

            <p>${escapeHTML(message)}</p>

        </div>

    `;

}
/* ===================================================
   LOADING DATA UI
=================================================== */

function renderDataLoading(container) {

    if (!elementExists(container)) {

        return;

    }

    container.innerHTML = `

        <div
            class="data-loading"
            aria-label="Đang tải dữ liệu"
            role="status"
        ></div>

    `;

}
/* ===================================================
   PUBLIC UTILITIES
=================================================== */

HKApp.utils = {

    select,

    selectAll,

    createElement,

    clearElement,

    setHTML,

    slugify,

    escapeHTML,

    formatNumber,

    clamp,

    calculateGreen365Progress,

    ensureArray,

    hasText,

    fallback,

    debounce,

    throttle,

    wait,

    scrollToElement,

    isTouchDevice,

    prefersReducedMotion,

    renderDataError,

    renderEmptyData,

    renderDataLoading,

    logError

};
/* ===================================================
   HOÀNG KIM LANDSCAPE STUDIO
   APP.JS — PART 2/10 TO PART 10/10
=================================================== */


/* ===================================================
   PART 2/10 — DATA ACCESS
=================================================== */

/**
 * Lấy dữ liệu từ các file trong thư mục data.
 *
 * Tên biến chính đề xuất:
 * - siteConfig
 * - servicesData
 * - portfolioData
 * - projectsData
 * - green365Data
 *
 * Hàm vẫn hỗ trợ một số cách đặt tên viết hoa.
 */
function getDataSet(type) {

    try {

        switch (type) {

            case "config":

                if (typeof siteConfig !== "undefined") {
                    return siteConfig;
                }

                if (typeof SITE_CONFIG !== "undefined") {
                    return SITE_CONFIG;
                }

                return {};

            case "services":

                if (typeof servicesData !== "undefined") {
                    return ensureArray(servicesData);
                }

                if (typeof SERVICES_DATA !== "undefined") {
                    return ensureArray(SERVICES_DATA);
                }

                return [];

            case "portfolio":

                if (typeof portfolioData !== "undefined") {
                    return ensureArray(portfolioData);
                }

                if (typeof PORTFOLIO_DATA !== "undefined") {
                    return ensureArray(PORTFOLIO_DATA);
                }

                return [];

            case "projects":

                if (typeof projectsData !== "undefined") {
                    return ensureArray(projectsData);
                }

                if (typeof PROJECTS_DATA !== "undefined") {
                    return ensureArray(PROJECTS_DATA);
                }

                return [];

            case "green365":

                if (typeof green365Data !== "undefined") {
                    return ensureArray(green365Data);
                }

                if (typeof GREEN365_DATA !== "undefined") {
                    return ensureArray(GREEN365_DATA);
                }

                return [];

            default:

                return [];

        }

    } catch (error) {

        logError(`getDataSet:${type}`, error);

        return type === "config"
            ? {}
            : [];

    }

}


/* ===================================================
   NORMALIZE ITEM
=================================================== */

function normalizeItem(item = {}, index = 0) {

    const title = fallback(
        item.title,
        item.name || `Nội dung ${index + 1}`
    );

    return {

        ...item,

        id: fallback(
            item.id,
            slugify(title) || `item-${index + 1}`
        ),

        title,

        description: fallback(
            item.description,
            item.summary || ""
        ),

        image: fallback(
            item.image,
            item.thumbnail || ""
        ),

        gallery: ensureArray(
            item.gallery || item.images
        )

    };

}


/* ===================================================
   FIND ITEM
=================================================== */

function findItemById(type, id) {

    return getDataSet(type)

        .map(normalizeItem)

        .find(item => String(item.id) === String(id));

}


/* ===================================================
   CARD COMPONENT
=================================================== */

function createCard({
    type = "",
    id = "",
    image = "",
    imageAlt = "",
    tag = "",
    title = "",
    description = "",
    footer = "",
    badge = "",
    extraClass = ""
}) {

    const article = createElement(
        "article",
        `card card-lift card-shine generated ${extraClass}`.trim(),
        {
            role: "button",
            tabindex: "0",
            "data-card-type": type,
            "data-card-id": id,
            "aria-label": `Xem chi tiết ${title}`
        }
    );

    const media = createElement(
        "div",
        "card-image image-zoom image-loading"
    );

    if (hasText(image)) {

        const img = createElement(
            "img",
            "lazy-image",
            {
                src: image,
                alt: fallback(imageAlt, title),
                loading: "lazy",
                decoding: "async"
            }
        );

        media.appendChild(img);

    } else {

        media.classList.add("image-placeholder");

    }

    if (hasText(tag)) {

        const tagElement = createElement(
            "span",
            "card-tag",
            {
                text: tag
            }
        );

        media.appendChild(tagElement);

    }

    if (hasText(badge)) {

        const badgeElement = createElement(
            "span",
            "card-badge",
            {
                text: badge
            }
        );

        media.appendChild(badgeElement);

    }

    const overlay = createElement(
        "div",
        "card-overlay"
    );

    overlay.innerHTML = `
        <span class="arrow-link">
            Xem chi tiết
            <span class="arrow" aria-hidden="true">→</span>
        </span>
    `;

    media.appendChild(overlay);

    const content = createElement(
        "div",
        "card-content"
    );

    const heading = createElement(
        "h3",
        "card-title clamp-2",
        {
            text: title
        }
    );

    content.appendChild(heading);

    if (hasText(description)) {

        const paragraph = createElement(
            "p",
            "card-description clamp-3",
            {
                text: description
            }
        );

        content.appendChild(paragraph);

    }

    if (hasText(footer)) {

        const footerElement = createElement(
            "div",
            "card-footer",
            {
                html: footer
            }
        );

        content.appendChild(footerElement);

    }

    article.append(
        media,
        content
    );

    return article;

}


/* ===================================================
   CARD EVENT
=================================================== */

function handleCardActivation(event) {

    const card = event.target.closest(
        "[data-card-type][data-card-id]"
    );

    if (!card) {

        return;

    }

    const type = card.dataset.cardType;
    const id = card.dataset.cardId;

    openItemModal(type, id);

}


function handleCardKeyboard(event) {

    if (
        event.key !== "Enter" &&
        event.key !== " "
    ) {

        return;

    }

    const card = event.target.closest(
        "[data-card-type][data-card-id]"
    );

    if (!card) {

        return;

    }

    event.preventDefault();

    openItemModal(
        card.dataset.cardType,
        card.dataset.cardId
    );

}


/* ===================================================
   PART 3/10 — SERVICES
=================================================== */

function createServiceCard(item, index) {

    const service = normalizeItem(item, index);

    const article = createElement(
        "article",
        "card service-card card-lift generated",
        {
            role: "button",
            tabindex: "0",
            "data-card-type": "services",
            "data-card-id": service.id,
            "aria-label": `Xem dịch vụ ${service.title}`
        }
    );

    const number = createElement(
        "span",
        "service-number",
        {
            text: String(index + 1).padStart(2, "0")
        }
    );

    const icon = createElement(
        "div",
        "card-icon",
        {
            "aria-hidden": "true"
        }
    );

    if (hasText(service.icon)) {

        icon.innerHTML = service.icon;

    } else {

        icon.textContent = "✦";

    }

    const title = createElement(
        "h3",
        "card-title",
        {
            text: service.title
        }
    );

    const description = createElement(
        "p",
        "card-description",
        {
            text: service.description
        }
    );

    const button = createElement(
        "span",
        "service-button arrow-link",
        {
            html: `
                Xem chi tiết
                <span class="arrow" aria-hidden="true">→</span>
            `
        }
    );

    article.append(
        number,
        icon,
        title,
        description,
        button
    );

    return article;

}


function renderServices() {

    const container = HKApp.elements.servicesGrid;

    if (!elementExists(container)) {

        return;

    }

    try {

        const data = getDataSet("services");

        clearElement(container);

        if (!data.length) {

            renderEmptyData(
                container,
                "Chưa có dịch vụ",
                "Danh sách dịch vụ đang được cập nhật."
            );

            return;

        }

        const fragment = document.createDocumentFragment();

        data.forEach((item, index) => {

            fragment.appendChild(
                createServiceCard(item, index)
            );

        });

        container.appendChild(fragment);

    } catch (error) {

        logError("renderServices", error);

        renderDataError(
            container,
            "Không thể hiển thị dịch vụ"
        );

    }

}


/* ===================================================
   PART 4/10 — PORTFOLIO
=================================================== */

function createPortfolioCard(item, index) {

    const portfolio = normalizeItem(item, index);

    const footer = `
        <span class="portfolio-year">
            ${escapeHTML(
                fallback(portfolio.year, "")
            )}
        </span>

        <span class="arrow-link">
            Xem hồ sơ
            <span class="arrow" aria-hidden="true">→</span>
        </span>
    `;

    return createCard({

        type: "portfolio",

        id: portfolio.id,

        image: portfolio.image,

        imageAlt: portfolio.imageAlt,

        tag: fallback(
            portfolio.category,
            "Portfolio"
        ),

        title: portfolio.title,

        description: portfolio.description,

        footer,

        extraClass: "portfolio-card"

    });

}


function renderPortfolio() {

    const container = HKApp.elements.portfolioGrid;

    if (!elementExists(container)) {

        return;

    }

    try {

        const data = getDataSet("portfolio");

        clearElement(container);

        if (!data.length) {

            renderEmptyData(
                container,
                "Chưa có hồ sơ năng lực",
                "Nội dung Portfolio đang được cập nhật."
            );

            return;

        }

        const fragment = document.createDocumentFragment();

        data.forEach((item, index) => {

            fragment.appendChild(
                createPortfolioCard(item, index)
            );

        });

        container.appendChild(fragment);

    } catch (error) {

        logError("renderPortfolio", error);

        renderDataError(
            container,
            "Không thể hiển thị Portfolio"
        );

    }

}


/* ===================================================
   PART 5/10 — PROJECTS
=================================================== */

function createProjectCard(item, index) {

    const project = normalizeItem(item, index);

    const metaItems = ensureArray(
        project.meta || [
            project.year,
            project.role
        ]
    ).filter(Boolean);

    const footer = metaItems.length
        ? `
            <div class="project-meta">
                ${metaItems.map(value => `
                    <span>${escapeHTML(value)}</span>
                `).join("")}
            </div>
        `
        : "";

    return createCard({

        type: "projects",

        id: project.id,

        image: project.image,

        imageAlt: project.imageAlt,

        tag: fallback(
            project.location,
            "Dự án"
        ),

        badge: fallback(
            project.status,
            ""
        ),

        title: project.title,

        description: project.description,

        footer,

        extraClass: "project-card"

    });

}


function renderProjects() {

    const container = HKApp.elements.projectsGrid;

    if (!elementExists(container)) {

        return;

    }

    try {

        const data = getDataSet("projects");

        clearElement(container);

        if (!data.length) {

            renderEmptyData(
                container,
                "Chưa có dự án",
                "Danh sách dự án đang được cập nhật."
            );

            return;

        }

        const fragment = document.createDocumentFragment();

        data.forEach((item, index) => {

            fragment.appendChild(
                createProjectCard(item, index)
            );

        });

        container.appendChild(fragment);

    } catch (error) {

        logError("renderProjects", error);

        renderDataError(
            container,
            "Không thể hiển thị dự án"
        );

    }

}


/* ===================================================
   PART 6/10 — GREEN365
=================================================== */

function createGreen365Card(item, index) {

    const journal = normalizeItem(item, index);

    const day = clamp(
        Number(
            fallback(journal.day, index + 1)
        ),
        1,
        365
    );

    const progress = calculateGreen365Progress(day);

    const article = createElement(
        "article",
        "card green-card card-lift generated",
        {
            role: "button",
            tabindex: "0",
            "data-card-type": "green365",
            "data-card-id": journal.id,
            "aria-label": `Xem GREEN365 ngày ${day}`
        }
    );

    const media = createElement(
        "div",
        "green-image image-zoom image-loading"
    );

    if (hasText(journal.image)) {

        const img = createElement(
            "img",
            "lazy-image",
            {
                src: journal.image,
                alt: fallback(
                    journal.imageAlt,
                    journal.title
                ),
                loading: "lazy",
                decoding: "async"
            }
        );

        media.appendChild(img);

    } else {

        media.classList.add("image-placeholder");

    }

    const badge = createElement(
        "span",
        "green-day",
        {
            text: `DAY ${day} / 365`
        }
    );

    media.appendChild(badge);

    const content = createElement(
        "div",
        "green-content"
    );

    content.innerHTML = `

        <h3 class="green-title clamp-2">
            ${escapeHTML(journal.title)}
        </h3>

        <p class="green-description clamp-3">
            ${escapeHTML(journal.description)}
        </p>

        <div
            class="green-progress"
            aria-label="Tiến độ GREEN365 ${progress}%"
        >

            <div class="progress-header">

                <span>TIẾN ĐỘ GREEN365</span>

                <span>${progress}%</span>

            </div>

            <div class="progress-track">

                <div
                    class="progress-fill"
                    style="width:${progress}%"
                ></div>

            </div>

        </div>

    `;

    article.append(
        media,
        content
    );

    return article;

}


function renderGreen365() {

    const container = HKApp.elements.green365Grid;

    if (!elementExists(container)) {

        return;

    }

    try {

        const data = getDataSet("green365");

        clearElement(container);

        if (!data.length) {

            renderEmptyData(
                container,
                "Chưa có nhật ký GREEN365",
                "Nhật ký sẽ được cập nhật theo từng ngày."
            );

            return;

        }

        const fragment = document.createDocumentFragment();

        data.forEach((item, index) => {

            fragment.appendChild(
                createGreen365Card(item, index)
            );

        });

        container.appendChild(fragment);

    } catch (error) {

        logError("renderGreen365", error);

        renderDataError(
            container,
            "Không thể hiển thị GREEN365"
        );

    }

}


/* ===================================================
   PART 7/10 — SHARED MODAL
=================================================== */

function createModalGallery(item) {

    const images = [
        item.image,
        ...ensureArray(item.gallery)
    ].filter(Boolean);

    if (images.length <= 1) {

        return "";

    }

    return `

        <div class="modal-gallery">

            ${images.map((image, index) => `

                <button
                    class="modal-gallery-item
                    ${index === 0 ? "active" : ""}"
                    type="button"
                    data-modal-image="${escapeHTML(image)}"
                    aria-label="Xem ảnh ${index + 1}"
                >

                    <img
                        src="${escapeHTML(image)}"
                        alt=""
                        loading="lazy"
                    >

                </button>

            `).join("")}

        </div>

    `;

}


function createModalMeta(item) {

    const values = [];

    if (hasText(item.location)) {

        values.push([
            "Địa điểm",
            item.location
        ]);

    }

    if (hasText(item.year)) {

        values.push([
            "Thời gian",
            item.year
        ]);

    }

    if (hasText(item.role)) {

        values.push([
            "Vai trò",
            item.role
        ]);

    }

    if (hasText(item.status)) {

        values.push([
            "Trạng thái",
            item.status
        ]);

    }

    if (!values.length) {

        return "";

    }

    return `

        <div class="modal-meta">

            ${values.map(([label, value]) => `

                <div class="modal-meta-item">

                    <span>${escapeHTML(label)}</span>

                    <strong>${escapeHTML(value)}</strong>

                </div>

            `).join("")}

        </div>

    `;

}


function createModalArticle(item) {

    const content = fallback(
        item.content,
        item.details || ""
    );

    if (Array.isArray(content)) {

        return `

            <div class="modal-article">

                ${content.map(paragraph => `
                    <p>${escapeHTML(paragraph)}</p>
                `).join("")}

            </div>

        `;

    }

    if (!hasText(content)) {

        return "";

    }

    return `

        <div class="modal-article">

            <p>${escapeHTML(content)}</p>

        </div>

    `;

}


function createModalList(item) {

    const list = ensureArray(
        item.items ||
        item.features ||
        item.achievements ||
        item.scope
    );

    if (!list.length) {

        return "";

    }

    return `

        <div class="modal-article">

            <ul>

                ${list.map(value => `
                    <li>${escapeHTML(value)}</li>
                `).join("")}

            </ul>

        </div>

    `;

}


function createModalProgress(item, type) {

    if (type !== "green365") {

        return "";

    }

    const day = clamp(
        Number(item.day),
        1,
        365
    );

    const progress = calculateGreen365Progress(day);

    return `

        <div class="modal-progress">

            <div class="progress-header">

                <span>Ngày ${day} / 365</span>

                <span>${progress}%</span>

            </div>

            <div class="progress-track">

                <div
                    class="progress-fill"
                    style="width:${progress}%"
                ></div>

            </div>

        </div>

    `;

}


function createModalHTML(item, type) {

    const hasImage = hasText(item.image);

    const tag = fallback(
        item.category,
        type === "green365"
            ? `DAY ${item.day || ""} / 365`
            : ""
    );

    return `

        <div class="
            modal-layout
            ${hasImage ? "" : "modal-layout-single"}
        ">

            ${hasImage ? `

                <div class="modal-media image-loading">

                    <img
                        src="${escapeHTML(item.image)}"
                        alt="${escapeHTML(
                            fallback(
                                item.imageAlt,
                                item.title
                            )
                        )}"
                    >

                </div>

            ` : ""}

            <div class="modal-info">

                ${hasText(tag) ? `

                    <span class="modal-tag">
                        ${escapeHTML(tag)}
                    </span>

                ` : ""}

                <h2
                    id="modalTitle"
                    class="modal-title"
                >
                    ${escapeHTML(item.title)}
                </h2>

                ${hasText(item.description) ? `

                    <p class="modal-description">
                        ${escapeHTML(item.description)}
                    </p>

                ` : ""}

                ${createModalMeta(item)}

                ${createModalArticle(item)}

                ${createModalList(item)}

                ${hasText(item.quote) ? `

                    <blockquote class="modal-quote">
                        “${escapeHTML(item.quote)}”
                    </blockquote>

                ` : ""}

                ${createModalProgress(item, type)}

                ${createModalGallery(item)}

            </div>

        </div>

    `;

}


function openItemModal(type, id) {

    const item = findItemById(type, id);

    if (!item) {

        logError(
            "openItemModal",
            `Không tìm thấy ${type}: ${id}`
        );

        return;

    }

    openModal(item, type);

}


function openModal(item, type) {

    const {
        modal,
        modalContainer,
        modalContent
    } = HKApp.elements;

    if (
        !elementExists(modal) ||
        !elementExists(modalContent)
    ) {

        return;

    }

    HKApp.state.currentModalItem = item;
    HKApp.state.currentModalType = type;
    HKApp.state.isModalOpen = true;

    modalContent.innerHTML = createModalHTML(
        item,
        type
    );

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

    if (elementExists(modalContainer)) {

        modalContainer.setAttribute(
            "role",
            "dialog"
        );

        modalContainer.setAttribute(
            "aria-modal",
            "true"
        );

        modalContainer.setAttribute(
            "aria-labelledby",
            "modalTitle"
        );

        modalContainer.setAttribute(
            "tabindex",
            "-1"
        );

        window.setTimeout(
            () => modalContainer.focus(),
            50
        );

    }

    initializeImages(modalContent);

}


function closeModal() {

    const {
        modal,
        modalContent
    } = HKApp.elements;

    if (!elementExists(modal)) {

        return;

    }

    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

    HKApp.state.isModalOpen = false;
    HKApp.state.currentModalItem = null;
    HKApp.state.currentModalType = null;

    window.setTimeout(
        () => {

            if (elementExists(modalContent)) {

                clearElement(modalContent);

            }

        },
        350
    );

}


function changeModalImage(imageSource, button) {

    const mainImage = select(
        ".modal-media img",
        HKApp.elements.modalContent
    );

    if (!mainImage || !hasText(imageSource)) {

        return;

    }

    selectAll(
        ".modal-gallery-item",
        HKApp.elements.modalContent
    ).forEach(item => {

        item.classList.remove("active");

    });

    button.classList.add("active");

    mainImage.style.opacity = "0";

    window.setTimeout(
        () => {

            mainImage.src = imageSource;

            mainImage.onload = () => {

                mainImage.style.opacity = "1";

            };

        },
        180
    );

}


function trapModalFocus(event) {

    if (
        !HKApp.state.isModalOpen ||
        event.key !== "Tab"
    ) {

        return;

    }

    const container =
        HKApp.elements.modalContainer;

    if (!elementExists(container)) {

        return;

    }

    const focusable = selectAll(
        `
            a[href],
            button:not([disabled]),
            input:not([disabled]),
            textarea:not([disabled]),
            select:not([disabled]),
            [tabindex]:not([tabindex="-1"])
        `,
        container
    );

    if (!focusable.length) {

        return;

    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (
        event.shiftKey &&
        document.activeElement === first
    ) {

        event.preventDefault();
        last.focus();

    } else if (
        !event.shiftKey &&
        document.activeElement === last
    ) {

        event.preventDefault();
        first.focus();

    }

}


function bindModalEvents() {

    const {
        modal,
        modalClose,
        modalBackdrop,
        modalContent
    } = HKApp.elements;

    if (elementExists(modalClose)) {

        modalClose.addEventListener(
            "click",
            closeModal
        );

    }

    if (elementExists(modalBackdrop)) {

        modalBackdrop.addEventListener(
            "click",
            closeModal
        );

    }

    if (elementExists(modalContent)) {

        modalContent.addEventListener(
            "click",
            event => {

                const button = event.target.closest(
                    "[data-modal-image]"
                );

                if (!button) {

                    return;

                }

                changeModalImage(
                    button.dataset.modalImage,
                    button
                );

            }
        );

    }

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                HKApp.state.isModalOpen
            ) {

                closeModal();

            }

            trapModalFocus(event);

        }
    );

    if (elementExists(modal)) {

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

    }

}


/* ===================================================
   PART 8/10 — NAVIGATION AND MOBILE MENU
=================================================== */

function openMenu() {

    const {
        menuToggle,
        mainNav,
        menuOverlay
    } = HKApp.elements;

    if (
        !elementExists(menuToggle) ||
        !elementExists(mainNav)
    ) {

        return;

    }

    HKApp.state.isMenuOpen = true;

    menuToggle.classList.add("active");
    mainNav.classList.add("active");

    menuToggle.setAttribute(
        "aria-expanded",
        "true"
    );

    menuToggle.setAttribute(
        "aria-label",
        "Đóng menu"
    );

    menuOverlay?.classList.add("active");

    document.body.classList.add("menu-open");

}


function closeMenu() {

    const {
        menuToggle,
        mainNav,
        menuOverlay
    } = HKApp.elements;

    HKApp.state.isMenuOpen = false;

    menuToggle?.classList.remove("active");
    mainNav?.classList.remove("active");
    menuOverlay?.classList.remove("active");

    menuToggle?.setAttribute(
        "aria-expanded",
        "false"
    );

    menuToggle?.setAttribute(
        "aria-label",
        "Mở menu"
    );

    document.body.classList.remove("menu-open");

}


function toggleMenu() {

    if (HKApp.state.isMenuOpen) {

        closeMenu();

    } else {

        openMenu();

    }

}


function handleNavigationClick(event) {

    const link = event.target.closest(
        'a[href^="#"]'
    );

    if (!link) {

        return;

    }

    const targetSelector =
        link.getAttribute("href");

    if (
        !targetSelector ||
        targetSelector === "#"
    ) {

        return;

    }

    const target = select(targetSelector);

    if (!elementExists(target)) {

        return;

    }

    event.preventDefault();

    closeMenu();

    scrollToElement(target);

}


function updateHeaderState() {

    const { header } = HKApp.elements;

    if (!elementExists(header)) {

        return;

    }

    header.classList.toggle(
        "scrolled",
        window.scrollY > 40
    );

}


function updateActiveNavigation() {

    const sections = selectAll(
        "main section[id]"
    );

    if (!sections.length) {

        return;

    }

    const headerHeight =
        HKApp.elements.header?.offsetHeight || 0;

    const position =
        window.scrollY +
        headerHeight +
        160;

    let activeId = sections[0].id;

    sections.forEach(section => {

        if (position >= section.offsetTop) {

            activeId = section.id;

        }

    });

    HKApp.state.activeSection = activeId;

    HKApp.elements.navLinks.forEach(link => {

        const isActive =
            link.getAttribute("href") ===
            `#${activeId}`;

        link.classList.toggle(
            "active",
            isActive
        );

        if (isActive) {

            link.setAttribute(
                "aria-current",
                "true"
            );

        } else {

            link.removeAttribute(
                "aria-current"
            );

        }

    });

}


function bindNavigationEvents() {

    const {
        menuToggle,
        menuOverlay,
        mainNav
    } = HKApp.elements;

    menuToggle?.addEventListener(
        "click",
        toggleMenu
    );

    menuOverlay?.addEventListener(
        "click",
        closeMenu
    );

    mainNav?.addEventListener(
        "click",
        handleNavigationClick
    );

    document.addEventListener(
        "click",
        event => {

            const anchor = event.target.closest(
                'a[href^="#"]'
            );

            if (
                anchor &&
                !anchor.closest("#mainNav")
            ) {

                handleNavigationClick(event);

            }

        }
    );

    window.addEventListener(
        "resize",
        debounce(
            () => {

                if (window.innerWidth > 900) {

                    closeMenu();

                }

            },
            150
        )
    );

}


/* ===================================================
   PART 9/10 — SCROLL, REVEAL AND IMAGES
=================================================== */

function initializeReveal() {

    const elements = selectAll(
        "[data-reveal], .card"
    );

    if (!elements.length) {

        return;

    }

    if (
        prefersReducedMotion() ||
        !("IntersectionObserver" in window)
    ) {

        elements.forEach(element => {

            element.classList.add("active");

        });

        return;

    }

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {

                    return;

                }

                entry.target.classList.add(
                    "active"
                );

                observer.unobserve(
                    entry.target
                );

            });

        },

        {
            threshold: 0.12,
            rootMargin: "0px 0px -50px 0px"
        }

    );

    elements.forEach(element => {

        observer.observe(element);

    });

}


function updateBackToTop() {

    const button = HKApp.elements.backToTop;

    if (!elementExists(button)) {

        return;

    }

    button.classList.toggle(
        "active",
        window.scrollY > 600
    );

}


function bindBackToTop() {

    const button = HKApp.elements.backToTop;

    if (!elementExists(button)) {

        return;

    }

    button.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: prefersReducedMotion()
                    ? "auto"
                    : "smooth"

            });

        }
    );

}


function handleImageLoaded(image) {

    const wrapper = image.closest(
        ".image-loading"
    );

    wrapper?.classList.add("loaded");

    image.classList.add("loaded");

}


function handleImageError(image) {

    const wrapper =
        image.parentElement;

    image.dataset.error = "true";

    wrapper?.classList.remove(
        "image-loading"
    );

    wrapper?.classList.add(
        "has-image-error"
    );

}


function initializeImages(scope = document) {

    selectAll("img", scope).forEach(image => {

        if (image.dataset.hkInitialized === "true") {

            return;

        }

        image.dataset.hkInitialized = "true";

        if (image.complete) {

            if (image.naturalWidth > 0) {

                handleImageLoaded(image);

            } else {

                handleImageError(image);

            }

            return;

        }

        image.addEventListener(
            "load",
            () => handleImageLoaded(image),
            {
                once: true
            }
        );

        image.addEventListener(
            "error",
            () => handleImageError(image),
            {
                once: true
            }
        );

    });

}


function handleGlobalScroll() {

    updateHeaderState();
    updateActiveNavigation();
    updateBackToTop();

}


/* ===================================================
   CONFIG RENDERING
=================================================== */

function setTextContent(selector, value) {

    const element = select(selector);

    if (
        elementExists(element) &&
        hasText(String(value || ""))
    ) {

        element.textContent = value;

    }

}


function setLinkContent(
    selector,
    text,
    href
) {

    const element = select(selector);

    if (!elementExists(element)) {

        return;

    }

    if (hasText(text)) {

        element.textContent = text;

    }

    if (hasText(href)) {

        element.setAttribute("href", href);

    }

}


function renderSiteConfig() {

    const config = getDataSet("config");

    HKApp.config = config;

    if (!config || typeof config !== "object") {

        return;

    }

    if (hasText(config.siteTitle)) {

        document.title = config.siteTitle;

    }

    setTextContent(
        "[data-config='brandName']",
        config.brandName
    );

    setTextContent(
        "[data-config='phone']",
        config.phone
    );

    setTextContent(
        "[data-config='email']",
        config.email
    );

    setTextContent(
        "[data-config='address']",
        config.address
    );

    setTextContent(
        "[data-config='website']",
        config.website
    );

    setLinkContent(
        "[data-link='phone']",
        config.phone,
        config.phone
            ? `tel:${String(config.phone)
                .replace(/\s+/g, "")}`
            : ""
    );

    setLinkContent(
        "[data-link='email']",
        config.email,
        config.email
            ? `mailto:${config.email}`
            : ""
    );

    setLinkContent(
        "[data-link='website']",
        config.website,
        config.websiteUrl || ""
    );

}


/* ===================================================
   GLOBAL CARD EVENTS
=================================================== */

function bindCardEvents() {

    const containers = [

        HKApp.elements.servicesGrid,

        HKApp.elements.portfolioGrid,

        HKApp.elements.projectsGrid,

        HKApp.elements.green365Grid

    ].filter(elementExists);

    containers.forEach(container => {

        container.addEventListener(
            "click",
            handleCardActivation
        );

        container.addEventListener(
            "keydown",
            handleCardKeyboard
        );

    });

}


/* ===================================================
   LOADER
=================================================== */

async function hideLoader() {

    const {
        html,
        body,
        loader
    } = HKApp.elements;

    await wait(250);

    body?.classList.add("ready");
    body?.classList.remove("is-loading");
    html?.classList.remove("loading");

    loader?.classList.add("is-hidden");

    window.setTimeout(
        () => {

            if (elementExists(loader)) {

                loader.setAttribute(
                    "aria-hidden",
                    "true"
                );

            }

        },
        500
    );

}


/* ===================================================
   PART 10/10 — APPLICATION INITIALIZATION
=================================================== */

function renderApplicationContent() {

    renderSiteConfig();

    renderServices();

    renderPortfolio();

    renderProjects();

    renderGreen365();

}


function bindApplicationEvents() {

    bindCardEvents();

    bindModalEvents();

    bindNavigationEvents();

    bindBackToTop();

    window.addEventListener(
        "scroll",
        throttle(
            handleGlobalScroll,
            80
        ),
        {
            passive: true
        }
    );

}


async function initializeApplication() {

    try {

        cacheDOM();

        HKApp.elements.html
            ?.classList.add("loading");

        HKApp.elements.body
            ?.classList.add("is-loading");

        updateFooterYear();

        renderApplicationContent();

        bindApplicationEvents();

        initializeImages();

        initializeReveal();

        handleGlobalScroll();

        HKApp.state.isReady = true;

        await hideLoader();

        document.dispatchEvent(
            new CustomEvent(
                "hkapp:ready",
                {
                    detail: {
                        app: HKApp
                    }
                }
            )
        );

    } catch (error) {

        logError(
            "initializeApplication",
            error
        );

        HKApp.elements.body
            ?.classList.remove("is-loading");

        HKApp.elements.html
            ?.classList.remove("loading");

        HKApp.elements.loader
            ?.classList.add("is-hidden");

    }

}


/* ===================================================
   PUBLIC APP METHODS
=================================================== */

HKApp.render = {

    services: renderServices,

    portfolio: renderPortfolio,

    projects: renderProjects,

    green365: renderGreen365,

    config: renderSiteConfig,

    all: renderApplicationContent

};


HKApp.modal = {

    open: openModal,

    openItem: openItemModal,

    close: closeModal

};


HKApp.navigation = {

    openMenu,

    closeMenu,

    scrollTo: scrollToElement

};


/* ===================================================
   START APP
=================================================== */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        initializeApplication,
        {
            once: true
        }
    );

} else {

    initializeApplication();

}

