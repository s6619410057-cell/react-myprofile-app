function Projects() {
    const project = {
        title: 'Manage Task App - fullstack web development',
        detail: "Here's my latest project built with Next.js and Laravel, using TailwindCSS on the front-end. Watch the video to see the responsive landing page in action!",
        url: 'https://react-calculate-sau-app-3i4z.vercel.app/'
    }

    return (
        <section className="page-content">
            <h1 className="font-bold">Featured <span className="font-bold">Projects</span></h1>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-detail">{project.detail}</p>

            <div className="browser-frame">
                <div className="browser-bar">
                    <span className="browser-url">{project.url}</span>
                    <a href={project.url} target="_blank" rel="noreferrer">Open ↗</a>
                </div>
                <iframe src={project.url} title={project.title} />
            </div>
        </section>
    )
}

export default Projects