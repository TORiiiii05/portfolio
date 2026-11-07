import PageLegale from '../components/PageLegale'

const email = (
  <a href="mailto:jules.delfrate@gmail.com" className="lien-texte">jules.delfrate@gmail.com</a>
)

const sections = [
  {
    titre: 'Responsable du traitement',
    contenu: <>Jules Del Frate — {email}</>,
  },
  {
    titre: 'Données collectées',
    contenu:
      'Uniquement les données que vous saisissez dans le formulaire de contact : nom, adresse e-mail et message.',
  },
  {
    titre: 'Finalité',
    contenu:
      'Répondre à votre message. Vos données ne sont utilisées à aucune autre fin et ne sont jamais vendues ni cédées.',
  },
  {
    titre: 'Base légale',
    contenu: 'Votre consentement, donné en cochant la case du formulaire.',
  },
  {
    titre: 'Destinataires',
    contenu:
      "Jules Del Frate. Les messages transitent par Formspree, prestataire d'envoi de formulaires situé aux États-Unis, qui agit comme sous-traitant.",
  },
  {
    titre: 'Durée de conservation',
    contenu: '12 mois après le dernier échange, puis suppression.',
  },
  {
    titre: 'Vos droits',
    contenu: (
      <>
        Vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition sur vos
        données, ainsi que du droit de retirer votre consentement à tout moment. Pour les exercer,
        écrivez à {email}. Vous pouvez également introduire une réclamation auprès de la CNIL
        (cnil.fr).
      </>
    ),
  },
  {
    titre: 'Cookies',
    contenu: "Ce site ne dépose aucun cookie et n'utilise aucun outil de mesure d'audience.",
  },
  {
    titre: 'Mise à jour',
    contenu: 'Novembre 2026',
  },
]

export default function Confidentialite() {
  return (
    <PageLegale
      titre="POLITIQUE DE CONFIDENTIALITÉ"
      titrePage="Politique de confidentialité"
      description="Comment sont traitées les données saisies dans le formulaire de contact du portfolio de Jules Del Frate."
      sections={sections}
    />
  )
}
