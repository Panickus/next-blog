import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import Categorylist from "@/components/categoryList/CategoryList";
import Cardlist from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";



export default function Home() {
  return (
  <div className={styles.container}>
    <Featured />
    <Categorylist />
    <div className={styles.content}>
      <Cardlist />
      <Menu />
    </div>
  </div>
  );
}
