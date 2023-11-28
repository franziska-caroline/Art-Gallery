import Image from "next/image";

export default function Spotlight({ image, artist }) {
  return (
    <>
      <figure>
        <Image
          src={image}
          alt={artist}
          layout="responsive"
          height={1}
          width={450}
        ></Image>
        <figcaption>by {artist}</figcaption>
      </figure>
    </>
  );
}
console.log(Spotlight);
