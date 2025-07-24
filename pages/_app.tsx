import '../styles/globals.css'
import type { AppProps } from 'next/app'

// Declare the custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'zapier-interfaces-chatbot-embed': {
        'is-popup'?: string | boolean;
        'chatbot-id'?: string;
      };
    }
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <zapier-interfaces-chatbot-embed 
        is-popup="true" 
        chatbot-id="cmdhsr4vz001i9k3suj9r5c28"
      />
    </>
  )
} 