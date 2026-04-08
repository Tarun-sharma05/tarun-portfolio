export default function Connect() {
  return (
    <section id="connect" className="py-24 bg-brand-alt-bg">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-text-heading mb-6">Let&apos;s Build Something</h2>
        <p className="text-xl text-brand-text-body max-w-2xl mx-auto mb-12">
          I&apos;m currently open to Android developer roles, freelance projects, and startup collaborations.
        </p>
        
        {/* Primary Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="https://github.com/Tarun-sharma05"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-card border border-brand-border text-brand-text-heading px-6 py-3 rounded-full font-medium hover:border-brand-accent hover:text-brand-accent transition-all"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tarun-sharma-b1b20b244/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-card border border-brand-border text-brand-text-heading px-6 py-3 rounded-full font-medium hover:border-brand-accent hover:text-brand-accent transition-all"
          >
            LinkedIn
          </a>
          <a
            href="mailto:tarundadhich05@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-card border border-brand-border text-brand-text-heading px-6 py-3 rounded-full font-medium hover:border-brand-accent hover:text-brand-accent transition-all"
          >
            Email
          </a>
          <a
            href="https://www.dropbox.com/scl/fi/6osbhyonvhqhrweo9w92x/Tarun-Sharma-resume-1.pdf?rlkey=grkd09wn8pzrbafi3ypbztk6j&st=kj04c1bg&dl=0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-accent text-brand-accent-dark px-6 py-3 rounded-full font-bold hover:bg-white transition-colors"
          >
            Download Resume
          </a>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          {/* Freelance Profiles */}
          <div>
            <h3 className="text-xl font-semibold text-brand-text-heading mb-6 border-b border-brand-border pb-3">
              Freelance Profiles
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="https://www.upwork.com/freelancers/~01acc17237ca20a9a3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-text-body hover:text-brand-accent transition-colors flex items-center justify-between group"
              >
                Upwork
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
              </a>
              <a
                href="https://www.fiverr.com/users/tarunsharma0511/seller_dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-text-body hover:text-brand-accent transition-colors flex items-center justify-between group"
              >
                Fiverr
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
              </a>
              <a
                href="https://www.freelancer.in/u/Tarunsharma0511"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-text-body hover:text-brand-accent transition-colors flex items-center justify-between group"
              >
                Freelancer
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
              </a>
            </div>
          </div>

          {/* Technical Communities */}
          <div>
            <h3 className="text-xl font-semibold text-brand-text-heading mb-6 border-b border-brand-border pb-3">
              Technical Communities
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://www.hackerrank.com/profile/tarundadhich05"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-text-body hover:text-brand-accent transition-colors flex items-center justify-between group"
              >
                HackerRank
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm">↗</span>
              </a>
              <a
                href="https://stackoverflow.com/users/22233825/tarun-sharma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-text-body hover:text-brand-accent transition-colors flex items-center justify-between group"
              >
                Stack Overflow
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm">↗</span>
              </a>
              <a
                href="https://medium.com/@tarundadhich05"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-text-body hover:text-brand-accent transition-colors flex items-center justify-between group"
              >
                Medium
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm">↗</span>
              </a>
              <a
                href="https://www.freecodecamp.org/tarunsharma05"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-text-body hover:text-brand-accent transition-colors flex items-center justify-between group"
              >
                FreeCodeCamp
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm">↗</span>
              </a>
              <a
                href="https://wellfound.com/u/tarun-sharma-274"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-text-body hover:text-brand-accent transition-colors flex items-center justify-between group"
              >
                Wellfound
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
