import StarIcon from '../../../assets/icons/StarIcon';
import SmallStarIcon from '../../../assets/icons/SmallStarIcon';

import styles from './starRating.module.css';

const StarRating = ({ rating, variant = 'normal' }) => {
	return (
		<>
			{Array.from({ length: 5 }, (_, index) => (
				<div
					key={index}
					className={`${
						index <= Math.ceil(rating) - 1 ? styles.star : styles.starEmpty
					}`}>
					{variant === 'small' ? <SmallStarIcon /> : <StarIcon />}
				</div>
			))}
		</>
	);
};

export default StarRating;
