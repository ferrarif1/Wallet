/* eslint-disable react/prop-types */
import '../styles/index.scss';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}