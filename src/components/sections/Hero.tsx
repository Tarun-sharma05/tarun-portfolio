import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-80px)] flex flex-col justify-center max-w-[1280px] mx-auto px-6 py-20 relative">
      <div className="flex flex-col items-start gap-4 max-w-4xl">
        <p className="text-brand-accent uppercase tracking-widest font-semibold text-sm">
          Android Developer · Kotlin & Jetpack Compose
        </p>
        
        <h1 className="text-5xl md:text-[80px] font-bold text-brand-text-heading leading-[1.1]">
          Tarun Sharma
        </h1>
        
        <p className="text-xl md:text-2xl text-brand-text-body mt-4 max-w-2xl">
          I build clean, modern Android apps that feel right and work well.
        </p>
        
        <p className="text-base text-brand-text-body max-w-xl">
          Focused on native Android development, practical UI, and real-world apps that solve real problems.
        </p>
        
        <div className="flex flex-wrap items-center gap-4 mt-8">
          <Link 
            href="#projects" 
            className="bg-brand-accent text-brand-accent-dark px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors"
          >
            View My Work →
          </Link>
          <a 
            href="https://www.dropbox.com/scl/fi/6osbhyonvhqhrweo9w92x/Tarun-Sharma-resume-1.pdf?rlkey=grkd09wn8pzrbafi3ypbztk6j&st=kj04c1bg&dl=0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-brand-accent text-brand-accent px-8 py-3 rounded-full font-semibold hover:bg-brand-accent hover:text-brand-accent-dark transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
