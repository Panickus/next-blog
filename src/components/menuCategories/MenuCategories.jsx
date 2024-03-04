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
        General
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.political}`}>
        Política
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.sports}`}>
        Deportes
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.musica}`}>
        Música
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.food}`}>
        Comida
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.dev}`}>
        Dev
      </Link>
    </div>
  );
};

export default MenuCategories;