module.exports = {
  title: "coastside.lt wiki",
  tagline: "Coastside projekto sistemų aprašymai",
  url: "https://wiki.coastside.lt",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Coastsideroleplay-fivem", // Usually your GitHub org/user name.
  projectName: "wiki", // Usually your repo name.
  customFields: {
    ogImage: "img/logo.png",
  },
  themeConfig: {
    navbar: {
      title: "COASTSIDE.lt WIKI",
      logo: {
        alt: "Wiki logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs",
          activeBasePath: "docs",
          label: "Dokumentacija",
          position: "left",
        },
        {
          to: "blog",
          activeBasePath: "blog",
          label: "Gidai",
          position: "left",
        },
        {
          href: "https://coastside.lt/",
          label: "Coastside projekto puslapis",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Wiki",
          items: [
            {
              label: "Pildymo instrukcija",
              to: "docs/",
            },
            {
              label: "GitHub",
              href: "https://github.com/coastside-lt/wiki",
            },
          ],
        },
        {
          title: "Informacija apie projektą",
          items: [
            {
              label: "Prisijungimas į serverį",
              href: "https://fivem.coastside.lt/",
            },
            {
              label: "Oficialus discord serveris",
              href: "https://discord.coastside.lt",
            },
            {
              label: "Oficialus puslapis",
              href: "https://coastside.lt/",
            },
          ],
        },
        {
          title: "Kita",
          items: [
            {
              label: "Oficiali tema supergames.lt portale",
              href:
                "https://www.supergames.lt/topic/331621-coastsidelt-pakrant%C4%97s-gyvenimas/",
            },
          ],
        },
      ],
      copyright: `Visos teisės saugomos © ${new Date().getFullYear()} COASTSIDE.lt`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/coastside-lt/wiki/edit/master/docs/",
        },
        blog: {	
          showReadingTime: true,
          editUrl: "https://github.com/coastside-lt/wiki/edit/master/blog/",
          feedOptions: {
            language: 'lt'
          }
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};