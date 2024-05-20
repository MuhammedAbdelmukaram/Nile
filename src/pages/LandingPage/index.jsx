import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';
import Carousel from '../../components/LandingPage/Carousel';
import DiscountBanner from '../../components/LandingPage/DiscountBanner';
import FeaturedItem from '../../components/LandingPage/FeaturedItem';
import ItemCard from '../../components/shared/ItemCard';

const LandingPage = () => {
	const carouselImages = [
		'/images/carousel-placeholder.png',
		'/images/carousel-placeholder.png',
		'/images/carousel-placeholder.png',
		'/images/carousel-placeholder.png',
		'/images/carousel-placeholder.png',
		'/images/carousel-placeholder.png',
		'/images/carousel-placeholder.png',
	];

	const tempItem = {
		productName:
			'Razer Blade 18 (2024) Gaming Laptop: NVIDIA GeForce RTX 4070 - Intel Core i9\\14900HX 14th Gen CPU - 18” QHD+ 300 Hz Mini LED Display',
		description: '',
		images: ['/images/laptop-img.bmp'],
		brand: 'Razer',
		model: 'Razer Blade 18',
		flavour: 'Razer Blade 18',
		size: '18"',
		price: 0.05,
		discount: [],
		category: 'Tech',
		subcategory: 'Laptop',
		ratings: 3.5,
		reviews: [],
		supplierShop: 'Razer',
		availability: true,
		tags: [],
	};

	return (
		<div className="w-[100vw]">
			<Header />
			<div className="w-full flex flex-col justify-center px-[1.63rem]">
				<div>
					<Carousel images={carouselImages} />
				</div>
			</div>
			<div>
				<DiscountBanner />
			</div>
			<div className="w-full flex justify-center flex-col px-[1.63rem]">
				<FeaturedItem product={tempItem} />
				<h1 className="mt-10 w-full flex justify-center items-center">
					Check out our Featured stores
				</h1>

				<div>Kartice one</div>

				<h1 className="mt-10 w-full flex justify-center items-center">
					From DeFuel Store
				</h1>
				<ItemCard />
			</div>
			<Footer />
		</div>
	);
};

export default LandingPage;
