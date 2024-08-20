import { useTranslation } from 'react-i18next';

export default function MainHomePage() {
  const {t} = useTranslation()

  return <h1>{t('hello')}</h1>;
}
