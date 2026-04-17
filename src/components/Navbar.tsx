import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b-[0.5px] border-brand-border bg-[#0A0F0D]/80 text-brand-text-body">
      <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-white tracking-widest uppercase"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          T
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#about" className="hover:text-brand-accent transition-colors">
            About
          </Link>
          <Link href="#projects" className="hover:text-brand-accent transition-colors">
            Projects
          </Link>
          <Link href="#services" className="hover:text-brand-accent transition-colors">
            Services
          </Link>
          <Link href="#process" className="hover:text-brand-accent transition-colors">
            Process
          </Link>
        </div>

        <a
          href="https://www.dropbox.com/scl/fi/6osbhyonvhqhrweo9w92x/Tarun-Sharma-resume-1.pdf?rlkey=grkd09wn8pzrbafi3ypbztk6j&st=kj04c1bg&dl=0"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-full font-semibold transition-all hover:brightness-110"
          style={{
            backgroundColor: "#3DDC84",
            color: "#0A0F0D",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
          }}
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
