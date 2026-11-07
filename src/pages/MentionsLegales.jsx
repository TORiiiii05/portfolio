import PageLegale from '../components/PageLegale'

const sections = [
  {
    titre: 'Éditeur du site',
    contenu: (
      <>
        Jules Del Frate — Contact :{' '}
        <a href="mailto:jules.delfrate@gmail.com" className="lien-texte">jules.delfrate@gmail.com</a>
      </>
    ),
  },
  {
    titre: 'Directeur de la publication',
    contenu: 'Jules Del Frate',
  },
  {
    titre: 'Hébergeur',
    contenu: 'Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — vercel.com',
  },
  {
    titre: 'Propriété intellectuelle',
    contenu:
      "Les textes, mises en page et projets présentés sur ce site sont la propriété de Jules Del Frate, sauf mention contraire. Les projets de groupe sont présentés avec l'accord des participants. Toute reproduction sans autorisation est interdite.",
  },
  {
    titre: 'Crédits',
    contenu:
      'Illustrations : hawacantik sur Magnific (magnific.com). Polices : Anton, Space Mono et IBM Plex Mono, sous licence SIL Open Font License.',
  },
]

export default function MentionsLegales() {
  return (
    <PageLegale
      titre="MENTIONS LÉGALES"
      titrePage="Mentions légales"
      description="Mentions légales du portfolio de Jules Del Frate : éditeur, hébergeur, propriété intellectuelle et crédits."
      sections={sections}
    />
  )
}
