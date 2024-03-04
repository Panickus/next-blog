import React from 'react';
import styles from './categorylist.module.css';
import Link from 'next/link';
import Image from 'next/image';


const Categorylist = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link href="/blog?cat=general" className={`${styles.category} ${styles.style}`}>
          <Image 
            src='/style.png' 
            alt="category"
            width={32}
            height={32}
            className={styles.image} 
          />
          General
        </Link>
        <Link href="/blog?cat=political" className={`${styles.category} ${styles.style}`}>
          <Image 
            src='/political.png' 
            alt="category"
            width={32}
            height={32}
            className={styles.image} 
          />
          Política
        </Link>
        <Link href="/blog?cat=sports" className={`${styles.category} ${styles.style}`}>
          <Image 
            src='/sports.png' 
            alt="category"
            width={32}
            height={32}
            className={styles.image} 
          />
          Deportes
        </Link>
        <Link href="/blog?cat=musica" className={`${styles.category} ${styles.style}`}>
          <Image 
            src='/musica.jpg' 
            alt="category"
            width={32}
            height={32}
            className={styles.image} 
          />
          Música
        </Link>
        <Link href="/blog?cat=food" className={`${styles.category} ${styles.style}`}>
          <Image 
            src='/food.jpg' 
            alt="category"
            width={32}
            height={32}
            className={styles.image} 
          />
          Comida
        </Link>
        <Link href="/blog?cat=dev" className={`${styles.category} ${styles.style}`}>
          <Image 
            src='/desarrollo.jpg' 
            alt="category"
            width={32}
            height={32}
            className={styles.image} 
          />
          Dev
        </Link>
      </div>
    </div>
  );
};

export default Categorylist;


