import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Experiences from "@/components/home/Experiences";
import Education from "@/components/home/Education";
import Skills from "@/components/home/Skills";

const tabItems = [
  { value: "experiences", label: "Experiences", component: <Experiences /> },
  { value: "education", label: "Education", component: <Education /> },
  { value: "skills", label: "Skills", component: <Skills /> },
];

export default function About() {
  return (
    <section id="about" className="flex flex-col items-center px-8 py-12">
      <h2 className="section-title">About Me</h2>

      <div className="flex w-full flex-col items-center">
        <Tabs
          defaultValue="experiences"
          className="flex w-full flex-col items-center"
        >
          <TabsList className="mb-6" aria-label="About Me Tabs">
            {tabItems.map((item) => (
              <TabsTrigger key={item.value} value={item.value}>
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabItems.map((item) => (
            <TabsContent
              key={item.value}
              value={item.value}
              className="w-full lg:max-w-[1000px]"
            >
              {item.component}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
