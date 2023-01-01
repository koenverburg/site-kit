import { createKit, createLink, createProduct } from "../helpers"
import { airpods, iphone } from "./products"
import { adidas, amazon, blank, coolblue } from "./stores"

const ck = createKit
const cp = createProduct
const cl = createLink

// const edc = ck({
//   name: 'EDC (Heavy)',
//   products: [
//     iphone,
//     airpods,
//     cp({
//       name: 'RollingSquad Cable (1.5m)',
//       links: [
//         await cl({
//           link: 'https://amazon.com',
//           ...amazon
//         })
//       ]
//     }),
//     cp({
//       name: 'Ottorbox Powerbank',
//       links: [
//         await cl({
//           link: 'https://amazon.com',
//           ...amazon
//         })
//       ]
//     }),
//     cp({
//       name: 'Bose QC35 II',
//       links: [
//         await cl({
//           link: 'https://amazon.com',
//           ...amazon
//         })
//       ]
//     })
//   ]
// })

// const edcLight = ck({
//   name: "EDC (Light)",
//   products: [
//     iphone,
//     airpods,
//     cp({
//       name: "RollingSquad Cable (Key Chain)",
//       links: [
//         await cl({
//           link: "https://amazon.com",
//           ...amazon,
//         }),
//       ],
//     }),
//     cp({
//       name: "ISM Powerbank",
//       links: [
//         await cl({
//           link: "https://amazon.com",
//           ...amazon,
//         }),
//       ],
//     }),
//   ],
// });

const bags = ck({
  name: 'Bags',
  products: [
    await cp('https://www.adidas.nl/y-3-tech-rugzak/HM8358.html', {
      name: 'Adidas Y3 Tech backpack',
      links: [
        cl({
          link: 'https://www.adidas.nl/y-3-tech-rugzak/HM8358.html',
          ...adidas
        })
      ]
    }),
    await cp('https://ismbags.com/products/backpack', {
      name: 'ISM',
      links: [
        cl({
          link: 'https://ismbags.com/products/backpack',
          storeName: 'ISM',
          ...blank
        })
      ]
    }),
  ]
})

const homelab = ck({
  name: "Homelab",
  products: [
    await cp("https://www.coolblue.nl/product/836200/raspberry-pi-4-model-b-4gb.html", {
      name: "Raspberry PI B3",
      links: [
        cl({
          link: "https://www.coolblue.nl/product/836200/raspberry-pi-4-model-b-4gb.html",
          ...coolblue,
        }),
      ],
    }),
    await cp("https://www.amazon.com/GeeekPi-Raspberry-2GB-Starter-Kit/dp/B0B7DFF7TY?keywords=raspberry+pi&qid=1670774804&sprefix=raspb%2Caps%2C158&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzOTk0NFAzODlaN1UzJmVuY3J5cHRlZElkPUEwMzE0NDI4MUZTWkhPRDlEWjc5UiZlbmNyeXB0ZWRBZElkPUEwOTA5OTIxMldGS0VLVVRURVJSRCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU%3D&linkCode=ll1&tag=conradsventur-20&linkId=47d401f378cae7f1e591179270f7d07d&language=en_US&ref_=as_li_ss_tl", {
      name: "Raspberry PI 2",
      links: [
        cl({
          link: "https://www.amazon.com/GeeekPi-Raspberry-2GB-Starter-Kit/dp/B0B7DFF7TY?keywords=raspberry+pi&qid=1670774804&sprefix=raspb%2Caps%2C158&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzOTk0NFAzODlaN1UzJmVuY3J5cHRlZElkPUEwMzE0NDI4MUZTWkhPRDlEWjc5UiZlbmNyeXB0ZWRBZElkPUEwOTA5OTIxMldGS0VLVVRURVJSRCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU%3D&linkCode=ll1&tag=conradsventur-20&linkId=47d401f378cae7f1e591179270f7d07d&language=en_US&ref_=as_li_ss_tl",
          ...amazon,
        }),
      ],
    }),
    await cp("", {
      name: "Old PC Running Ubuntu",
      links: [],
    }),
  ],
});

export const kits = [bags, homelab] // [edc, edcLight, bags, homelab]

