"use client"
import Image from 'next/image'
import styles from './writePage.module.css'
import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'

const WritePage = () => {

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.svg" width={30} height={30} />
        </button>
        {open && <div className={styles.add}>
          <button className={styles.addButton}>
            <Image src="/image.svg" width={30} height={30} />
          </button>
          <button className={styles.addButton}>
            <Image src="/external.svg" width={30} height={30} />
          </button>
          <button className={styles.addButton}>
            <Image src="/video.svg" width={30} height={30} />
          </button>
        </div>}
        <ReactQuill 
          className={styles.textArea}
          theme="bubble" 
          value={value} 
          onChange={setValue} 
          placeholder='Tell your story' 
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  )
}

export default WritePage