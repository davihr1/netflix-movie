import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <img src="/Netflix_logo.png" alt="logo netflix" />
      </header>

      <main className={styles.main}>

      <div>
      <img src="https://mlpnk72yciwc.i.optimole.com/w:857/h:1200/q:auto/https://www.bleedingcool.com/wp-content/uploads/2019/05/lucifer-11.jpg" alt="lucifer" />
      <img src="https://occ-0-299-300.1.nflxso.net/art/9e56b/16197aced1049174c47f958b0c5b46e20da9e56b.jpg" alt="la casa de papel" />
      <img src="https://th.bing.com/th/id/OIP.MUdd12Qmovr9o_sCJ3wDHwHaK9?pid=ImgDet&rs=1" alt="fate winx" className={styles.ut}/>
      </div>

      <div className={styles.title}>
        <h1>Filmes, séries e muito mais. Sem limites.</h1>
        <h4>Assista onde quiser. Cancele quando quiser</h4>
      </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://netflix.com/br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Entrar
        </a>
      </footer>
    </div>
  )
}
