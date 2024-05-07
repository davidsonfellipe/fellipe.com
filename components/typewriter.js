import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const TypewriterText = styled.span`
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  margin: 0 auto;
  animation:
    typing 3.5s steps(40, end),
    blink-caret 0.5s step-end infinite;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }
`

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      setDisplayText(text.substring(0, currentIndex))
      currentIndex++
      if (currentIndex > text.length) clearInterval(interval)
    }, 25)
    return () => clearInterval(interval)
  }, [text])

  return <TypewriterText>{displayText}</TypewriterText>
}

export default Typewriter
