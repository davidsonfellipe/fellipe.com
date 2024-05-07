import React from 'react'
import styled from 'styled-components'
import { screen } from '../styles/screen'
import { font, colors } from '../styles/theme'

const HeadlineBase = styled.span`
  display: inline-block;
  font-size: 0.5rem;
  font-family: ${font.text};
  min-width: 50px;
  text-transform: uppercase;
  color: #666;
  line-height: 1.25rem;
  padding: 2px 0;
  margin-bottom: 5px;
  vertical-align: top;

  ${screen.md} {
    margin-bottom: 0;
  }
`

const Headline = styled(HeadlineBase)`
  display: block;
  vertical-align: middle;
  text-transform: none;
  font-size: 0.75rem;
`

const Title = styled.span`
  display: block;
  font-size: 1rem;
  line-height: 1.25rem;
  font-family: ${font.title};
  font-weight: 700;

  ${screen.md} {
    display: inline-block;
  }
`

const Wrapper = styled.a`
  border-bottom: 3px solid #efefef;
  display: block;
  font-size: 1rem;
  color: ${colors.primary};
  padding: 15px 0;
  line-height: 1.5em;
  position: relative;
  text-decoration: none;
  transition: border-color 500ms linear;
  opacity: 0.95;

  &:hover {
    border-color: ${colors.tertiary};
    opacity: 1;
  }
`

const Tag = styled.span`
  display: inline-block;
  vertical-align: middle;
  text-transform: none;
  font-size: 0.75rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0 0.25rem;
  background: ${colors.tertiary};
  text-transform: lowercase;
`

const ListItemBook = ({ author = '', tags, title = '', description = '', url = '' }) => (
  <Wrapper>
    <Title as="a" href={url} target="_blank">
      {title}
    </Title>
    {author ? <Headline>by {author}</Headline> : null}
    <p>{description}</p>
    {tags?.map(tag => (
      <Tag key={tag}>{tag}</Tag>
    ))}
  </Wrapper>
)

export default ListItemBook
