import React from 'react'
import Head from 'next/head'

export default () => (
  <div className="container">
    <Head>
      <title>☹️ Sad Orlovsky</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
    </Head>
    <div className="container">
      <img className="photo" src="/static/avatar.jpg"/>
      <div className="links">
        <div><a href="/essays">essays</a></div>
        <div><a href="https://github.com/sadorlovsky">github</a></div>
        <div><a href="https://twitter.com/sadorlovsky">twitter</a></div>
        <div><a href="https://t.me/sadorlovsky">telegram</a></div>
        <div><a href="mailto:sadorlovsky@gmail.com">email</a></div>
      </div>
    </div>
    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .photo {
        width: 150px;
        height: 150px;
        border-radius: 50%;
      }

      .links {
        display: flex;
        justify-content: space-between;
    `}</style>
  </div>
)
