import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { IconArrowLeft } from '@tabler/icons-react'

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.875rem;
  font-family: var(--font-title);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-gray);
  text-decoration: none;
  margin-top: 70px;
  margin-bottom: 16px;
  transition: color 100ms ease;

  &:hover {
    color: var(--color-primary);
  }
`

const BackToProjects = () => (
  <BackLink href="/projects">
    <IconArrowLeft size={16} />
    Back to Projects
  </BackLink>
)

export default BackToProjects
