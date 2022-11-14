// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Patrick John Stevens",
  tagline: "Open Source Knowledge Hub",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/Patrick-John-Stevens_logo_lightbulb.svg",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "patrickjohnstevens", // Usually your GitHub org/user name.
  projectName: "docublog", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
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
        },
        items: [
          {
            type: "doc",
            docId: "introduction",
            position: "left",
            label: "Knowledge Hub",
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
      footer: {
        style: "dark",
        links: [
          {
            title: "Open Source Knowledge Hub",
            items: [
              {
                label: "Home",
                to: "/",
              },
              {
                label: "Knowledge Hub",
                to: "/docs/introduction",
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
            title: "Code",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/patrickjohnstevens/docublog",
              },
              {
                label: "CodePen",
                href: "https://codepen.io/patrickjohnstevens",
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
