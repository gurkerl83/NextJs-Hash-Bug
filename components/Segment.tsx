import { FC, useEffect } from 'react';

export const Segment: FC<{ section: number }> = ({ section }) => {
  // Logs the component lifecycle.
  console.log('-- rendering segment')

  useEffect(() => {
    console.log('---- mounting segment')
    return () => {
      console.log('------ unmounting segment')
    }
  }, [])

  return (
    <div
      id={`test-id-${section}`}
      style={{
        height: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: section % 2 == 0 ? '#bdbdbd' : '#eeeeee'
      }}
    >
      Anchor {section}
    </div>
  )
}
