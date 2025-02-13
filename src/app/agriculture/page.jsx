// commented out because it wasn't deploying correctly

"use client";

// import { storage } from "../../../firebase-config";
// import { ref, listAll, getDownloadURL } from "firebase/storage";
// import { useEffect, useState } from "react";
// import Job from "../components/job";
// import Navbar from "../components/navbar";
// import Footer from "../components/footer";
// // import "../globals.css";

// export default function Agriculture() {
//     const [folders, setFolders] = useState([]);
//     const [images, setImages] = useState({});

//     useEffect(() => {
//         const listFolders = async () => {
//             const storageRef = ref(storage, "agriculture");
//             try {
//                 const res = await listAll(storageRef);
//                 const folderNames = res.prefixes.map((folderRef) => folderRef.name);
//                 setFolders(folderNames);

//                 const imagesData = {};
//                 for (const folderRef of res.prefixes) {
//                     const folderName = folderRef.name;
//                     const folderImagesRef = ref(storage, `agriculture/${folderName}`);
//                     const folderImagesRes = await listAll(folderImagesRef);
//                     const imageUrls = await Promise.all(
//                         folderImagesRes.items.map((imageRef) => getDownloadURL(imageRef))
//                     );
//                     imagesData[folderName] = imageUrls;
//                 }
//                 setImages(imagesData);
//             } catch (error) {
//                 console.error("Error listing folders:", error);
//             }
//         };

//         listFolders();
//     }, []);

//     return (
//         <div className="w-full h-full text-agriculture-text">
//             <div className="flex flex-col place-items-center">
//                 <Navbar />
//                 <div className="w-full h-auto flex justify-center items-center">
//                     <h1 className="text-8xl ">Agriculture</h1>
//                 </div>
//                 {/* <div className="w-5/6"> */}
//                 {Object.entries(images).map(([header, imageLink]) => (
//                     <div className="w-[95%] mt-6 mb-4 border-8 border-color-agriculture-text p-4 rounded-3xl">
//                         <Job 
//                             title={header}
//                             images={imageLink}
//                             className="w-full h-full"
//                         />
//                     </div>
//                 ))}
//             </div>
//             <Footer/>
//         </div>
//     );
// }
