import { useNavigate } from 'react-router-dom';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'; // Importing WalletMultiButton
import InputField from '../InputField/index.jsx';
import UserIcon from '../../../assets/icons/UserIcon.jsx';
import CartIcon from '../../../assets/icons/CartIcon.jsx';
import SearchIcon from '../../../assets/icons/SearchIcon.jsx';
import styles from './header.module.css';

const Header = () => {
	const navigate = useNavigate();
	const actionsList = ['Todays deals', 'Customer Service', 'Registry'];

	const renderSearch = () => (
		<div className="flex flex-row justify-center items-center gap-1.5 px-6">
			<InputField placeholder="Search products" />
			<button>
				<SearchIcon /> Search
			</button>
		</div>
	);

	return (
		<header className={styles.header}>
			<div className="flex justify-between items-center px-6">
				<button className={styles.logoContainer} onClick={() => navigate('/')}>
					<img src="/images/NileLogo.jpeg" alt="Nile Logo" className={styles.logo} />
				</button>
				<div className="hidden sm:block">{renderSearch()}</div>
				<div className="flex flex-row justify-end items-center gap-5">
					<div className="w-[24px] h-[24px]">
						<CartIcon />
					</div>
					<div className="w-[24px] h-[24px]">
						<UserIcon />
					</div>
					<WalletMultiButton /> {/* This button handles wallet connection */}
				</div>
			</div>
			<div className="block mt-3 sm:hidden">{renderSearch()}</div>
			<div className={`${styles.actionsRibbon} px-6 flex justify-start items-center sm:justify-between`}>
				<ul>
					{actionsList.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
			</div>
		</header>
	);
};

export default Header;
