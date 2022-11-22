import React from 'react'

const QuoteBtn = ({handleClick, objStyleBtn }) => {



  return (
    <button className='card__button'onClick={handleClick} style={objStyleBtn}> &gt;</button>
  )
}

export default QuoteBtn