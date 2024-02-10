import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from "../../styles/sass/style.module.scss"

const firstpost = () => {
  return (
    <>    <Head>
    <title>Next.Js First Post</title>
    </Head>
    <h1 className={styles.title}>first-post</h1>
    
    <Image src={"/images/next.png"} height={500} width={200}>

    </Image>
    </>
  )
}

export default firstpost