import { ReactNode } from "react";

export default function TimelineNode({ content }: { content: ReactNode }) {
  return (
    <div className="flex gap-x-3">
      <div className="relative after:absolute after:bottom-0 after:start-3.5 after:top-7 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 last:after:hidden">
        <div className="relative z-10 flex size-7 items-center justify-center">
          <div className="size-2 rounded-full bg-gray-400"></div>
        </div>
      </div>
      <div className="grow pb-6 pt-0.5">{content}</div>
    </div>
  );
}
