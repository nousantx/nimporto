interface ProjectProps {
  title: string;
  desc?: string;
  thumb?: string;
  live?: string;
  github?: string;
  design?: string;
  tags?: string[];
}

export const projects: ProjectProps[] = [
  {
    title: "TenoxUI CSS Framework",
    desc: "An utility-first CSS framework for web development, maintained by myself.",
    thumb:
      "https://repository-images.githubusercontent.com/726043678/0c04e550-aebf-41d5-a0c6-ff594d15cdea",
    tags: ["open-source", "framework", "typescript", "css"],
    github: "https://github.com/tenoxui/css",
  },
  {
    title: "tenoxui/css documentation",
    desc: "Complete documentation of TenoxUI CSS Framework.",
    thumb: "./img/tenoxui.jpeg",
    tags: ["docusaurus", "blog", "docs", "reactjs"],
    live: "https://tenoxui.web.app",
    github: "https://github.com/nousantx/tenoxui-website",
  },
  {
    title: "Cliff UI Components Library",
    desc: "Collection of react components built with TenoxUI CSS Framework.",
    thumb: "./img/cliffui.jpeg",
    tags: ["typescript", "open-source", "react"],
    live: "https://cliffui.web.app",
    github: "https://github.com/nousantx/Cliff-UI",
  },
  {
    title: "TodoList App",
    desc: "Every programmer must have project like this.",
    thumb: "./img/todolist_project.jpg",
    tags: ["docusaurus", "blog", "docs", "reactjs"],
    live: "https://tenoxui.web.app",
    github: "https://github.com/nousantx/tenoxui-website",
  },
  {
    title: "Ramadhan 1445H",
    desc: "Fun project, Ramadhan landing page, schedule, and more.",
    thumb: "./img/ramadhan.jpeg",
    tags: ["html/css", "landing-page"],
    live: "https://nousantx.github.io/Ramadhan-1445H/",
    github: "https://github.com/nousantx/Ramadhan-1445H",
  },
  {
    title: "tenk7css",
    desc: "My first CSS framework",
    github: "https://github.com/nousantx/tnk7css",
  },
  {
    title: "NFTs Landing Page Design",
    desc: "A hero section design for NFTs website. Minimalize anc clean design.",
    tags: ["design", "ui/ux", "landing-page"],
    thumb:
      "https://cdn.dribbble.com/userupload/12755855/file/original-dd8cb738e2b18516f41c41add4be1fb3.png?resize=1024x560",
    design: "https://dribbble.com/shots/23539932-NFTs-simple-Homepage-design",
  },
  {
    title: "NFTs Landing Page Design",
    desc: "A hero section design for NFTs website. Minimalize anc clean design.",
    tags: ["design", "ui/ux", "landing-page"],
    thumb:
      "https://cdn.dribbble.com/userupload/12671265/file/original-170d34a82ee6a020aa3b93af6a1299d4.png?crop=0x0-1366x1024&resize=400x300&vertical=center",
    live: "https://nousantx.github.io/tenoxui-pages/design-day3",
    design: "https://dribbble.com/shots/23539932-NFTs-simple-Homepage-design",
  },
];
