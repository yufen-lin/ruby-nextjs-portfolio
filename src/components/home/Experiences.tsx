import { BriefcaseBusiness } from "lucide-react";
import TimelineItemCard from "./TimelineItemCard";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import TimelineNode from "./TimelineNode";

const workExperienceData = [
  {
    period: "Oct. 2021 － Jul. 2024",
    name: "Wistron Corporation",
    title: "Front end engineer",
    logoSrc: "/logo/wistron_logo.png",
    description:
      "Participated in the development of medical and internal systems, focusing on front-end development, UI implementation, and API integration while collaborating with PMs and backend engineers.",
    type: "work",
  },
  {
    period: "Sep. 2020 － Jan. 2021",
    name: "Reve Cafe",
    title: "Front of House Staff",
    logoSrc: "/logo/reve_cafe_logo.png",
    description:
      "Since I enjoy interacting with people, I chose to work as a service staff to explore different career paths. At the same time, I started learning web development and gradually realized how much I enjoyed coding. So, I decided to become a front-end engineer ✨.",
    type: "work",
  },
];

const PresentStatusNode = () => (
  <div className="text-lg font-semibold text-gray-400">
    🚀 Open to new adventures...
  </div>
);

export default function Experiences() {
  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-xl font-semibold">
          <BriefcaseBusiness />
          <span>Work Experiences</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <div className="my-2 first:mt-0">
            <p className="text-xs font-medium uppercase text-gray-500">
              Present
            </p>
          </div>

          <TimelineNode content={<PresentStatusNode />} />

          {workExperienceData.map((work) => (
            <TimelineNode
              key={work.title}
              content={
                <TimelineItemCard
                  period={work.period}
                  name={work.name}
                  title={work.title}
                  logoSrc={work.logoSrc}
                  description={work.description}
                  type={work.type}
                />
              }
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
