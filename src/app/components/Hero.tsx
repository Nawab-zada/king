import { FaHandsHelping, FaLeaf, FaRegSmileBeam } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-green-100 py-2">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left animate-fade-in-down">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-800 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400">
              Empowering Lives,
            </span>{" "}
            <br />
            <span className="text-green-800">
              One Loan at a Time
            </span>
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl mb-6 animate-fade-in-up">
            Join Akhuwat Microfinance in building a future free of poverty through interest-free loans.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#apply"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow transition-transform transform hover:scale-105"
            >
              Apply Now
            </a>
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              className="flex items-center gap-2 text-green-700 font-medium hover:underline"
            >
              <FaHandsHelping className="text-xl" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Image & Icons */}
        <div className="md:w-1/2 relative animate-fade-in-up">
          <img
            src="https://images.unsplash.com/photo-1581090700227-1c9a6cfd22ce?auto=format&fit=crop&w=800&q=80"
            alt="Helping Hand"
            className="rounded-xl shadow-xl w-full max-w-md mx-auto"
          />
          {/* Animated Icons */}
          <div className="absolute top-0 left-0 p-4">
            <div className="bg-white rounded-full shadow-lg p-2 animate-bounce">
              <FaLeaf className="text-green-600 text-2xl" />
            </div>
          </div>
          <div className="absolute bottom-4 right-4 p-4">
            <div className="bg-white rounded-full shadow-lg p-2 animate-pulse">
              <FaRegSmileBeam className="text-yellow-500 text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
