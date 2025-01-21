///TODO MOVE TO ENV

import type { SocialObjects } from "./lib/types";

export const SITE = {
  website: "https://laravelmail.com", // replace this with your deployed domain
  author: "Stefan Bogdanel",
  desc: "Discover ",
  title: "Laravel Mail",
  ogImage: "og-image.jpg",
  repo: "https://github.com/laravelcompany/laravelmail.com",
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-GB"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const menu_items: { title: string; href: string }[] = [
  {
    title: "Home",
    href: "/",
  },
];

// Just works with top-level folders and files. For files, don't add extension as it looks for the slug, and not the file name.
export const side_nav_menu_order: string[] = [
  "getting-started/instalation",
  "guides",
  "guides/pages",
  "guides/table-of-contents",
  "guides/sidebar-navigation",
  "custom-components",
  "reference",
];

// Don't delete anything. You can use 'true' or 'false'.
// These are global settings
export const docconfig = {
  hide_table_of_contents: false,
  hide_breadcrumbs: true,
  hide_side_navigations: false,
  hide_datetime: true,
  hide_time: true,
  hide_search: false,
  hide_repo_button: false,
  hide_author: true,
};

// Set your social. It will appear in footer. Don't change the `name` value.
export const Socials: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/laravelcompany/",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://github.com/laravelcompany/",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },

  {
    name: "LinkedIn",
    href: "https://github.com/laravelcompany/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:stefan@izdrail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://github.com/activistcoer/",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },

];