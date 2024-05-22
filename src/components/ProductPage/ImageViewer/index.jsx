import { useState } from 'react';

import styles from './imageViewer.module.css';

const ImageViewer = () => {
	const images = [
		{ id: 0, src: '/images/ExampleItem.png' },
		{ id: 1, src: '/images/laptop-img.bmp' },
		{ id: 2, src: '/images/defuel-products.png' },
		{ id: 3, src: '/images/defuel-banner.png' },
	];
	const [selectedImage, setSelectedImage] = useState(images[0]);

	return (
		<div className="flex flex-col justify-center items-center px-4">
			<div
				className={`${styles.imgContainer} w-full max-w-[31.375rem] mb-[0.8rem] transition`}>
				<img className="w-full rounded" src={selectedImage.src} alt="img" />
			</div>
			<div className="flex flex-row justify-between items-center w-full max-w-[31.375rem]">
				{images.map((image, index) => (
					<button
						className={`${styles.imgContainer} flex justify-center items-center w-[5.09156rem] h-[4.43156rem]`}
						key={index}
						onClick={() => setSelectedImage(image)}>
						<img
							className="w-full h-full rounded cursor-pointer transition hover:opacity-75"
							src={image.src}
							alt="img"
						/>
					</button>
				))}
			</div>
		</div>
	);
};

export default ImageViewer;
