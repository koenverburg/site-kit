import Link from 'next/Link'
import styles from '../styles/kit.module.scss'
import type { Kit } from "../scripts/generate-kits/src/types"

type KitProps = {
  kit: Kit
}

export const KitCard = ({kit}: KitProps) => {
  const hero = kit.products[0].image
  return (
    <Link
      href={`/kit/${kit.slug}`}
      className={`shadow-md ${styles.kit} ${styles.kit_hero}`}
      style={{ backgroundImage: `url(${hero.replace('./public', '')})` }}
    >
      <div className={styles.kit_content}>
        <h3 className="z-10 text-xl font-bold tracking-tight text-white">{kit.name}</h3>
        <span className="z-20 text-white">{kit.products.length} Products</span>
      </div>
    </Link>
  )
}
