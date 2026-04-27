import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-80px)] flex flex-col justify-center max-w-[1280px] mx-auto px-6 py-20 relative">
      <div className="flex flex-col items-start gap-4 max-w-4xl">
        <p
          className="uppercase tracking-widest font-semibold text-sm"
          style={{
            color: "#3DDC84",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          Android Developer · Kotlin &amp; Jetpack Compose
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
            className="px-8 py-3 rounded-full font-semibold hover:brightness-110 transition-all"
            style={{
              backgroundColor: "#3DDC84",
              color: "#0A0F0D",
              fontFamily: "'IBM Plex Sans', sans-serif",
            }}
          >
            View My Work →
          </Link>

        </div>
      </div>
    </section>
  );
}
