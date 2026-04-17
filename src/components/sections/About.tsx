const skills = [
  { category: "Languages", tags: ["Kotlin", "Java"] },
  { category: "Android Development", tags: ["Jetpack Compose", "Material 3", "MVVM", "Clean Architecture", "Room", "SQLite", "Coroutines", "Dagger Hilt", "Retrofit", "Gson", "Firebase"] },
  { category: "Tools & Platforms", tags: ["Android Studio", "Git", "GitHub"] },
  { category: "Also Familiar With", tags: ["Flask", "REST APIs", "JSON"] },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-alt-bg">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* About Column */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text-heading">About Me</h2>

          <div className="flex flex-col gap-5 text-brand-text-body text-lg leading-relaxed">
            <p>
              I&apos;m Tarun Sharma, an Android developer based in Jaipur, India, focused on building native mobile apps using Kotlin and Jetpack Compose.
            </p>
            <p>
              I care about writing code that&apos;s clean and maintainable — MVVM, Clean Architecture, and proper separation of concerns are defaults for me, not afterthoughts. I&apos;ve worked across projects involving authentication flows, local databases, REST API integration, and real-world product screens that users actually interact with.
            </p>
            <p>
              What drives me is building apps that feel good to use. Not just apps that run, but apps that are fast, intuitive, and don&apos;t get in the user&apos;s way. I&apos;m currently open to Android developer roles, freelance projects, and startup collaborations where I can contribute real work and keep growing.
            </p>
          </div>
        </div>

        {/* Skills Column */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text-heading">Skills</h2>

          <div className="flex flex-col gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="flex flex-col gap-3">
                <h3
                  className="text-xl font-semibold text-brand-text-heading pb-2"
                  style={{ borderBottom: "1px solid rgba(61, 220, 132, 0.15)" }}
                >
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3 mt-2">
                  {skillGroup.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        border: "1px solid rgba(61, 220, 132, 0.3)",
                        borderRadius: "4px",
                        background: "transparent",
                        color: "#3DDC84",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "11px",
                        padding: "3px 8px",
                        cursor: "default",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
