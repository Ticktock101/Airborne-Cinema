"use client";

import { storage } from "../../../firebase-config";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import Job from "../components/job";
import Navbar from "../components/navbar";
// import "../globals.css";

export default function Construction() {
    const [folders, setFolders] = useState([]);
    const [images, setImages] = useState({});

    useEffect(() => {
        const listFolders = async () => {
            const storageRef = ref(storage, "construction");
            try {
                const res = await listAll(storageRef);
                const folderNames = res.prefixes.map((folderRef) => folderRef.name);
                setFolders(folderNames);

                const imagesData = {};
                for (const folderRef of res.prefixes) {
                    const folderName = folderRef.name;
                    const folderImagesRef = ref(storage, `construction/${folderName}`);
                    const folderImagesRes = await listAll(folderImagesRef);
                    const imageUrls = await Promise.all(
                        folderImagesRes.items.map((imageRef) => getDownloadURL(imageRef))
                    );
                    imagesData[folderName] = imageUrls;
                }
                setImages(imagesData);
            } catch (error) {
                console.error("Error listing folders:", error);
            }
        };

        listFolders();
    }, []);

    return (
        <div>
            <Navbar />
            <h1>Construction</h1>
            {Object.entries(images).map(([header, imageLink]) => (
                <Job 
                    title={header}
                    images={imageLink}
                />
            ))}
        </div>
    );
}
