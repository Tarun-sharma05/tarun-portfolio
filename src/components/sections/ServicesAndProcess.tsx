const services = [
  {
    title: "Android App Development",
    description: "Native Android apps built with Kotlin and Jetpack Compose — from UI to data layer. Clean architecture, proper state management, and code you can maintain."
  },
  {
    title: "API Integration",
    description: "Connecting your Android app to backend services using Retrofit. REST APIs, JSON parsing, authentication flows, and real-time data handling."
  },
  {
    title: "Firebase Integration",
    description: "Authentication, Firestore, Realtime Database, and Cloud Storage setup for Android apps that need a backend without building one."
  },
  {
    title: "App UI Implementation",
    description: "Have a Figma design or rough idea? I translate it into a polished Jetpack Compose UI that feels native and consistent with Material 3."
  }
];

const processes = [
  {
    step: "Step 01",
    title: "Understand",
    description: "I start by understanding what you need and why — the goal, the users, and any constraints. I ask questions early so there are no surprises later."
  },
  {
    step: "Step 02",
    title: "Plan",
    description: "Before writing a line of code, I map out the structure: screens, data flow, and architecture. This saves time and avoids rebuilding halfway through."
  },
  {
    step: "Step 03",
    title: "Build",
    description: "I write clean, organised code using MVVM and Jetpack Compose. I keep you updated as screens and features come together."
  },
  {
    step: "Step 04",
    title: "Deliver",
    description: "I test across device sizes, fix edge cases, and hand over working code. Available for follow-up after delivery."
  }
];

export default function ServicesAndProcess() {
  return (
    <>
      {/* Services Section */}
      <section id="services" className="py-24 bg-brand-alt-bg">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text-heading mb-12 text-center md:text-left">What I Do</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-brand-bg p-8 rounded-2xl border border-brand-border hover:border-brand-accent transition-colors">
                <h3 className="text-2xl font-bold text-brand-text-heading mb-4">{service.title}</h3>
                <p className="text-brand-text-body leading-relaxed text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text-heading mb-12 text-center md:text-left">How I Work</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <span className="text-brand-accent font-bold tracking-widest uppercase text-sm">
                  {process.step}
                </span>
                <h3 className="text-2xl font-bold text-brand-text-heading">{process.title}</h3>
                <p className="text-brand-text-body leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
