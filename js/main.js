const exhibits = [
  {
    slug: "making-complex-finance-feel-human",
    title: "How do we make complex finance feel human enough to trust?",
    brand: "Northline",
    year: "2025",
    context:
      "A growing financial brand needed to speak to ambitious young professionals who felt underserved by sterile, jargon-heavy messaging. The category was crowded with expertise, but light on emotional clarity.",
    insight:
      "People do not want to feel managed by their money. They want to feel understood in the middle of building a life that still feels uncertain.",
    idea:
      "Reframe the brand from an authority dispensing advice into a strategic partner translating complexity into confidence, with language and visuals that feel composed, generous, and unmistakably human.",
    reflection:
      "This exhibit reinforced that trust is rarely built through information alone. It is built when a brand makes people feel less alone inside an important decision.",
    execution: [
      {
        label: "Image 1",
        caption: "Brand platform visuals translating technical products into calm, high-clarity storytelling.",
      },
      {
        label: "Image 2",
        caption: "Editorial landing pages designed to slow the user down and create a sense of confidence.",
      },
      {
        label: "Image 3",
        caption: "Messaging system balancing precision, warmth, and practical action.",
      },
    ],
  },
  {
    slug: "helping-a-heritage-brand-matter-to-a-new-generation",
    title: "How do we help a heritage brand matter to a new generation?",
    brand: "Aster & Co.",
    year: "2024",
    context:
      "A respected legacy brand had recognition but felt culturally distant from younger audiences. Awareness was not the issue. Relevance was.",
    insight:
      "New audiences do not reject history. They reject brands that present history without a point of view for the present.",
    idea:
      "Turn the brand archive into a living source of modern identity, connecting heritage to self-expression through a campaign system that felt less commemorative and more current.",
    reflection:
      "Strategic storytelling works best when it turns nostalgia into momentum. The past becomes powerful when it creates permission for something new.",
    execution: [
      {
        label: "Image 1",
        caption: "Campaign identity connecting archival references to contemporary styling.",
      },
      {
        label: "Image 2",
        caption: "Social storytelling modules built around cultural reinterpretation rather than product listing.",
      },
      {
        label: "Image 3",
        caption: "Launch materials shaping a more participatory and modern brand presence.",
      },
    ],
  },
  {
    slug: "turning-sustainability-from-claim-into-proof",
    title: "How do we turn sustainability from a claim into proof people can feel?",
    brand: "Fieldmatter",
    year: "2023",
    context:
      "The brand had credible sustainability initiatives, but consumers saw most category messaging as vague, repetitive, and performative. The challenge was to make impact tangible.",
    insight:
      "People are willing to believe in responsible brands when the evidence is specific, visible, and connected to everyday choices rather than abstract virtue.",
    idea:
      "Build a communication system that treated sustainability like design evidence: concrete details, visible sourcing stories, and experiences that make care feel present instead of promised.",
    reflection:
      "The strongest strategic work often comes from replacing a broad virtue with a sensory, observable truth that people can instantly understand.",
    execution: [
      {
        label: "Image 1",
        caption: "Packaging and campaign language emphasizing traceable materials and real decisions.",
      },
      {
        label: "Image 2",
        caption: "Content series built around specific proof points instead of generic sustainability claims.",
      },
      {
        label: "Image 3",
        caption: "Retail and digital storytelling making environmental impact easier to see and remember.",
      },
    ],
  },
];

const navItems = [
  { label: "Entrance", route: "/" },
  { label: "Gallery", route: "/gallery" },
  { label: "Artist Statement", route: "/artist-statement" },
  { label: "Inquiries", route: "/inquiries" },
];

const root = document.getElementById("root");
let mobileMenuOpen = false;

