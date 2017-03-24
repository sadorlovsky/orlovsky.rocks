import React from 'react'
import {source} from 'common-tags'

export default () => (
  <div style={{fontSize: '40px'}}>
    <pre>
      <code>{source`
        const orlovsky = compose(
           lover,
          React / Node.js developer,
          Guy from Moscow with Master's degree
        )

        const sadorlovsky = map(☹️, orlovsky)
        `}
      </code>
    </pre>
  </div>
)
