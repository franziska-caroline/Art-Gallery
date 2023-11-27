import ArtPieces from "@/components/ArtPieces";
import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data: pieces, error, isLoading, mutate } = useSWR(URL);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <main>
      <ArtPieces pieces={pieces} />
    </main>
  );
}
