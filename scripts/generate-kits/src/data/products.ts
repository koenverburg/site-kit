import { createLink, createProduct } from "../helpers"
import { coolblue } from "./stores"

export const iphone = createProduct({
  name: 'IPhone 12 Pro',
  links: [
    createLink({
      link: 'https://coolblue.com/iphone',
      ...coolblue
    })
  ]
})

export const airpods = createProduct({
  name: 'Apple AirPods Pro (1 gen)',
  links: [
    createLink({
      link: 'https://coolblue.com/air-pods',
      ...coolblue
    })
  ]
})
