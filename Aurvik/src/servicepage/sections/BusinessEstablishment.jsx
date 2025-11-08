import React from "react";

const BusinessEstablishment = () => (
  <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Business Establishment in UAE
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-8">
        Choose the right business setup — Mainland, Free Zone, or Offshore — based on your goals and scale.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">🏙️ Mainland</h3>
          <p className="text-gray-600 text-sm">Full UAE access, local market presence, 100% ownership.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">🏝️ Free Zone</h3>
          <p className="text-gray-600 text-sm">0% tax, 100% repatriation, ideal for exporters & IT firms.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">🌍 Offshore</h3>
          <p className="text-gray-600 text-sm">Privacy, asset protection, and international operations.</p>
        </div>
      </div>
    </div>
  </section>
);

export default BusinessEstablishment;
