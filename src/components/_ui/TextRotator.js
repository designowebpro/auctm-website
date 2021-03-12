import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export default function TextRotator ({ content, time }) {
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    // Move on to the next message every `n` milliseconds
    const idx = (activeIdx + 1) % content.length
    const timeoutRef = setTimeout(() => setActiveIdx(idx), time)

    return () => {
      clearTimeout(timeoutRef)
    }
  }, [content, activeIdx])

  return (
    <div className='special--text'>
      {content[activeIdx]}
    </div>
  )
}

TextRotator.propTypes = {
  content: PropTypes.array,
  time: PropTypes.number
}