function getRouteFromHash() {
  const hash = window.location.hash.replace(/^#/, "");
  return hash || "/";
}

function navigate(route) {
  mobileMenuOpen = false;
  window.location.hash = route;
}

function toggleMobileMenu() {
  mobileMenuOpen = !mobileMenuOpen;
  renderApp();
}

function sectionWrapper(content, options = {}) {
  const { id = "", eyebrow = "", title = "", narrow = false, className = "" } = options;
  const widthClass = narrow ? "max-w-3xl" : "max-w-6xl";

  return `
    <section ${id ? `id="${id}"` : ""} class="reveal ${className}" data-reveal>
      <div class="mx-auto w-full ${widthClass} px-6 md:px-10">
        ${
          eyebrow || title
            ? `
              <div class="mb-8 md:mb-12">
                ${
                  eyebrow
                    ? `<p class="mb-4 text-[0.72rem] font-medium uppercase tracking-curator text-olive">${eyebrow}</p>`
                    : ""
                }
                ${title ? `<h2 class="font-serif text-4xl leading-tight md:text-5xl">${title}</h2>` : ""}
              </div>
            `
            : ""
        }
        ${content}
      </div>
    </section>
  `;
}

function exhibitCard(exhibit, compact = false) {
  const minHeight = compact ? "min-h-[220px]" : "min-h-[280px]";

  return `
    <button
      class="group w-full border border-black/10 bg-white/40 p-6 text-left transition duration-700 ease-out hover:scale-[1.02] hover:border-olive/35 md:p-8 ${minHeight}"
      data-route="/exhibit/${exhibit.slug}"
      type="button"
    >
      <div class="flex h-full flex-col justify-between gap-10">
        <div>
          <p class="mb-3 text-[0.72rem] uppercase tracking-curator text-olive">Exhibit</p>
          <h3 class="max-w-2xl font-serif text-3xl leading-tight md:text-4xl">${exhibit.title}</h3>
        </div>
        <div class="space-y-4">
          <p class="text-sm text-black/55">${exhibit.brand} | ${exhibit.year}</p>
          <div class="h-px w-0 bg-olive transition-all duration-700 group-hover:w-full"></div>
        </div>
      </div>
    </button>
  `;
}

function renderNavbar(route) {
  return `
    <header class="sticky top-0 z-50 border-b border-black/5 bg-paper/90 backdrop-blur-md">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <button class="font-serif text-lg tracking-[0.02em]" data-route="/" aria-label="Go to Entrance" type="button">
          Bryce Peterson
        </button>
        <nav class="hidden flex-wrap items-center justify-end gap-x-4 gap-y-2 text-[0.72rem] uppercase tracking-curator text-black/72 md:flex md:gap-x-8 md:text-sm md:normal-case md:tracking-normal">
          ${navItems
            .map((item) => {
              const isCurrent =
                route === item.route || (item.route === "/gallery" && route.startsWith("/exhibit/"));

              return `
                <button
                  class="nav-link"
                  ${isCurrent ? 'aria-current="page"' : ""}
                  data-route="${item.route}"
                  type="button"
                >
                  ${item.label}
                </button>
              `;
            })
            .join("")}
        </nav>
        <button
          class="mobile-menu-toggle md:hidden"
          aria-expanded="${mobileMenuOpen ? "true" : "false"}"
          aria-label="Toggle navigation menu"
          data-menu-toggle
          type="button"
        >
          Menu
        </button>
      </div>
      ${
        mobileMenuOpen
          ? `
            <div class="border-t border-black/5 md:hidden">
              <nav class="mx-auto flex max-w-6xl flex-col px-6 py-4 text-[0.72rem] uppercase tracking-curator text-black/72">
                ${navItems
                  .map((item) => {
                    const isCurrent =
                      route === item.route || (item.route === "/gallery" && route.startsWith("/exhibit/"));

                    return `
                      <button
                        class="mobile-nav-link"
                        ${isCurrent ? 'aria-current="page"' : ""}
                        data-route="${item.route}"
                        type="button"
                      >
                        ${item.label}
                      </button>
                    `;
                  })
                  .join("")}
              </nav>
            </div>
          `
          : ""
      }
    </header>
  `;
}

function renderFooter() {
  return `
    <footer class="mt-24 border-t border-black/5">
      <div class="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-black/65 md:flex-row md:items-center md:justify-between md:px-10">
        <div class="flex flex-wrap gap-5">
          ${navItems
            .map(
              (item) => `
                <button class="transition hover:text-olive" data-route="${item.route}" type="button">
                  ${item.label}
                </button>
              `
            )
            .join("")}
        </div>
        <p>© Bryce Peterson</p>
      </div>
    </footer>
  `;
}

function renderHomePage() {
  return `
    <main class="page-enter">
      <section class="flex min-h-screen items-center">
        <div class="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-[1.05fr_0.95fr] md:px-10">
          <div class="reveal flex flex-col justify-center" data-reveal>
            <p class="mb-6 text-[0.72rem] uppercase tracking-curator text-olive">Museum of Thought</p>
            <h1 class="max-w-xl font-serif text-6xl leading-[0.95] md:text-8xl">Bryce Peterson</h1>
            <p class="mt-6 max-w-lg text-lg leading-8 text-black/68 md:text-xl">
              Strategist. Storyteller. Builder of ideas that help brands feel more human, resonant, and necessary.
            </p>
            <button class="mt-10 w-fit text-sm uppercase tracking-curator text-olive transition duration-700 hover:scale-[1.03]" data-scroll-target="featured-exhibits" type="button">
              Enter the Gallery →
            </button>
          </div>

          <div class="reveal flex items-center justify-center md:justify-end" data-reveal style="--delay: 120ms">
            <div class="portrait-frame relative w-full max-w-md md:translate-y-8">
              <div class="absolute left-6 top-6 z-10 max-w-[11rem] text-[0.72rem] uppercase tracking-curator text-black/45">
                Portrait Image Placeholder
              </div>
              <div class="portrait-orb"></div>
              <div class="absolute bottom-8 left-8 max-w-[10rem] text-sm text-black/55">
                Replace this panel with a clean professional portrait when ready.
              </div>
            </div>
          </div>
        </div>
      </section>

      ${sectionWrapper(
        `
          <div class="grid gap-6">
            ${exhibits
              .map(
                (exhibit, index) => `
                  <div class="reveal" data-reveal style="--delay: ${index * 80}ms">
                    ${exhibitCard(exhibit)}
                  </div>
                `
              )
              .join("")}
          </div>
        `,
        { id: "featured-exhibits", eyebrow: "Featured Exhibits", className: "py-8 md:py-16" }
      )}

      ${sectionWrapper(
        `
          <div class="reveal" data-reveal>
            <p class="text-lg leading-9 text-black/72 md:text-xl">
              I’m drawn to the moment when strategy stops feeling abstract and begins to clarify something deeply human.
              My best work lives at that intersection: thoughtful positioning, editorial storytelling, and ideas that give
              people a clearer way to see themselves in a brand.
            </p>
          </div>
        `,
        { eyebrow: "Curator’s Note", title: "Curator’s Note", narrow: true, className: "py-24" }
      )}
    </main>
  `;
}

function renderGalleryPage() {
  return `
    <main class="page-enter">
      ${sectionWrapper(
        `
          <div class="mb-12 max-w-2xl text-lg leading-8 text-black/65">
            Each exhibit frames a strategic challenge as a human question, then traces the thinking that turned complexity
            into clarity.
          </div>
          <div class="grid gap-6 md:grid-cols-2">
            ${exhibits
              .map(
                (exhibit, index) => `
                  <div class="reveal" data-reveal style="--delay: ${index * 90}ms">
                    ${exhibitCard(exhibit, true)}
                  </div>
                `
              )
              .join("")}
          </div>
        `,
        { eyebrow: "Gallery", title: "The Collection", className: "py-20 md:py-28" }
      )}
    </main>
  `;
}

function renderExhibitPage(exhibit) {
  const currentIndex = exhibits.findIndex((item) => item.slug === exhibit.slug);
  const previousExhibit = exhibits[(currentIndex - 1 + exhibits.length) % exhibits.length];
  const nextExhibit = exhibits[(currentIndex + 1) % exhibits.length];

  return `
    <main class="page-enter">
      ${sectionWrapper(
        `
          <div class="reveal max-w-4xl" data-reveal>
            <p class="mb-6 text-[0.72rem] uppercase tracking-curator text-olive">Title Wall</p>
            <h1 class="font-serif text-5xl leading-tight md:text-7xl">${exhibit.title}</h1>
            <p class="mt-6 text-base text-black/58">${exhibit.brand} | ${exhibit.year}</p>
          </div>
        `,
        { className: "py-20 md:py-28" }
      )}

      ${sectionWrapper(
        `
          <div class="reveal" data-reveal>
            <p class="text-lg leading-9 text-black/72">${exhibit.context}</p>
          </div>
        `,
        { title: "Context", narrow: true, className: "py-8 md:py-12" }
      )}

      ${sectionWrapper(
        `
          <div class="reveal accent-panel p-8 md:p-10" data-reveal>
            <p class="font-serif text-3xl leading-tight md:text-4xl">${exhibit.insight}</p>
          </div>
        `,
        { title: "Insight", narrow: true, className: "py-8 md:py-12" }
      )}

      ${sectionWrapper(
        `
          <div class="reveal" data-reveal>
            <p class="text-lg leading-9 text-black/72">${exhibit.idea}</p>
          </div>
        `,
        { title: "The Idea", narrow: true, className: "py-8 md:py-12" }
      )}

      ${sectionWrapper(
        `
          <div class="placeholder-grid">
            ${exhibit.execution
              .map(
                (item, index) => `
                  <div class="reveal space-y-4" data-reveal style="--delay: ${index * 90}ms">
                    <div class="placeholder-tile flex items-end p-6">
                      <span class="text-[0.72rem] uppercase tracking-curator text-black/45">${item.label}</span>
                    </div>
                    <p class="max-w-sm text-sm leading-7 text-black/60">${item.caption}</p>
                  </div>
                `
              )
              .join("")}
          </div>
        `,
        { title: "Execution", className: "py-8 md:py-12" }
      )}

      ${sectionWrapper(
        `
          <div class="reveal" data-reveal>
            <p class="text-lg leading-9 text-black/72">${exhibit.reflection}</p>
          </div>
        `,
        { title: "Reflection", narrow: true, className: "py-8 md:py-16" }
      )}

      ${sectionWrapper(
        `
          <div class="reveal flex flex-col gap-5 border-t border-black/10 pt-8 text-sm uppercase tracking-curator text-olive md:flex-row md:items-center md:justify-between" data-reveal>
            <button class="text-left transition duration-700 hover:scale-[1.02]" data-route="/gallery" type="button">
              ← Back to Gallery
            </button>
            <div class="flex flex-col gap-5 md:flex-row md:gap-10">
              <button class="text-left transition duration-700 hover:scale-[1.02]" data-route="/exhibit/${previousExhibit.slug}" type="button">
                Previous Exhibit
              </button>
              <button class="text-left transition duration-700 hover:scale-[1.02]" data-route="/exhibit/${nextExhibit.slug}" type="button">
                Next Exhibit →
              </button>
            </div>
          </div>
        `,
        { className: "py-8 md:py-16" }
      )}
    </main>
  `;
}

function renderArtistStatementPage() {
  return `
    <main class="page-enter">
      ${sectionWrapper(
        `
          <div class="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
            <div class="reveal" data-reveal>
              <div class="portrait-frame min-h-[360px]">
                <div class="absolute left-6 top-6 z-10 text-[0.72rem] uppercase tracking-curator text-black/45">
                  Optional Portrait
                </div>
                <div class="portrait-orb"></div>
              </div>
            </div>
            <div class="space-y-16">
              <div class="reveal" data-reveal style="--delay: 80ms">
                <p class="text-lg leading-9 text-black/72">
                  I’m Bryce Peterson, a strategist and storyteller interested in the ideas beneath behavior, culture, and
                  brand meaning. I build narratives that do more than explain what something is. They clarify why it matters.
                </p>
              </div>
              <div class="reveal" data-reveal style="--delay: 140ms">
                <h2 class="mb-4 font-serif text-3xl">Philosophy</h2>
                <p class="text-lg leading-9 text-black/72">
                  I believe strategy should feel like a lens, not a lecture. The most effective work creates resonance by
                  naming a tension people already feel and offering a more meaningful way forward through story, tone, and design.
                </p>
              </div>
              <div class="reveal" data-reveal style="--delay: 200ms">
                <h2 class="mb-4 font-serif text-3xl">Vision</h2>
                <p class="text-lg leading-9 text-black/72">
                  Long term, I want to build work that sits at the intersection of cultural insight, editorial craft, and
                  lasting brand systems. I’m interested in creating ideas with elegance, usefulness, and staying power.
                </p>
              </div>
            </div>
          </div>
        `,
        { eyebrow: "Artist Statement", title: "Artist Statement", className: "py-20 md:py-28" }
      )}
    </main>
  `;
}

function renderInquiriesPage() {
  return `
    <main class="page-enter">
      ${sectionWrapper(
        `
          <div class="reveal space-y-10" data-reveal>
            <p class="max-w-2xl text-lg leading-9 text-black/72">
              If you're building something that matters, I'd love to help.
            </p>

            <div class="space-y-3 text-base text-black/68">
              <p>Email: bryce@example.com</p>
            </div>

            <form class="space-y-6 pt-6">
              <input class="contact-input" type="text" name="name" placeholder="Name" />
              <input class="contact-input" type="email" name="email" placeholder="Email" />
              <textarea class="contact-input min-h-[140px] resize-none" name="message" placeholder="Message"></textarea>
              <button type="submit" class="pt-4 text-sm uppercase tracking-curator text-olive transition duration-700 hover:scale-[1.03]">
                Send Inquiry →
              </button>
            </form>
          </div>
        `,
        { eyebrow: "Inquiries", title: "Inquiries", narrow: true, className: "py-20 md:py-28" }
      )}
    </main>
  `;
}

function renderNotFoundPage() {
  return `
    <main class="page-enter">
      ${sectionWrapper(
        `
          <div class="space-y-6">
            <p class="text-lg leading-9 text-black/68">
              This exhibit does not exist yet, but the gallery is still open.
            </p>
            <button class="text-sm uppercase tracking-curator text-olive" data-route="/gallery" type="button">
              Return to Gallery →
            </button>
          </div>
        `,
        { title: "Exhibit Not Found", narrow: true, className: "py-24 md:py-32" }
      )}
    </main>
  `;
}

function renderPage(route) {
  if (route === "/gallery") {
    return renderGalleryPage();
  }

  if (route === "/artist-statement") {
    return renderArtistStatementPage();
  }

  if (route === "/inquiries") {
    return renderInquiriesPage();
  }

  if (route.startsWith("/exhibit/")) {
    const slug = route.replace("/exhibit/", "");
    const exhibit = exhibits.find((item) => item.slug === slug);
    return exhibit ? renderExhibitPage(exhibit) : renderNotFoundPage();
  }

  return renderHomePage();
}

function setupRevealAnimations() {
  const nodes = document.querySelectorAll("[data-reveal]");

  if (!("IntersectionObserver" in window)) {
    nodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  nodes.forEach((node) => observer.observe(node));
}

function renderApp() {
  const route = getRouteFromHash();

  root.innerHTML = `
    <div class="app-shell min-h-screen">
      ${renderNavbar(route)}
      ${renderPage(route)}
      ${renderFooter()}
    </div>
  `;

  root.querySelectorAll("[data-route]").forEach((button) => {
    button.addEventListener("click", () => navigate(button.dataset.route));
  });

  const menuToggle = root.querySelector("[data-menu-toggle]");
  if (menuToggle) {
    menuToggle.addEventListener("click", toggleMobileMenu);
  }

  root.querySelectorAll("[data-scroll-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.scrollTarget);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  const form = root.querySelector("form");
  if (form) {
    form.addEventListener("submit", (event) => event.preventDefault());
  }

  setupRevealAnimations();
}

window.addEventListener("hashchange", () => {
  renderApp();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderApp();
