import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { getWhatsAppLink } from '../utils/contactLinks'

export default function MentorshipContactForm({ onSubmit }) {
  const { t } = useLanguage()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [topics, setTopics] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = [
      t.mentorship.contactFormMessageHeading,
      `${t.mentorship.contactFormName}: ${name}`,
      `${t.mentorship.contactFormPhone}: ${phone}`,
      `${t.mentorship.contactFormTopics}: ${topics}`,
    ].join('\n')
    window.open(getWhatsAppLink(message), '_blank', 'noopener,noreferrer')
    onSubmit()
  }

  return (
    <form className="mentorship-contact-form" onSubmit={handleSubmit}>
      <h3 className="mentorship-contact-form-heading">{t.mentorship.contactFormHeading}</h3>
      <p className="mentorship-contact-form-intro">{t.mentorship.contactFormIntro}</p>

      <div className="mentorship-form-steps">
        <p>{t.mentorship.contactFormStep1}</p>
        <p>{t.mentorship.contactFormStep2}</p>
      </div>

      <label className="mentorship-form-field">
        <span>{t.mentorship.contactFormName}</span>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t.mentorship.contactFormNamePlaceholder}
        />
      </label>

      <label className="mentorship-form-field">
        <span>{t.mentorship.contactFormPhone}</span>
        <input
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder={t.mentorship.contactFormPhonePlaceholder}
        />
      </label>

      <label className="mentorship-form-field">
        <span>{t.mentorship.contactFormTopics}</span>
        <textarea
          rows={3}
          value={topics}
          onChange={(e) => setTopics(e.target.value)}
          placeholder={t.mentorship.contactFormTopicsPlaceholder}
        />
      </label>

      <button type="submit" className="btn btn-primary mentorship-form-submit">
        {t.mentorship.contactFormSubmit}
      </button>
    </form>
  )
}
