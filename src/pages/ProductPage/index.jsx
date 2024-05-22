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
	return (
		<div>
			<Header />
			<div className="flex flex-row justify-between items-center">
				<h3>Visit official store</h3>
				<div className="flex flex-row items-center">
					<p>4.5</p>
					<StarRating rating={4.5} variant="small" />
				</div>
			</div>
			<div>
				<h1>
					Jousen Men Chelsea Boots Suede Boots for Men Casual Dress Boots Mens
					Chukka Ankle Boots
				</h1>
			</div>
			<div className="mt-[0.62rem] mb-[0.81rem]">
				<ImageViewer />
			</div>
			<div className="flex flex-col items-start px-8">
				<div className="flex flex-col ">
					<p className="mb-[0.56rem]">
						Colour: <span>green</span>
					</p>
					<DetailPicker type="color" values={colors} />
				</div>
				<div className="flex flex-col mt-5">
					<p className="mb-[0.56rem]">Size:</p>
					<DetailPicker type="text" values={sizes} />
				</div>
			</div>
			<div className="flex flex-row justify-center items-center gap-5 mt-[1.37rem]">
				<Button>
					<CartIcon />
					Add to cart
				</Button>
				<Button>
					<BagIcon />
					Buy Now
				</Button>
			</div>
			<div>
				<div>Fabric type</div>
				<div>Origin</div>
				<div>Sole Material</div>
				<div>Outer Material</div>
			</div>
			<div>
				About Item
				<ul>
					<ol>Description</ol>
					<ol>Description</ol>
					<ol>Description</ol>
				</ul>
			</div>
			<div>
				Looking for sth?
				<InputField placeholder="Search in Q&A" />
			</div>
			<div>
				Brand: XYZ
				<div>Information</div>
			</div>
			<div>
				<h2>Customer Reviews</h2>
				<div className="flex flex-col gap-[0.62rem]">
					{reviews.map((review, index) => (
						<div
							key={index}
							className="flex flex-row gap-[0.56rem] items-center">
							<p className="w-[2.4rem]">{review.name}</p>
							<div className="w-56">
								<ProgressBar percentage={review.percentage} />
							</div>
							<p>{review.percentage}%</p>
						</div>
					))}
				</div>
				<h3>Customers say</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque
					pharetra egestas massa amet magna mattis semper id. Sodales enim sit
					rhoncus.
				</p>
				<h3>Write a review</h3>
				<InputField placeholder="Write a review" />
				<a>View all reviews</a>
			</div>
			<div className="flex flex-col justify-center items-center px-[1.63rem] max-w-[1500px] my-10">
				Similar products
				<div className="flex flex-wrap justify-center gap-[1.06rem]">
					{Array.from({ length: 8 }, (_, index) => (
						<ItemCard key={index} />
					))}
				</div>
			</div>
			<div className="flex justify-center items-center mt-10">
				<Button variant="secondaryNoCurve">
					<UpArrow /> Back to top
				</Button>
			</div>
			<Footer />
		</div>
	);
};

export default ProductPage;
