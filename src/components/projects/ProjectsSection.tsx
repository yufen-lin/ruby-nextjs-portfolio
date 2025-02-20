import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    title: "Ruby's Portfolio",
    type: "Personal Project",
    imgSrc: "/project-images/ruby-portfolio.png",
    description:
      "A cozy little corner on the web, built with Next.js, TypeScript, Tailwind CSS, and a whole lot of love 💖. It’s all about me — my skills, experiences, and projects. Feel free to explore and say hi 👋🏻.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vercel"],
    sourceCodeLink: "https://github.com/yufen-lin/ruby-nextjs-portfolio",
    liveDemoLink: "https://ruby-nextjs-portfolio.vercel.app/",
  },
  {
    title: "Internal GenAI platform",
    type: "Work Project",
    imgSrc: "/project-images/genai-project.png",
    description:
      "An internal GenAI platform, similar to ChatGPT, that allows users to import personal, company, or external knowledge for conversational Q&A. The platform also provides knowledge management features for data and permission control.",
    techs: ["React.js", "TypeScript", "Ant Design"],
  },
  {
    title: "Internal Digital Lottery Platform",
    type: "Work Project",
    imgSrc: "/project-images/lottery-project.png",
    description:
      "Developed a platform for the Welfare Committee, featuring a control panel for lottery animations and handles lottery-related data management. Users can easily import or create data through a simple interface, Streamlining the lottery process and improving event interactivity.",
    techs: ["React.js", "Ant Design"],
  },
  {
    title: "Digital Pathology Platform",
    type: "Work Project",
    imgSrc: "/project-images/pathology-project.png",
    description:
      "Collaborated with Kaohsiung Veterans General Hospital to create the OWL Digital Pathology Platform, realizing the digitalization of pathology.",
    techs: ["React.js", "Ant Design"],
  },
  {
    title: "Rural Life",
    type: "Personal Project",
    imgSrc: "/project-images/rural-life-project.png",
    description:
      "This website shares rural stories, offers hands-on experiences, and highlights recommended agricultural products, helping users connect with and support rural life.",
    techs: ["HTML", "Bootstrap 5", "JavaScript", "RWD"],
    sourceCodeLink: "https://github.com/yufen-lin/Rural-Life-Project",
    liveDemoLink: "https://yufen-lin.github.io/Rural-Life-Project/index.html",
  },
  {
    title: "Live Photos",
    type: "Personal Project",
    imgSrc: "/project-images/live-photos-project.png",
    description:
      "Used Bootstrap 5 to implement the layout according to the design mockup, and customized the Bootstrap 5 source code with Sass to achieve high levels of customization. (The design mockup was provided by Hexschool.)",
    techs: ["HTML", "SCSS", "Bootstrap 5", "RWD"],
    sourceCodeLink: "https://github.com/yufen-lin/hexschool-bootstrap5-project",
    liveDemoLink: "https://yufen-lin.github.io/hexschool-bootstrap5-project/",
  },
];

export default function ProjectsSection() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="section-title mb-10">Projects</h2>

      <div className="flex w-full flex-col flex-wrap justify-center gap-5 px-4 md:flex-row lg:w-full xl:gap-6">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
