import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div>
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm mx-auto">
                <div>
                    <img src={assets.logo} className="w-32 mb-5" alt="Company Logo" />
                    <p className="w-full text-navy-900 md:w-2/3">Explore unbeatable deals and endless variety at GeoFit Wear, your ultimate online shopping destination for everything you need!</p>
                </div>
                <div>
                    <p className="mb-5 text-xl font-medium text-blue-900">Company</p>
                    <ul className="flex flex-col gap-1 text-navy-900">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className="mb-5 text-xl font-medium text-blue-900">Get in Touch</p>
                    <ul className="flex flex-col gap-1 text-navy-900">
                        <li>+919572835822</li>
                        <li>GeoFitWear@ecommerce.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className="py-5 text-sm text-center">Copyright {currentYear}@GeoFitWearEcommerce.com - All Right Reserved</p>
            </div>
        </div>
    );
}

export default Footer;