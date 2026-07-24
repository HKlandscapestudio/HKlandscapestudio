(() => {
  "use strict";
  const $ = (s, p=document) => p.querySelector(s);
  const $$ = (s, p=document) => [...p.querySelectorAll(s)];
  const modal = $("#sharedModal"), modalContent = $("#modalContent");
  let greenVisible = 8;

  const exists = src => src && src.trim();
  const imageMarkup = (src, alt) => exists(src)
    ? `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\'image-placeholder\'>Thêm ảnh tại<br>${src}</div>'">`
    : `<div class="image-placeholder">Chưa có ảnh</div>`;

  function card(item, type, badge="") {
    return `<article class="content-card reveal" tabindex="0" data-type="${type}" data-id="${item.id}">
      <div class="card-image">${imageMarkup(item.image,item.title)}${badge?`<span class="card-badge">${badge}</span>`:""}</div>
      <div class="card-body"><h3>${item.icon?item.icon+" ":""}${item.title}</h3><p>${item.summary||item.subtitle||item.location||item.content||""}</p><span class="card-link">Xem chi tiết →</span></div>
    </article>`;
  }

  function render() {
    const c = window.SITE_CONFIG;
    document.title = c.brand.name;
    $("#headerLogo").src=c.brand.logo.main; $("#footerLogo").src=c.brand.logo.light;
    $("#heroTitle").innerHTML=c.brand.slogan.replace(" để "," để<br>"); $("#heroDescription").textContent=c.brand.description;
    $(".hero").style.backgroundImage=`url('${c.brand.heroImage}')`;
    $("#zaloQr").src=c.contact.qrZalo;
    $("#servicesGrid").innerHTML=SERVICES.map(x=>card(x,"service")).join("");
    $("#portfolioGrid").innerHTML=PORTFOLIOS.map(x=>card(x,"portfolio")).join("");
    $("#projectsGrid").innerHTML=PROJECTS.map(x=>card(x,"project",x.year)).join("");
    renderGreen();
    $("#contactList").innerHTML=`
      <div class="contact-item"><span>☎</span><div><b>Điện thoại</b><a href="tel:${c.contact.phoneLink}">${c.contact.phoneDisplay}</a></div></div>
      <div class="contact-item"><span>✉</span><div><b>Email</b><a href="mailto:${c.contact.email}">${c.contact.email}</a></div></div>
      <div class="contact-item"><span>🌐</span><div><b>Website</b><a href="https://${c.contact.website}" target="_blank" rel="noopener">${c.contact.website}</a></div></div>
      <div class="contact-item"><span>📍</span><div><b>Địa chỉ</b><span>${c.contact.address}</span></div></div>`;
    $("#socialLinks").innerHTML=c.social.map(x=>`<a href="${x.url}">${x.label}</a>`).join("");
    $("#mapWrap").innerHTML=`<iframe title="Bản đồ Hoàng Kim Landscape Studio" loading="lazy" src="${c.contact.mapEmbed}"></iframe>`;
    $("#year").textContent=new Date().getFullYear();
  }

  function renderGreen(){
    $("#green365Grid").innerHTML=GREEN365.slice(0,greenVisible).map(x=>card(x,"green",`Day ${String(x.day).padStart(3,"0")}`)).join("");
    $("#loadMoreGreen").style.display=greenVisible>=GREEN365.length?"none":"inline-flex";
    observeReveals();
  }

  function getItem(type,id){
    const maps={service:SERVICES,portfolio:PORTFOLIOS,project:PROJECTS,green:GREEN365};
    return maps[type]?.find(x=>x.id===id);
  }
  const gallery = (arr=[]) => arr.length ? `<div class="gallery">${arr.map((src,i)=>`<div>${imageMarkup(src,`Ảnh chi tiết ${i+1}`)}</div>`).join("")}</div>` : "";

  function modalHtml(type,item){
    const hero=`<div class="modal-hero">${imageMarkup(item.image,item.title)}</div>`;
    if(type==="service") return `${hero}<div class="modal-inner"><p class="modal-meta">DỊCH VỤ</p><h2 id="modalTitle">${item.title}</h2><p class="modal-description">${item.description}</p><ul class="modal-list">${item.bullets.map(x=>`<li>${x}</li>`).join("")}</ul><a class="btn btn-primary" href="#contact" data-close-modal>Liên hệ tư vấn</a></div>`;
    if(type==="portfolio") return `${hero}<div class="modal-inner"><p class="modal-meta">PORTFOLIO</p><h2 id="modalTitle">${item.title}</h2><p>${item.subtitle}</p><p class="modal-description">${item.description}</p>${item.pdf?`<a class="btn btn-primary" href="${item.pdf}" target="_blank">Mở PDF</a>`:""}${gallery(item.gallery)}</div>`;
    if(type==="project") { const idx=PROJECTS.indexOf(item); return `${hero}<div class="modal-inner"><p class="modal-meta">${item.location} · ${item.year}</p><h2 id="modalTitle">${item.title}</h2><p><strong>Vai trò:</strong> ${item.role}</p><p class="modal-description">${item.description}</p>${gallery(item.gallery)}<div class="project-nav"><button data-project-nav="${idx-1}" ${idx===0?"disabled":""}>← Dự án trước</button><button data-project-nav="${idx+1}" ${idx===PROJECTS.length-1?"disabled":""}>Dự án sau →</button></div></div>`; }
    const pct=(item.day/365*100).toFixed(1); return `${hero}<div class="modal-inner"><p class="modal-meta">DAY ${String(item.day).padStart(3,"0")} / 365</p><h2 id="modalTitle">${item.title}</h2><p class="modal-description">${item.content}</p><div class="progress-block"><div class="progress-row"><span>TIẾN ĐỘ GREEN365</span><span>${pct}%</span></div><div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div></div><h3>Thành quả hôm nay</h3><ul>${item.achievements.map(x=>`<li>${x}</li>`).join("")}</ul><h3>Điều học được</h3><ul>${item.lessons.map(x=>`<li>${x}</li>`).join("")}</ul><h3>Mục tiêu ngày mai</h3><ul>${item.nextGoals.map(x=>`<li>${x}</li>`).join("")}</ul></div>`;
  }

  function openModal(type,item){ if(!item)return; modalContent.innerHTML=modalHtml(type,item); modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.classList.add("modal-open");$(".modal-close").focus(); }
  function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.classList.remove("modal-open")}

  function observeReveals(){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});$$('.reveal:not(.visible)').forEach(x=>io.observe(x))}
  function bind(){
    document.addEventListener("click",e=>{
      const cardEl=e.target.closest("[data-type][data-id]"); if(cardEl) openModal(cardEl.dataset.type,getItem(cardEl.dataset.type,cardEl.dataset.id));
      if(e.target.closest("[data-close-modal]")) closeModal();
      const nav=e.target.closest("[data-project-nav]"); if(nav&&!nav.disabled) openModal("project",PROJECTS[Number(nav.dataset.projectNav)]);
    });
    document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();const cardEl=e.target.closest?.("[data-type][data-id]");if(cardEl&&(e.key==="Enter"||e.key===" ")){e.preventDefault();openModal(cardEl.dataset.type,getItem(cardEl.dataset.type,cardEl.dataset.id))}});
    $("#loadMoreGreen").addEventListener("click",()=>{greenVisible+=8;renderGreen()});
    $("#navToggle").addEventListener("click",()=>{const n=$("#mainNav");n.classList.toggle("open");$("#navToggle").setAttribute("aria-expanded",n.classList.contains("open"))});
    $$("#mainNav a").forEach(a=>a.addEventListener("click",()=>$("#mainNav").classList.remove("open")));
    $("#backToTop").addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));
    addEventListener("scroll",()=>$("#backToTop").classList.toggle("show",scrollY>550));
  }
  addEventListener("DOMContentLoaded",()=>{render();bind();observeReveals();setTimeout(()=>$("#loader").classList.add("hidden"),350)});
})();
