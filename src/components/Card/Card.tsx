import Image from 'next/image'

import styles from './Card.module.css'

export default function Card() {
  return (
    <div className={styles.container}>
      <Image src={''} alt="" />
      <div>
        <h2>Title Here</h2>
        <p>Small Description</p>
      </div>
    </div>
  )
}
