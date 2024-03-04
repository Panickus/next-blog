import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.general}`}
      >
        Style
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.political}`}>
        Fashion
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.sports}`}>
        Food
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.musica}`}>
        Travel
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.food}`}>
        Culture
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.dev}`}>
        Coding
      </Link>
    </div>
  );
};

export default MenuCategories;