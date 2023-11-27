import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <h2>{title}</h2>
      <figure>
        <Image src={image} alt={title} height={450} width={450}></Image>
        <figcaption>by {artist}</figcaption>
      </figure>
    </>
  );
}
