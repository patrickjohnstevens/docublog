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

  // General scripts and head tags
  scripts: [
    // Snow.js script for Christmas season. See https://app.embed.im/
    // // String format.
    // "https://docusaurus.io/script.js",
    // // Object format.
    // {
    //   src: "https://app.embed.im/snow.js",
    //   defer: true,
    // },
  ],

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
          blogSidebarTitle: "All our posts",
          showReadingTime: true,
          editUrl:
            "https://github.com/patrickjohnstevens/docublog/tree/main/PJSDocBlog",
          postsPerPage: 5,
          truncateMarker: /<!--\s*(truncate)\s*-->/,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        // googleAnalytics: {
        //   trackingID: "G-ZL7C5QGC5Q",
        //   anonymizeIP: true,
        // },
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
        respectPrefersColorScheme: false,
      },
      algolia: {
        // Search only API key
        apiKey: "6d97ae2834e039fdbd3e556671a6d3dd",
        indexName: "patrickjohnstevens",
        appId: "U0QCG2L83F",
        contextualSearch: false,
        debug: false,
      },
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
              // {
              //   label: "Public Roadmap",
              //   href: "https://github.com/users/patrickjohnstevens/projects/3",
              // },
            ],
          },
          {
            title: "Social",
            items: [
              // {
              //   label: "Twitter",
              //   href: "https://twitter.com/iPatrickStevens",
              // },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/patrickjohnstevens/",
              },
              // {
              //   label: "YouTube",
              //   href: "https://www.youtube.com/@patrickjohnstevens",
              // },
            ],
          },
          {
            title: "Code & Qualifications",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/patrickjohnstevens/docublog",
              },
              // {
              //   label: "CodePen",
              //   href: "https://codepen.io/patrickjohnstevens",
              // },
              // {
              //   label: "Replit",
              //   href: "https://replit.com/@iPatrickStevens",
              // },
              {
                label: "PDF Resume",
                href: "https://drive.google.com/file/d/1exo8HwHtR2KoVHMb6LJxxk7B-9SFbmpJ/view?usp=sharing",
              },
              // {
              //   label: "MDX Resume",
              //   href: "/patrick-john-stevens-resume",
              // },
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
