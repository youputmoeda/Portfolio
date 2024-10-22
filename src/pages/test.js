import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const slides = [
	{ id: 1, image: '/path-to-image1.jpg', title: 'Slide 1' },
	{ id: 2, image: '/path-to-image2.jpg', title: 'Slide 2' },
	{ id: 3, image: '/path-to-image3.jpg', title: 'Slide 3' },
];

const Test = () => {
	return (
		<Swiper
			cssMode={true}
			navigation={true}
			pagination={true}
			mousewheel={true}
			keyboard={true}
			modules={[Navigation, Pagination, Mousewheel, Keyboard]}
			className="bg-white w-[100%] h-[100vh] text-sm text-black"
		>
			{slides.map((slide, index) => (
				<SwiperSlide key={index} className="
						text-center text-lg
						flex justify-center align-middle
					"
				>
					slide{index}
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default Test;