import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from '../Pages/Product';
import Contact from '../Pages/Contact';
import HomePage from '../Pages/Home';


const AppRouter = () => (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
);

export default AppRouter;
