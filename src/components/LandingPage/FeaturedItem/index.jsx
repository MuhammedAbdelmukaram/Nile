// Components
import Button from '../../shared/Button';
import StarRating from '../../shared/StarRating';
// Icons
import SolanaIcon from '../../../assets/icons/SolanaIcon';
import HeartIcon from '../../../assets/icons/HeartIcon';
import ArrowRight from '../../../assets/icons/ArrowRight';
import CartIcon from '../../../assets/icons/CartIcon';
// Styles
import styles from './featuredItem.module.css';

const FeaturedItem = ({ product }) => {
	return (
		<div className="flex flex-col md:flex-row md:gap-20 justify-center items-center mt-8">
			<div className={styles.imgContainer}>
				<img
					src={product.images[0]}
					alt={product.productName}
					className={styles.img}
				/>
			</div>
			<div className="md:flex md:flex-col md:justify-start md:max-w-[32.5rem]">
				<h2 className="mt-[0.44rem] md:text-left md:text-2xl">
					{product.productName}
				</h2>
				<div className="flex flex-row justify-center items-center md:justify-start">
					<p className={styles.ratings}>{product.ratings}</p>
					<StarRating rating={product.ratings} />
				</div>
				<div className="flex flex-row justify-center items-center md:justify-start gap-[0.62rem]">
					<SolanaIcon />
					<p className={styles.price}>{product.price}</p>
					<button className={styles.favoritesContainer}>
						<HeartIcon />
					</button>
				</div>
				<div className="flex flex-row justify-center items-center md:justify-start gap-5 mt-2">
					<Button variant="secondary">
						See details <ArrowRight />
					</Button>
					<Button variant="curved">
						<CartIcon /> Add to cart
					</Button>
				</div>
			</div>
		</div>
	);
};

export default FeaturedItem;
