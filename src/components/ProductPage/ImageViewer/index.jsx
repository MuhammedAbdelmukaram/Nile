import { useState } from 'react';

const ImageViewer = () => {
	const images = [
		{ id: 0, src: '/images/ExampleItem.png' },
		{ id: 1, src: '/images/ExampleItem.png' },
		{ id: 2, src: '/images/ExampleItem.png' },
		{ id: 3, src: '/images/ExampleItem.png' },
	];
	const [selectedImage, setSelectedImage] = useState(images[0]);

	return (
		<div className="max-w-sm mx-auto">
			<div className="mb-4">
				<img className="w-full rounded" src={selectedImage.src} alt="img" />
			</div>
			<div className="flex justify-between space-x-2">
				{images.map((image, index) => (
					<button key={index} onClick={() => setSelectedImage(image)}>
						<img
							className="w-1/4 rounded cursor-pointer hover:opacity-75"
							src={image}
							alt="img"
						/>
					</button>
				))}
			</div>
		</div>
	);
};

export default ImageViewer;
