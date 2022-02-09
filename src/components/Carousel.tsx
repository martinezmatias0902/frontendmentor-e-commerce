import { Stack, Image } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  images: string[]
}

const Carousel:React.VFC<Props> = ({images}) => {

  const [selectedImage, setSelectedImage] = useState<string>(images[0])

  return (
    <Stack>
      <Image borderRadius="lg" width={344} height={344} src={selectedImage}/>
      <Stack direction="row" >
        {images.map((image) => (
          <Image 
          onClick={() => setSelectedImage(image)} 
          cursor="pointer"
          opacity={selectedImage == image ? 0.5 : 1}
          borderColor={selectedImage == image ? "primary.500" : "transparent"}
          borderWidth={2}
          width={20} 
          height={20} 
          borderRadius="lg" 
          key={image} 
          src={image} 
          alt={image}
          />
        ))}
      </Stack>
    </Stack>
  )
}

export default Carousel;