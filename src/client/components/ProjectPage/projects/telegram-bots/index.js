import React from 'react'
import css from 'react-css-modules'
import styles from './telegram-bots.sss'

const TelegramBots = () => {
  return (
    <div>
      <h1>Telegram bots</h1>
      <div>
        <h2>yes/no</h2>
        <div>@YepNopeBot</div>
      </div>
      <div>
        <h2>kinopoisk</h2>
        <div>@FindMovieBot</div>
      </div>
      <div>
        <h2>inteh-info notifier</h2>
        <div>@IntehInfoNotifierBot</div>
      </div>
    </div>
  )
}

export default css(TelegramBots, styles)