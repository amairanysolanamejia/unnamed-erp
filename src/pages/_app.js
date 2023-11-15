import MainLayout from '@layout/MainLayout';
import '@styles/tailwind.css';
import 'semantic-ui-css/semantic.min.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
    </>
  )

}
