/* =========================================================================
   script.js — interactive behaviour for the CS.edu site
   Relies on data.js (COURSES, TOPICS, FAQS, BLOG_POSTS) being loaded first.
   Organised by feature so each block can be read top-to-bottom on its own.
   ========================================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ----------------------------------------------------------------- */
  /* 1. THEME TOGGLE (dark / light, persisted in localStorage)         */
  /* ----------------------------------------------------------------- */
  const root = document.documentElement;
  const themeBtn = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("cs-theme") || "dark";
  root.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
  updateLogo(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("cs-theme", next);
      updateThemeIcon(next);
      updateLogo(next);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeBtn) return;
    themeBtn.innerHTML = theme === "dark"
      ? '<i class="bi bi-sun"></i>'
      : '<i class="bi bi-moon-stars"></i>';
  }

  /* ----------------------------------------------------------------- */
  /* 2. RENDER: FEATURED COURSES                                       */
  /* ----------------------------------------------------------------- */
  const courseGrid = document.getElementById("courseGrid");
  if (courseGrid && typeof COURSES !== "undefined") {
    courseGrid.innerHTML = COURSES.map(courseCardHTML).join("");
  }

  function courseCardHTML(c) {
    return `
      <div class="col-md-6 col-lg-3 reveal">
        <div class="course-card" data-course="${c.id}">
          <div class="card-top">
            <!--<span class="badge-ext badge-${c.color}">${c.ext}</span>-->
            <div class="topic-icon badge-${c.color}"><i class="bi bi-${c.icon}"></i></div>
            <!--<span class="badge-ext badge-${c.color}">${c.level}</span> -->
          </div>
          <h3>${c.title}</h3>
          <p>${c.blurb}</p>
          <div class="course-meta">
            <!-- <span><i class="bi bi-clock"></i> ${c.duration}</span> -->
            <span class="stars"><i class="bi bi-star-fill"></i> ${c.rating}</span>
          </div>
        </div>
      </div>`;
  }

  /* ----------------------------------------------------------------- */
  /* 3. RENDER: TOPICS GRID                                            */
  /* ----------------------------------------------------------------- */
  const topicGrid = document.getElementById("topicGrid");
  if (topicGrid && typeof TOPICS !== "undefined") {
    topicGrid.innerHTML = TOPICS.map(t => `
      <div class="col-sm-6 col-lg-3 reveal">
        <div class="topic-card" data-topic="${t.id}">
          <span class="badge-ext badge-mint">${t.ext}</span>
          <div class="topic-icon"><i class="bi bi-${t.icon}"></i></div>
          <h4>${t.name}</h4>
          <p>${t.desc}</p>
        </div>
      </div>`).join("");
  }

  /* ----------------------------------------------------------------- */
  /* 4. RENDER: FAQ ACCORDION                                          */
  /* ----------------------------------------------------------------- */
  const faqList = document.getElementById("faqList");
  if (faqList && typeof FAQS !== "undefined") {
    faqList.innerHTML = FAQS.map((f, i) => `
      <div class="faq-item" id="faq-${i}">
        <div class="faq-q">
          <span>${f.q}</span>
          <i class="bi bi-plus-lg"></i>
        </div>
        <div class="faq-a"><p>${f.a}</p></div>
      </div>`).join("");

    faqList.querySelectorAll(".faq-item").forEach(item => {
      item.querySelector(".faq-q").addEventListener("click", () => {
        const wasOpen = item.classList.contains("open");
        faqList.querySelectorAll(".faq-item.open").forEach(o => o.classList.remove("open"));
        if (!wasOpen) item.classList.add("open");
      });
    });
  }

  /* ----------------------------------------------------------------- */
  /* 5. SEARCH (filters courses + topics, shows dropdown results)      */
  /* ----------------------------------------------------------------- */
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  if (searchInput && searchResults) {
    const searchPool = [
      ...(typeof COURSES !== "undefined" ? COURSES.map(c => ({ label: c.title, sub: `Course · ${c.topic}`, type: "course" })) : []),
      ...(typeof TOPICS !== "undefined" ? TOPICS.map(t => ({ label: t.name, sub: "Topic", type: "topic" })) : [])
    ];

    searchInput.addEventListener("input", () => {
      const q = searchInput.value.trim().toLowerCase();
      if (!q) { searchResults.classList.remove("show"); return; }

      const matches = searchPool.filter(item => item.label.toLowerCase().includes(q)).slice(0, 8);
      searchResults.innerHTML = matches.length
        ? matches.map(m => `<a href="#${m.type === 'course' ? 'courses' : 'topics'}"><strong>${m.label}</strong><br><small class="font-mono">${m.sub}</small></a>`).join("")
        : `<div class="none">No results for "${escapeHTML(q)}"</div>`;
      searchResults.classList.add("show");
    });

    document.addEventListener("click", (e) => {
      if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.classList.remove("show");
      }
    });
  }

  function escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  /* ----------------------------------------------------------------- */
  /* 6. RENDER: BLOG (homepage preview + dedicated blog page)          */
  /* ----------------------------------------------------------------- */
  const blogGrid = document.getElementById("blogGrid");
  if (blogGrid && typeof BLOG_POSTS !== "undefined") {
    const limit = blogGrid.dataset.limit ? parseInt(blogGrid.dataset.limit, 10) : BLOG_POSTS.length;
    blogGrid.innerHTML = BLOG_POSTS.slice(0, limit).map(p => `
      <div class="col-md-6 col-lg-4 reveal">
        <div class="blog-card">
          <div class="blog-cover ${p.cover}"># ${p.topic}</div>
          <div class="blog-body">
            <div class="blog-meta">${formatDate(p.date)} · ${p.readTime} read</div>
            <h3>${p.title}</h3>
            <p>${p.excerpt}</p>
          </div>
        </div>
      </div>`).join("");
  }

  function formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }

  /* ----------------------------------------------------------------- */
  /* 7. Testimonial                                             */
  /* ----------------------------------------------------------------- */
  const testimonialTrack = document.getElementById("testimonialTrack");
  if(testimonialTrack){
    const cards =
    [...TESTIMONIALS, ...TESTIMONIALS]
    .map(t => 
      {
        let stars = "";
        for(let i = 0; i < t.rating; i++){
          stars += "★";}
        return `
        <div class="testimonial-card">
            <img src="${t.image}" class="testimonial-avatar">
            <div class="testimonial-stars"> ${stars}</div>
            <p>${t.review}</p>
            <h5>${t.name}</h5>
            <span>${t.role}</span>
        </div>
    `}).join("");
    testimonialTrack.innerHTML = cards;
}

  /* ----------------------------------------------------------------- */
  /* 7. STUDENT DASHBOARD                                              */
  /* ----------------------------------------------------------------- */
  const DASHBOARD_DATA = {
    stats: { coursesEnrolled: 6, coursesCompleted: 2, hoursLearned: 47, dayStreak: 12 },
    progress: [
      { name: "Data Structures Essentials", pct: 100, status: "done" },
      { name: "Algorithms & Complexity", pct: 100, status: "done" },
      { name: "Database Management Systems", pct: 64, status: "progress" },
      { name: "Operating Systems Internals", pct: 30, status: "progress" },
      { name: "Computer Networks 101", pct: 0, status: "locked" },
      { name: "Machine Learning in Practice", pct: 0, status: "locked" }
    ]
  };

  const dashStats = document.getElementById("dashStats");
  if (dashStats) {
    const s = DASHBOARD_DATA.stats;
    dashStats.innerHTML = `
      <div class="col-6 col-lg-3"><div class="dash-card text-center"><div class="dash-stat-num" style="color:var(--mint)">${s.coursesEnrolled}</div><div class="dash-stat-label">Courses enrolled</div></div></div>
      <div class="col-6 col-lg-3"><div class="dash-card text-center"><div class="dash-stat-num" style="color:var(--violet)">${s.coursesCompleted}</div><div class="dash-stat-label">Completed</div></div></div>
      <div class="col-6 col-lg-3"><div class="dash-card text-center"><div class="dash-stat-num" style="color:var(--amber)">${s.hoursLearned}h</div><div class="dash-stat-label">Hours learned</div></div></div>
      <div class="col-6 col-lg-3"><div class="dash-card text-center"><div class="dash-stat-num" style="color:var(--rose)">${s.dayStreak}</div><div class="dash-stat-label">Day streak</div></div></div>
    `;
  }

  const dashProgress = document.getElementById("dashProgress");
  if (dashProgress) {
    dashProgress.innerHTML = DASHBOARD_DATA.progress.map(p => `
      <div class="progress-row">
        <div class="pr-top">
          <span>${p.name}</span>
          <span class="pct">${p.pct}%</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" data-target="${p.pct}"></div>
        </div>
      </div>`).join("");
  }

  const dashStatus = document.getElementById("dashStatus");
  if (dashStatus) {
    const pillClass = { done: "status-done", progress: "status-progress", locked: "status-locked" };
    const pillText = { done: "completed", progress: "in progress", locked: "locked" };
    dashStatus.innerHTML = DASHBOARD_DATA.progress.map(p => `
      <div class="d-flex justify-content-between align-items-center py-2 border-bottom" style="border-color: var(--border) !important;">
        <span style="font-size:.9rem">${p.name}</span>
        <span class="status-pill ${pillClass[p.status]}">${pillText[p.status]}</span>
      </div>`).join("");
  }

  /* Animate progress bars once they scroll into view */
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".progress-fill").forEach(bar => {
          bar.style.width = bar.dataset.target + "%";
        });
        progressObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  const progressSection = document.getElementById("dashProgress");
  if (progressSection) progressObserver.observe(progressSection);

  /* ----------------------------------------------------------------- */
  /* 8. CONTACT FORM (client-side validation, no backend)              */
  /* ----------------------------------------------------------------- */
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!contactForm.checkValidity()) {
        contactForm.classList.add("was-validated");
        return;
      }
      document.getElementById("formSuccess").style.display = "block";
      contactForm.reset();
      contactForm.classList.remove("was-validated");
      setTimeout(() => {
        document.getElementById("formSuccess").style.display = "none";
      }, 4000);
    });
  }

  /* ----------------------------------------------------------------- */
  /* 9. SCROLL-REVEAL ANIMATIONS                                       */
  /* ----------------------------------------------------------------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  // Re-query after dynamic content has been injected above
  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

  /* ----------------------------------------------------------------- */
  /* 10. NAVBAR ACTIVE LINK ON SCROLL (homepage only)                  */
  /* ----------------------------------------------------------------- */
  const navLinks = document.querySelectorAll(".navbar-cs .nav-link[href^='#']");
  const sections = [...navLinks].map(l => document.querySelector(l.getAttribute("href"))).filter(Boolean);

  if (sections.length) {
    window.addEventListener("scroll", () => {
      const scrollPos = window.scrollY + 120;
      let current = sections[0];
      sections.forEach(sec => { if (sec.offsetTop <= scrollPos) current = sec; });
      navLinks.forEach(l => l.classList.remove("active"));
      const activeLink = document.querySelector(`.navbar-cs .nav-link[href="#${current.id}"]`);
      if (activeLink) activeLink.classList.add("active");
    });
  }

  /* ----------------------------------------------------------------- */
  /* 11. COLLAPSE MOBILE NAV ON LINK CLICK                             */
  /* ----------------------------------------------------------------- */
  document.querySelectorAll(".navbar-cs .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const navCollapse = document.getElementById("navCollapse");
      if (navCollapse && navCollapse.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
      }
    });
  });

});
function updateLogo(theme) {

  const logo = document.getElementById("siteLogo");

  if (!logo) return;

  if (theme === "dark") {
      logo.src = "images/Anra white logo.png";
  } else {
      logo.src = "images/ANRA Institue.png";
  }
}