import { NextComponentType } from 'next';
import { AppContext } from 'next/app';
import { AppInitialProps, AppPropsType } from 'next/dist/shared/lib/utils';
import React, { useEffect } from 'react';

import { AppWrapper } from '../components/AppWrapper';

export type CustomAppProps = AppPropsType & {
  Component: NextComponentType
}

const App: NextComponentType<AppContext, AppInitialProps, CustomAppProps> = ({
  Component,
  pageProps
}) => {
  // Logs the component lifecycle.
  console.log('-- rendering app')

  useEffect(() => {
    console.log('---- mounting app')
    return () => {
      console.log('------ unmounting app')
    }
  }, [])

  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default App
