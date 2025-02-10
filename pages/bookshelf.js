import React from 'react'
import styled from 'styled-components'

import Seo from '../components/seo'
import Title from '../components/title'
import Subtitle from '../components/subtitle'
import Section from '../components/section'
import ListItemBook from '../components/list-item-book'
import Layout from '../components/layout'
import { screen } from '../styles/screen'
import books from '../data/books'

const BookshelfGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  ${screen.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${screen.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const MoreSoon = styled.p`
  padding-top: 3rem;
  text-align: right;
`

const BookshelfPage = () => (
  <Layout>
    <Seo title="Bookshelf" />
    <Section>
      <Title>Bookshelf</Title>
      <BookshelfGrid>
        {books?.map(book => (
          <ListItemBook
            url={book.repositoryURL}
            key={book.title}
            author={book.author}
            description={book.description}
            headlineSecondary={book.status}
            rel="noreferrer"
            target="_blank"
            title={book.title}
            tags={book.tags}
          />
        ))}
      </BookshelfGrid>
    </Section>
    <MoreSoon>Adding more books soon!</MoreSoon>
  </Layout>
)

export default BookshelfPage
