import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineChevronDoubleRight, HiOutlineMail } from 'react-icons/hi';

export default function About() {
    return (
        <section className='px-5 w-full py-18 md:py-32'>
            <div className="max-w-large mx-auto">
                {/* Section Title */}
                <div className="mb-8 md:mb-12">
                    <h2 className="heading-one text-center!">
                        <span className='text-accent'>&lt;</span>
                        About Me
                        <span className='text-accent'>/&gt;</span>
                    </h2>
                </div>

                {/* Two Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Left Column - Image */}
                    <div className="relative order-2 md:order-1 w-full aspect-square max-w-md mx-auto md:max-w-none">
                        <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-accent/20 hover:border-accent transition-colors duration-300">
                            <Image
                                src={'/assets/images/pic.jpeg'}
                                fill
                                alt='author'
                                className='object-cover object-top'
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-accent/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="order-1 md:order-2 space-y-6 md:space-y-8">
                        <div>
                            <h3 hidden className='heading-three mb-3 md:mb-5'>
                                Crafting Digital Excellence
                            </h3>
                            <p className="paragraph mb-4">
                                With over <span className='text-accent font-semibold italic'>4 years of experience</span> in web development, I am a Full-Stack Developer specializing in CMS, PHP, and React.js. I build scalable, high-performance web solutions with a strong focus on clean architecture and user experience.
                            </p>
                            <p className="paragraph">
                                I enjoy developing custom themes, plugins, API integrations, and complex dashboards while following industry best practices. From startup MVPs to enterprise-level applications, I translate requirements into reliable, maintainable, and efficient solutions through collaboration and problem-solving.
                            </p>
                        </div>

                        <div className='gap-2 md:gap-4 flex justify-center md:justify-start'>
                            <Link
                                href="/about"
                                className="theme-btn-1 flex items-center gap-1 md:gap-2"
                            >
                                Read More
                                <HiOutlineChevronDoubleRight className="text-base md:text-lg" />
                            </Link>
                            <Link
                                href="/contact"
                                className="theme-btn-2 flex items-center gap-1 md:gap-2"
                            >
                                <HiOutlineMail className="text-base md:text-lg" />
                                Contact Me
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
