// Libs
import { useState } from 'react';
// Components
import Search from '../Search';
// Icons
import ShareIcon from '../../../assets/icons/ShareIcon';
import PointerIcon from '../../../assets/icons/PointerIcon';
// Styles
import styles from './nav.module.css';

const Nav = () => {
	const [selected, setSelected] = useState(0);
	const [showMenu, setShowMenu] = useState(false);
	const navPages = [
		{
			name: 'Home',
			id: 0,
		},
		{
			name: 'Whats new',
			id: 1,
		},
		{
			name: 'Energy Formula',
			id: 2,
		},
		{
			name: 'Hydration Drink',
			id: 3,
		},
		{
			name: 'Protein bar',
			id: 4,
		},
		{
			name: 'more',
			id: 5,
		},
	];

	const renderNav = () => {
		return (
			<>
				{navPages.map((page) => (
					<li
						key={page.id}
						className={`${styles.navItem} ${
							selected === page.id ? styles.selected : ''
						} transition-all`}
						onClick={() => setSelected(page.id)}>
						{page.name}
					</li>
				))}
				<button className="text-black hidden lg:block">
					<ShareIcon />
				</button>
			</>
		);
	};

	return (
		<div className="w-full">
			<div
				className={`${styles.container} flex flex-row justify-between items-center w-full p-4`}>
				<div className="flex flex-row justify-center items-center gap-[0.62rem]">
					<h2>DeFuel</h2>
					<button className="text-black block lg:hidden">
						<ShareIcon />
					</button>
				</div>
				<div className="hidden lg:block w-full shrink px-5">
					<Search />
				</div>
				<div
					className="lg:hidden flex flex-row justify-center items-center gap-2"
					onClick={() => setShowMenu(!showMenu)}>
					Categories{' '}
					<span
						className={`${
							showMenu ? '-rotate-90' : 'rotate-90'
						} transition-all`}>
						<PointerIcon />
					</span>
				</div>
				<nav className="hidden lg:block">
					<ul className="flex flex-row justify-center items-center gap-5 whitespace-nowrap">
						{renderNav()}
					</ul>
				</nav>
			</div>
			<ul
				className={`${
					showMenu ? '' : 'hidden'
				} lg:hidden flex flex-col justify-center items-center gap-5 my-5 transition-all`}>
				{renderNav()}
			</ul>
		</div>
	);
};

export default Nav;
