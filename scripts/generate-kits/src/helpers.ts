import { Kit, Link, Product } from "./types"
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

const download = async (link, destination): Promise<void> => {
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

export const getViaLauncher = async (url: string, name: string) => {
  const { page, browser } = await launcher({ headless: true, url })
  let image: string
  let title: string

  if (url.includes('coolblue.nl')) {
    title = await page
    .locator('meta[property="og:title"]')
    .getAttribute("content");
    console.log("Found title", title)
    image = await page
      .locator('meta[property="og:image"]')
      .getAttribute("content")
    console.log('Found image', image)
  } else if (url.includes('amazon.com')) {
    title = await page
      .locator('meta[name="title"]')
      .getAttribute("content");
    const re = new RegExp(/Amazon\.com\:\s(.*)\-/)
    const matches = re.exec(title)

    title = matches[1]
    image = await page.locator("#landingImage").getAttribute('src')
  } else {
    image = await page
      .locator('meta[property="og:image"]')
      .getAttribute("content")
    console.log('Found image', image)
  }

  await browser.close()
  const filepath = getFilePath(!title ? name : title)
  await download(image, filepath)

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
