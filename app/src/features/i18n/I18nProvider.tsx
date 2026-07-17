import { useEffect, useState, type ReactNode } from 'react'

import TypesafeI18n from './i18n-react'
import { loadLocaleAsync } from './i18n-util.async'

interface Props {
  children: ReactNode
}

export function I18nProvider(p: Props) {
  const [wasLoaded, setWasLoaded] = useState(false)

  useEffect(() => {
    Promise.resolve()
      .then(() => loadLocaleAsync('en'))
      // .then(() => loadLocaleAsync('fa'))
      .then(() => setWasLoaded(true))
      .catch(console.error)
  }, [])

  if (!wasLoaded) return null

  return <TypesafeI18n locale='en'>{p.children}</TypesafeI18n>
}
