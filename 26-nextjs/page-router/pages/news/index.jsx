import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <ul>
        <h1>the news page</h1>
        <li>NextJS is a Great Framework</li>
        <li>
          <Link href="/news/something-else">
            Something Else
          </Link>
        </li>
      </ul>
    </>
  )
    ;
}