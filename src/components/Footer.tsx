export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mb-6 flex flex-wrap items-center justify-center gap-1">
      <span>© {currentYear} Ruby’s Portfolio |</span>
      <span>🐻 Wrapping you in a virtual hug — see you next time!</span>
    </footer>
  );
}
