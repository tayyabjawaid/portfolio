import Image from 'next/image';
import Typewriter from './Typewtiter';
import { HiOutlineFolderOpen, HiOutlineDownload, HiOutlineMail } from 'react-icons/hi';

export default function Hero() {

    return (
        <section className="w-full px-5 relative overflow-hidden">
            <div className="max-w-large mx-auto py-20 md:py-28 lg:py-36 relative z-10">
                <div className="text-center">
                    {/* <Image src="/assets/images/pic.jpeg" alt="Hero" width={200} height={200} className="mx-auto rounded-full object-cover object-top aspect-square mb-6 w-[135px] md:w-[175] lg:w-[200px] grayscale-100 select-none pointer-events-none" /> */}
                    <h1 className="heading-one mb-3 md:mb-5 text-center!">
                        <span className="text-accent">&lt;</span>
                        Hello, I'm Tayyab
                        <span className="text-accent">/&gt;</span>
                    </h1>
                    <p className="text-white text-lg md:text-xl max-w-2xl mx-auto min-h-8">
                        Your <Typewriter />
                    </p>
                    <div className="mt-3 md:mt-5 flex gap-2 md:gap-4 items-center justify-center">
                        <a href='#' className='theme-btn-1 flex items-center gap-1 md:gap-2'>
                            <HiOutlineMail className="text-base md:text-lg" />
                            Contact Me
                        </a>
                        <a href='#' className='theme-btn-2 flex items-center gap-1 md:gap-2'>
                            <HiOutlineDownload className="text-base md:text-lg" />
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

