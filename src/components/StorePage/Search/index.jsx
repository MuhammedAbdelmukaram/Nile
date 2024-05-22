// Icons
import SearchIcon from '../../../assets/icons/SearchIcon';
// Styles
import styles from './search.module.css';

const Search = () => {
	return (
		<div
			className={`${styles.container} flex justify-between items-center shrink min-w-[10rem] max-w-[32rem] w-full px-[0.62rem] pb-2`}>
			<input
				type="text"
				placeholder="Search Defuel"
				className={styles.searchInput}
			/>
			<button>
				<SearchIcon />
			</button>
		</div>
	);
};

export default Search;
