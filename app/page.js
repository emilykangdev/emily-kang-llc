const projects = [
  {
    title: 'Time Box',
    description: 'A focused timeboxing tool for planning and working through your day.',
    href: 'https://time-box-website.vercel.app/',
  },
  {
    title: 'Podcast Brief',
    description: 'Quick, skimmable briefs of your favorite podcast episodes.',
    href: 'https://podcast-brief.vercel.app/',
  },
];

export default function Home() {
  return (
    <div className="container">
      <header>
        <h1>Emily Kang LLC</h1>
        <p className="tagline">Building small, useful tools.</p>
      </header>

      <section className="projects">
        {projects.map((project) => (
          <a
            key={project.href}
            className="card"
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <span className="arrow">Visit &rarr;</span>
          </a>
        ))}
      </section>

      <footer>&copy; {new Date().getFullYear()} Emily Kang LLC</footer>
    </div>
  );
}
