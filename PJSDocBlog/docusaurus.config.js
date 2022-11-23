// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */

const config = {
  title: "Patrick John Stevens",
  tagline: "Docs Hub",
  url: "https://patrickjohnstevens.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/Patrick-John-Stevens_logo_lightbulb.svg",
  organizationName: "Patrick John Stevens",
  projectName: "Docs Hub",

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
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/patrickjohnstevens/docublog/tree/main/PJSDocBlog",
          showLastUpdateAuthor: true,
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
            label: "Docs Hub",
          },
          //{ to: "/blog", label: "Blog", position: "left" },
          // {
          //   href: "https://www.linkedin.com/in/patrickjohnstevens/",
          //   label: "LinkedIn",
          //   position: "right",
          // },
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
      //   apiKey: "651420d53bdf2d24b6719c6777dc69a4",
      //   indexName: "codewars-docs",
      //   appId: "2O5VWTLFC8",
      //   contextualSearch: false,
      // },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs Hub",
            items: [
              {
                label: "Home",
                to: "/",
              },
              {
                label: "Docs Hub",
                to: "/docs/",
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
                label: "Resume",
                href: "/docs/about/patrick-john-stevens-resume",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} | Made with &#10084;&#65039; by Patrick John Stevens | Learner. Creator. Teacher. Developer. | Here To Serve | Omaha, NE, USA`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
