import React from 'react'
import styled from 'styled-components'
import Title from './title'
import { screen } from '../styles/screen'

export const TitleCenter = styled(Title)`
  text-align: center;
  padding: 60px 0 45px 0;
  margin-bottom: var(--spacing-lg);
  text-wrap: balance;

  ${screen.md} {
    margin-bottom: 45px;
  }
`

export const ListProjects = styled.div`
  padding: 0;

  ${screen.md} {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
`

export const ListProjectsGroup = styled.div`
  width: 100%;
  padding-bottom: var(--spacing-xl);

  ${screen.md} {
    width: 15%;
  }
`

export const ListProjectsGroupSticky = styled.div`
  position: sticky;
  top: 100px;
  font-weight: 500;
`

export const Text = styled.p``

export const ImageWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  padding: var(--spacing-lg) var(--spacing-md) var(--spacing-md);
  text-align: center;
  border: 1px solid var(--color-gray-ccc);
  border-radius: 8px;
  overflow: auto;

  img {
    width: 100%;
    height: auto;
  }
`

export const VideoWrapper = styled.div`
  width: 100%;
  margin-top: 50px;

  video {
    width: 100%;
    height: auto;
    border-radius: 8px;
    border: 1px solid var(--color-gray-ccc);
  }
`

export const ListProjectsDetails = styled.div`
  padding: 0;
  width: 100%;

  ${screen.md} {
    width: 85%;
  }
`

export const ListItemProjectTitle = styled.h3`
  display: block;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  font-family: var(--font-title);
  text-transform: uppercase;

  ${screen.md} {
    font-size: 1.25rem;
    display: inline-block;
  }
`

export const Wrapper = styled.a`
  display: block;
  font-size: 1rem;
  color: var(--color-primary);
  padding: 0 0 50px 0;
  line-height: 1.5em;
  position: relative;
  text-decoration: none;
  transition: border-color 500ms linear;
  animation: linear animate-in-and-out 1s both;
  animation-timeline: view();

  @keyframes animate-in-and-out {
    entry 0% {
      transform: translateY(0);
    }
    entry 100% {
      transform: translateY(0);
    }
    exit 0% {
      transform: translateY(0);
    }
    exit 100% {
      transform: translateY(-5%);
    }
  }

  p {
    margin: 0;
  }

  ul {
    margin-top: 5px;
  }
`

export const ListItemProject = ({ title = '', description = '' }) => (
  <Wrapper>
    <ListItemProjectTitle>{title}</ListItemProjectTitle>
    <Text>{description}</Text>
  </Wrapper>
)
