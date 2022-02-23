import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useOnRouteChange = () => {
  const { events } = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      console.log(`handleRouteChange: App is changing to ${url}`)
    }

    events.on('routeChangeStart', handleRouteChange)

    // If the component is unmounted, unsubscribe from the event with the `off` method:
    return () => {
      events.off('routeChangeStart', handleRouteChange)
    }
  }, [])
}
