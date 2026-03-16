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

const HeadlineRow = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
  font-family: var(--font-title);
  font-size: var(--font-size-xs);
  line-height: 1.25rem;
`

const HeadlineCategoryLabel = styled.span`
  font-weight: 500;
  color: var(--color-gray-aaa);
  text-transform: uppercase;
`

const HeadlineMeta = styled.span`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  color: var(--color-gray);
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
  gap: 12px;
`

const CategoryColumn = styled.span`
  flex-shrink: 0;
  width: ${p => p.$width || '36px'};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 2px;
  padding-left: 0;
`

const IconOnlyWrapper = styled.span`
  display: flex;
  align-items: flex-start;
  line-height: 1;
  color: var(--color-primary);
`

const ContentColumn = styled.span`
  flex: 1;
  min-width: 0;
`

const Description = styled.span`
  display: block;
  font-size: 0.9375rem;
  font-family: var(--font-text);
  font-weight: 400;
  color: var(--color-gray);
  line-height: 1.5;
  margin-top: 4px;
  margin-bottom: 0;
`

const ViewMore = styled.span`
  display: block;
  font-size: 0.75rem;
  font-family: var(--font-title);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-gray);
  margin-top: 8px;
  text-align: right;
`

const Title = styled.span`
  display: block;
  font-size: 1rem;
  line-height: 1.25rem;
  font-family: var(--font-title);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-primary);

  @media (min-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.35rem;
  }
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

const ListItemLink = ({
  categoryIcon,
  categoryLabel = '',
  category,
  categoryWidth,
  headline = '',
  headlineSecondary = '',
  description = '',
  showViewMore = false,
  title = '',
  url = '',
  target,
  rel,
}) => {
  const linkProps = url ? { href: url, target, rel } : {}
  const hasIconOnly = categoryIcon && !category
  const columnWidth = categoryWidth || (hasIconOnly ? '36px' : '100px')

  const renderHeadline = () => {
    if (!headline && !categoryLabel) return null
    if (headline || categoryLabel) {
      return (
        <HeadlineRow>
          {categoryLabel ? <HeadlineCategoryLabel>{categoryLabel}</HeadlineCategoryLabel> : null}
          {headline ? <HeadlineMeta>{headline}</HeadlineMeta> : null}
        </HeadlineRow>
      )
    }
    return null
  }

  return (
    <Wrapper as={url ? 'a' : 'div'} {...linkProps}>
      <Row>
        {categoryIcon || category ? (
          <CategoryColumn $width={columnWidth}>
            {category ?? <IconOnlyWrapper>{categoryIcon}</IconOnlyWrapper>}
          </CategoryColumn>
        ) : null}
        <ContentColumn>
          <Title>{title}</Title>
          {renderHeadline()}
          {headlineSecondary ? <HeadlineSecondary>{headlineSecondary}</HeadlineSecondary> : null}
          {description ? <Description>{description}</Description> : null}
          {showViewMore && url ? <ViewMore>View more →</ViewMore> : null}
        </ContentColumn>
      </Row>
    </Wrapper>
  )
}

export default ListItemLink
