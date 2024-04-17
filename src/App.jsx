import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from "./pages/LandingPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import SellerProfile from "./pages/SellerProfile.jsx";
import CategoriesPage from "./pages/CategoriesPage.jsx";
import SellerRegistrationPage from "./pages/SellerRegistrationPage.jsx";

const App = () => (
    <BrowserRouter>
        <Routes>

            <Route path="/" element={<LandingPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/sellerProfile" element={<SellerProfile />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/seller/register" element={<SellerRegistrationPage />} />

        </Routes>
    </BrowserRouter>
);


export default App;
