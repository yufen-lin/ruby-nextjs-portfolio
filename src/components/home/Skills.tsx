import Image from "next/image";
import { CodeXml } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const skillsData = [
  {
    category: "Web Application",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "TypeScript", description: "Learning" },
      { name: "ReactJs" },
      { name: "NextJs", description: "Learning" },
      { name: "TailwindCSS", description: "Learning" },
    ],
  },
  {
    category: "Other",
    skills: [{ name: "Git" }, { name: "English", description: "TOEIC 815" }],
  },
];

function SkillItem({
  name,
  description,
}: {
  name: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={`/icon/${name.toLowerCase()}.png`}
        alt="react-logo"
        width={50}
        height={50}
      />
      <div className="font-semibol mt-2 text-sm">{name}</div>
      {description && (
        <div className="text-sm font-semibold text-gray-400">
          ({description})
        </div>
      )}
    </div>
  );
}

export default function Skills() {
  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-xl font-semibold">
          <CodeXml />
          <span>Skills</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-4">
        {skillsData.map((item) => (
          <Card
            key={item.category}
            className="flex-grow bg-slate-100/50 dark:bg-slate-900/50"
          >
            <CardHeader>
              <CardTitle className="text-lg capitalize">
                {item.category}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-6">
              {item.skills.map((skill) => (
                <SkillItem
                  key={skill.name}
                  name={skill.name}
                  description={skill.description}
                />
              ))}
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}
