import React from 'react'
import styled from 'styled-components'

import ItemDate from 'components/ItemDate'

import { screen } from 'styles/screen'
import { font } from 'styles/theme'

const Date = styled(ItemDate)`
  display: none;
  position: static;

  ${screen.md} {
    display: inline-block;
    font-size: 16px;
    margin-right: 15px;
  }
`

const Wrapper = styled.a`
  border-bottom: 1px dashed #eee;
  display: block;
  font-family: ${font.title};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5em;
  padding: 15px 0;
  position: relative;
  text-decoration: none;
  transition: color 300ms;

  &:hover {
    color: #999;
  }

  &:last-child {
    border: 0;
  }
`

const PostLink = ({ post }) => (
  <Wrapper href={post.frontmatter.path}>
    <Date>{post.frontmatter.date}</Date>
    {post.frontmatter.title}
  </Wrapper>
)

export default PostLink
