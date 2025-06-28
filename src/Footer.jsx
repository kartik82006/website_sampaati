export default function Footer() {
  return (
    <footer className="bg-[#0c121f] text-white px-4 sm:px-6 lg:px-8 py-12 border-t border-[#1e293b]">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Logo + Email */}
          <div className="md:col-span-4 lg:col-span-3">
            <img 
              src="/logo.svg" 
              alt="Skyroot Logo" 
              className="h-16 mb-6 hover:opacity-90 transition-opacity" 
            />
            <p className="text-sm text-gray-400 mb-4">
              Pioneering the next generation of space technology
            </p>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@skyroot.in" className="text-sm text-gray-400 hover:text-white transition-colors">
                info@skyroot.in
              </a>
            </div>
          </div>
  
          {/* Stay in Orbit */}
          <div className="md:col-span-8 lg:col-span-5">
            <h3 className="text-white font-semibold mb-4 tracking-widest text-sm uppercase">
              Stay in our orbit
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and launches
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 flex-grow bg-[#1e293b] text-white placeholder-gray-500 outline-none rounded focus:ring-2 focus:ring-blue-500 transition-all" 
              />
              <button className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded font-medium transition-colors shadow-sm">
                Subscribe
              </button>
            </div>
          </div>
  
          {/* Links */}
          <div className="md:col-span-12 lg:col-span-4 grid grid-cols-2 gap-8 mt-8 md:mt-0">
            <div>
              <h4 className="mb-4 tracking-widest font-semibold text-sm uppercase">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">News</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 tracking-widest font-semibold text-sm uppercase">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Launch Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Technology</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Whistleblower</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
  
        <hr className="my-10 border-gray-800" />
  
        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-5 mb-4 md:mb-0">
            {['facebook', 'twitter', 'youtube', 'linkedin', 'instagram'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={social}
              >
                <img 
                  src={`/icons/${social}.svg`} 
                  alt={social} 
                  className="h-5 w-5" 
                />
              </a>
            ))}
          </div>
          <div className="text-center md:text-right">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Skyroot Aerospace. All rights reserved.
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Pioneering affordable access to space
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}