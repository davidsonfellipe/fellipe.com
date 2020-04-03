import React from "react"
import Link from "../components/Link"
import ItemDate from "../components/ItemDate"

const PostLink = ({ post }) => (
  <Link href={post.frontmatter.path}>
    {post.frontmatter.title}
    <ItemDate>{post.frontmatter.date}</ItemDate>
  </Link>
)

export default PostLink
