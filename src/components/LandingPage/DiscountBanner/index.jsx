import styles from './discountBanner.module.css';
const DiscountBanner = () => {
	const rectangle = () => {
		return <div className={styles.rectangle} />;
	};

	return (
		<div className="w-full relative flex justify-center items-center mt-10">
			<div className="w-32 h-32 absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
				{rectangle()}
			</div>
			<div
				className={`${styles.ribbon} flex flex-col gap-[0.44rem] md:flex-row md:gap-[1.44rem] justify-center items-center w-full py-3`}>
				<h2 className="md:text-xl">Up to 40% off all appliances</h2>
				<div className={`${styles.countdown} md:text-[1.0625rem]`}>
					Sale starts in: <b>countdown</b>
				</div>
			</div>
			<div className="w-32 h-32 absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
				{rectangle()}
			</div>
		</div>
	);
};

export default DiscountBanner;
