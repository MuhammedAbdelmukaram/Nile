import { useState } from 'react';

import styles from './imageViewer.module.css';

const ImageViewer = ({ images }) => {
	const [selectedImage, setSelectedImage] = useState(images[0]);

	return (
		<div className="flex flex-col justify-center items-center px-4 w-full max-w-[30rem] max-h-[30rem]">
			<div
				className={`${styles.imgContainer} flex justify-center items-center w-full h-full max-w-[25rem] h-[30rem] mb-[0.8rem] overflow-hidden`}>
				<img
					className="w-full rounded object-fit"
					src={selectedImage.src}
					alt="img"
				/>
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
