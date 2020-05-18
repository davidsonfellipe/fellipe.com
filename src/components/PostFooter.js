import React from 'react'
import styled from 'styled-components'

import { screen } from '../styles/screen'
import profile from '../images/profile.jpg'

const Footer = styled.h1`
  margin: 75px 0 25px 0;
  font-size: 20px;
  text-transform: uppercase;

  img,
  ul {
    display: block;
    margin: 0;

    ${screen.md} {
      display: inline-block;
      vertical-align: middle;
    }
  }

  img {
    border-radius: 50%;
    margin: 0 0 25px 0;

    ${screen.md} {
      margin: 0 25px 0 0;
    }
  }

  li {
    background-color: #000;
    color: #fff;
    display: block;
    padding: 10px;

    ${screen.md} {
      display: inline-block;
      margin-right: 25px;
    }

    a {
      text-decoration: none;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  ${screen.md} {
    font-size: 30px;
    margin: 100px 0 15px 5px;
    letter-spacing: -0.04em;
  }
`

const PostFooter = () => (
  <Footer>
    <img src={profile} alt="profile" width={100} height={100} />
    <ul>
      <li>
        <a href="https://www.youtube.com/channel/UCHbWMt6KrLUwCexeiAFjUBg" target="_blank" rel="noopener noreferrer">
          Youtube
        </a>
      </li>
      <li>
        <a href="https://twitter.com/davidsonfellipe" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </li>
      <li>
        <a href="https://github.com/davidsonfellipe" target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/davidsonfellipe/" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </li>
    </ul>
  </Footer>
)

export default PostFooter
