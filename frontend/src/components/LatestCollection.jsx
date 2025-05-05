import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProduct, setLatestProduct] = useState([]);

    useEffect(() => {
        setLatestProduct(products.slice(0, 10));
    }, [products]);

    // Custom styled Title component to override the default
    const StyledTitle = () => (
        <div className="mb-4">
            <h2 className="text-center" style={{ fontFamily: "'Roboto Slab', serif" }}>
                <span className="text-4xl font-extrabold tracking-wide text-blue-900">LATEST</span>
                <span className="text-4xl font-bold tracking-wide text-black"> COLLECTION</span>
            </h2>
            <div className="w-24 h-1 mx-auto mt-2 bg-blue-900"></div>
        </div>
    );

    return (
        <section className="px-4 mx-auto my-16 max-w-7xl" style={{ fontFamily: "'Roboto Slab', serif" }}>
            {/* Header Section with Custom Styled Title */}
            <div className="py-8 text-center">
                <StyledTitle />
                
                {/* Bold Large Phrases with Navy Blue and Black coloring */}
                <div className="mt-6 mb-8">
                    <p className="text-2xl font-bold text-black md:text-3xl">
                        Discover Excellence, Shop with Confidence
                    </p>
                    <p className="mt-3 text-xl font-bold text-blue-900 md:text-2xl">
                        Where Style Meets Innovation at Prices You will Love
                    </p>
                </div>
            </div>

            {/* Products Grid with Line Below Image on Hover */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-8">
                {latestProduct.map((item, index) => (
                    <div 
                        key={index}
                        className="transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg group"
                    >
                        <ProductItem
                            id={item._id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                        />
                        {/* Navy blue line that appears on hover */}
                        <div className="w-0 h-1 mx-auto mt-1 transition-all duration-300 bg-blue-900 group-hover:w-full"></div>
                    </div>
                ))}
            </div>

            {/* "Explore More" Button */}
            <div className="flex justify-center mt-12">
                <button 
                    className="px-8 py-3 text-lg font-bold text-white transition-all duration-300 bg-black rounded-md hover:bg-blue-900"
                    style={{ fontFamily: "'Roboto Slab', serif" }}
                >
                    Explore More
                </button>
            </div>
        </section>
    );
}

export default LatestCollection;