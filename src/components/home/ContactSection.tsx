import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {
  Mail,
  Phone,
  BriefcaseBusiness,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { Button } from "../ui/button";

interface JobDetailProps {
  Icon: React.ElementType;
  label: string;
  content: ReactNode;
}

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/yufen-lin/",
    icon: <FaLinkedin />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/yufen-lin",
    icon: <FaGithub />,
    label: "GitHub",
  },
];

function JobDetail({ Icon, label, content }: JobDetailProps) {
  return (
    <div className="flex items-center gap-3">
      <Icon />
      <div>
        {label}: {content}
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="xs:px-10 flex flex-col items-center px-6 py-12"
    >
      <h2 className="section-title">Contact Me</h2>

      <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-20">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center justify-center">
            <Image
              src="/images/ruby.png"
              alt="Ruby's avatar"
              width={1000}
              height={1000}
              className="h-[180px] w-[180px] rounded-full border-[3px] border-solid p-1"
            />
          </div>

          <div className="font-semibold">👩🏻‍💻 Ruby Lin</div>

          <Button className="rounded-full" variant="outline" asChild>
            <Link href="/projects" className="flex items-center gap-1">
              View Projects
              <ExternalLink />
            </Link>
          </Button>
        </div>

        <div className="flex flex-col gap-3 text-lg">
          <div className="xs:text-lg mb-2 flex flex-col gap-3 text-base">
            <div className="xs:text-xl text-lg font-semibold">
              Job Preferences
            </div>

            <div className="flex flex-col gap-1">
              <JobDetail
                Icon={BriefcaseBusiness}
                label="Position"
                content={
                  <>
                    <span className="mr-1 font-semibold text-yellow-600">
                      Frontend
                    </span>
                    Engineer (Full-time)
                  </>
                }
              />
              <JobDetail
                Icon={MapPin}
                label="Location"
                content="Kaohsiung, Taiwan / Remote"
              />
            </div>

            <p className="text-gray-500">
              For any other relevant roles, feel free to reach out for a
              discussion ☺︎
            </p>
          </div>

          <div className="xs:text-lg flex flex-col gap-1 text-base">
            <div className="flex gap-3">
              <Mail />
              <a
                href="mailto:ruby.yf.lin@gmail.com"
                className="hover:text-gray-400"
                aria-label="Send email to ruby.yf.lin@gmail.com"
              >
                ruby.yf.lin@gmail.com
              </a>
            </div>
            <div className="flex gap-3">
              <Phone />
              <span>+886 960761013</span>
            </div>
          </div>

          <div className="mt-4 flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-2xl transition-colors hover:text-gray-600"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
