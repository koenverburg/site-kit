import Link from 'next/Link'
import styles from '../styles/kit.module.scss'
import { Kit } from "../data/types"

type KitProps = {
  kit: Kit
}

export const KitCard = ({kit}: KitProps) => {
  return (
    <Link
      href={`/kit/${kit.slug}`}
      className={`shadow-md ${styles.kit}`}
      style={{ backgroundImage: `url(https://place-hold.it/200)` }}
    >
      <div className={styles.kit_content}>
        <h3 className="z-10 text-xl font-bold tracking-tight text-white">{kit.name}</h3>
        <span className="z-20 text-white">{kit.products.length} Products</span>
      </div>
    </Link>
  )
}
