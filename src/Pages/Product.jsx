import React from "react";
import ProductCard from "../Components/ProductCard";

const Product = () => {
    return <>
        <div className=" py-16 px-4 sm:px-6 lg:px-8 h-screen">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-2">
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div >
    </>;
};

export default Product;
