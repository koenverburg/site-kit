
import styles from '../styles/kit.module.scss'

import { Product } from "../data/types"
import { useOGImage } from '../utils'

type Props = {
  product: Product
  image: any
}

export const ProductCard = ({ product, image }: Props) => {
  let bg = 'https://place-hold.it/200'

  return (
    <div>
      <div
        className={`shadow-md ${styles.kit}`}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className={styles.kit_content}>
          <h3 className="z-10 text-xl font-bold tracking-tight text-white">{product.name}</h3>
        </div>
      </div>

      <a>Coolblue</a>
      <a>Amazon</a>

    </div>
  )
}

