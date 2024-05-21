// Components
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';
import InputField from '../../components/shared/InputField';
import StarRating from '../../components/shared/StarRating';
import Button from '../../components/shared/Button';
import ItemCard from '../../components/shared/ItemCard';
// Icons
import CartIcon from '../../assets/icons/CartIcon';
import BagIcon from '../../assets/icons/BagIcon';
import UpArrow from '../../assets/icons/UpArrow';

const ProductPage = () => {
	return (
		<div>
			<Header />
			<div>
				<h3>Visit official store</h3>
				<StarRating rating={4.5} variant="small" />
			</div>
			<div>Item title</div>
			<div>Image viewer</div>
			<div>Color picker</div>
			<div>Size picker</div>
			<div>
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
			<div>Customer Reviews</div>
			<div>
				Similar products
				<div className="flex flex-wrap justify-center gap-[1.06rem]">
					{Array.from({ length: 8 }, (_, index) => (
						<ItemCard key={index} />
					))}
				</div>
			</div>
			<Button>
				<UpArrow /> Back to top
			</Button>
			<Footer />
		</div>
	);
};

export default ProductPage;
