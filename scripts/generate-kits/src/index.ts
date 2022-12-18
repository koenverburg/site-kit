import { kits } from './data/kits'
import fs from 'fs'

async function main() {
  // console.log(JSON.stringify(kits, null, 2))
  await fs.promises.writeFile('./data.json', JSON.stringify(kits), { encoding: 'utf8'})
}

main()
