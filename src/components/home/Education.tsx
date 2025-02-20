import { GraduationCap } from "lucide-react";
import TimelineItemCard from "./TimelineItemCard";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import TimelineNode from "./TimelineNode";

const educationData = [
  {
    period: "2016 - 2020",
    name: "Tamkang University",
    title: "Bachelor of Information Management",
    logoSrc: "/logo/tamkang_university_logo.png",
    description: "",
    type: "education",
  },
];

export default function Education() {
  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-xl font-semibold">
          <GraduationCap />
          <span>Education</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          {educationData.map((school) => (
            <TimelineNode
              key={school.title}
              content={
                <TimelineItemCard
                  period={school.period}
                  name={school.name}
                  title={school.title}
                  logoSrc={school.logoSrc}
                  description={school.description}
                  type={school.type}
                />
              }
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
