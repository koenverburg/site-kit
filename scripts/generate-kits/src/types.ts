export type Link = {
  link: string
  storeName: string
  storeColor: string
}

export type Product = {
  name: string
  image: string
  links: Link[]
}

export type Kit = {
  name: string
  slug: string
  products: Product[]
}
