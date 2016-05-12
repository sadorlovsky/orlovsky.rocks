import React from 'react'

const Codestyle = () => {
  return (
    <div style={{ background: 'black', color: 'white' }}>
      <h1>CODESTYLE</h1>
      <div>ESLint shareable config</div>
      <div>
        <ul>
          <li>two spaces</li>
          <li>single quotes</li>
          <li>no semicolons</li>
        </ul>
      </div>
      <div>
        <a href='https://npmjs.com/package/@sadorlovsky/eslint-config'>npm</a>
        <span> · </span>
        <a href='https://github.com/sadorlovsky/codestyle'>github</a>
      </div>
    </div>
  )
}

export default Codestyle
