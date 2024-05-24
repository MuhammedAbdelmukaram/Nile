// Libs
import { useNavigate } from 'react-router-dom';
// Icons
import StoreIcon from '../../../assets/icons/StoreIcon';
// Styles
import styles from './featuredStore.module.css';

const FeaturedStore = ({
	logo,
	products,
	variant = 'purple',
	linkTo = '/store',
}) => {
	const navigate = useNavigate();
	return (
		<div
			className={`relative overflow-hidden w-full h-[11.5rem] flex grow cursor-pointer ${
				variant === 'blue'
					? styles.bluePrimary
					: variant === 'yellow'
					? styles.yellowPrimary
					: styles.purplePrimary
			}`}
			onClick={() => navigate(linkTo)}>
			<div
				className={`absolute -bottom-3/4 -right-1/4 w-[70%] h-[200%] rotate-12 ${
					variant === 'blue'
						? styles.blueSecondary
						: variant === 'yellow'
						? styles.yellowSecondary
						: styles.purpleSecondary
				}`}></div>
			<div className="absolute top-3 left-4 z-50 md:top-8 md:left-8">
				<div className={`flex flex-row items-center gap-2`}>
					<StoreIcon /> <p className={styles.officialStore}>OFFICIAL STORE</p>
				</div>
				<p className={styles.directly}>Directly from the brands</p>
			</div>
			<div className={`z-50 absolute bottom-4 -left-4 md:left-0`}>
				<img src={logo} alt="Logo" />
			</div>
			<div className={`z-10 absolute bottom-0 -right-10 md:right-0`}>
				<img src={products} alt="Products" />
			</div>
		</div>
	);
};

export default FeaturedStore;
