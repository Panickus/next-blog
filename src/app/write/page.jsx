import Image from 'next/image'
import styles from './writePage.module.css'

const WritePage = () => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" />
      <div className={styles.editor}>
        <button className={styles.button}>
          <Image src="/plus.svg" width={30} height={30} alt="plus" />
        </button>
      </div>
    </div>
  )
}

export default WritePage