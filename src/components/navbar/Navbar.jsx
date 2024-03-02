import styles from './navbar.module.css'
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themeToggle/ThemeToggle'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}></div>
      <img src="/public/facebook.png" alt="facebook" width={24} height={24}/>
      <img src="/public/instagram.png" alt="instagram" width={24} height={24}/>
      <img src="/public/tiktok.png" alt="tiktok" width={24} height={24}/>
      <img src="/public/youtube.png" alt="youtube" width={24} height={24}/>
      <img src="/public/twitter.png" alt="twitter" width={24} height={24}/>
      <img src="/public/discord.png" alt="discord" width={24} height={24}/>
      <div className={styles.logo}>Los Parera's Blog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar
