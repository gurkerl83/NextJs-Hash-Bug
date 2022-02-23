import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useOnHashChange = () => {
  const { events } = useRouter()

  // Logs the component lifecycle.
  console.log('-- rendering appWrapper')

  useEffect(() => {
    console.log('---- mounting appWrapper')
    return () => {
      console.log('------ unmounting appWrapper')
    }
  }, [])

  useEffect(() => {
    const handleHashChangeStart = (url: string) => {
      console.log(`handleHashChangeStart: App is changing to ${url}`)
    }

    const handleHashChangeComplete = (url: string) => {
      console.log(`handleHashChangeComplete: App is changing to ${url}`)
    }

    events.on('hashChangeStart', handleHashChangeStart)
    events.on('hashChangeComplete', handleHashChangeComplete)

    // If the component is unmounted, unsubscribe from the event with the `off` method:
    return () => {
      events.off('hashChangeStart', handleHashChangeStart)
      events.off('hashChangeComplete', handleHashChangeComplete)
    }
  }, [])
}
