'use client';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const loanData = [
  { loanType: 'Education Loan', fee: 'Rs. 20 Lakh' },
  { loanType: 'Health Loan', fee: 'Rs. 15 Lakh' },
  { loanType: 'Small Business Loan', fee: 'Rs. 10 Lakh' },
  { loanType: 'Emergency Loan', fee: 'Rs. 5 Lakh' },
  { loanType: 'Marriage Loan', fee: 'Rs. 8 Lakh' },
  { loanType: 'Agriculture Loan', fee: 'Rs. 12 Lakh' },
];

export default function LoanInfoSection() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLoans = loanData.filter(loan =>
    loan.loanType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="loan" className="bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center animate-fadeIn">
          Loan Information
        </h2>

        {/* Search Bar */}
        <div className="flex items-center max-w-sm mx-auto mb-8 relative">
          <input
            type="text"
            placeholder="Search loan type..."
            className="w-full border border-green-300 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 text-green-500" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredLoans.map((loan, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-all duration-300 animate-fadeIn"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-2">{loan.loanType}</h3>
              <p className="text-gray-700">Loan Amount: <span className="font-medium">{loan.fee}</span></p>
            </div>
          ))}

          {filteredLoans.length === 0 && (
            <div className="text-center text-gray-500 col-span-full">
              No loan types matched your search.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

  