const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    mobileMenu.classList.toggle("hidden");
  });
}

const pageParams = new URLSearchParams(window.location.search);
const source = pageParams.get("from");

const sourceMap = {
  "curated-works": {
    href: "index.html#curated-works",
    label: "← Back to Curated Works",
  },
  gallery: {
    href: "gallery.html#gallery-exhibits",
    label: "← Back to Gallery",
  },
};

const sourceConfig = sourceMap[source];

const escapeHTML = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

if (sourceConfig) {
  document.querySelectorAll("[data-back-link]").forEach((backLink) => {
    backLink.setAttribute("href", sourceConfig.href);
    backLink.textContent = sourceConfig.label;
  });

  document.querySelectorAll("[data-preserve-source]").forEach((link) => {
    const href = link.getAttribute("href");

    if (!href) {
      return;
    }

    const nextUrl = new URL(href, window.location.href);
    nextUrl.searchParams.set("from", source);
    link.setAttribute("href", `${nextUrl.pathname.split("/").pop()}${nextUrl.search}`);
  });
}

const penguinGallery = document.querySelector("[data-penguin-gallery]");

if (penguinGallery && Array.isArray(window.penguinBrosSlides)) {
  penguinGallery.innerHTML = window.penguinBrosSlides
    .map(
      ({ filename, caption }) => `
        <figure class="penguin-gallery-card">
          <img
            class="penguin-gallery-image"
            src="images/penguinbrosdeck/${filename}"
            alt="Penguin Brothers strategy slide: ${caption}"
            loading="lazy"
            decoding="async"
          />
          <figcaption class="penguin-gallery-caption">${caption}</figcaption>
        </figure>
      `,
    )
    .join("");
}

const ralphGallery = document.querySelector("[data-ralph-gallery]");

if (ralphGallery && Array.isArray(window.ralphLaurenSlides)) {
  ralphGallery.innerHTML = window.ralphLaurenSlides
    .map(
      ({ filename, caption }) => `
        <figure class="ralph-gallery-card">
          <img
            class="ralph-gallery-image"
            src="images/Ralphlaurendeck/${filename}"
            alt="Ralph Lauren Ask Ralph strategy slide: ${caption}"
            loading="lazy"
            decoding="async"
          />
          <figcaption class="ralph-gallery-caption">${caption}</figcaption>
        </figure>
      `,
    )
    .join("");
}

const whiskasExecutions = document.querySelector("[data-whiskas-executions]");

if (whiskasExecutions && Array.isArray(window.whiskasExecutions)) {
  whiskasExecutions.innerHTML = window.whiskasExecutions
    .map(({ title, role, description, tone, label, format, asset, image }) => {
      const safeTitle = escapeHTML(title);
      const safeRole = escapeHTML(role);
      const safeDescription = escapeHTML(description);
      const safeTone = escapeHTML(tone);
      const safeLabel = escapeHTML(label);
      const safeFormat = escapeHTML(format);
      const safeAsset = escapeHTML(asset);
      const safeImage = escapeHTML(image);

      return `
        <article class="whiskas-execution-card">
          <a class="whiskas-preview-link" href="${safeAsset}" target="_blank" rel="noreferrer">
            <span class="execution-format-label">${safeFormat}</span>
            <img
              class="whiskas-execution-image"
              src="${safeImage}"
              alt="Preview of Whiskas execution: ${safeTitle}"
              loading="lazy"
              decoding="async"
            />
          </a>
          <div class="whiskas-execution-copy">
            <p class="eyebrow text-[0.64rem] font-medium uppercase text-olive/85">${safeLabel}</p>
            <h3>${safeTitle}</h3>
            <p><strong>Role:</strong> ${safeRole}</p>
            <p>${safeDescription}</p>
            <p class="execution-tone"><strong>Tone:</strong> ${safeTone}</p>
            <a class="execution-link" href="${safeAsset}" target="_blank" rel="noreferrer">View Execution</a>
          </div>
        </article>
      `;
    })
    .join("");
}

