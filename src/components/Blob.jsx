import blob1 from '../assets/blobs/blob_rouge_bleu_jaune.png'
import blob2 from '../assets/blobs/blob_rouge_jaune.png'
import blob3 from '../assets/blobs/ChatGPT Image 30 mai 2026, 21_26_08.png'
import blob4 from '../assets/blobs/ChatGPT Image 30 mai 2026, 21_26_13.png'
import blob5 from '../assets/blobs/ChatGPT Image 30 mai 2026, 21_26_23.png'
import blob6 from '../assets/blobs/ChatGPT Image 30 mai 2026, 21_28_11.png'
import styles from './Blob.module.css'

const blobs = { 1: blob1, 2: blob2, 3: blob3, 4: blob4, 5: blob5, 6: blob6 }

export default function Blob({ num = 1, size = 300, style }) {
  return (
    <img
      src={blobs[num]}
      alt=""
      aria-hidden="true"
      className={styles.blob}
      style={{ width: size, height: size, ...style }}
    />
  )
}
