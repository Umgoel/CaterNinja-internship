import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Sample Next.JS webpage<br></br>&nbsp;
          <code className={styles.code}>Edit this page @ src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Trying{' '}
            <Image
              src="/next.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/logo.jpg"
          alt="Next.js Logo"
          width={400}
          height={400}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="src/app/newpage.html"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            New Website <span>-&gt;</span>
          </h2>
          <p>Find our newly lanched website</p>
        </a>

        <a
          href="https://www.google.com/maps/place/CaterNinja.com/@12.9363536,77.6193392,15z/data=!4m6!3m5!1s0x3bae139da9ff2ce9:0xa4862f46a0ae0281!8m2!3d12.9363536!4d77.6193392!16s%2Fg%2F11gxmw9dxf?entry=ttu"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Testimonials <span>-&gt;</span>
          </h2>
          <p>See what our clients are saying</p>
        </a>

        <a
          href="https://www.instagram.com/caterninja/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Connect With Us <span>-&gt;</span>
          </h2>
          <p>Check what's happening BTS on our socials</p>
        </a>

        <a
          href="mailto:admin@caterninja.com"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Contact Us <span>-&gt;</span>
          </h2>
          <p>
            Reach out to us for any queries.
          </p>
        </a>
      </div>
    </main>
  )
}
