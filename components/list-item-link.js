import React from 'react'
import styled from 'styled-components'
import { screen } from '../styles/screen'

const HeadlineBase = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  font-family: var(--font-text);
  color: var(--color-gray);
  line-height: 1.25rem;
  padding: 2px 0;
  margin-bottom: 0;
  vertical-align: top;
`

const Headline = styled(HeadlineBase)`
  margin-right: 0;
  font-family: var(--font-title);
  font-size: var(--font-size-xs);
`

const HeadlineSecondary = styled(HeadlineBase)`
  margin-left: 0.5rem;

  &:before {
    content: '';
    margin-right: 0.5rem;
  }
`

const Title = styled.span`
  display: block;
  font-size: 1rem;
  line-height: 1.25rem;
  font-family: var(--font-title);
  text-transform: uppercase;
`

const Wrapper = styled.a`
  border-bottom: 3px solid #efefef;
  display: block;
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-primary);
  padding: 15px 0;
  line-height: 1.5em;
  position: relative;
  text-decoration: none;
  transition:
    border-color 100ms linear,
    transform 100ms linear;
  opacity: 0.95;

  &:hover,
  &:focus {
    border-color: var(--color-tertiary);
    opacity: 1;
    transform: scale(1.005);
  }
`

const ListItemLink = ({ headline = '', headlineSecondary = '', title = '', url = '' }) => (
  <Wrapper href={url}>
    <Title>{title}</Title>
    {headline ? <Headline>{headline}</Headline> : null}
    {headlineSecondary ? <HeadlineSecondary>{headlineSecondary}</HeadlineSecondary> : null}
  </Wrapper>
)

export default ListItemLink
