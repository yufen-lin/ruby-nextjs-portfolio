import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface TimelineItemCardProps {
  period: string;
  name: string;
  title: string;
  logoSrc: string;
  description: string;
}

export default function TimelineItemCard({
  period,
  name,
  title,
  logoSrc,
  description,
}: TimelineItemCardProps) {
  return (
    <Card className="bg-slate-100/50 dark:bg-slate-900/50">
      <CardContent className="flex items-center gap-5 px-4 py-3">
        <Image
          src={logoSrc}
          alt={`${name} logo`}
          width={80}
          height={80}
          style={{ width: 80, height: "auto" }}
          className="rounded-md"
          unoptimized
        />
        <div className="flex-grow">
          <div className="flex flex-col justify-between md:flex-row-reverse">
            <p className="text-gray-400 dark:text-gray-600">{period}</p>
            <p className="text-lg font-semibold">
              {title ? `${title} - ${name}` : name}
            </p>
          </div>
          <p className="text-slate-600 dark:text-slate-400">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
