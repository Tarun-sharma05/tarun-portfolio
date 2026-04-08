const projects = [
  {
    name: "Aethera",
    emoji: "🛍️",
    topBar: "#7C5CFC",
    badge: "E-Commerce · Android",
    tagline: "A Myntra-like clothing platform with full shopping flow",
    description: "Native Android shopping app with product browsing, cart, wishlist, authentication, and order management. Separate admin panel for product and order control.",
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "MVVM", "Material 3"],
    link: "https://github.com/Tarun-sharma05/Aethera-App",
    linkLabel: "View on GitHub →",
    extraBadge: null
  },
  {
    name: "Travenor",
    emoji: "✈️",
    topBar: "#33B8DB",
    badge: "Travel · Android",
    tagline: "Destination discovery and trip booking app",
    description: "A travel booking Android app for exploring and booking destinations. Clean UI built on Jetpack Compose with destination browsing and booking flows.",
    tags: ["Kotlin", "Jetpack Compose", "Retrofit", "MVVM"],
    link: "https://github.com/Tarun-sharma05/Travenor-App",
    linkLabel: "View on GitHub →",
    extraBadge: null
  },
  {
    name: "Pillport",
    emoji: "💊",
    topBar: "#38C795",
    badge: "Healthcare · Android",
    tagline: "Online pharmacy app for medicine browsing and ordering",
    description: "A pharma e-commerce Android app allowing users to search medicines, manage a cart, and place orders. Designed so non-technical users can navigate without friction.",
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "Room", "MVVM"],
    link: "https://github.com/Tarun-sharma05/Pillport-App",
    linkLabel: "View on GitHub →",
    extraBadge: null
  },
  {
    name: "BookNest",
    emoji: "📚",
    topBar: "#F5A623",
    badge: "Reading · Android",
    tagline: "A clean offline-first e-book reader app",
    description: "Native Android e-book app with a distraction-free reading interface, local storage via Room, reading progress tracking, and offline-first access.",
    tags: ["Kotlin", "Jetpack Compose", "Room", "MVVM", "Material 3"],
    link: "https://github.com/Tarun-sharma05/Book-Nest",
    linkLabel: "View on GitHub →",
    extraBadge: null
  },
  {
    name: "Netwin",
    emoji: "🎮",
    topBar: "#FF5566",
    badge: "E-Sports · Android",
    tagline: "Tournament hosting and management platform",
    description: "An Android platform for hosting and managing e-sport tournaments — bracket management, team registration, and live match tracking.",
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "MVVM"],
    link: "https://github.com/Tarun-sharma05/netwin-android",
    linkLabel: "View on GitHub →",
    extraBadge: null
  },
  {
    name: "Apna Aashiyana",
    emoji: "🏠",
    topBar: "#6680FF",
    badge: "Real Estate · Android",
    tagline: "Buy, sell, and rent properties — my first freelance delivery",
    description: "A real estate Android app for listing, browsing, and enquiring about properties. End-to-end freelance project built and delivered for a client.",
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "MVVM"],
    link: null,
    linkLabel: null,
    extraBadge: "FREELANCE"
  },
  {
    name: "KMP Calculator",
    emoji: "🧮",
    topBar: "#AAAACC",
    badge: "Utility · KMP",
    tagline: "Cross-platform calculator built with Kotlin Multiplatform",
    description: "A calculator app using Kotlin Multiplatform with shared business logic across platforms. Demonstrates KMP architecture with Compose Multiplatform UI.",
    tags: ["Kotlin", "KMP", "Compose Multiplatform"],
    link: null,
    linkLabel: null,
    extraBadge: "KMP"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-text-heading mb-12">Featured Android Apps</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-brand-card rounded-2xl overflow-hidden flex flex-col border border-brand-border hover:border-brand-accent transition-colors"
            >
              {/* Top Color Bar */}
              <div 
                className="h-2 w-full" 
                style={{ backgroundColor: project.topBar }} 
              />
              
              <div className="p-6 flex flex-col flex-grow">
                {/* Header Information */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl" role="img" aria-label={`${project.name} icon`}>{project.emoji}</span>
                    <h3 className="text-2xl font-bold text-brand-text-heading">{project.name}</h3>
                  </div>
                  {project.extraBadge && (
                    <span className="bg-brand-accent text-brand-accent-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {project.extraBadge}
                    </span>
                  )}
                </div>
                
                <span className="inline-block text-sm font-semibold text-brand-text-body bg-[#131318] w-fit px-3 py-1 rounded-md mb-4 border border-brand-border">
                  {project.badge}
                </span>

                <h4 className="text-lg font-medium text-brand-text-heading mb-3 line-clamp-2">
                  {project.tagline}
                </h4>
                
                <p className="text-brand-text-body text-sm leading-relaxed mb-6 flex-grow text-justify">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium text-[#a09cb0] bg-[#131318] px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                {project.link ? (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-brand-accent font-semibold flex items-center gap-2 hover:underline w-fit"
                  >
                    {project.linkLabel}
                  </a>
                ) : (
                  <span className="mt-auto text-[#6b677a] italic text-sm font-medium w-fit">
                    Private Repository
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
