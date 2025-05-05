import { useContext, useEffect, useState, useCallback } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
    const { products, search, showSearch } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(true);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState('relevant');

    const toggleCategory = (e) => {
        const selectedCategory = e.target.value;
        setCategory(prev => 
            prev.includes(selectedCategory) 
                ? prev.filter(item => item !== selectedCategory)
                : [...prev, selectedCategory]
        );
    };

    const toggleSubCategory = (e) => {
        const selectedSubCategory = e.target.value;
        setSubCategory(prev => 
            prev.includes(selectedSubCategory)
                ? prev.filter(item => item !== selectedSubCategory)
                : [...prev, selectedSubCategory]
        );
    };

    const applyFilter = useCallback(() => {
        let filteredProducts = [...products];
        
        // Apply search filter if search is active
        if (showSearch && search) {
            filteredProducts = filteredProducts.filter(item =>
                item.name.toLowerCase().includes(search.toLowerCase())
            );
        }
        
        // Apply category filter only if categories are selected
        if (category.length > 0) {
            filteredProducts = filteredProducts.filter(item => 
                category.includes(item.category)
            );
        }
        
        // Apply subcategory filter only if subcategories are selected
        if (subCategory.length > 0) {
            filteredProducts = filteredProducts.filter(item => 
                subCategory.includes(item.subCategory)
            );
        }
        
        setFilterProducts(filteredProducts);
    }, [products, category, subCategory, search, showSearch]);

    const sortProduct = useCallback(() => {
        let sortedProducts = [...filterProducts];
        switch (sortType) {
            case 'low-high':
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case 'high-low':
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }
        setFilterProducts(sortedProducts);
    }, [filterProducts, sortType]);

    // Initialize filterProducts with all products on component mount
    useEffect(() => {
        if (products && products.length > 0) {
            setFilterProducts([...products]);
        }
    }, [products]);

    // Apply filters when filter criteria change
    useEffect(() => {
        applyFilter();
    }, [applyFilter]);

    // Apply sorting when sort type or filtered products change
    useEffect(() => {
        sortProduct();
    }, [sortProduct]);

    return (
        <>
            {/* Add Roboto Slab font */}
            <link 
                href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;600;700&display=swap" 
                rel="stylesheet" 
            />
            
            <div className="flex flex-col gap-1 p-4 pt-10 border-t border-gray-200 sm:flex-row sm:gap-10" style={{fontFamily: "'Roboto Slab', serif"}}>
                {/* Filter Section */}
                <div className="min-w-60">
                    <p 
                        onClick={() => setShowFilter(!showFilter)} 
                        className="flex items-center gap-2 my-2 text-xl font-bold cursor-pointer text-navy-800"
                    >
                        FILTERS
                        <img 
                            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} 
                            src={assets.dropdown_icon} 
                            alt="Filter toggle" 
                        />
                    </p>
                    <div className={`border border-gray-200 pl-5 py-3 mt-6 bg-white shadow-md rounded-md ${showFilter ? '' : 'hidden'} sm:block`}>
                        <p className="pb-2 mb-3 text-sm font-medium text-blue-900 border-b border-gray-200">CATEGORIES</p>
                        <div className="flex flex-col gap-2 text-sm text-navy-700">
                            {['Men', 'Women', 'Kids'].map((cat) => (
                                <p key={cat} className="flex items-center gap-2 p-1 transition-colors rounded hover:bg-gray-50">
                                    <input 
                                        type="checkbox" 
                                        className="w-4 h-4 accent-navy-600" 
                                        value={cat} 
                                        checked={category.includes(cat)}
                                        onChange={toggleCategory} 
                                    />
                                    <span className={category.includes(cat) ? "font-medium" : ""}>{cat}</span>
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className={`border border-gray-200 pl-5 py-3 my-5 bg-white shadow-md rounded-md ${showFilter ? '' : 'hidden'} sm:block`}>
                        <p className="pb-2 mb-3 text-sm font-medium text-blue-900 border-b border-gray-200">TYPE</p>
                        <div className="flex flex-col gap-2 text-sm text-navy-700">
                            {[
                                { value: 'Topwear', label: 'Top Wear' },
                                { value: 'Bottomwear', label: 'Bottom Wear' },
                                { value: 'Winterwear', label: 'Winter Wear' }
                            ].map((subCat) => (
                                <p key={subCat.value} className="flex items-center gap-2 p-1 transition-colors rounded hover:bg-gray-50">
                                    <input 
                                        type="checkbox" 
                                        className="w-4 h-4 accent-navy-600" 
                                        value={subCat.value} 
                                        checked={subCategory.includes(subCat.value)}
                                        onChange={toggleSubCategory} 
                                    />
                                    <span className={subCategory.includes(subCat.value) ? "font-medium" : ""}>{subCat.label}</span>
                                </p>
                            ))}
                        </div>
                    </div>
                    {/* Clear Filters Button */}
                    {(category.length > 0 || subCategory.length > 0) && (
                        <button 
                            onClick={() => {
                                setCategory([]);
                                setSubCategory([]);
                            }}
                            className="w-full px-4 py-2 mt-3 text-sm font-medium text-white bg-blue-900 rounded-md hover:bg-blue-800"
                        >
                            Clear Filters
                        </button>
                    )}
                </div>
                
                {/* Products Section */}
                <div className="flex-1 p-4 rounded-lg shadow-md">
                    <div className="flex items-center justify-between pb-3 mb-6 border-b border-gray-200">
                        <div className="text-base sm:text-2xl">
                            <Title text1={"ALL"} text2={" COLLECTION"} customClass="text-navy-800" highlightClass="text-navy-600 font-bold" />
                            <p className="mt-1 text-sm text-navy-600">
                                {filterProducts.length} {filterProducts.length === 1 ? 'product' : 'products'} found
                            </p>
                        </div>
                        <select 
                            value={sortType}
                            onChange={(e) => setSortType(e.target.value)} 
                            className="px-3 py-1 text-sm bg-white border-2 border-gray-200 rounded-md text-navy-700 focus:outline-none focus:border-navy-500"
                        >
                            <option value="relevant">Sort by: Relevant</option>
                            <option value="low-high">Sort by: Low to High</option>
                            <option value="high-low">Sort by: High to Low</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 gap-y-6">
                        {filterProducts.length > 0 ? (
                            filterProducts.map((item, index) => (
                                <div key={item._id || index} className="overflow-hidden transition-transform bg-white rounded-md hover:scale-105 hover:shadow-lg">
                                    <ProductItem 
                                        id={item._id} 
                                        image={item.image} 
                                        name={item.name} 
                                        price={item.price} 
                                    />
                                </div>
                            ))
                        ) : (
                            <div className="py-12 text-center text-navy-500 col-span-full">
                                <svg className="w-12 h-12 mx-auto mb-4 text-navy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <p className="mb-2 text-lg font-medium text-navy-700">No products found matching the selected filters.</p>
                                {(category.length > 0 || subCategory.length > 0) && (
                                    <button 
                                    onClick={() => {
                                        setCategory([]);
                                        setSubCategory([]);
                                    }}
                                    className="px-4 py-2 mt-3 text-sm font-medium text-white bg-blue-900 rounded-md hover:bg-blue-800"
                                >
                                    Clear Filters
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Collection;