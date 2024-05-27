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
	const crimeEnergy = {
		id: 0,
		productName: 'CRIME 500 ml Hydration drink GREENABLE fresh green apple',
		description: '',
		images: ['/images/ExampleItem.png'],
		brand: 'DeFuel',
		flavour: 'Crime energy',
		size: '500ml',
		price: 0.05,
		discount: [],
		category: 'Food',
		subcategory: 'Drink',
		ratings: 3.5,
		reviews: [],
		supplierShop: 'DeFuel',
		availability: true,
		tags: [],
	};

	const arr = new Array(12).fill(crimeEnergy);

	return (
		<div>
			<Header />
			<Nav />
			<div className="w-full min-h-[4.28175rem] w-full mt-5">
				<img
					src="/images/defuel-banner.png"
					alt="banner"
					className="w-full h-full min-h-[4.28175rem] cover"
				/>
			</div>
			<div className="w-full flex justify-center">
				<div className="w-full flex justify-center flex-col px-[1.63rem] min-w-[320px] max-w-[1500px] overflow-x-hidden">
					<div className="w-full flex flex-col justify-center items-center mt-5">
						<div className="flex flex-wrap max-w-[1500px] w-full justify-center gap-[1.06rem] mt-10">
							{arr.map((item, index) => (
								<ItemCard
									key={index}
									id={item.id}
									name={item.productName}
									price={item.price}
									rating={item.ratings}
								/>
							))}
						</div>

						<div className="flex flex-row justify-center items-center gap-[1.06rem] w-full mt-10">
							<Button
								variant="secondaryNoCurve"
								onClick={() => {
									window.scrollTo(0, 0);
								}}>
								<UpArrow /> Back to the top
							</Button>
							<Button>
								<ShareIcon /> Share this page
							</Button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default StorePage;
