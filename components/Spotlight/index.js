import Image from "next/image";

export default function Spotlight({ image, artist }) {
  return (
    <>
      <figure>
        <Image src={image} alt={artist} height={450} width={450}></Image>
        <figcaption>by {artist}</figcaption>
      </figure>
    </>
  );
}
console.log(Spotlight);
