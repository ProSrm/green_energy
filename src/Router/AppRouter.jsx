import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Product from '../Pages/Product';
import Contact from '../Pages/Contact';

const AppRouter = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
);

export default AppRouter;
