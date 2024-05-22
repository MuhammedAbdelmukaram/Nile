// Components
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';
import Carousel from '../../components/LandingPage/Carousel';
import DiscountBanner from '../../components/LandingPage/DiscountBanner';
import FeaturedItem from '../../components/LandingPage/FeaturedItem';
import ItemCard from '../../components/shared/ItemCard';
import FeaturedStore from '../../components/LandingPage/FeaturedStore';

const LandingPage = () => {
	const carouselImages = [
		'/images/carousel-placeholder.png',
		'/images/defuel-banner.png',
		'/images/carousel-placeholder.png',
		'/images/defuel-banner.png',
		'/images/carousel-placeholder.png',
		'/images/defuel-banner.png',
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
			<div className="w-full flex justify-center">
				<div className="w-full flex justify-center flex-col px-[1.63rem] max-w-[1500px]">
					<FeaturedItem product={tempItem} />
					<h1 className="mt-10 w-full flex justify-center items-center">
						Check out our Featured stores
					</h1>

					<div className="flex flex-row flex-wrap justify-center gap-[0.63rem]">
						<div className="w-full sm:basis-full">
							<FeaturedStore
								variant="purple"
								logo={'/images/defuel-logo.png'}
								products={'/images/defuel-products.png'}
							/>
						</div>
						<div className="w-full md:basis-1/2-gap">
							<FeaturedStore
								variant="blue"
								logo={'/images/defuel-logo.png'}
								products={'/images/defuel-products.png'}
							/>
						</div>
						<div className="w-full md:basis-1/2-gap">
							<FeaturedStore
								variant="yellow"
								logo={'/images/defuel-logo.png'}
								products={'/images/defuel-products.png'}
							/>
						</div>
					</div>

					<h1 className="my-10 w-full flex justify-center items-center">
						From DeFuel Store
					</h1>
					<div className="flex flex-wrap justify-center gap-[1.06rem]">
						{Array.from({ length: 8 }, (_, index) => (
							<ItemCard key={index} />
						))}
					</div>
					<h1 className="my-10 w-full flex justify-center items-center">
						From DeByte Store
					</h1>
					<div className="flex flex-wrap justify-center gap-[1.06rem]">
						{Array.from({ length: 8 }, (_, index) => (
							<ItemCard key={index} />
						))}
					</div>
					<h1 className="my-10 w-full flex justify-center items-center">
						From DeStore Store
					</h1>
					<div className="flex flex-wrap justify-center gap-[1.06rem]">
						{Array.from({ length: 8 }, (_, index) => (
							<ItemCard key={index} />
						))}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default LandingPage;
