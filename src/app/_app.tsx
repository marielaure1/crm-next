import type { AppProps } from 'next/app'
// import { appWithTranslation } from 'next-i18next';
import '@utils/i18n';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
