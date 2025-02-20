"use client";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TextTyping = () => {
  return (
    <TypeAnimation
      sequence={[
        "Bringing ideas to life,",
        1000,
        "Bringing ideas to life, \n one line of code at a time.",
      ]}
      wrapper="span"
      speed={20}
      repeat={0}
      className="xs:text-4xl inline-block whitespace-pre-line text-center font-gaegu text-3xl font-semibold lg:whitespace-normal lg:text-[42px] xl:text-5xl"
    />
  );
};

export default function Hero() {
  return (
    <section className="xs:px-10 flex flex-col items-center px-6 py-8">
      <div className="flex flex-col items-center">
        <div className="mt-3 flex items-center gap-2 rounded-md border px-3 py-1 dark:border-slate-700 dark:bg-slate-800 dark:text-white md:mt-0">
          <div className="size-2.5 rounded-full bg-green-500"></div>
          <div className="text-base font-semibold md:text-lg">
            Looking for new job opportunities
          </div>
        </div>
        <Image
          src="/images/memoji-ruby.png"
          alt="Ruby's memoji"
          width={480}
          height={480}
          className="my-1 h-[200px] w-[200px] md:my-4 md:h-[250px] md:w-[250px]"
          priority
        />
      </div>

      <h1>
        <TextTyping />
        <span className="sr-only">
          Bringing ideas to life, one line of code at a time.
        </span>
      </h1>

      <div className="xs:text-xl flex w-full flex-col gap-4 py-4 text-center text-lg font-medium text-gray-700 dark:text-gray-400 sm:max-w-lg md:max-w-2xl lg:max-w-3xl lg:py-6 lg:text-2xl xl:max-w-2xl xl:gap-6 xl:text-2xl">
        <p>
          Hey! I’m Ruby, a{" "}
          <span className="font-bold text-yellow-600">frontend engineer</span>{" "}
          with 2+ years of React.js experience, crafting interfaces that are
          both interactive and functional.
        </p>
        <p>
          For me, development is all about{" "}
          <span className="font-bold text-yellow-600">
            continuous exploration
          </span>
          — I love experimenting, learning, and tackling challenges to create
          better experiences.
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <Button className="text-md rounded-3xl border p-6 font-semibold dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-900/10">
          <span>Download Resume</span>
          <ArrowDownToLine />
        </Button>
        <Button className="text-md rounded-3xl border border-gray-200 bg-white p-6 font-semibold text-slate-900 hover:bg-gray-100 dark:hover:bg-gray-200">
          <Link href="#contact" className="flex gap-2">
            <div className="animate-wiggle">👋🏻</div>
            Contact Me
          </Link>
        </Button>
      </div>
    </section>
  );
}
