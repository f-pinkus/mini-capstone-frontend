import axios from "axios";
import { useState, useEffect } from "react";
import { PhotosIndex } from "./PhotosIndex";
import { PhotosNew } from "./PhotosNew";

export function PhotosPage() {
  const [photos, setPhotos] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    
    axios.get("/photos.json").then((response) => {
      console.log(response.data);
      setPhotos(response.data)
    });
  };

  const handleCreate = (params, successCallback) => {
    console.log("handleCreate!!");

    axios.post("/photos.json", params).then((response) => {
      setPhotos([...photos, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <PhotosNew onCreate={handleCreate}/>
      <PhotosIndex photos={photos}/>
    </main>
  );
}