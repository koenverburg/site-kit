import { createKit, createLink, createProduct } from "./helpers"
import { airpods, iphone } from "./products"
import { amazon, coolblue } from "./stores"

const ck = createKit
const cp = createProduct
const cl = createLink

const edc = ck({
  name: 'EDC (Heavy)',
  products: [
    iphone,
    airpods,
    cp({
      name: 'RollingSquad Cable (1.5m)',
      links: [
        createLink({
          link: 'https://amazon.com',
          ...amazon
        })
      ]
    }),
    cp({
      name: 'Ottorbox Powerbank',
      links: [
        createLink({
          link: 'https://amazon.com',
          ...amazon
        })
      ]
    }),
    cp({
      name: 'Bose QC35 II',
      links: [
        createLink({
          link: 'https://amazon.com',
          ...amazon
        })
      ]
    })
  ]
})

const edcLight = ck({
  name: 'EDC (Light)',
  products: [
    iphone,
    airpods,
    cp({
      name: 'RollingSquad Cable (Key Chain)',
      links: [
        createLink({
          link: 'https://amazon.com',
          ...amazon
        })
      ]
    }),
    cp({
      name: 'ISM Powerbank',
      links: [
        createLink({
          link: 'https://amazon.com',
          ...amazon
        })
      ]
    })
  ]
})

const bags = ck({
  name: 'Bags',
  products: [
    cp({
      name: 'North face',
      links: [
        cl({
          link: 'https://coolblue.com/iphone',
          ...coolblue
        })
      ]
    }),
    cp({
      name: 'ISM',
      links: [
        createLink({
          link: 'https://coolblue.com/air-pods',
          ...coolblue
        })
      ]
    }),
  ]
})

const homelab = ck({
  name: 'Homelab',
  products: [
    cp({
      name: 'Raspberry PI B3',
      links: [
        cl({
          link: 'https://coolblue.com/iphone',
          ...coolblue
        })
      ]
    }),
    cp({
      name: 'Raspberry PI 2',
      links: [
        createLink({
          link: 'https://coolblue.com/air-pods',
          ...coolblue
        })
      ]
    }),
    cp({
      name: 'Old PC Running Ubuntu',
      links: []
    }),
  ]
})

export const kits = [edc, edcLight, bags, homelab]

