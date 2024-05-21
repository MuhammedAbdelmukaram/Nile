import { useState, useEffect } from 'react';
import styles from './carousel.module.css';

const Carousel = ({ images }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToSlide = (index) => {
		setCurrentIndex(index);
	};

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (currentIndex === images.length - 1) {
				setCurrentIndex(0);
			} else {
				setCurrentIndex(currentIndex + 1);
			}
		}, 5000);

		return () => clearInterval(intervalId);
	}, [currentIndex, images.length]);

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="relative w-screen max-w-[1500px] min-h-[6.25rem] overflow-hidden">
				<div
					className="flex transition-transform duration-500 w-full h-full"
					style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
					{images.map((image, index) => (
						<div
							key={index}
							className="w-full h-full min-h-[6.25rem] flex-shrink-0">
							<img
								src={image}
								alt={`Slide ${index}`}
								className="object-fill w-full h-full min-h-[6.25rem]"
							/>
						</div>
					))}
				</div>
			</div>
			<div className="flex justify-center bg-[#fefcfb] p-1 rounded-full drop-shadow w-fit">
				{images.map((_, index) => (
					<button
						key={index}
						onClick={() => goToSlide(index)}
						className={`h-2 w-2 rounded-full mx-1 ${
							currentIndex === index ? styles.activeDot : 'bg-gray-400'
						}`}></button>
				))}
			</div>
		</div>
	);
};

export default Carousel;
