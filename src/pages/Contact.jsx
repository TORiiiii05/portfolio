import { useState } from 'react'
import styles from './Contact.module.css'

const links = [
  { label: 'Email', value: 'jules.delfrate@gmail.com', href: 'mailto:jules.delfrate@gmail.com' },
  { label: 'GitHub', value: 'github.com/TORiiiii05', href: 'https://github.com/TORiiiii05' },
  { label: 'LinkedIn', value: 'linkedin.com/in/jules-del-frate-867622332', href: 'https://linkedin.com/in/jules-del-frate-867622332' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const res = await fetch('https://formspree.io/f/mpqnenon', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
    })
    if (res.ok) setSent(true)
  }

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.sectionNum}>005 —</p>
        <h1 className={styles.title}>Contact</h1>
        <p className={styles.heroSub}>
          Un projet, une opportunité, une question — je suis disponible.
        </p>
      </section>

      <div className={styles.grid}>
        <section className={styles.formSection}>
          <p className={styles.blockLabel}>ENVOYER UN MESSAGE</p>
          {sent ? (
            <div className={styles.sentMsg}>
              <p>Message envoyé — je vous répondrai rapidement.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">NOM</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
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
              <button type="submit" className={styles.submitBtn}>
                Envoyer →
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
                  <a href={href} className={styles.linkValue} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    {value} →
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.availBlock}>
            <p className={styles.blockLabel}>DISPONIBILITÉ</p>
            <p className={styles.availText}>
              Disponible pour échanger autour d'un projet, d'un stage ou d'une alternance.
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}
