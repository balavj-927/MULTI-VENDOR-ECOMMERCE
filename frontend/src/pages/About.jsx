import { assets } from "../assets/frontend_assets/assets";
import { NewsLetterBox } from "../components/NewsLetterBox";


const About = () => {
    return (
        <div className="bg-blue-50">
            {/* Header Section */}
            <div className="py-12 bg-blue-900">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-white">
                        <span>ABOUT</span>
                        <span className="text-blue-200"> US</span>
                    </h1>
                    <div className="w-20 h-1 mx-auto mt-4 bg-blue-400"></div>
                </div>
            </div>

            {/* About Content Section - Minimized */}
            <div className="px-4 py-10">
                <div className="flex flex-col gap-12 md:flex-row">
                    {/* Image with hovering effect and navy blue overlay */}
                    <div className="relative w-full md:max-w-[450px] group">
                        <div className="absolute inset-0 z-10 transition-opacity duration-300 rounded-lg opacity-0 bg-blue-900/20 group-hover:opacity-100"></div>
                        <div className="absolute transition-transform duration-300 transform border-2 border-blue-900 rounded-lg opacity-0 -inset-2 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:opacity-100"></div>
                        <img 
                            className="w-full relative z-0 rounded-lg shadow-md transition-transform duration-300 group-hover:scale-[0.98] group-hover:shadow-xl" 
                            src={assets.about_img} 
                            alt="About Us Image" 
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-4 text-black">
                        <p>Explore unbeatable deals and endless variety at GeoFit Wear, your ultimate online shopping destination for everything you need!</p>
                        <p>GeoFit Wear aims to empower customers to find everything they need while maintaining a focus on convenience, sustainability, and improving everyday lives.</p>
                        <h3 className="text-xl font-semibold text-blue-900">Our Mission</h3>
                        <p className="italic">GeoFit Wear mission is to be Earth most customer-centric company, where customers can find and discover anything they might want to buy online, while offering the lowest possible prices, the best selection, and the utmost convenience.</p>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="py-10 bg-gray-50">
                <div className="px-4">
                    <div className="mb-8 text-center">
                        <h2 className="text-2xl font-bold text-blue-900">Why Choose Us</h2>
                        <div className="w-20 h-1 mx-auto mt-2 bg-blue-900"></div>
                    </div>
                    
                    <div className="grid gap-6 md:grid-cols-3">
                        {/* Quality Card */}
                        <div className="p-6 transition-shadow duration-300 bg-white border-t-4 border-blue-900 rounded-lg shadow-md hover:shadow-lg">
                            <h3 className="mb-3 text-lg font-bold text-blue-900">Quality Assurance</h3>
                            <p className="text-gray-700">
                                At GeoFit Wear, we ensure the highest standards of quality across every product. With rigorous checks and trusted suppliers, we guarantee that every purchase meets your expectations, delivering reliability and value every time.
                            </p>
                        </div>
                        
                        {/* Convenience Card */}
                        <div className="p-6 transition-shadow duration-300 bg-white border-t-4 border-blue-900 rounded-lg shadow-md hover:shadow-lg">
                            <h3 className="mb-3 text-lg font-bold text-blue-900">Convenience</h3>
                            <p className="text-gray-700">
                                GeoFit Wear makes shopping easier than ever with a user-friendly platform, fast delivery options, and a wide range of products at your fingertips. Whether at home or on the go, find everything you need with just a few clicks.
                            </p>
                        </div>
                        
                        {/* Customer Service Card */}
                        <div className="p-6 transition-shadow duration-300 bg-white border-t-4 border-blue-900 rounded-lg shadow-md hover:shadow-lg">
                            <h3 className="mb-3 text-lg font-bold text-blue-900">Exceptional Customer Service</h3>
                            <p className="text-gray-700">
                                We are committed to providing unparalleled customer support. From fast resolutions to seamless returns, our team is dedicated to ensuring your shopping experience is smooth, hassle-free, and satisfying.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="py-8">
                <NewsLetterBox />
            </div>
        </div>
    );
};

export default About;