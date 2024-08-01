﻿import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

export default function CookieNotice({ t }) {
  const [showNotice, setShowNotice] = useState(false)

  useEffect(() => {
    const consent = Cookies.get('cookieConsent')
    if (!consent) {
      setShowNotice(true)
    }
  }, [])

  const acceptCookies = () => {
    Cookies.set('cookieConsent', 'accepted', { expires: 365 })
    setShowNotice(false)
  }

  if (!showNotice) return null

  return (
    <div id="cookie-notice">
      <div>
        <p>{t('cookie-notice-text')}</p>
        <button onClick={acceptCookies}>{t('cookie-notice-accept')}</button>
      </div>
    </div>
  )
}