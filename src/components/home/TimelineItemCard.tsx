import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface TimelineItemCardProps {
  period: string;
  name: string;
  title: string;
  logoSrc: string;
  description: string;
  type: string;
}

export default function TimelineItemCard({
  period,
  name,
  title,
  logoSrc,
  description,
  type,
}: TimelineItemCardProps) {
  return (
    <div>
      <p className="mb-2 text-sm text-gray-500 lg:hidden">{period}</p>
      <Card className="bg-slate-100/50 dark:bg-slate-900/50">
        <CardContent className="px-4 py-3">
          {/* Mobile (< 768px) */}
          <div className="block md:hidden">
            <div className="flex w-full items-center gap-3">
              <Image
                src={logoSrc}
                alt={`${name} logo`}
                width={80}
                height={80}
                className="h-auto w-[55px] rounded-md sm:w-[65px]"
                unoptimized
              />
              <div>
                <p className="text-sm font-semibold sm:text-lg">{title}</p>
                <p className="text-sm text-gray-500 sm:text-lg">{name}</p>
              </div>
            </div>

            <div className="flex-grow">
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 sm:text-base">
                {description}
              </p>
            </div>
          </div>

          {/* Laptop / Desktop (>= 768px) */}
          <div className="hidden md:flex md:w-full md:flex-row md:items-center md:gap-4">
            <Image
              src={logoSrc}
              alt={`${name} logo`}
              width={80}
              height={80}
              className="rounded-md md:h-auto md:w-[80px]"
              unoptimized
            />

            <div className="flex-grow">
              <div className="flex flex-col justify-start lg:flex-row-reverse lg:justify-between">
                <p className="hidden text-sm text-gray-400 dark:text-gray-600 lg:block">
                  {period}
                </p>
                <p className="text-base font-semibold md:text-lg">
                  {type === "education" ? title : `${title} - ${name}`}
                </p>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 md:text-base">
                {type === "education" ? name : description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
