export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-4 mb-6 flex flex-wrap items-center justify-center gap-1 text-center">
      <span>© {currentYear} Ruby’s Portfolio |</span>
      <span>🐻 Wrapping you in a virtual hug — see you next time!</span>
    </footer>
  );
}
