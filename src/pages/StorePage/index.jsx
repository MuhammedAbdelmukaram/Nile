// Components
import Button from '../../components/shared/Button';
import Footer from '../../components/shared/Footer';
import Header from '../../components/shared/Header';
import ItemCard from '../../components/shared/ItemCard';
// Icons
import UpArrow from '../../assets/icons/UpArrow';
import ShareIcon from '../../assets/icons/ShareIcon';
const StorePage = () => {
	return (
		<div>
			<Header />
			<div>Store banner</div>
			<div>
				<h1>Name</h1>
				<button>Follow</button>
				<div>Search</div>
				<nav></nav>
				<button>share</button>
			</div>

			<div className="flex flex-wrap justify-center gap-[1.06rem]">
				{Array.from({ length: 12 }, (_, index) => (
					<ItemCard key={index} />
				))}
			</div>

			<div>
				<Button>
					<UpArrow /> Back to top
				</Button>{' '}
				<Button>
					<ShareIcon /> Share this page
				</Button>
			</div>
			<Footer />
		</div>
	);
};

export default StorePage;
