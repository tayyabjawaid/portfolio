export default function WorkExperience() {
    const experiences = [
        {
            title: "Senior Frontend Developer",
            company: "Mayabytes",
            duration: "March, 2025 - Present",
            location: "Karachi, Pakistan",
            description: "Mayabytes is a digital solutions company delivering innovative, performance-driven services to help businesses grow online. We combine creativity, technology, and strategy to build impactful digital experiences that enhance brand presence and drive results.",
            technologies: ["WordPress", "Webflow", "Shopify", "Wix",]
        },
        {
            title: "Web Developer",
            company: "techigator.",
            duration: "April, 2021 - February, 2025",
            location: "Karachi, Pakistan",
            description: "Techigator is a global software development company with over 15 years of experience, delivering high-quality, scalable, and product-driven solutions to clients worldwide. Collaborated with cross-functional teams across Pakistan, the U.S., U.K., and Dubai, contributing to agile projects focused on performance, maintainability, and business impact.",
            technologies: ["WordPress", "PHP", "JavaScript", "CSS", "HTML", "React.js", "Tailwindcss", "Bootstrap 4/5"]
        },
        {
            title: "Shopify Executive",
            company: "ChasePlus",
            duration: "May, 2020 - February, 2021",
            location: "Karachi, Pakistan",
            description: "ChasePlus is a leading retail store in Pakistan, offering a wide range of quality products including groceries, garments, crockery, toys, stationery, shoes, and jewelry. We focus on delivering excellent customer service, a welcoming shopping environment, and the best value for our customers.",
            technologies: ["Shopify", "Microsoft Automation"]
        }
    ];

    return (
        <section className='px-5 w-full py-18 md:py-32'>
            <div className="max-w-large mx-auto">
                {/* Section Title */}
                <div className="mb-12 md:mb-16">
                    <h2 className="heading-one text-center!">
                        <span className='text-accent'>&lt;</span>
                        Work Experience
                        <span className='text-accent'>/&gt;</span>
                    </h2>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-accent/20"></div>

                    {/* Experience Items */}
                    <div className="space-y-12 md:space-y-16">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative">
                                {/* Timeline Dot */}
                                <div className="hidden md:block absolute left-0 top-1.5">
                                    <div className="w-12 h-12 flex items-center justify-center">
                                        <div className="w-4 h-4 rounded-full bg-accent border-4 border-primary z-10"></div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="md:pl-20 space-y-4">
                                    {/* Header */}
                                    <div>
                                        <div className="flex flex-wrap items-baseline gap-3 md:gap-4 mb-2">
                                            <h3 className="heading-three text-left! text-accent">
                                                {exp.title}
                                            </h3>
                                            <span className="text-accent2 text-sm md:text-base">
                                                {exp.duration}
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-2 md:gap-3">
                                            <span className="text-white text-base md:text-lg">
                                                {exp.company}
                                            </span>
                                            <span className="text-accent2 text-sm md:text-base">
                                                {exp.location}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="paragraph text-left!">
                                        {exp.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="text-accent2 text-xs md:text-sm"
                                            >
                                                {tech}
                                                {techIndex < exp.technologies.length - 1 && (
                                                    <span className="mx-2 text-accent2/50">•</span>
                                                )}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

