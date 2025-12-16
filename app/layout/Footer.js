export default function Footer() {
    return (
        <footer className="w-full px-5 mt-auto">
            <div className="max-w-large mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <p className="text-sm ">
                        © {new Date().getFullYear()} Muhammad Tayyab. All rights reserved.
                    </p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" hover:text-gray-900"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" hover:text-gray-900"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" hover:text-gray-900"
                        >
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

