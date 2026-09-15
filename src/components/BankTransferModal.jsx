import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useLanguage } from '../context/LanguageContext'
import { BANK_ACCOUNTS, BANK_ACCOUNT_HOLDER, SESSION_PRICE_GTQ } from '../data/mentorshipConfig'

export default function BankTransferModal({ onClose, onConfirm }) {
  const { t } = useLanguage()

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  return createPortal(
    <div className="bank-modal-backdrop" onClick={onClose}>
      <div
        className="bank-modal-panel"
        role="dialog"
        aria-modal="true"
        aria-label={t.mentorship.transferModalTitle}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="bank-modal-close"
          onClick={onClose}
          aria-label={t.mentorship.transferClose}
        >
          ×
        </button>

        <h3 className="bank-modal-title">{t.mentorship.transferModalTitle}</h3>
        <p className="bank-modal-intro">{t.mentorship.transferModalIntro}</p>

        <p className="bank-modal-amount">
          {t.mentorship.transferAmountLabel}: <strong>Q{SESSION_PRICE_GTQ}</strong>
        </p>

        <div className="bank-modal-accounts">
          {BANK_ACCOUNTS.map((account) => (
            <div className="bank-account-card" key={`${account.bank}-${account.number}`}>
              <p className="bank-account-bank">{account.bank}</p>
              <p className="bank-account-detail">
                {t.mentorship.transferAccountLabel}: {account.type} {account.number}
              </p>
              <p className="bank-account-detail">
                {t.mentorship.transferHolderLabel}: {BANK_ACCOUNT_HOLDER}
              </p>
            </div>
          ))}
        </div>

        <button type="button" className="btn btn-primary bank-modal-next" onClick={onConfirm}>
          {t.mentorship.transferNext}
        </button>
      </div>
    </div>,
    document.body,
  )
}
