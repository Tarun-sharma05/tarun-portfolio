export default function Footer() {
  return (
    <footer className="border-t-[0.5px] border-brand-border py-10 mt-20 text-brand-text-body">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© 2025 Tarun Sharma. Built with Precision.</p>
        <div className="flex items-center gap-6">
          <a
            href="https://mail.google.com/mail/?view=cm&to=tarundadhich05@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-accent transition-colors"
          >
            Email
          </a>
          <a
            href="https://github.com/Tarun-sharma05"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tarun-sharma-b1b20b244/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-accent transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
