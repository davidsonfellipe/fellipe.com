import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Seo from '../components/seo'
import profiles from '../data/profiles'
import { Global as GlobalStyles } from '../styles/global'
import QRCode from 'react-qr-code'
import { motion, AnimatePresence } from 'framer-motion'
import { createGlobalStyle } from 'styled-components'
import Head from 'next/head'

const CardPage = () => {
  const [isFlipped, setIsFlipped] = React.useState(false)

  const handleDoubleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
      <CardLayout>
        <Reset />
        <GlobalStyles />
        <Seo title="Personal Card" description="Davidson Fellipe" />

        <FlipCardContainer
          onDoubleClick={handleDoubleClick}
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <AnimatePresence mode="wait">
            {!isFlipped ? (
              <CardFront
                key="front"
                initial={{ rotateY: -90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: 90, opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                <DiagonalPattern />
                <FrontContent>
                  <FrontGreeting>hello.</FrontGreeting>

                  <FrontDivider />

                  <FrontInfo>
                    <FrontRole>software engineer</FrontRole>
                    <FrontLocation>brooklyn, ny</FrontLocation>
                  </FrontInfo>

                  <ProfileImageTop>
                    <Image priority src="/images/profile.jpg" height={80} width={80} alt="Davidson Fellipe" />
                  </ProfileImageTop>

                  <LinkedInLink
                    href={profiles.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <LinkedInIcon />
                    <span>Connect on LinkedIn</span>
                  </LinkedInLink>
                </FrontContent>
              </CardFront>
            ) : (
              <CardBack
                key="back"
                initial={{ rotateY: -90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: 90, opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                <DiagonalPattern />
                <BackContent>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <BackGreeting>nice to meet you.</BackGreeting>
                  </motion.div>

                  <BackDivider />

                  <QRCodeContainerTop>
                    <QRCode
                      value="https://fellipe.com/card/"
                      size={120}
                      style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                      viewBox={`0 0 120 120`}
                      fgColor="#000000"
                      bgColor="transparent"
                      level="H"
                    />
                  </QRCodeContainerTop>
                </BackContent>
              </CardBack>
            )}
          </AnimatePresence>
        </FlipCardContainer>
      </CardLayout>
    </>
  )
}

const Reset = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const CardLayout = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(9, 9, 9) 100%);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 40px 20px 0 20px;
  font-family: var(--font-text);
  overflow: hidden;
  box-sizing: border-box;
`

const FlipCardContainer = styled(motion.div)`
  width: 400px;
  height: 600px;
  cursor: pointer;
  user-select: none;
  position: relative;
`

const CardFront = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`

const CardBack = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`

const DiagonalPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 12px,
    rgba(0, 0, 0, 0.02) 12px,
    rgba(0, 0, 0, 0.02) 24px
  );
  z-index: 1;
`

const FrontContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 40px 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
`

const BackContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 40px 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
`

const FrontGreeting = styled.h1`
  font-family: var(--font-title);
  font-size: 48px;
  font-weight: 700;
  color: var(--color-secondary);
  margin: 0 0 20px 0;
  text-transform: lowercase;
`

const BackGreeting = styled.h1`
  font-family: var(--font-title);
  font-size: 48px;
  font-weight: 700;
  color: var(--color-secondary);
  margin: 0 0 20px 0;
  text-transform: lowercase;
`

const FrontDivider = styled.div`
  width: 60px;
  height: 3px;
  background: var(--color-tertiary);
  margin: 0 0 30px 0;
`

const BackDivider = styled.div`
  width: 60px;
  height: 3px;
  background: var(--color-tertiary);
  margin: 0 0 30px 0;
`

const FrontInfo = styled.div`
  margin: 0;
`

const FrontRole = styled.div`
  font-family: var(--font-text);
  font-size: 16px;
  color: var(--color-secondary);
  margin-bottom: 12px;
  text-transform: lowercase;
  line-height: 1.4;
`

const FrontLocation = styled.div`
  font-family: var(--font-text);
  font-size: 14px;
  color: var(--color-secondary);
  margin-bottom: 0;
  line-height: 1.4;
`

const ProfileImageTop = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 80px;
  height: 80px;

  img {
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid white;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
`

const QRCodeContainerTop = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    border-radius: 0;
    box-shadow: none;
    max-width: 120px;
    height: auto;
    padding: 0;
    background: transparent;
  }
`

const LinkedInLink = styled(motion.a)`
  position: absolute;
  bottom: 24px;
  left: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: #374151;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-family: var(--font-text);
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: #1f2937;
  }

  span {
    white-space: nowrap;
  }
`

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export default CardPage
