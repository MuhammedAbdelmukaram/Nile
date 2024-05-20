import { useState } from 'react';
import styles from './carousel.module.css';

const Carousel = ({ images }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToSlide = (index) => {
		setCurrentIndex(index);
	};

	return (
		<div className="relative w-full max-w-2xl mx-auto">
			<div className="overflow-hidden">
				<div
					className="flex transition-transform duration-500"
					style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
					{images.map((image, index) => (
						<div key={index} className="w-full flex-shrink-0">
							<img src={image} alt={`Slide ${index}`} className="w-full" />
						</div>
					))}
				</div>
			</div>
			<div className="flex justify-center mt-4">
				{images.map((_, index) => (
					<button
						key={index}
						onClick={() => goToSlide(index)}
						className={`h-3 w-3 rounded-full mx-1 ${
							currentIndex === index ? styles.activeDot : 'bg-gray-400'
						}`}></button>
				))}
			</div>
		</div>
	);
};

export default Carousel;
