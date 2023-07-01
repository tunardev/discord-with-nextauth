import '@/assets/main.css';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import { SessionProvider } from 'next-auth/react';

const App: NextPage<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
