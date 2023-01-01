import { createLink, createProduct } from "../helpers"
import { amazon } from "./stores"

export const iphone = createProduct('https://amzn.to/3Gg9fGG', {
  name: 'IPhone 12 Pro',
  links: [
    createLink({
      link: 'https://amzn.to/3Gg9fGG',
      ...amazon
    })
  ]
})

export const airpods = createProduct('https://amzn.to/3WS4HwC', {
  name: 'Apple AirPods Pro (1 gen)',
  links: [
    createLink({
      link: 'https://amzn.to/3WS4HwC',
      ...amazon
    })
  ]
})