const whiskasSupportingExecutions = document.querySelector("[data-whiskas-supporting-executions]");

if (whiskasSupportingExecutions && Array.isArray(window.whiskasSupportingExecutions)) {
  whiskasSupportingExecutions.innerHTML = window.whiskasSupportingExecutions
    .map(({ title, description, label, format, asset, image }) => {
      const safeTitle = escapeHTML(title);
      const safeDescription = escapeHTML(description);
      const safeLabel = escapeHTML(label);
      const safeFormat = escapeHTML(format);
      const safeAsset = escapeHTML(asset);
      const safeImage = escapeHTML(image);

      return `
        <article class="whiskas-supporting-card">
          <a class="whiskas-supporting-preview" href="${safeAsset}" target="_blank" rel="noreferrer">
            <span class="execution-format-label">${safeFormat}</span>
            <img
              class="whiskas-supporting-image"
              src="${safeImage}"
              alt="Preview of Whiskas supporting execution: ${safeTitle}"
              loading="lazy"
              decoding="async"
            />
          </a>
          <div>
            <p class="eyebrow text-[0.64rem] font-medium uppercase text-olive/85">${safeLabel}</p>
            <h3>${safeTitle}</h3>
            <p>${safeDescription}</p>
            <a class="execution-link" href="${safeAsset}" target="_blank" rel="noreferrer">View Execution</a>
          </div>
        </article>
      `;
    })
    .join("");
}

const nbaResearchStats = document.querySelector("[data-nba-research-stats]");

if (nbaResearchStats && Array.isArray(window.nbaResearchStats)) {
  nbaResearchStats.innerHTML = window.nbaResearchStats
    .map(({ value, label }) => {
      const safeValue = escapeHTML(value);
      const safeLabel = escapeHTML(label);

      return `
        <article class="nba-stat-card">
          <span>${safeValue}</span>
          <p>${safeLabel}</p>
        </article>
      `;
    })
    .join("");
}

const nbaQuotes = document.querySelector("[data-nba-quotes]");

if (nbaQuotes && Array.isArray(window.nbaQuotes)) {
  nbaQuotes.innerHTML = window.nbaQuotes
    .map(({ quote, source }) => {
      const safeQuote = escapeHTML(quote);
      const safeSource = escapeHTML(source);

      return `
        <figure class="nba-quote-card">
          <blockquote>${safeQuote}</blockquote>
          <figcaption>${safeSource}</figcaption>
        </figure>
      `;
    })
    .join("");
}

const nbaExecutions = document.querySelector("[data-nba-executions]");

if (nbaExecutions && Array.isArray(window.nbaExecutions)) {
  nbaExecutions.innerHTML = window.nbaExecutions
    .map(({ title, role, description, image }) => {
      const safeTitle = escapeHTML(title);
      const safeRole = escapeHTML(role);
      const safeDescription = escapeHTML(description);
      const safeImage = escapeHTML(image);

      return `
        <article class="nba-execution-card">
          <img
            class="nba-execution-image"
            src="${safeImage}"
            alt="NBA x Philharmonic execution slide: ${safeTitle}"
            loading="lazy"
            decoding="async"
          />
          <div class="nba-execution-copy">
            <h3>${safeTitle}</h3>
            <p><strong>Role:</strong> ${safeRole}</p>
            <p>${safeDescription}</p>
          </div>
        </article>
      `;
    })
    .join("");
}

const nbaPairings = document.querySelector("[data-nba-pairings]");

if (nbaPairings && Array.isArray(window.nbaPairings)) {
  nbaPairings.innerHTML = window.nbaPairings
    .map(([team, orchestra]) => {
      const safeTeam = escapeHTML(team);
      const safeOrchestra = escapeHTML(orchestra);

      return `
        <article class="nba-pairing-card">
          <span>${safeTeam}</span>
          <p>${safeOrchestra}</p>
        </article>
      `;
    })
    .join("");
}

