//Components
import Button from '../Button/index.jsx';
import InputField from '../InputField/index.jsx';
//Styles
import styles from './footer.module.css';

const Footer = () => {
	const renderSubscribe = () => {
		return (
			<div
				className={`${styles.subscribeContainer} flex flex-row justify-center items-center w-full`}>
				<InputField placeholder="examplemail@gmail.com" />
				<Button>Subscribe</Button>
			</div>
		);
	};

	return (
		<footer className="flex flex-col justify-center items-center pb-6 md:flex-row md:h-48 md:justify-between md:gap-2">
			<div className="md:flex md:flex-col md:justify-between md:max-w-[25rem] md:w-full">
				<div className="w-full flex justify-start">
					<div className={styles.logoContainer}>
						<img
							src="/images/NileLogo.jpeg"
							alt="Nile Logo"
							className={styles.logo}
						/>
					</div>
				</div>
				<div className="w-full md:hidden">{renderSubscribe()}</div>
				<div className="mt-5 md:mt-[0.62rem]">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
				<div
					className={`${styles.emailContact} md:mt-1 w-full flex justify-start`}>
					<p className="font-inter">
						xxx@nile.com | xxx@nile.com | xxx@nile.com
					</p>
				</div>
				<div
					className={`${styles.emailContact} md:mt-1 w-full flex justify-start`}>
					<p className="font-inter">
						+1 (123) 456-7890 | +1 (123) 456-7890 | +1 (123) 456-7890
					</p>
				</div>
			</div>
			<div className="md:relative md:w-full md:max-w-[25rem] md:h-full md:pt-7">
				<div className="hidden md:block md:w-full md:absolute md:top-0 md:right-0">
					{renderSubscribe()}
				</div>
				<div
					className={`${styles.copyRight}  md:absolute md:bottom-0 md:right-0`}>
					<p>© 2024 Nile. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
