"use client";

import { FaReact, FaWordpress, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiPhp, SiMysql, SiTailwindcss } from "react-icons/si";

const skills = [
    {
        category: "Frontend",
        icon: <FaReact size={24} />,
        items: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React.js", "Next.js"],
    },
    {
        category: "Backend",
        icon: <SiPhp size={24} />,
        items: ["PHP", "WordPress", "REST APIs", "MySQL"],
    },
    {
        category: "Tools & Practices",
        icon: <FaGitAlt size={24} />,
        items: ["Git & GitHub", "Agile / Scrum", "Clean Architecture", "Optimization"],
    },
];

export default function Skills() {
    return (
        <section className='px-5 w-full py-12 md:py-20'>
            <div className="max-w-large mx-auto">
                {/* Section Title */}
                <div className="mb-8 md:mb-12">
                    <h2 className="heading-one text-center!">
                        <span className='text-accent'>&lt;</span>
                        Skills & Technologies
                        <span className='text-accent'>/&gt;</span>
                    </h2>
                </div>

                {/* Skills Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {skills.map((group, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl border bg-white/60 backdrop-blur p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            {/* Icon */}
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                                {group.icon}
                            </div>

                            {/* Title */}
                            <h3 className="mb-4 text-xl font-semibold">
                                {group.category}
                            </h3>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-3">
                                {group.items.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="rounded-full border px-4 py-1.5 text-sm bg-gray-50 text-gray-700 transition group-hover:bg-accent/10"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
