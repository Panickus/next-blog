import React from 'react';
import styles from './categorylist.module.css';
import Link from 'next/link';
import Image from 'next/image';


const Categorylist = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
        href="/blog?cat=general"
        className={`${styles.categoryItem} ${styles.general}`}
      >
          <Image 
            src='/style.png' 
            alt="category"
            width={32}
            height={32}
            className={styles.image} 
          />
          General
        </Link>
        <Link href="/blog" className={`${styles.categoryItem} ${styles.political}`}>
          <Image 
            src='/political.png' 
            alt="category"
            width={32}
            height={32}
            className={styles.image} 
          />
          Política
        </Link>
        <Link href="/blog" className={`${styles.categoryItem} ${styles.sports}`}>
          <Image 
            src='/sports.png' 
            alt="category"
            width={32}
            height={32}
            className={styles.image} 
          />
          Deportes
        </Link>
        <Link href="/blog" className={`${styles.categoryItem} ${styles.musica}`}>
          <Image 
            src='/musica.jpg' 
            alt="category"
            width={32}
            height={32}
            className={styles.image} 
          />
          Música
        </Link>
        <Link href="/blog" className={`${styles.categoryItem} ${styles.food}`}>
          <Image 
            src='/food.jpg' 
            alt="category"
            width={32}
            height={32}
            className={styles.image} 
          />
          Comida
        </Link>
        <Link href="/blog" className={`${styles.categoryItem} ${styles.dev}`}>
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


