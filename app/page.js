// import Posts from "@/components/Posts";
// import Navbar from "../components/Navbar";
// import { connectMongoDB } from "@/mongo";
// export default function Home() {
//   connectMongoDB();
//   return (
//     <div className="">
//       <Navbar />

//       <div className="flex flex-col px-10 bg-red-300 py-8 text-white rounded-md">
//         <h1 className="text-3xl font-bold animate__animated animate__fadeIn">
//           Welcome to the BLOG Application!
//         </h1>
//         <p className="text-lg font-semibold animate__animated animate__fadeInUp">
//           Explore other people's opinions and share your own.
//         </p>
//         {/* Add links here if needed */}
//         <h1 className="text-2xl text-red-700 px-10 py-3 bg-red-300 text-white rounded-t-md">
//           Posts Recommended For You:
//         </h1>
//       </div>

//       <div>
//         {/* <h1 className="text-2xl text-red-700 px-10 pb-10">
//           Posts Recomended For You:
//         </h1> */}

//         <Posts />
//       </div>
//     </div>
//   );
// }
import Posts from "@/components/Posts";
import Navbar from "../components/Navbar";
import { connectMongoDB } from "@/mongo";

export default function Home() {
  connectMongoDB();
  return (
    <div className="">
      <Navbar />

      <div className="flex flex-col px-10 bg-red-300 py-8 text-white rounded-md">
        <h1 className="text-3xl font-bold animate__animated animate__fadeIn">
          Welcome to the BLOG Application!
        </h1>
        <p className="text-lg font-semibold animate__animated animate__fadeInUp">
          Explore other people&apos;s opinions and share your own.
        </p>
        {/* Add links here if needed */}
        <h1 className="text-2xl text-red-700 px-10 py-3 bg-red-300 text-white rounded-t-md">
          Posts Recommended For You:
        </h1>
      </div>

      <div>
        <Posts />
      </div>
    </div>
  );
}
