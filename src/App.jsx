import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop'; // Make sure the path is correct
import LandingPage from './pages/LandingPage';
import ProductPage from './pages/ProductPage';
import StorePage from './pages/StorePage';
import './index.css';
import WalletProviderSetup from "./utils/WalletProviderSetup.jsx";

const App = () => (
	<WalletProviderSetup>
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/store" element={<StorePage />} />
				<Route path="/product" element={<ProductPage />} />
			</Routes>
		</BrowserRouter>
	</WalletProviderSetup>
);

export default App;
