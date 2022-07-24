import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <style jsx>
        {`
      h2:{
        font-size:38px
      }
      h3:{
        font-size:28px
      }
        `}
      </style>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name='keyword' content='nextJS,huntingCoderBlog,huntingCoder'></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.mainNav}>
        <ul>
          <Link href='/'><li>Home</li></Link>
          <Link href='/about'><li>About</li></Link>
          <Link href='/blog'><li>Blog</li></Link>
          <Link href='/contact'><li>Contact</li></Link>

        </ul>
      </nav >

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hunting Coder
        </h1>
        <div className={styles.imgWrap}>
          <Image className={styles.myImg} src="/home.avif" width={237} height={158} alt='home img' />
        </div>

        <p className={styles.description}>
          A Blog For Hunting Coder by a Hunting Coder!
        </p>


        <div className="blogs">
          <h2>Popular Blogs</h2>
          <div className="blogItem">
            <h3>How to learn javascript in 2022?</h3>
            <p>javascript is the language used to design logic for the web</p>
          </div>
        </div>
        <div className="blogs">
          <div className="blogItem">
            <h3>How to learn javascript in 2022?</h3>
            <p>javascript is the language used to design logic for the web</p>
          </div>
        </div>
        <div className="blogs">
          <div className="blogItem">
            <h3>How to learn javascript in 2022?</h3>
            <p>javascript is the language used to design logic for the web</p>
          </div>
        </div>

      </main>


    </div >
  )
}
