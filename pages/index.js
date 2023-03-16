import styled from "styled-components";
import { CldImage, CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";

export default function Movies() {
  const [image, setImage] = useState();

  const handleImageUpload = (event) => {
    if (event.event === "success") {
      setImage({
        src: event.info.secure_url,
        height: event.info.height,
        width: event.info.width,
      });
    } else {
      //Upload war nicht erfolgreich
    }
  };

  return (
    <main>
      <Heading>🐋 Whales Capstone Template 🐋</Heading>
      <CldImage
        width="960"
        height="600"
        src="https://res.cloudinary.com/dfkicjx4d/image/upload/v1667128837/samples/animals/three-dogs.jpg"
        sizes="100vw"
        alt="Three dogs looking great"
      />
      <CldUploadButton uploadPreset="ej1x9tbd" onUpload={handleImageUpload} />
      {image && (
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt=""
        />
      )}
    </main>
  );
}

const Heading = styled.h1`
  text-align: center;
`;
