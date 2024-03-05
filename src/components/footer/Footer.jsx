import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaTwitter, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="The BlogOff" width={50} height={50} />
          <h1 className={styles.logoText}>The BlogOff</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt eius aspernatur, similique explicabo ex harum ad dolores minus. Explicabo provident, iste numquam magnam veritatis consequatur?.
        </p>
        <div className={styles.icons}>
        <FaFacebookF size="18px" />
        <FaInstagram size="18px" />
        <FaTiktok size="18px" />
        <FaYoutube size="18px" />
        <FaTwitter size="18px" />
        <FaDiscord size="18px" />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTags}>Tags</span>
          <Link href="/">General</Link>
          <Link href="/">Deportes</Link>
          <Link href="/">Política</Link>
          <Link href="/">Dev</Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listSocial}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">TikTok</Link>
          <Link href="/">YouTube</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer