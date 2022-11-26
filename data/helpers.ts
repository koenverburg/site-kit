type Link = {
  link: string
  storeName: string
  storeColor: string
}

type Product = {
  name: string
  links: Link[]
}

type Kit = {
  name: string
  slug: string
  products: Product[]
}

const slugify = (title: string): string => {
  const dictA = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const dictB = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const pattern = new RegExp(dictA.split('').join('|'), 'g')

  return title.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(pattern, c => dictB.charAt(dictA.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\\-]+/g, '') // Remove all non-word characters
    .replace(/\\-\\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

export const createLink = ({ link, storeName, storeColor}: Link): Link => {
  return {
    link,
    storeName,
    storeColor
  }
}

export const createProduct = ({ name, links }: Product): Product => {
  return {
    name,
    links
  }
}

export const createKit = ({ name, products }: Omit<Kit, 'slug'>): Kit => {
  return {
    name,
    slug: slugify(name),
    products
  }
}
