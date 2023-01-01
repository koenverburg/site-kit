import Image from 'next/image'
import styles from '../styles/product-card.module.scss'

import type { Product } from "../scripts/generate-kits/src/types"

type Props = {
  product: Product
}

export const ProductCard = ({ product }: Props) => {
  return (
    <div className={`${styles.productCard}`}>
      <div className={`shadow-md ${styles.productCard_image}`}>
        <Image
          fill
          alt={product.name}
          src={product.image.replace('./public', '')}
          className="object-center object-cover absolute"
        />
        <div className={styles.productCard_content}>
          <h3 className="z-10 text-xl font-bold tracking-tight text-white">{product.name}</h3>
        </div>
      </div>

      <div>
        {product.links.map(link => 
          <a
            key={link.link}
            href={link.link}
            style={{ backgroundColor: link.storeColor }}
            className={`${styles.productCard_button}`}
          >{link.storeName}</a>
        )}
      </div>

    </div>
  )
}

