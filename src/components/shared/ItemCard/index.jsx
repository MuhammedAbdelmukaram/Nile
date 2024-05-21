// Components
import StarRating from '../StarRating';
// Icons
import HeartIcon from '../../../assets/icons/HeartIcon';
import SolanaIcon from '../../../assets/icons/SolanaIcon';
// Styles
import styles from './itemCard.module.css';

const ItemCard = () => {
	return (
		<div
			className={`flex flex-col min-w-[11.375rem] basis-1/2-gap-sm sm:basis-1/4-gap grow ${styles.card}`}>
			<div className="bg-cover bg-center h-[11.375rem] w-full flex justify-end items-end p-[0.62rem] bg-[url('/images/ExampleItem.png')]">
				<button className={styles.favoritesContainer}>
					<HeartIcon />
				</button>
			</div>
			<div className="flex flex-col mt-[0.62rem] px-2 justify-center items-center">
				<h3 className="hover:underline cursor-pointer">
					CRIME 500 ml Hydration drink GREENABLE fresh green apple
				</h3>
				<div className="flex flex-row justify-between items-center w-full">
					<div className="flex flex-row justify-center items-center gap-[0.58rem]">
						<SolanaIcon />
						<p className={styles.itemPrice}>0.05</p>
					</div>
					<div className="flex items-center justify-center">
						<StarRating rating={3.5} variant="small" />
					</div>
				</div>
				<div className="py-[0.87rem] w-full">
					<button className={styles.addToCart}>Add to cart</button>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
