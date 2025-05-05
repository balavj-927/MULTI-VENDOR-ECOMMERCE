import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => item.bestseller);
        setBestSeller(bestProduct.slice(0, 5));
    }, [products]);

    return (
        <div className="relative w-full py-20 overflow-hidden">
            <div className="relative z-10 px-4 mx-auto max-w-7xl">
                {/* Bold One-Line Header Section */}
                <div className="mb-16 text-center">
                    {/* Top Blue Line */}
                    <div className="flex justify-center mb-6">
                        <div className="w-64 h-1 bg-blue-800 rounded-full"></div>
                    </div>
                    
                    {/* Single Line Bold Large Title */}
                    <div className="flex items-center justify-center">
                        <div className="w-24 h-px bg-blue-800"></div>
                        <h2 className="px-6 text-3xl font-bold tracking-wide text-blue-900">GEOFIT WEAR BEST SELLERS</h2>
                        <div className="w-24 h-px bg-blue-800"></div>
                    </div>
                    
                    {/* Bottom Blue Line */}
                    <div className="flex justify-center mt-6">
                        <div className="w-64 h-1 bg-blue-800 rounded-full"></div>
                    </div>
                    
                    <p className="max-w-2xl mx-auto mt-8 text-sm leading-relaxed text-blue-900 md:text-base">
                        Discover performance-driven activewear that combines innovative technology with sustainable materials.
                        <span className="block mt-2 font-semibold">Where style meets function, and Earth meets fitness.</span>
                    </p>
                </div>
                
                {/* Products Grid */}
                <div className="relative z-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {bestSeller.map((item, index) => (
                        <div key={index} className="relative group">
                            <div className="h-full overflow-hidden transition-all duration-300 transform bg-white border-b-4 border-blue-700 shadow-xl rounded-xl group-hover:scale-105 group-hover:shadow-2xl">
                                <div className="relative">
                                    {index === 0 && (
                                        <span className="absolute top-0 left-0 z-10 px-3 py-1.5 text-xs font-bold text-white bg-blue-800 rounded-br-lg">
                                            #1 BEST SELLER
                                        </span>
                                    )}
                                    <ProductItem
                                        id={item._id}
                                        image={item.image}
                                        name={item.name}
                                        price={item.price}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 translate-y-full bg-blue-800 bg-opacity-0 group-hover:bg-opacity-90 group-hover:translate-y-0">
                                        <button className="w-full py-1.5 text-xs font-medium text-blue-800 bg-white rounded-md">
                                            Quick View
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Call to Action Button */}
                <div className="mt-16 text-center">
                    <button className="px-8 py-3 font-medium text-white transition-all duration-300 bg-blue-800 rounded-lg shadow-lg hover:bg-blue-900 hover:shadow-xl">
                        View All Best Sellers
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BestSeller;