// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */

const config = {
  title: "Patrick John Stevens",
  tagline: "Here To Serve",
  url: "https://patrickjohnstevens.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/Patrick-John-Stevens_logo_lightbulb.svg",
  organizationName: "Patrick John Stevens",
  projectName: "docublog",

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "static/fonts/Hubot-Sans.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "static/fonts/Mono-Sans.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: "anonymous",
      },
    },
  ],

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/patrickjohnstevens/docublog/tree/main/PJSDocBlog",
          showLastUpdateAuthor: true,
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/patrickjohnstevens/docublog/tree/main/PJSDocBlog",
          postsPerPage: 10,
          truncateMarker: /<!--\s*(truncate)\s*-->/,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: {
          trackingID: "G-ZL7C5QGC5Q",
          anonymizeIP: true,
        },
        gtag: {
          trackingID: "G-ZL7C5QGC5Q",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Patrick John Stevens",
        logo: {
          alt: "Patrick John Stevens Lightbulb Logo",
          src: "img/Patrick-John-Stevens_logo_lightbulb.svg",
          href: "/",
        },
        items: [
          {
            type: "doc",
            docId: "introduction",
            position: "left",
            label: "Docs",
          },

          {
            to: "/blog",
            label: "Blog",
            position: "left",
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      // algolia: {
      //   // Search only API key
      //   apiKey: "a722d59a155a5f994928c60833817f76",
      //   indexName: "pjs-docs",
      //   appId: "560J0EESMA",
      //   contextualSearch: false,
      // },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs Hub",
            items: [
              {
                label: "Docs",
                to: "/",
              },
              {
                label: "Blog",
                to: "/blog/",
              },
              {
                label: "Public Roadmap",
                href: "https://github.com/users/patrickjohnstevens/projects/3",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/iPatrickStevens",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/patrickjohnstevens/",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/@patrickjohnstevens",
              },
            ],
          },
          {
            title: "Code & Qualifications",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/patrickjohnstevens/docublog",
              },
              {
                label: "CodePen",
                href: "https://codepen.io/patrickjohnstevens",
              },
              {
                label: "PDF Resume",
                href: "https://drive.google.com/file/d/1C1Uo5JKnnZDJZeJBQMtc9QAkj3_MCAkg/view?usp=sharing",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} | Made with &#10084;&#65039; by &#128161; Patrick John Stevens | Learner. Creator. Teacher. Developer. | Here To Serve | Omaha, NE, USA`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      image: "img/Patrick-John-Stevens-Bitmoji-Website-Social-Card.jpg",
    }),
};

module.exports = config;
