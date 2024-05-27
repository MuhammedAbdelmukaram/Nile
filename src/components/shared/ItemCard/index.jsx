// Libs
import { useNavigate } from 'react-router-dom';
// Components
import StarRating from '../StarRating';
// Icons
import HeartIcon from '../../../assets/icons/HeartIcon';
// Styles
import styles from './itemCard.module.css';

const ItemCard = ({ id, name, price, rating }) => {
	const navigate = useNavigate();

	return (
		<div
			className={`flex flex-col min-w-[11.375rem] basis-1/2-gap-sm sm:basis-1/4-gap grow ${styles.card}`}>
			<button
				className="bg-cover bg-center h-[11.375rem] w-full flex justify-end items-end p-[0.62rem] bg-[url('/images/ExampleItem.png')] cursor-pointer"
				onClick={() => navigate(`/product/?id=${id}`)}>
				<button className={styles.favoritesContainer}>
					<HeartIcon />
				</button>
			</button>
			<div className="flex flex-col mt-[0.62rem] px-2 justify-center items-center">
				<button onClick={() => navigate(`/product/?id=${id}`)}>
					<h3 className="hover:underline cursor-pointer text-left">{name}</h3>
				</button>
				<div className="flex flex-row justify-between items-center w-full">
					<div className="flex flex-row justify-center items-center gap-[0.58rem]">
						<div className="w-[20px] h-[20px] flex justify-center items-center">
							<img
								src="/icons/SolanaIcon.png"
								alt="Solana Icon"
								className="object-cover"
							/>
						</div>
						<p className={styles.itemPrice}>{price}</p>
					</div>
					<div className="flex items-center justify-center">
						<StarRating rating={rating} variant="small" />
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
