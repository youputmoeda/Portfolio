import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc"
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Loader, OrbitControls } from "@react-three/drei";
import FlipPhone from "../components/FlipPhone";

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            'service_vzrrkkg',
            'template_xpjfmkc',
            {
                from_name: form.name,
                to_name: 'Magalhães',
                from_email: form.email,
                to_email: 'jptmagalhaes2001@gmail.com',
                message: form.message
            },
            'PUXM-nm58-JClpG_H'
        )
            .then(() => {
                setLoading(false);
                alert('Thank you. I will get back to you as soon as possible!');

                setForm({
                    name: '',
                    email: '',
                    message: ''
                });
            }, (error) => {
                setLoading(false);
                console.error(error);
                alert('Something went wrong!\nTry to call me')
            })
    };
    return (
        <>
            <div className="xl:mt-5 xl:flex-row
                flex-col-reverse flex gap-10 overflow-hidden">
                <motion.div
                    variants={slideIn('left', "tween", 0.2, 1)}
                    className="flex-[1] bg-neutral-700 p-8
                    rounded-2xl"
                >
                    <p className={styles.sectionSubText}>Let's turn ideas into code</p>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="mt-12 flex flex-col gap-8"
                    >
                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            type="text"
                            placeholder="Your Name *"
                            required
                            className="bg-transparent py-2 px-0 
                            border-b-2 border-gray-400 
                            text-white outline-none 
                            focus:placeholder:text-gray-200
                            transition-all duration-300 ease-in-out
                            hover:placeholder:text-gray-200 hover:translate-x-1"
                        />
                        <input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            type="email"
                            placeholder="Your Email *"
                            required
                            className="bg-transparent py-2 px-0 
                                border-b-2 border-gray-400 
                                text-white outline-none 
                                focus:placeholder:text-gray-200
                                transition-all duration-300 ease-in-out
                                hover:placeholder:text-gray-200 hover:translate-x-1"
                        />
                        <textarea
                            rows={7}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Your Message *"
                            required
                            multiline="true"
                            className="bg-transparent py-2 px-0 
                                border-b-2 border-gray-400 
                                text-white outline-none 
                                focus:placeholder:text-gray-200
                                transition-all duration-300 ease-in-out
                                hover:placeholder:text-gray-200 hover:translate-x-1"
                        />
                        <button
                            type="submit"
                            className="ml-auto w-auto bg-cyan-600 text-white py-2 px-4
                   rounded-lg border-none font-medium 
                   transition-all duration-300 ease-in-out 
                   hover:bg-cyan-500 hover:scale-105"
                        >
                            {loading ? "Sending..." : "Submit"}
                        </button>
                    </form>
                </motion.div>
                <motion.div
                    variants={slideIn('right', "tween", 0.2, 1)}
                    className="xl:flex-1 xl:h-auto 
                    md:h-[550px] h-350px
                    w-80 rounded-lg
                    bg-gradient-to-r from-purple-500 to-pink-500"
                >
                    <Canvas
                        frameloop="demand"
                        camera={{
                            position: [0.184, 4.737, 9.731],
                            fov: 45,
                            near: 0.1,
                            far: 200
                        }}
                        gl={{ preserveDrawingBuffer: true }}
                    >
                        <directionalLight
                            intensity={2}
                            position={[1.543, -0.652, -12.403]}
                        />
                        <directionalLight
                            intensity={2}
                            position={[-0.446, 4.775, 13.297]}
                        />
                        <pointLight
                            intensity={2}
                            position={[0.636, 2.912, 1.053]}
                        />
                        <Suspense fallback={<Loader />}>
                            <OrbitControls
                                enableZoom={false}
                                autoRotate={true}
                                autoRotateSpeed={-10}
                                maxPolarAngle={Math.PI / 2}
                                minPolarAngle={Math.PI / 2}
                            />
                            <FlipPhone
                                rotation={[13.1, 0, 0]}
                                position={[0, -4.5, -2]}
                            />
                        </Suspense>
                    </Canvas>

                </motion.div>
            </div>
        </>
    )
}

export default SectionWrapper(Contact, "contact");