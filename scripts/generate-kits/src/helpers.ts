import { Kit, Link, Product } from "../../../shared/types"
import fs from 'fs'
import { launcher } from "./launcher"

const slugify = (title: string): string => {
  const dictA =
    "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;";
  const dictB =
    "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------";
  const pattern = new RegExp(dictA.split("").join("|"), "g");

  return title
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(pattern, (c) => dictB.charAt(dictA.indexOf(c))) // Replace special characters
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\\-]+/g, "") // Remove all non-word characters
    .replace(/\\-\\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

const download = async (link: string, destination: string): Promise<void> => {
  const response = await fetch(link, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
    },
  });
  const blob = await response.blob();
  const arrayBuffer = await blob.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer)
  await fs.promises.writeFile(destination, buffer);
}

const getFilePath = (title: string) => `./public/static/products/${slugify(title)}.png`;

const isCoolblue = (url: string) => url.includes('coolblue.nl') 
const isAmazon = (url: string) => url.includes('amazon.com') || url.includes('amzn.to') 

const getImage = async (page) => {
  const landingImage = await page.locator("#landingImage").getAttribute('src')
  const imgTagWrapper = await page.locator("#imgTagWrapperId").getAttribute('src')

  return landingImage ?? imgTagWrapper
}

export const getViaLauncher = async (url: string, name: string) => {
  console.log(url)

  const filepath = getFilePath(name)
  if (fs.existsSync(filepath)) {
    return filepath
  }

  const { page, browser } = await launcher({ headless: true, url })
  let image: string | null

  if (isCoolblue(url)) {
    console.log('Detected Coolblue')

    image = await page
      .locator('meta[property="og:image"]')
      .getAttribute("content")

    console.log('Found image', image)
  } else if (isAmazon(url)) {
    console.log('Detected Amazon')

    image = await getImage(page)

    console.log('Found image', image)
  } else if (!isCoolblue(url) && !isAmazon(url)) {
    console.log('Detected another site')

    image = await page
      .locator('meta[property="og:image"]')
      .getAttribute("content")

    console.log('Found image', image)
  }

  await browser.close()
  await download(image!, filepath)

  console.log("Saved in", filepath)
  return filepath;
}

export const createLink = ({ link, storeName, storeColor }: Link): Link => {
  return {
    link,
    storeName,
    storeColor
  }
}

export const createProduct = async (link: string, product: Omit<Product, 'image'>): Promise<Product> => {
  return {
    image: link !== '' ? await getViaLauncher(link, product.name) : 'https://place-hold.it/200',
    name: product.name,
    links: product.links
  }
}

export const createKit = ({ name, products }: Omit<Kit, 'slug'>): Kit => {
  return {
    name,
    slug: slugify(name),
    products
  }
}
