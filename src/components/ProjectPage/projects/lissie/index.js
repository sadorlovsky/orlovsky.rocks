import React from 'react'

const Lissie = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Lissie</h1>
      <h2>CLI tool for generating LICENSE</h2>
      <pre>
        npm install -g lissie<br />
        $ lissie mit -a "Benedict Cumberbatch"
      </pre>
      <div>
        <a href='https://npmjs.com/package/lissie'>npm</a>
        <span> · </span>
        <a href='https://github.com/sadorlovsky/lissie'>github</a>
      </div>
    </div>
  )
}

export default Lissie
