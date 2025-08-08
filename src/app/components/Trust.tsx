export default function TrustSection() {
    return (
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Thousands Trust <span className="text-green-600">Akhuwat</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            For over two decades, we’ve been empowering individuals and families
            through interest-free microfinance, built on transparency, trust, and compassion.
          </p>
  
          {/* Trust Stats */}
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
              <p className="text-3xl font-bold text-green-600">2M+</p>
              <p className="mt-2 text-gray-500">Families Supported</p>
            </div>
            <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
              <p className="text-3xl font-bold text-green-600">20+</p>
              <p className="mt-2 text-gray-500">Years of Service</p>
            </div>
            <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
              <p className="text-3xl font-bold text-green-600">99%</p>
              <p className="mt-2 text-gray-500">Loan Recovery Rate</p>
            </div>
            <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
              <p className="text-3xl font-bold text-green-600">100%</p>
              <p className="mt-2 text-gray-500">Transparency</p>
            </div>
          </div>
  
          {/* Trust Statement */}
          <div className="mt-12 max-w-3xl mx-auto bg-green-50 border border-green-200 p-8 rounded-2xl shadow-sm">
            <p className="text-lg text-gray-800 leading-relaxed">
              “At Akhuwat, we believe in helping communities grow without the burden
              of interest. Every contribution, every loan, and every repayment is
              a step towards a poverty-free Pakistan.”
            </p>
            <p className="mt-4 font-semibold text-green-700">– Akhuwat Team</p>
          </div>
        </div>
      </section>
    );
  }
  