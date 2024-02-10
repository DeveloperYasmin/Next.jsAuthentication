import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1>
        <Link href="/posts/first-post">Go to First Post</Link>
      </h1>
         </main>
  );
}
