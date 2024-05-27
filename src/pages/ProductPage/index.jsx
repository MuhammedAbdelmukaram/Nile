// Components
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';
import InputField from '../../components/shared/InputField';
import StarRating from '../../components/shared/StarRating';
import Button from '../../components/shared/Button';
import ItemCard from '../../components/shared/ItemCard';
import ImageViewer from '../../components/ProductPage/ImageViewer';
import DetailPicker from '../../components/ProductPage/DetailPicker';
// Icons
import CartIcon from '../../assets/icons/CartIcon';
import BagIcon from '../../assets/icons/BagIcon';
import UpArrow from '../../assets/icons/UpArrow';
import ProgressBar from '../../components/ProductPage/ProgressBar';
import SolanaIcon from '../../assets/icons/SolanaIcon';
// Styles
import styles from './productPage.module.css';

const ProductPage = () => {
	const colors = ['#009332', '#F8F8F8', '#2D2D2D'];
	const sizes = ['8', '9', '10', '11', '12', '13'];
	const reviews = [
		{ name: '5 star', percentage: 80 },
		{ name: '4 star', percentage: 10 },
		{ name: '3 star', percentage: 3 },
		{ name: '2 star', percentage: 5 },
		{ name: '1 star', percentage: 2 },
	];
	const itemDesc = [
		'True to Size: Made with standard US size, this mens boots reduce the likelihood of discomfort and blisters.',
		'All-day Support: Comfortable memory foam insole of these stylish mens ankle boots provides your feet with support and cushioning.',
		'Effortless Dressing: Easy dressing with a loop and strong zipper, preventing folds and stress.',
		'Suede Upper: Crafted from high-quality suede fabric, the upper of this mens dress boots offer an elegant appearance.',
		'Wardrobe-Essential: Mens casual boots perfect for working, business, walking or daily wear, also go well with jeans, dressy or casual pants.',
	];

	const itemInfo = [
		{ name: 'Fabric', value: '100% Suede' },
		{ name: 'Origin', value: 'Imported' },
		{ name: 'Sole Material', value: 'Rubber' },
		{ name: 'Outer Material', value: '100% Suede' },
	];

	const crimeEnergy = {
		id: 0,
		productName: 'CRIME 500 ml Hydration drink GREENABLE fresh green apple',
		description: '',
		images: ['/images/ExampleItem.png'],
		brand: 'DeFuel',
		flavour: 'Crime energy',
		size: '500ml',
		price: 0.05,
		discount: [],
		category: 'Food',
		subcategory: 'Drink',
		ratings: 3.5,
		reviews: [],
		supplierShop: 'DeFuel',
		availability: true,
		tags: [],
	};

	const arr = new Array(8).fill(crimeEnergy);

	const itemImages = [
		{ id: 0, src: '/images/ExampleItem.png' },
		{ id: 1, src: '/images/laptop-img.bmp' },
		{ id: 2, src: '/images/defuel-products.png' },
		{ id: 3, src: '/images/defuel-banner.png' },
	];

	const renderPickers = (gap) => {
		return (
			<div className={`flex flex-col items-start gap-${gap}`}>
				<div className="flex flex-col ">
					<p className="mb-[0.56rem]">
						Colour: <span>green</span>
					</p>
					<DetailPicker type="color" values={colors} />
				</div>
				<div className="flex flex-col">
					<p className="mb-[0.56rem]">Size:</p>
					<DetailPicker type="text" values={sizes} />
				</div>
			</div>
		);
	};

	const renderRating = (variant) => {
		return (
			<div className="flex flex-row items-center justify-center">
				<p className={`${styles.rating} mr-1`}>4.5</p>
				<StarRating rating={4.6} variant={variant} />
			</div>
		);
	};

	const renderButtons = () => {
		return (
			<div className="flex flex-row justify-center items-center gap-5 h-10">
				<Button variant="curved">
					<div className="min-w-[7rem] max-w-[9rem] flex-1 flex justify-center items-center gap-2 py-[0.62rem]">
						<CartIcon />
						Add to cart
					</div>
				</Button>
				<Button variant="orange">
					<div className="min-w-[7rem] max-w-[9rem] flex-1 flex justify-center items-center gap-2 text-white py-[0.62rem]">
						<BagIcon />
						Buy Now
					</div>
				</Button>
			</div>
		);
	};

	const renderItemInfo = () => {
		return (
			<div className={`${styles.text} flex flex-col w-full`}>
				<div className={` flex flex-row justify-start items-center gap-x-2`}>
					<div className="flex flex-col gap-2">
						{itemInfo.map((item, index) => (
							<p key={index} className="font-semibold">
								{item.name}
							</p>
						))}
					</div>
					<div className="flex flex-col gap-2">
						{itemInfo.map((item, index) => (
							<p key={index} className="font-normal">
								{item.value}
							</p>
						))}
					</div>
				</div>
				<div className={`flex justify-start items-start flex-col w-full mt-5`}>
					<p className={`font-semibold`}>About this Item</p>
					<ul>
						{itemDesc.map((description, index) => (
							<li key={index}>{description}</li>
						))}
					</ul>
				</div>
			</div>
		);
	};
	return (
		<div>
			<Header />
			<div className="w-full flex justify-center">
				<div className="w-full flex justify-center flex-col px-[1.63rem] min-w-[320px] max-w-[1500px]">
					<div className="lg:flex lg:flex-row-reverse lg:justify-start lg:items-start lg:shrink h-full lg:mt-10">
						<div className="mt-7 lg:mt-0 lg:ml-2">
							<div className="flex flex-row justify-between items-center lg:hidden">
								<h3>Visit official store</h3>
								{renderRating('small')}
							</div>
							<div>
								<h1>
									Jousen Men Chelsea Boots Suede Boots for Men Casual Dress
									Boots Mens Chukka Ankle Boots
								</h1>
								<div className="hidden lg:flex flex-row justify-start items-center gap-2">
									{renderRating('normal')} <p>Search this page</p>
								</div>
								<hr className="border-[#999] border mt-[0.69rem] hidden lg:block" />
								<div className="hidden lg:flex flex-row justify-start items-center mt-5 gap-[1.87rem]">
									<div className="flex flex-row justify-center items-center gap-2">
										<SolanaIcon />
										<p className={styles.price}>0.05</p>
									</div>
									{renderButtons()}
								</div>
							</div>
							<div className="hidden lg:block mt-5">{renderPickers(2)}</div>
							<div className="hidden lg:block mt-5">{renderItemInfo()}</div>
						</div>
						<div className="mt-[0.62rem] mb-[0.81rem] flex justify-center items-center lg:justify-start lg:items-start lg:h-full">
							<ImageViewer images={itemImages} />
						</div>
					</div>

					<div className="lg:hidden">{renderPickers(5)}</div>
					<div className="lg:hidden mt-[1.37rem]">{renderButtons()}</div>
					<div className="lg:hidden mt-[1.87rem]">{renderItemInfo()}</div>
					<hr className="border-[#999] border mt-10 mb-5 w-screen lg:w-full -mx-[1.63rem] lg:mx-0" />

					<div
						className={`${styles.text} flex justify-start items-start flex-col w-full mt-5`}>
						<h4 className="mb-[0.62rem]">Looking for something?</h4>
						<div className="w-full max-w-[28.5rem]">
							<InputField placeholder="Search in Q&A" />
						</div>
					</div>

					<hr className="border-[#999] border my-5 w-screen lg:w-full -mx-[1.63rem] lg:mx-0" />

					<div
						className={`${styles.brandInfo} flex justify-start items-start flex-col w-full border-t-0 gap-y-[0.31rem]`}>
						<h4>Brand: Apple</h4>
						<div className="flex flex-col lg:flex-row lg:justify-start lg:items-center lg:w-full gap-x-12 gap-y-3 lg:gap-y-0">
							<div>
								<h5>4.5 Store rating</h5>
								<p>15k+ customers rate products from this brand highly</p>
							</div>
							<div>
								<h5>Sales</h5>
								<p>45k orders from this brand in the last month</p>
							</div>
							<div>
								<h5>Low returns</h5>
								<p>0..1 of orders are returned</p>
							</div>
						</div>
					</div>
					<hr className="border-[#999] border my-5 w-screen lg:w-full -mx-[1.63rem] lg:mx-0" />

					<div
						className={`${styles.text} flex flex-col lg:flex-row justify-start items-start w-full mt-5`}>
						<div className="flex flex-col justify-start items-start mr-16">
							<h2>Customer Reviews</h2>
							<div className="my-[0.62rem]">{renderRating('normal')}</div>
							<p>345 total ratings</p>
							<div className="flex flex-col gap-[0.62rem] mt-[1.06rem]">
								{reviews.map((review, index) => (
									<div
										key={index}
										className="flex flex-row gap-[0.56rem] items-center">
										<p className="w-12 text-nowrap">{review.name}</p>
										<div className="w-48">
											<ProgressBar percentage={review.percentage} />
										</div>
										<p>{review.percentage}%</p>
									</div>
								))}
							</div>
						</div>
						<div
							className={`${styles.text} flex flex-col justify-start items-start w-full`}>
							<div
								className={`flex justify-start items-start flex-col w-full mt-5 lg:max-w-[25.5rem]`}>
								<p className="font-medium">Customers say</p>
								<p className="mt-[0.31rem] w-full">
									Lorem ipsum dolor sit amet consectetur. Scelerisque
									pellentesque pharetra egestas massa amet magna mattis semper
									id. Sodales enim sit rhoncus.
								</p>
								<p className="font-medium mt-5">Write a review</p>
								<div className="mt-[0.31rem] w-full">
									<InputField placeholder="Write a review" />
								</div>
								<a className="mt-5 cursor-pointer hover:underline hover:opacity-80 transition">
									View all reviews
								</a>
							</div>
						</div>
					</div>

					<div className="flex flex-col justify-center items-center px-[1.63rem] max-w-[1500px] mb-10">
						<h1 className="my-10">Similar Products</h1>
						<div className="flex flex-wrap justify-center gap-[1.06rem]">
							{arr.map((item, index) => (
								<ItemCard
									key={index}
									id={item.id}
									name={item.productName}
									price={item.price}
									rating={item.ratings}
								/>
							))}
						</div>
					</div>
					<div className="flex justify-center items-center mt-10">
						<Button
							variant="secondaryNoCurve"
							onClick={() => {
								window.scrollTo(0, 0);
							}}>
							<UpArrow /> Back to top
						</Button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ProductPage;
