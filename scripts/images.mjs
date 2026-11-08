// Convertit les captures de src/assets/projets/ en .webp et range les originaux dans _originaux/.
// Lancement : npm run images
import { existsSync } from 'node:fs'
import { mkdir, readdir, rename, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const RACINE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DOSSIER_IMAGES = path.join(RACINE, 'src', 'assets', 'projets')
const DOSSIER_ORIGINAUX = path.join(RACINE, '_originaux')
const LARGEUR_MAX = 2000
const QUALITE = 80
const EXTENSIONS = new Set(['.png', '.jpg', '.jpeg'])

async function listerImages(dossier) {
  const entrees = await readdir(dossier, { withFileTypes: true })
  const fichiers = await Promise.all(
    entrees.map((entree) => {
      const chemin = path.join(dossier, entree.name)
      if (entree.isDirectory()) return listerImages(chemin)
      return EXTENSIONS.has(path.extname(entree.name).toLowerCase()) ? [chemin] : []
    }),
  )
  return fichiers.flat()
}

function formaterPoids(octets) {
  if (octets < 1024 * 1024) return `${Math.round(octets / 1024)} Ko`
  return `${(octets / (1024 * 1024)).toFixed(2)} Mo`
}

const images = (await listerImages(DOSSIER_IMAGES)).sort()
let totalAvant = 0
let totalApres = 0
let converties = 0
let problemes = 0

for (const image of images) {
  const relatif = path.relative(DOSSIER_IMAGES, image)
  const { dir, name } = path.parse(image)
  const cible = path.join(dir, `${name}.webp`)
  const original = path.join(DOSSIER_ORIGINAUX, relatif)

  // Rien n'est jamais écrasé : en cas de doublon, l'image reste en place et le signale.
  if (existsSync(cible) || existsSync(original)) {
    console.warn(`IGNORÉE  ${relatif} : un .webp ou un original du même nom existe déjà`)
    problemes += 1
    continue
  }

  try {
    const avant = (await stat(image)).size
    const donnees = await sharp(image)
      .rotate()
      .resize({ width: LARGEUR_MAX, withoutEnlargement: true })
      .webp({ quality: QUALITE })
      .toBuffer()

    await writeFile(cible, donnees)
    await mkdir(path.dirname(original), { recursive: true })
    await rename(image, original)

    totalAvant += avant
    totalApres += donnees.length
    converties += 1
    console.log(`${relatif} : ${formaterPoids(avant)} → ${formaterPoids(donnees.length)}`)
  } catch (erreur) {
    problemes += 1
    console.error(`ÉCHEC    ${relatif} : ${erreur.message}`)
  }
}

if (converties > 0) {
  console.log(`\nTotal : ${formaterPoids(totalAvant)} → ${formaterPoids(totalApres)}`)
}
console.log(`${converties} image(s) convertie(s), ${problemes} problème(s).`)
if (problemes > 0) process.exitCode = 1
