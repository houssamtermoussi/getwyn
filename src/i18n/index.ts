import { reactive, watchEffect } from 'vue'
import en from './en.json'
import fr from './fr.json'

const translations = {
  en,
  fr
}

type Language = 'en' | 'fr'

interface I18nState {
  locale: Language
  t: (key: string) => string
}

const getInitialLocale = (): Language => {
  const saved = localStorage.getItem('getwyn-lang') as Language
  if (saved && (saved === 'en' || saved === 'fr')) {
    return saved
  }
  return 'en'
}

export const i18n = reactive<I18nState>({
  locale: getInitialLocale(),
  t(key: string) {
    const keys = key.split('.')
    let value: any = translations[this.locale]
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k]
      } else {
        return key // Return key if translation not found
      }
    }
    
    return value as string
  }
})

watchEffect(() => {
  localStorage.setItem('getwyn-lang', i18n.locale)
  document.documentElement.lang = i18n.locale
})

export const useI18n = () => i18n
