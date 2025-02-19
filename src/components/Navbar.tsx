import Link from "next/link";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/#about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/#contact",
  },
];

export default function Navbar() {
  return (
    <div className="fixed left-1/2 top-6 -translate-x-1/2 font-semibold">
      <nav
        className="flex gap-1 rounded-full border bg-white/10 p-0.5 backdrop-blur-md"
        aria-label="Main Navigation"
      >
        {menuItems.map((item) => (
          <Link key={item.name} href={item.href} className="nav-item">
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
