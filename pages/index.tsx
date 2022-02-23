import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';

import { Segment } from '../components/Segment';

const sections = Array.from({ length: 5 }, (_, i) => i + 1)

const Index: FC = () => {
  // Logs the component lifecycle.
  console.log('-- rendering index')

  useEffect(() => {
    console.log('---- mounting index')
    return () => {
      console.log('------ unmounting index')
    }
  }, [])

  const { push } = useRouter()

  return (
    <div
      style={{
        display: 'flex',
        height: '1000px'
      }}
    >
      <div style={{ width: '50%', overflowY: 'scroll' }}>
        {sections.map(section => {
          return <Segment key={`anchor-id-${section}`} section={section} />
        })}
      </div>
      <div
        style={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <h3>Change hash through NextJs Link to anchor</h3>
        <p style={{ color: 'red', fontWeight: 'bold' }}>
          It causes a re-render of the entire app, including the page and all
          components involved, see dev console.
        </p>
        <ul
          style={{
            listStyle: 'none'
          }}
        >
          {sections.map(section => {
            return (
              <li key={`next-link-id-${section}`}>
                <Link
                  shallow
                  passHref
                  prefetch={false}
                  href={{ hash: `test-id-${section}` }}
                >
                  {`Link to ${section}`}
                </Link>
              </li>
            )
          })}
        </ul>
        <h3>Change hash through HTML Link to anchor</h3>
        <p style={{ color: 'green', fontWeight: 'bold' }}>
          It does not cause any re-render.
        </p>
        <ul
          style={{
            listStyle: 'none'
          }}
        >
          {sections.map(section => {
            return (
              <li key={`html-link-id-${section}`}>
                <a href={`/#test-id-${section}`}>{`Link to ${section}`}</a>
              </li>
            )
          })}
        </ul>
        <h3>Change hash through NextJs Router push function</h3>
        <p style={{ color: 'red', fontWeight: 'bold' }}>
          Identical to NextJs Link. It causes a re-render of the entire app,
          including the page and all components involved, see dev console.
        </p>
        <ul
          style={{
            listStyle: 'none'
          }}
        >
          {sections.map(section => {
            return (
              <li key={`html-link-id-${section}`}>
                <button
                  onClick={e => {
                    e.preventDefault()
                    push(`#test-id-${section}`)
                  }}
                >{`Link to ${section}`}</button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Index
