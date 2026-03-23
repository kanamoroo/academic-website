// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/academic-website/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "A list of peer-reviewed journal articles, conference proceedings, and datasets. (Reverse chronological order)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/academic-website/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Academic Curriculum Vitae of Kana Morokuma, focusing on galaxy evolution and radio astronomy.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/academic-website/cv/";
          },
        },{
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
