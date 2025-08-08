export default function Footer() {
    return (
      <footer className="bg-green-700 text-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Akhuwat</h2>
            <p className="text-sm leading-relaxed">
              Akhuwat is dedicated to creating a poverty-free society by providing
              interest-free microfinance, education, health, and housing services.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-yellow-300 transition">Home</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Loan Programs</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Donate</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Contact</a></li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="text-sm space-y-2">
              <li>📍 123 Akhuwat Street, Lahore, Pakistan</li>
              <li>📞 +92 42 12345678</li>
              <li>✉️ info@akhuwat.org.pk</li>
            </ul>
          </div>
  
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-300 transition">FB</a>
              <a href="#" className="hover:text-yellow-300 transition">IG</a>
              <a href="#" className="hover:text-yellow-300 transition">TW</a>
            </div>
          </div>
        </div>
  
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/923001234567"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20b955] p-4 rounded-full shadow-lg transition duration-300 z-50 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7 fill-white">
            <path d="M16 .5C7.438.5.5 7.438.5 16c0 2.828.734 5.59 2.125 8.016L.5 31.5l7.672-2.094A15.42 15.42 0 0 0 16 31.5c8.563 0 15.5-6.938 15.5-15.5S24.563.5 16 .5zm0 28.25a12.7 12.7 0 0 1-6.453-1.75l-.453-.266-4.547 1.25 1.25-4.438-.297-.469a12.713 12.713 0 0 1-1.922-6.938c0-7.016 5.719-12.75 12.766-12.75 3.406 0 6.609 1.328 9.016 3.734a12.72 12.72 0 0 1 3.734 9.016c0 7.047-5.734 12.75-12.75 12.75zm7.297-9.516c-.406-.203-2.406-1.188-2.781-1.328-.375-.141-.656-.203-.938.203s-1.078 1.328-1.328 1.594-.484.297-.891.094c-.406-.203-1.719-.633-3.281-2.016-1.219-1.078-2.031-2.406-2.266-2.813s-.023-.625.18-.828c.188-.188.406-.484.609-.734.203-.25.266-.422.406-.703.141-.281.07-.531-.035-.734-.094-.203-.844-2.031-1.156-2.781-.305-.75-.609-.641-.844-.641h-.719c-.25 0-.656.094-1 .469-.344.375-1.312 1.281-1.312 3.125 0 1.844 1.344 3.625 1.531 3.875.188.25 2.641 4.047 6.406 5.672.898.391 1.594.625 2.141.797.898.285 1.719.25 2.375.156.727-.109 2.406-.984 2.75-1.938.344-.953.344-1.766.242-1.938-.094-.172-.375-.281-.781-.484z"/>
          </svg>
        </a>
  
        {/* Bottom Bar */}
        <div className="border-t border-green-500 mt-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center text-sm">
            <p>© {new Date().getFullYear()} Akhuwat. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 sm:mt-0">
              <a href="#" className="hover:text-yellow-300 transition">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-300 transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  