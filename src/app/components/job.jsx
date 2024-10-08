import { useState, useEffect } from "react";
// import { Carousel } from "@material-tailwind/react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { getStorage, ref, getMetadata } from "firebase/storage";
import { storage } from "../../../firebase-config";
import Navbar from "./navbar";

export default function Job({ title, images }) {
    const [mediaTypes, setMediaTypes] = useState([]);

    useEffect(() => {
        const fetchMetadata = async () => {
            const types = await Promise.all(images.map(async (imageUrl) => {
                const imageRef = ref(storage, imageUrl);
                const metadata = await getMetadata(imageRef);
                return metadata.contentType.startsWith("video/") ? "video" : "image";
            }));
            setMediaTypes(types);
        };

        fetchMetadata();
    }, [images]);

    return (
        <div className="">
            <h1 className="text-4xl font-bold mb-2">{title}</h1>
            <Carousel className="overflow-hidden">
                {images?.map((imageUrl, index) => {
                    const mediaType = mediaTypes[index];

                    if (mediaType === "video") {
                        return (
                            <div className="" key={index}>
                                <video 
                                    className="w-full object-cover rounded-xl" 
                                    controls 
                                    src={imageUrl} 
                                    alt={`Video ${index + 1}`}
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        );
                    } else {
                        return (
                            <div className="" key={index}>
                                <img 
                                    className="w-full object-cover rounded-xl" 
                                    src={imageUrl} 
                                    alt={`Image ${index + 1}`} 
                                />
                            </div>
                        );
                    }
                })}
            </Carousel>
        </div>
    );
}
