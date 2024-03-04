import styles from './navbar.module.css'
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themeToggle/ThemeToggle'
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaTwitter, FaDiscord } from 'react-icons/fa';



const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
      <FaFacebookF size="24px" />
      <FaInstagram size="24px" />
      <FaTiktok size="24px" />
      <FaYoutube size="24px" />
      <FaTwitter size="24px" />
      <FaDiscord size="24px" />
      </div>
      <div className={styles.logo}>The BlogOff</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar
