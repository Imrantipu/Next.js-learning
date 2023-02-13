import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title> Blog Page</title>
      </Head>
      <h1>Hello next js</h1>
      <Link href="/blog/blog">
      Blog
      </Link>
       
       <Image src='/nature.jpg' width={500} height={300}></Image>
    </>
  )
}
