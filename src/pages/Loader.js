import { useProgress } from '@react-three/drei';
import { motion } from 'framer-motion';
import YinYang from '../assets/yin-yang.svg';

const Loader = () => {
  const { progress } = useProgress();


  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-[#FBAB48] to-[#915EFF] flex flex-col items-center justify-center">
        {/* Loader Yin-Yang */}
        <motion.img
          src={YinYang}
          className="w-48 h-48"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1,
            ease: "linear",
            repeat: Infinity,
          }}
        />

        <p className="text-black text-4xl font-bold mt-4">{progress.toFixed(2)}%</p>
      </div>
  );
};

export default Loader;