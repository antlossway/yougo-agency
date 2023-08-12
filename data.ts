export type postcardType = {
  slug: string;
  title: string;
  // content: string;
  excerpt: string;
  featuredImgUrl: string;
  category: number;
};

export const menuItems = [
  {
    name: "about us",
    url: "/about",
  },

  // {
  //   name: "country guide",
  //   list: [
  //     {
  //       title: "thailand",
  //       url: "/countries/thailand",
  //     },
  //     {
  //       title: "vietnam",
  //       url: "/countries/vietnam",
  //     },
  //   ],
  // },
  {
    name: "Thailand",
    url: "/countries/thailand",
  },
  {
    name: "articles",
    url: "/articles", //wordpress /posts
  },
];

export const footerMenuItems = [
  {
    name: "privacy policy",
    url: "privacy",
  },
  {
    name: "terms of use",
    url: "terms",
  },
];

export const heroSlider = [
  {
    id: 0,
    image: "/office.jpg",
    alt: "working space",
    line1: "you can choose",
    line2: "where you live",
    line3: "we are here to help you",
  },
  {
    id: 1,
    image: "/classroom.jpg",
    alt: "international school",
    subject: "education",
    line3: "high standard international school",
  },
  {
    id: 2,
    image: "/medical.jpg",
    alt: "international hospital",
    subject: "medical care",
    line3: "luxury medical experience at affordable price",
  },
  {
    id: 3,
    image: "/beach1.jpg",
    alt: "beach",
    subject: "weekend",
    line3: "Enjoy sun and beach at paradise on the earth",
  },
];
