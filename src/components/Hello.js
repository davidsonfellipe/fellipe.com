import React from "react"
import styled from "styled-components"

import { screen } from "../styles/screen"

const Name = styled.h1`
  font-family: "Lato", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 900;
  margin: 75px 0 25px 0;
  font-size: 75px;
  text-transform: uppercase;

  ${screen.lg} {
    font-size: 150px;
    margin: 200px 0 15px -5px;
    letter-spacing: -0.04em;
  }
`

const Text = styled.p`
  font-family: "Cormorant Garamond", serif;
  font-size: 18px;
  display: none;
  line-height: 1.5em;
  padding: 30px 0 0;
  position: relative;
  vertical-align: top;

  a {
    text-decoration: underline;
  }

  &:before {
    background: #000;
    display: block;
    content: " ";
    height: 5px;
    position: absolute;
    top: 0;
    width: 100px;
  }

  ${screen.lg} {
    display: inline-block;
  }
`

const Sidebar = () => (
  <section>
    <Name>HELLO! 👋🏻</Name>
    <Text>
      Would you like to see my <a href="/blog/">Posts</a> or{" "}
      <a href="/talks/">Talks</a>?
    </Text>
  </section>
)

export default Sidebar
