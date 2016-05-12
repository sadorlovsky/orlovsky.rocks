import React from 'react'

const KinopoiskApi = () => {
  return (
    <div>
      <h1>Kinopoisk API wrapper</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ padding: 30, background: 'hsl(50, 74%, 61%)' }}>
          <h2>Node.js module</h2>
          <div>
            <a style={{ color: 'white' }} href='https://npmjs.com/package/kinopoisk-api'>npm</a>
            <span> · </span>
            <a style={{ color: 'white' }} href='https://github.com/sadorlovsky/kinopoisk-api'>github</a>
          </div>
        </div>
        <div style={{ padding: 30, background: 'hsl(352, 81%, 58%)' }}>
          <h2>Ruby gem</h2>
          <div>
            coming soon
          </div>
        </div>
      </div>
    </div>
  )
}

export default KinopoiskApi
