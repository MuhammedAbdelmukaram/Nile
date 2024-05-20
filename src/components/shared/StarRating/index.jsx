import StarIcon from '../../../assets/icons/StarIcon';

import styles from './starRating.module.css';

const StarRating = ({ rating }) => {
	return (
		<>
			{Array.from({ length: 5 }, (_, index) => (
				<div
					key={index}
					className={
						index <= Math.ceil(rating) - 1 ? styles.star : styles.starEmpty
					}>
					<StarIcon />
				</div>
			))}
		</>
	);
};

export default StarRating;
