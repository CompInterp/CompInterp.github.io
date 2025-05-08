// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-people",
          title: "people",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-resources",
          title: "resources",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resources/";
          },
        },{id: "books-compositional-interpretability",
          title: 'Compositional Interpretability',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/compinterp/";
            },},{id: "news-we-are-presenting-our-poster-at-colorai-aaai-2025",
          title: 'We are presenting our poster at CoLoRAI (AAAI 2025)!',
          description: "",
          section: "News",},{id: "news-we-have-a-website-now-sparkles",
          title: 'We have a website now! :sparkles:',
          description: "",
          section: "News",},{id: "projects-memetical-compositions",
          title: 'Memetical Compositions',
          description: "Why publish papers when you can compose memes?",
          section: "Projects",handler: () => {
              window.location.href = "/projects/memes/";
            },},{id: "projects-compositional-interpretability",
          title: 'Compositional Interpretability',
          description: "A WIP book-form introduction",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tutorial/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