const nbaGallery = document.querySelector("[data-nba-gallery]");

if (nbaGallery && Array.isArray(window.nbaGalleryImages)) {
  nbaGallery.innerHTML = window.nbaGalleryImages
    .map(({ filename, caption }) => {
      const safeFilename = escapeHTML(filename);
      const safeCaption = escapeHTML(caption);

      return `
        <figure class="nba-gallery-card">
          <a href="images/NBAdeck/${safeFilename}" target="_blank" rel="noreferrer">
            <img
              class="nba-gallery-image"
              src="images/NBAdeck/${safeFilename}"
              alt="NBA x Philharmonic strategy slide: ${safeCaption}"
              loading="lazy"
              decoding="async"
            />
          </a>
          <figcaption>${safeCaption}</figcaption>
        </figure>
      `;
    })
    .join("");
}

const doveStats = document.querySelector("[data-dove-stats]");

if (doveStats && Array.isArray(window.doveStats)) {
  doveStats.innerHTML = window.doveStats
    .map(({ value, label }) => {
      const safeValue = escapeHTML(value);
      const safeLabel = escapeHTML(label);

      return `
        <article class="dove-stat-card">
          <span>${safeValue}</span>
          <p>${safeLabel}</p>
        </article>
      `;
    })
    .join("");
}

const doveQuotes = document.querySelector("[data-dove-quotes]");

if (doveQuotes && Array.isArray(window.doveQuotes)) {
  doveQuotes.innerHTML = window.doveQuotes
    .map(({ quote, source }) => {
      const safeQuote = escapeHTML(quote);
      const safeSource = escapeHTML(source);

      return `
        <figure class="dove-quote-card">
          <blockquote>${safeQuote}</blockquote>
          <figcaption>${safeSource}</figcaption>
        </figure>
      `;
    })
    .join("");
}

const doveExecutions = document.querySelector("[data-dove-executions]");

if (doveExecutions && Array.isArray(window.doveExecutions)) {
  doveExecutions.innerHTML = window.doveExecutions
    .map(({ title, role, description, lines, image }) => {
      const safeTitle = escapeHTML(title);
      const safeRole = escapeHTML(role);
      const safeDescription = escapeHTML(description);
      const safeImage = escapeHTML(image);
      const lineMarkup = Array.isArray(lines) && lines.length
        ? `<div class="dove-example-lines">${lines.map((line) => `<span>${escapeHTML(line)}</span>`).join("")}</div>`
        : "";

      return `
        <article class="dove-execution-card">
          <img
            class="dove-execution-image"
            src="${safeImage}"
            alt="Dove creative execution slide: ${safeTitle}"
            loading="lazy"
            decoding="async"
          />
          <div class="dove-execution-copy">
            <h3>${safeTitle}</h3>
            <p><strong>Role:</strong> ${safeRole}</p>
            <p>${safeDescription}</p>
            ${lineMarkup}
          </div>
        </article>
      `;
    })
    .join("");
}

const doveGallery = document.querySelector("[data-dove-gallery]");

if (doveGallery && Array.isArray(window.doveGallery)) {
  doveGallery.innerHTML = window.doveGallery
    .map(({ filename, caption }) => {
      const safeFilename = escapeHTML(filename);
      const safeCaption = escapeHTML(caption);

      return `
        <figure class="dove-gallery-card">
          <a href="images/Dovedeck/${safeFilename}" target="_blank" rel="noreferrer">
            <img
              class="dove-gallery-image"
              src="images/Dovedeck/${safeFilename}"
              alt="Dove strategy slide: ${safeCaption}"
              loading="lazy"
              decoding="async"
            />
          </a>
          <figcaption>${safeCaption}</figcaption>
        </figure>
      `;
    })
    .join("");
}
