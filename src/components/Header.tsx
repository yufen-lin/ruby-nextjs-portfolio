import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-5">
      <Link
        href="/"
        className="hidden font-gaegu text-[32px] sm:block"
        aria-label="Home"
      >
        Ruby ◡̎
      </Link>
      <Navbar />
      <ThemeToggle />
    </header>
  );
}
