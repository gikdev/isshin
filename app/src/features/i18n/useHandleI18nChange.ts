import { useEffect } from 'react'

import { useI18nContext } from './i18n-react'

export function useHandleI18nChange() {
  const { locale } = useI18nContext()

  useEffect(() => {
    // document.documentElement.dir = locale === 'fa' ? 'rtl' : 'ltr'
    document.documentElement.lang = locale
  }, [locale])
}
