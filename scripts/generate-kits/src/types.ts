export type Link = {
  link: string
  image: string
  storeName: string
  storeColor: string
}

export type Product = {
  name: string
  links: Link[]
}

export type Kit = {
  name: string
  slug: string
  products: Product[]
}
