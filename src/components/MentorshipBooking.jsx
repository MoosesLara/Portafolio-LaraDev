import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { PAYPAL_CLIENT_ID, GOOGLE_CALENDAR_URL, SESSION_PRICE } from '../data/mentorshipConfig'
import BankTransferModal from './BankTransferModal'
import MentorshipContactForm from './MentorshipContactForm'

let paypalSdkPromise = null

function loadPaypalSdk() {
  if (paypalSdkPromise) return paypalSdkPromise
  paypalSdkPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=USD`
    script.onload = resolve
    script.onerror = reject
    document.body.appendChild(script)
  })
  return paypalSdkPromise
}

const isPaypalConfigured = !PAYPAL_CLIENT_ID.startsWith('REEMPLAZAR')
const isCalendarConfigured = !GOOGLE_CALENDAR_URL.startsWith('REEMPLAZAR')

export default function MentorshipBooking() {
  const { t } = useLanguage()
  const [status, setStatus] = useState(isPaypalConfigured ? 'idle' : 'bank-transfer')
  const [modalOpen, setModalOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (status !== 'idle' || !isPaypalConfigured) return undefined

    let cancelled = false

    loadPaypalSdk()
      .then(() => {
        if (cancelled || !containerRef.current) return
        containerRef.current.innerHTML = ''
        window.paypal
          .Buttons({
            createOrder: (data, actions) =>
              actions.order.create({
                purchase_units: [{ amount: { value: SESSION_PRICE, currency_code: 'USD' } }],
              }),
            onApprove: (data, actions) => {
              setStatus('processing')
              return actions.order
                .capture()
                .then(() => setStatus('paid'))
                .catch(() => setStatus('error'))
            },
            onError: () => setStatus('error'),
            onCancel: () => setStatus('error'),
          })
          .render(containerRef.current)
      })
      .catch(() => {
        if (!cancelled) setStatus('error')
      })

    return () => {
      cancelled = true
    }
  }, [status])

  if (status === 'booking') {
    return isCalendarConfigured ? (
      <div key={status} className="mentorship-calendar-block">
        <p className="mentorship-calendar-label">{t.mentorship.calendarLabel}</p>
        <div className="mentorship-calendar-frame">
          <iframe
            src={GOOGLE_CALENDAR_URL}
            className="mentorship-calendar"
            title={t.mentorship.calendarTitle}
          />
        </div>
      </div>
    ) : (
      <p key={status} className="mentorship-booking-status">
        {t.mentorship.calendarNotConfigured}
      </p>
    )
  }

  if (status === 'paid') {
    return <MentorshipContactForm key={status} onSubmit={() => setStatus('booking')} />
  }

  if (status === 'bank-transfer') {
    return (
      <div key={status}>
        <button type="button" className="btn btn-primary" onClick={() => setModalOpen(true)}>
          {t.mentorship.transferButton}
        </button>
        {modalOpen && (
          <BankTransferModal
            onClose={() => setModalOpen(false)}
            onConfirm={() => {
              setModalOpen(false)
              setStatus('paid')
            }}
          />
        )}
      </div>
    )
  }

  if (status === 'processing') {
    return (
      <p key={status} className="mentorship-booking-status">
        {t.mentorship.bookingProcessing}
      </p>
    )
  }

  if (status === 'error') {
    return (
      <div key={status} className="mentorship-booking-error">
        <p className="mentorship-booking-status">{t.mentorship.bookingError}</p>
        <button type="button" className="btn btn-ghost" onClick={() => setStatus('idle')}>
          {t.mentorship.bookingRetry}
        </button>
      </div>
    )
  }

  return <div key={status} ref={containerRef} className="mentorship-paypal" />
}
