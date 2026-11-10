import { useState } from 'react'
import { Link } from 'react-router-dom'
import Doodle from '../components/Doodle'
import LienExterne from '../components/LienExterne'
import usePageMeta from '../hooks/usePageMeta'
import styles from './Contact.module.css'

const links = [
  { label: 'Email', value: 'jules.delfrate@gmail.com', href: 'mailto:jules.delfrate@gmail.com' },
  { label: 'GitHub', value: 'github.com/TORiiiii05', href: 'https://github.com/TORiiiii05' },
  { label: 'LinkedIn', value: 'linkedin.com/in/jules-del-frate-867622332', href: 'https://linkedin.com/in/jules-del-frate-867622332' },
]

export default function Contact() {
  usePageMeta('Contact', 'Un projet, une opportunité, une question — je suis disponible.')

  // 'attente' | 'envoi' | 'succes' | 'erreur'
  const [etat, setEtat] = useState('attente')
  const [form, setForm] = useState({ name: '', email: '', message: '', _gotcha: '' })

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (etat === 'envoi') return
    setEtat('envoi')
    try {
      const res = await fetch('https://formspree.io/f/mpqnenon', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setEtat(res.ok ? 'succes' : 'erreur')
    } catch {
      setEtat('erreur')
    }
  }

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <Doodle
          numero={4}
          taille={110}
          top="48px"
          right="8%"
          mobile={{ taille: 72, top: '42px', right: '16px' }}
        />
        <p className={styles.sectionNum}>05 —</p>
        <h1 className={styles.title}>Contact</h1>
        <p className={styles.heroSub}>
          Un projet, une opportunité, une question — je suis disponible.
        </p>
      </section>

      <div className={styles.grid}>
        <section className={styles.formSection}>
          <p className={styles.blockLabel}>ENVOYER UN MESSAGE</p>
          <div aria-live="polite">
            {etat === 'succes' && (
              <div className={styles.sentMsg}>
                <p>Message envoyé — je vous répondrai rapidement.</p>
              </div>
            )}
            {etat === 'erreur' && (
              <div className={`${styles.sentMsg} ${styles.errorMsg}`}>
                <p>
                  L'envoi a échoué. Réessayez ou écrivez-moi directement à{' '}
                  <a href="mailto:jules.delfrate@gmail.com" className="lien-texte">jules.delfrate@gmail.com</a>.
                </p>
              </div>
            )}
          </div>
          {etat !== 'succes' && (
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                name="_gotcha"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
                value={form._gotcha}
                onChange={handleChange}
              />
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">NOM</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className={styles.input}
                  placeholder="[Votre nom]"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">EMAIL</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={styles.input}
                  placeholder="[votre@email.com]"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="message">MESSAGE</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className={styles.textarea}
                  placeholder="[Votre message...]"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.consent}>
                <input id="consentement" type="checkbox" required className={styles.checkbox} />
                <p className={styles.consentText}>
                  <label htmlFor="consentement">
                    J'accepte que mes données soient utilisées pour répondre à ma demande.
                  </label>{' '}
                  <Link to="/confidentialite" className="lien-texte">Politique de confidentialité</Link>
                </p>
              </div>
              <button type="submit" className={styles.submitBtn} disabled={etat === 'envoi'}>
                {etat === 'envoi' ? 'ENVOI…' : 'Envoyer →'}
              </button>
            </form>
          )}
        </section>

        <aside className={styles.aside}>
          <div className={styles.linksBlock}>
            <p className={styles.blockLabel}>LIENS DIRECTS</p>
            <ul className={styles.linksList}>
              {links.map(({ label, value, href }) => (
                <li key={label} className={styles.linkItem}>
                  <span className={styles.linkLabel}>{label}</span>
                  {href.startsWith('http') ? (
                    <LienExterne href={href} className={styles.linkValue}>{value}</LienExterne>
                  ) : (
                    <a href={href} className={styles.linkValue}>{value} →</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
