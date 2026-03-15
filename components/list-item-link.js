import React from 'react'
import styled from 'styled-components'

const HeadlineBase = styled.span`
  display: block;
  font-size: 0.75rem;
  font-family: var(--font-text);
  color: var(--color-gray);
  line-height: 1.25rem;
  padding: 2px 0;
  margin-top: 4px;
  margin-bottom: 0;
`

const Headline = styled(HeadlineBase)`
  margin-right: 0;
  line-height: 0.75rem;
  font-family: var(--font-title);
  font-size: var(--font-size-xs);
  color: var(--color-gray-aaa);
`

const HeadlineSecondary = styled(HeadlineBase)`
  margin-left: 0.5rem;

  &:before {
    content: '';
    margin-right: 0.5rem;
  }
`

const Row = styled.span`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`

const CategoryColumn = styled.span`
  flex-shrink: 0;
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  font-family: var(--font-title);
  font-weight: 500;
  color: var(--color-gray);
  padding-top: 2px;
  padding-left: 0;
`

const ContentColumn = styled.span`
  flex: 1;
  min-width: 0;
`

const Title = styled.span`
  display: block;
  font-size: 1rem;
  line-height: 1.15rem;
  font-family: var(--font-title);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-primary);
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

const CategoryIconWrapper = styled.span`
  display: flex;
  width: 100%;
  justify-content: center;
  line-height: 1;
`

const CategoryLabel = styled.span`
  font-size: 0.45rem;
  font-weight: 500;
  color: var(--color-gray);
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

const ListItemLink = ({
  categoryIcon,
  categoryLabel = '',
  category,
  headline = '',
  headlineSecondary = '',
  title = '',
  url = '',
  target,
  rel,
}) => (
  <Wrapper href={url} target={target} rel={rel}>
    <Row>
      {categoryIcon || category ? (
        <CategoryColumn>
          {category ?? (
            <>
              {categoryIcon && <CategoryIconWrapper>{categoryIcon}</CategoryIconWrapper>}
              {categoryLabel ? <CategoryLabel>{categoryLabel}</CategoryLabel> : null}
            </>
          )}
        </CategoryColumn>
      ) : null}
      <ContentColumn>
        <Title>{title}</Title>
        {headline ? <Headline>{headline}</Headline> : null}
        {headlineSecondary ? <HeadlineSecondary>{headlineSecondary}</HeadlineSecondary> : null}
      </ContentColumn>
    </Row>
  </Wrapper>
)

export default ListItemLink
