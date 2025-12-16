export const metadata = {
    title: "About | Portfolio | Tayyab.dev",
};

export default function About() {
    return (
        <div className="about-page">
            <section className="w-full px-5">
                <div className="max-w-large mx-auto py-12 md:py-20">
                    <h1 className="heading-one text-center! mb-8 md:mb-12">
                        <span className="text-accent">&lt;</span>
                        About Me
                        <span className="text-accent">/&gt;</span>
                    </h1>

                    <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
                        <div>
                            <h2 className="heading-two mb-4">Who I Am</h2>
                            <p className="text-white text-lg leading-relaxed">
                                I'm a <span className="text-accent">Fullstack Developer</span> with a passion for creating
                                exceptional digital experiences. I specialize in <span className="text-accent">Frontend</span> technologies
                                and enjoy building user-friendly, performant web applications.
                            </p>
                        </div>

                        <div>
                            <h2 className="heading-two mb-4">Skills & Technologies</h2>
                            <div className="flex flex-wrap gap-3">
                                {['React', 'Next.js', 'JavaScript', 'TypeScript', 'Node.js', 'Tailwind CSS', 'HTML', 'CSS'].map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-white border-white bg-transparent border px-4 py-2 rounded-full text-sm md:text-base"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="heading-two mb-4">What I Do</h2>
                            <p className="text-white text-lg leading-relaxed">
                                I build modern, responsive web applications using the latest technologies.
                                My focus is on creating clean, maintainable code and delivering
                                exceptional user experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}