// Components
import Button from '../../components/shared/Button';
import Footer from '../../components/shared/Footer';
import Header from '../../components/shared/Header';
import ItemCard from '../../components/shared/ItemCard';
import Nav from '../../components/StorePage/Nav';
// Icons
import UpArrow from '../../assets/icons/UpArrow';
import ShareIcon from '../../assets/icons/ShareIcon';
const StorePage = () => {
	return (
		<div>
			<Header />
			<div className="w-full flex flex-col justify-center items-center">
				<div className="max-w-[1500px] min-h-[4.28175rem] w-full">
					<img
						src="/images/defuel-banner.png"
						alt="banner"
						className="w-full h-full min-h-[4.28175rem] cover"
					/>
				</div>
				<Nav />

				<div className="flex flex-wrap max-w-[1500px] w-full justify-center gap-[1.06rem]">
					{Array.from({ length: 12 }, (_, index) => (
						<ItemCard key={index} />
					))}
				</div>

				<div className="flex flex-row justify-center items-center gap-[1.06rem] w-full mt-10">
					<Button variant="secondaryNoCurve">
						<UpArrow /> Back to the top
					</Button>
					<Button>
						<ShareIcon /> Share this page
					</Button>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default StorePage;
