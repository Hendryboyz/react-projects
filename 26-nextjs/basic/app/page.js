import Link from "next/link";
import Header from '@/components/header';

export default function Home() {
  console.log('Hello Next.JS');
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/blogs">Blogs</Link>
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
}
