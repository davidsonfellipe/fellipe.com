import React from 'react'
import styled from 'styled-components'

import Link from 'components/Link'
import ItemDate from 'components/ItemDate'

import { screen } from 'styles/screen'

const Date = styled(ItemDate)`
  position: static;
  display: none;

  ${screen.md} {
    display: inherit;
    font-size: 16px;
    margin-right: 15px;
  }
`

const Wrapper = styled.a`
  border-bottom: 2px dashed #eee;
  display: block;
  font-size: 20px;
  font-weight: 500;
  color: #333;
  padding: 15px 0;
  line-height: 1.5em;
  position: relative;
  text-decoration: none;
  transition: color 300ms;

  ${screen.md} {
    /* display: inline-block;
    width: 25%; */
    /* display: flex;
    justify-content: space-between;
     */
    /* background-color: #ccc; */
    display: flex;
    /* padding: 1rem;
     */
    /* flex: 0 1 100%; */
  }

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
