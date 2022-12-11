import { createKit, createLink, createProduct } from "../helpers"
import { airpods, iphone } from "./products"
import { amazon, coolblue } from "./stores"

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

// const bags = ck({
//   name: 'Bags',
//   products: [
//     cp({
//       name: 'North face',
//       links: [
//         await cl({
//           link: 'https://coolblue.com/iphone',
//           ...coolblue
//         })
//       ]
//     }),
//     cp({
//       name: 'ISM',
//       links: [
//         await cl({
//           link: 'https://coolblue.com/air-pods',
//           ...coolblue
//         })
//       ]
//     }),
//   ]
// })

const homelab = ck({
  name: "Homelab",
  products: [
    cp({
      name: "Raspberry PI B3",
      links: [
        await cl({
          link: "https://www.coolblue.nl/product/836200/raspberry-pi-4-model-b-4gb.html",
          ...coolblue,
        }),
      ],
    }),
    cp({
      name: "Raspberry PI 2",
      links: [
        await cl({
          link: "https://www.amazon.com/GeeekPi-Raspberry-2GB-Starter-Kit/dp/B0B7DFF7TY?keywords=raspberry+pi&qid=1670774804&sprefix=raspb%2Caps%2C158&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzOTk0NFAzODlaN1UzJmVuY3J5cHRlZElkPUEwMzE0NDI4MUZTWkhPRDlEWjc5UiZlbmNyeXB0ZWRBZElkPUEwOTA5OTIxMldGS0VLVVRURVJSRCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU%3D&linkCode=ll1&tag=conradsventur-20&linkId=47d401f378cae7f1e591179270f7d07d&language=en_US&ref_=as_li_ss_tl",
          ...amazon,
        }),
      ],
    }),
    cp({
      name: "Old PC Running Ubuntu",
      links: [],
    }),
  ],
});

export const kits = [homelab] // [edc, edcLight, bags, homelab]

