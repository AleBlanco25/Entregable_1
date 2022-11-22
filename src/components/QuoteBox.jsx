import React from 'react'
import QuoteBtn from './QuoteBtn'

const QuoteBox = ({quoteRandom, handleClick, randomColor}) => {

    const objStyle = {color: randomColor}
    const objStyleBtn = {backgroundColor: randomColor}

  return (

    <article className="card" style= {objStyle}>
        <i className="card__icon fa-solid fa-quote-left"></i>
        <p className='card__quote'>{quoteRandom.quote}</p>
        <h1 className='card__author'>{quoteRandom.author}</h1>
        <QuoteBtn
        handleClick={handleClick}
        objStyleBtn={objStyleBtn}
        />
    </article>

  )
}

export default QuoteBox