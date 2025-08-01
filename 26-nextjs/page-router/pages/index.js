import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>the home page</h1>
      <p> GO to <Link href="/news">News Page</Link></p>
    </>
  );
}