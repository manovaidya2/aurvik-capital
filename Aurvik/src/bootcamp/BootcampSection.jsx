// import React from "react";
// import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";
// import hostimg from "../images/business-growth-C18ZeXss.jpg";

// export default function BootcampSection() {
//   // ✅ Local Button component
//   const Button = ({ className = "", children, ...props }) => (
//     <button
//       className={`bg-[#1C74D9] hover:bg-[#1a68c2] text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-xl font-semibold flex items-center justify-center sm:justify-start gap-2 sm:gap-3 transition-all duration-300 w-full sm:w-auto ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   );

//   return (
//     <section className="bg-[#0D4A86] text-white py-20 sm:py-24 px-4 sm:px-8 md:px-20 mt-0 sm:mt-0 md:mt-0">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
//         {/* ---------- LEFT CONTENT ---------- */}
//         <div className="text-center md:text-left">
//           <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4 sm:mb-6">
//             Beyond Borders 3–Day Bootcamp
//           </h1>

//           <p className="text-base sm:text-lg text-gray-200 mb-6 sm:mb-8">
//             Your gateway to global business freedom. Learn how to legally save
//             crores in taxes while scaling your business internationally.
//           </p>

//           <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 text-left mx-auto md:mx-0 w-fit">
//             <li className="flex items-center justify-center md:justify-start gap-3">
//               <Calendar className="w-5 h-5 text-white flex-shrink-0" />
//               <span className="text-sm sm:text-base">
//                 Next Batch: May 15–17, 2025
//               </span>
//             </li>
//             <li className="flex items-center justify-center md:justify-start gap-3">
//               <Clock className="w-5 h-5 text-white flex-shrink-0" />
//               <span className="text-sm sm:text-base">
//                 3 Days | 9 AM - 5 PM IST
//               </span>
//             </li>
//             <li className="flex items-center justify-center md:justify-start gap-3">
//               <MapPin className="w-5 h-5 text-white flex-shrink-0" />
//               <span className="text-sm sm:text-base">
//                 Online (Zoom) + Dubai (Optional)
//               </span>
//             </li>
//             <li className="flex items-center justify-center md:justify-start gap-3">
//               <Users className="w-5 h-5 text-white flex-shrink-0" />
//               <span className="text-sm sm:text-base">
//                 Limited to 50 participants
//               </span>
//             </li>
//           </ul>

//           {/* ---------- BUTTON ---------- */}
//           <Button>
//             Register Now - Early Bird ₹9,999 <ArrowRight className="w-5 h-5" />
//           </Button>

//           <p className="text-xs sm:text-sm text-gray-300 mt-3 sm:mt-4">
//             Regular price: ₹19,999 | Save ₹10,000 on early registration
//           </p>
//         </div>

//         {/* ---------- RIGHT IMAGE ---------- */}
//         <div className="flex justify-center order-first md:order-last">
//           <img
//             src={hostimg}
//             alt="Professional Man"
//             className="rounded-2xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useEffect, useState } from "react";
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";
import axios from "../utils/axiosInstance";

export default function BootcampSection() {
  const [bootcamp, setBootcamp] = useState(null);

  useEffect(() => {
    const fetchActiveBootcamp = async () => {
      try {
        const res = await axios.get("/bootcamp");
        const active = res.data.filter((b) => b.isActive);
        if (active.length > 0) setBootcamp(active[0]); // show latest active
      } catch (err) {
        console.error(err);
      }
    };
    fetchActiveBootcamp();
  }, []);

  if (!bootcamp) return null;

  const Button = ({ className="", children, ...props }) => (
    <button className={`bg-[#1C74D9] hover:bg-[#1a68c2] text-white px-6 py-4 rounded-xl font-semibold flex items-center gap-2 ${className}`} {...props}>{children}</button>
  );

  return (
    <section className="bg-[#0D4A86] text-white py-20 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">{bootcamp.title}</h1>
          <p className="text-base sm:text-lg text-gray-200 mb-6">{bootcamp.subtitle}</p>

          <ul className="space-y-3 mb-8 text-left w-fit">
            <li className="flex items-center gap-3"><Calendar className="w-5 h-5"/> {bootcamp.nextBatch}</li>
            <li className="flex items-center gap-3"><Clock className="w-5 h-5"/> {bootcamp.schedule}</li>
            <li className="flex items-center gap-3"><MapPin className="w-5 h-5"/> {bootcamp.location}</li>
            <li className="flex items-center gap-3"><Users className="w-5 h-5"/> {bootcamp.limit}</li>
          </ul>

         <a
  href={bootcamp.buttonLink}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center bg-[#1C74D9] hover:bg-[#1a68c2] text-white px-6 py-4 rounded-xl font-semibold gap-2"
>
  {bootcamp.buttonText} ₹{bootcamp.price} <ArrowRight className="w-5 h-5" />
</a>

<p className="text-xs sm:text-sm text-gray-300 mt-3">
  Regular price: ₹{bootcamp.regularPrice}
</p>

        </div>

        <div className="flex justify-center">
          <img
  src={`http://localhost:5000${bootcamp.imageUrl}`}
  alt="Bootcamp"
  className="rounded-2xl shadow-lg w-full max-w-md object-cover"
/>

        </div>
      </div>
    </section>
  );
}
