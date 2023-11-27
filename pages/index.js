import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";
import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data: pieces, error, isLoading, mutate } = useSWR(URL);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // Get random art pieces
  function getRandomArtPiece(pieces) {
    // a function that takes an array pieces as a parameter
    const randomIndex = Math.floor(Math.random() * pieces.length);
    return pieces[randomIndex];
  }
  const randomArtPiece = getRandomArtPiece(pieces);

  /* Explanation of getRandomArtPiece
1. Math.random() generates a random number between 0 and 1
2. pieces.length represents the number of elements in the pieces array
3. Multiplying Math.random() by pieces.length gives a random number within the range of array indices
4. Math.floor() rounds down the result to the nearest integer, ensuring it's a valid array index
5. the new object is saved in the  variable randomArtPiece
*/

  return (
    <main>
      <Spotlight
        image={randomArtPiece.imageSource}
        artist={randomArtPiece.artist}
      />
      <ArtPieces pieces={pieces} />
    </main>
  );
}
