const Footer = () => {
    return (
        <footer>
            <div className="bg-white rounded-t-lg 
                            py-[20px] px-[20px]
                            flex flex-wrap place-content-between 
                            text-black text-2xl font-abeezee font-bold">

                <div className="flex flex-col justify-between order-last tablet:order-first mt-[30px] tablet:mt-[0px]">

                    <p className="flex items-center">&#169; <span className="hidden tablet:inline mx-1">Copyright</span> 2024</p>

                    <p className="text-base">
                        Made with:
                        <a href="https://reactjs.org/" className="text-sky-500 hover:underline"> ReactJS</a>,
                        <a href="https://tailwindcss.com/" className="text-sky-500 hover:underline"> TailwindCSS</a>,
                        <a href="https://threejs.org/" className="text-sky-500 hover:underline"> ThreeJS</a>,
                        <a href="https://swiperjs.com/" className="text-sky-500 hover:underline"> Swiper</a> and
                        <a href="https://www.framer.com/motion/" className="text-sky-500 hover:underline"> Framer Motion</a>
                    </p>
                </div>
                <div className="w-full tablet:w-[40%]">
                    <h1>Software Engineer, Full-Stack Developer, Game Developer <br />and Project Manager.</h1>
                    <div className="w-[90%] mt-[30px] flex flex-wrap place-content-between">
                        <ul>
                            <li><a href="https://www.linkedin.com/in/joaomagalhaes2001" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 hover:underline"><p>LinkedIn</p></a></li>
                            <li><a href="https://www.instagram.com/magalhaes_code/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 hover:underline"><p>Instagram</p></a></li>
                            <a
                                href="/cv/CV_Magalhaes.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-sky-500 hover:underline"
                            >
                                <p>CV</p>
                            </a>
                        </ul>

                        <ul>
                            <li>
                                <p className="flex items-center hover:text-sky-500 hover:underline">
                                    <a href="https://calendly.com/magalhaes_code/30min" target="_blank" rel="noopener noreferrer">
                                        Book a Call
                                    </a>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                    </svg>

                                </p>
                            </li>
                            <li>
                                <p className="flex items-center hover:text-sky-500 hover:underline">
                                    <a href="mailto:jptmagalhaes2001@gmail.com">
                                        Email
                                    </a>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <p className="flex items-center mt-[30px]">
                        Working Globally
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;