import StarRating from '../StarRating';

import HeartIcon from '../../../assets/icons/HeartIcon';

import styles from './itemCard.module.css';
import SolanaIcon from '../../../assets/icons/SolanaIcon';

const ItemCard = () => {
	return (
		<div className={`flex flex-col w-[11.375rem] h-[22.125rem] ${styles.card}`}>
			<div className="">
				<div className="bg-cover bg-center h-[11.375rem] w-full flex justify-end items-end p-[0.62rem] bg-[url('/images/ExampleItem.png')]">
					<button className={styles.favoritesContainer}>
						<HeartIcon />
					</button>
				</div>
			</div>
			<div className="flex flex-col mt-[0.62rem] justify-center items-center">
				<h3 className="w-[10.25rem]">
					CRIME 500 ml Hydration drink GREENABLE fresh green apple
				</h3>
				<div className="w-[10.25rem] flex flex-row justify-between items-center">
					<div className="flex flex-row gap-[0.56rem]">
						<SolanaIcon />
						<span>0.05</span>
					</div>
					<div className="flex flex-row scale-[0.54]">
						<StarRating rating={3.5} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
