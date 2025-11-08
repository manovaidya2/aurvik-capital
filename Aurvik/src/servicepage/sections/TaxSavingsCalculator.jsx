import React, { useState } from "react";

const TaxSavingsCalculator = () => {
  const [profit, setProfit] = useState("");
  const [savings, setSavings] = useState(null);

  const calculateSavings = () => {
    const result = profit ? (profit * 0.3).toFixed(2) : 0; // 30% tax saved
    setSavings(result);
  };

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Estimate Your Tax Savings
        </h2>
        <p className="text-gray-600 mb-8">
          Enter your annual profit to estimate potential savings with a UAE structure.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="number"
            value={profit}
            onChange={(e) => setProfit(e.target.value)}
            placeholder="Enter profit (₹)"
            className="px-4 py-3 rounded-md border border-gray-300 w-full sm:w-64"
          />
          <button
            onClick={calculateSavings}
            className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800"
          >
            Calculate
          </button>
        </div>
        {savings !== null && (
          <p className="mt-6 text-lg font-semibold text-green-700">
            💰 Estimated Savings: ₹{savings}
          </p>
        )}
      </div>
    </section>
  );
};

export default TaxSavingsCalculator;
