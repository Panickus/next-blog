import Image from "next/image";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";

const SinglePage = () => {
  return (
   <div className={styles.container}>
    <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
             <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextoContainer}>
              <span className={styles.username}>Phil Panickus</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At sed deleniti excepturi quos perspiciatis officiis temporibus eligendi. Harum in iste, aspernatur blanditiis qui debitis laboriosam!
            </p>
            <h2>Lorem, ipsum dolor sit amet?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At sed deleniti excepturi quos perspiciatis officiis temporibus eligendi. Harum in iste, aspernatur blanditiis qui debitis laboriosam!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At sed deleniti excepturi quos perspiciatis officiis temporibus eligendi. Harum in iste, aspernatur blanditiis qui debitis laboriosam!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At sed deleniti excepturi quos perspiciatis officiis temporibus eligendi. Harum in iste, aspernatur blanditiis qui debitis laboriosam!
            </p>
          </div>
        </div>
        <Menu />
      </div>
   </div>
  )
}

export default SinglePage;