import styled from 'styled-components'

const Subtitle = styled.h2`
  color: var(--color-text);
  display: block;
  font-weight: 400;
  font-size: 0.875rem;
  padding: 0.5rem 0.75rem;
  margin-bottom: 2rem;
  text-decoration: none;
  background: var(--color-tertiary);
  border-bottom: 3px solid var(--color-secondary);
  clear: both;
  overflow: hidden;

  a {
    color: var(--color-primary);
    text-decoration: underline;
    text-decoration-color: var(--color-secondary);
    text-underline-offset: 2px;

    &:hover {
      text-decoration-color: var(--color-primary);
    }
  }
`

export default Subtitle
