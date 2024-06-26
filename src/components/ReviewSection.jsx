// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Reviews = ({ movieId }) => {
//   const [reviews, setReviews] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:8000/api/v1/reviews/${movieId}`
//         );
//         if (!response.ok) {
//           throw new Error(`Error fetching reviews: ${response.statusText}`);
//         }
//         const data = await response.json();
//         console.log("Received reviews:", data); // Debugging-Ausgabe
//         setReviews(data);
//       } catch (error) {
//         console.error("Error fetching reviews:", error);
//         setError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchReviews();
//   }, [movieId]);

//   return (
//     <main className="float-left w-full sm:w-[630px] mb-6 sm:mb-0 px-4 lg:px-0">
//       <div className="border-b border-slate-400 pb-2">
//         <h4 className=" float-left uppercase text-[12px] font-semi text-slate-400 tracking-wide -mt-[60px] pt-12 pb-2 tracking-[.15em]">
//           Reviews for this movie
//         </h4>
//       </div>

//       <div className="float-left w-auto">
//         {isLoading ? (
//           <p>Loading reviews...</p>
//         ) : (
//           <ul className="flex flex-col divide-y divide-slate-400">
//             {reviews.map((review, index) => (
//               <li className="flex items-left pt-5 pb-10" key={index}>
//                 <div>
//                   <div className="flow-root">
//                     <h2 className=" float-left align-top font-serif text-slate-50 text-[25px] font-semibold pl-4">
//                       {review.user_Id}
//                     </h2>
//                   </div>
//                   <div className="pl-4">
//                     <div className="flex items-left line-clamp-3 uppercase text-[12px] font-semi text-slate-400 tracking-wide pb-2 tracking-[.15em]">
//                       {review.review_text}
//                     </div>
//                     <div className="flex items-left text-[12px] font-semi text-slate-400 tracking-wide pb-2 tracking-[.15em]">
//                       Rating: {review.rating} / 5
//                     </div>
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </main>
//   );
// };

// export default Reviews;
