import { assets } from "../assets/frontend_assets/assets"
import { NewsLetterBox } from "../components/NewsLetterBox"

const Contact = () => {
  return (
    <div className="bg-blue-50">
      <div className="pt-12 text-center border-t border-navy-200">
        {/* Larger Contact Us title */}
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
          <span>Contact</span>
          <span className="text-blue-800">  us</span>
        </h1>
        <div className="w-24 h-1 mx-auto mt-2 bg-navy-600"></div>
      </div>
      
      <div className="flex flex-col justify-center gap-10 px-4 my-16 md:flex-row">
        {/* Left side - Contact Image with no containers */}
        <div className="w-full md:w-1/2">
          <img 
            className="object-cover rounded-lg w-50 h-50" 
            src={assets.contact_img} 
            alt="Contact Image" 
          />
        </div>
        
        {/* Right side - Contact Information */}
        <div className="flex flex-col items-start justify-center w-full gap-6 p-8 rounded-lg shadow-md md:w-1/2">
          <h2 className="pb-2 text-2xl font-bold border-b-2 text-navy-800 border-navy-400">Our Store</h2>
          
          <div className="flex items-start gap-4 mt-2">
            <div className="mt-1 text-navy-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-navy-700">
              15, Surma Market <br /> VIP Road, Taltola, Delhi
            </p>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="mt-1 text-navy-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <p className="text-navy-700">
              Tel: +919583726238
            </p>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="mt-1 text-navy-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-navy-700">
              Email: GeoFitWear@gmail.com
            </p>
          </div>
          
          <div className="w-full h-px my-4 bg-slate-200"></div>
          
          <h3 className="text-xl font-bold text-navy-800">Careers at GeoFit Wear</h3>
          <p className="text-navy-600">Learn more about our teams and job openings.</p>
          
          <button className="flex items-center gap-2 px-8 py-4 text-sm font-medium text-white transition-all duration-300 transform bg-blue-900 rounded shadow-md hover:bg-blue-900 hover:shadow-lg hover:-translate-y-1">
            <span>Explore Jobs</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Contact Form Section */}
      <div className="px-4 mb-16">
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <h2 className="mb-8 text-2xl font-bold text-center text-navy-800">Send Us a Message</h2>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-navy-700">Your Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border rounded-md border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-500 text-navy-900"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label className="block mb-2 text-sm font-medium text-navy-700">Your Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 border rounded-md border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-500 text-navy-900"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block mb-2 text-sm font-medium text-navy-700">Subject</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border rounded-md border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-500 text-navy-900"
                placeholder="How can we help you?"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block mb-2 text-sm font-medium text-navy-700">Your Message</label>
              <textarea 
                className="w-full h-32 px-4 py-3 border rounded-md border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-500 text-navy-900"
                placeholder="Type your message here..."
              ></textarea>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            <button className="px-8 py-4 text-sm font-medium text-white transition duration-300 rounded-md shadow-md bg-navy-600 hover:bg-navy-800">
              Send Message
            </button>
          </div>
        </div>
      </div>
      
      <NewsLetterBox />
    </div>
  )
}

export default Contact