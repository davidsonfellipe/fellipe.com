import React from 'react'
import styled from 'styled-components'

import { screen } from 'styles/screen'
import { font, colors } from 'styles/theme'

const HeadlineBase = styled.span`
  display: inline-block;
  font-size: 0.5rem;
  font-family: ${font.text};
  min-width: 80px;
  text-transform: uppercase;
  background: #333;
  color: #fff;
  line-height: 1rem;
  padding: 2px 10px;
  margin-bottom: 5px;
  vertical-align: top;
`

const Headline = styled(HeadlineBase)`
  ${screen.md} {
    margin-right: 15px;
  }
`

const HeadlineSecondary = styled(HeadlineBase)`
  position: absolute;
  right: 0;
  top: 15px;
`

const Title = styled.h2`
  font-size: 1rem;
  display: block;
  line-height: 1.25rem;
  margin: 0.25rem 0 0 0;
  font-family: ${font.title};
`

const Wrapper = styled.a`
  border-bottom: 3px solid #efefef;
  display: block;
  font-size: 1rem;
  font-weight: 700;
  color: ${colors.primary};
  padding: 15px 0;
  line-height: 1.5em;
  position: relative;
  text-decoration: none;
  transition: border-color 500ms linear;
  opacity: 0.9;

  &:hover {
    border-color: ${colors.tertiary};
    opacity: 1;
  }
`

const ListItemLink = ({ headline = '', headlineSecondary = '', title = '', url = '' }) => (
  <Wrapper href={url}>
    {headline && <Headline>{headline}</Headline>}
    {headlineSecondary && <HeadlineSecondary>{headlineSecondary}</HeadlineSecondary>}
    <Title>{title}</Title>
  </Wrapper>
)

export default ListItemLink
