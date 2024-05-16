//Libs
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Pages
import LandingPage from './pages/LandingPage';
import ProductPage from './pages/ProductPage';
import StorePage from './pages/StorePage';
//Styles
import './index.css';

const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/store" element={<StorePage />} />
			<Route path="/product" element={<ProductPage />} />
		</Routes>
	</BrowserRouter>
);

export default App;
