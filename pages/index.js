import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="next, create next app" />
        <meta name="author" content="Gene Lorenz Sarmiento" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div>
          <img src="/image 1.png" alt="image 1" className={styles.image} />
        </div>
        <div className={styles.info}>
          <div className={styles.squigle}>
            <img src="/Ellipse 1.png" className={styles.shape} />
            <div className={styles.centerTextOld}>
              Hi! Im Gene Lorenz Sarmiento. I'm a Student, and a Programmer. I'm
              currently a grade 8 student and learning front-end web
              development.
            </div>
          </div>
          <button className={styles.learnMore}>Learn more</button>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
