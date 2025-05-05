export const NewsLetterBox = () => {
    const onSubmitHandler = () => {
        event.preventDefault();
    }

    return (
        <div className="text-center">
            <p className="text-2xl font-medium text-blue-900">Subscribe now & get 20% off</p>
            <p className="mt-3 text-navy-400">Explore unbeatable deals and endless variety at GeoFitWear, your ultimate online shopping destination for everything you need!</p>
            <form onSubmit={onSubmitHandler} className="flex items-center w-full gap-3 pl-3 mx-auto my-6 border sm:w-1/2">
                <input className="w-full outline-none sm:flex-1" required type="email" placeholder="Enter your Email" />
                <button type="submit" className="px-10 py-4 text-sm font-medium text-white bg-blue-900">Subscribe</button>
            </form>
        </div>
    );
}