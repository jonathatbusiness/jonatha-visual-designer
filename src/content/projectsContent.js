const projects = [
  {
    id: 0,
    title: "project_0_title",
    media: "/portfolio/00_jonatha_website.webp",
    description: "project_0_description",
    detailedDescription: "project_0_detailed_description",
    showButton: "yes",
    showLink: "yes",
    link: "https://github.com/jonathatbusiness/wedding-invitation-git",
    sectionType: "webdesign",
  },
  {
    id: 1,
    title: "project_1_title",
    media: "/portfolio/01_wedding.webp",
    description: "project_1_description",
    detailedDescription: "project_1_detailed_description",
    showButton: "yes",
    showLink: "yes",
    link: "https://github.com/jonathatbusiness/wedding-invitation-git",
    sectionType: "webdesign",
  },
  {
    id: 2,
    title: "project_2_title",
    media: "/portfolio/02_jonatha_website_1.webp",
    description: "project_2_description",
    detailedDescription: "project_2_detailed_description",
    showButton: "yes",
    showLink: "yes",
    link: "https://github.com/jonathatbusiness/JonathaT-Portfolio-main",
    sectionType: "webdesign",
  },

  {
    id: 3,
    title: "project_3_title",
    media: "/portfolio/03_jonatha_website_2.webp",
    description: "project_3_description",
    detailedDescription: "project_3_detailed_description",
    showButton: "yes",
    showLink: "yes",
    link: "https://github.com/jonathatbusiness/JonathaT-Portfolio",
    sectionType: "webdesign",
  },
  {
    id: 4,
    title: "project_4_title",
    media: "/portfolio/04_jonatha_text_speech.webp",
    description: "project_4_description",
    detailedDescription: "project_4_detailed_description",
    showButton: "yes",
    showLink: "yes",
    link: "https://github.com/jonathatbusiness/web-text-to-speech",
    sectionType: "webdesign",
  },
  {
    id: 5,
    title: "project_5_title",
    media: "/portfolio/05_jonatha_birthday_invite.webp",
    description: "project_5_description",
    detailedDescription: "project_5_detailed_description",
    showButton: "yes",
    showLink: "yes",
    link: "https://github.com/jonathatbusiness/ConviteDavi",
    sectionType: "webdesign",
  },
  {
    id: 6,
    title: "project_6_title",
    media: "/portfolio/06_jonatha_plural_port.webp",
    description: "project_6_description",
    detailedDescription: "project_6_detailed_description",
    showButton: "yes",
    showLink: "yes",
    link: "https://github.com/jonathatbusiness/plural-cursos-palestras-online",
    sectionType: "webdesign",
  },
  {
    id: 7,
    title: "project_7_title",
    media: "https://www.youtube.com/embed/JHFsD6k5rcc",
    description: "project_7_description",
    detailedDescription: "project_7_detailed_description",
    showButton: "no",
    showLink: "no",
    link: "",
    sectionType: "video",
  },
  {
    id: 8,
    title: "project_8_title",
    media: "https://www.youtube.com/embed/7LTbuE3VbNM",
    description: "project_8_description",
    detailedDescription: "project_8_detailed_description",
    showButton: "no",
    showLink: "no",
    link: "",
    sectionType: "video",
  },
  {
    id: 9,
    title: "project_9_title",
    media: "https://www.youtube.com/embed/547FWYVfmdI",
    description: "project_9_description",
    detailedDescription: "project_9_detailed_description",
    showButton: "no",
    showLink: "no",
    link: "",
    sectionType: "video",
  },
  {
    id: 10,
    title: "project_10_title",
    media: "https://www.youtube.com/embed/ieSxSoGzWtU",
    description: "project_10_description",
    detailedDescription: "project_10_detailed_description",
    showButton: "no",
    showLink: "no",
    link: "",
    sectionType: "video",
  },
  {
    id: 11,
    title: "project_11_title",
    media: "https://www.youtube.com/embed/t5CuuIvzAHI",
    description: "project_11_description",
    detailedDescription: "project_11_detailed_description",
    showButton: "no",
    showLink: "no",
    link: "",
    sectionType: "video",
  },
  {
    id: 12,
    title: "project_12_title",
    media: "https://www.youtube.com/embed/9NSAla4SP8g",
    description: "project_12_description",
    detailedDescription: "project_12_detailed_description",
    showButton: "no",
    showLink: "no",
    link: "",
    sectionType: "video",
  },
  {
    id: 13,
    title: "project_13_title",
    media: "https://www.youtube.com/embed/8ZPJbiNavGA",
    description: "project_13_description",
    detailedDescription: "project_13_detailed_description",
    showButton: "no",
    showLink: "no",
    link: "",
    sectionType: "video",
  },
  {
    id: 14,
    title: "project_14_title",
    media: "https://www.youtube.com/embed/lX1JwrjutiI",
    description: "project_14_description",
    detailedDescription: "project_14_detailed_description",
    showButton: "no",
    showLink: "no",
    link: "",
    sectionType: "video",
  },
  {
    id: 15,
    title: "project_15_title",
    media: "https://www.youtube.com/embed/Rd1FPnQPGyI",
    description: "project_15_description",
    detailedDescription: "project_15_detailed_description",
    showButton: "no",
    showLink: "no",
    link: "",
    sectionType: "video",
  },
  {
    id: 16,
    title: "project_16_title",
    media: [
      "/portfolio/insta/01.webp",
      "/portfolio/insta/02.webp",
      "/portfolio/insta/03.webp",
      "/portfolio/insta/04.webp",
      "/portfolio/insta/05.webp",
      "/portfolio/insta/06.webp",
    ],
    description: "project_16_description",
    detailedDescription: "project_16_detailed_description",
    showButton: "no",
    showLink: "no",
    link: "",
    sectionType: "image",
  },
  {
    id: 17,
    title: "project_17_title",
    media: [
      "/portfolio/business/01.webp",
      "/portfolio/business/02.webp",
      "/portfolio/business/03.webp",
      "/portfolio/business/04.webp",
      "/portfolio/business/05.webp",
      "/portfolio/business/06.webp",
    ],
    description: "project_17_description",
    detailedDescription: "project_16_detailed_description",
    showButton: "no",
    showLink: "no",
    link: "",
    sectionType: "image",
  },
  {
    id: 18,
    title: "project_18_title",
    media: [
      "/portfolio/flyer/01.webp",
      "/portfolio/flyer/02.webp",
      "/portfolio/flyer/03.webp",
      "/portfolio/flyer/04.webp",
      "/portfolio/flyer/05.webp",
    ],
    description: "project_18_description",
    detailedDescription: "project_18_detailed_description",
    showButton: "no",
    showLink: "no",
    link: "",
    sectionType: "image",
  },
  {
    id: 19,
    title: "project_19_title",
    media: ["/portfolio/other/01.webp", "/portfolio/other/02.webp"],
    description: "project_19_description",
    detailedDescription: "project_19_detailed_description",
    showButton: "no",
    showLink: "no",
    link: "",
    sectionType: "image",
  },
];

export const getSectionTypes = () => {
  return [...new Set(projects.map((project) => project.sectionType))];
};

export default projects;
