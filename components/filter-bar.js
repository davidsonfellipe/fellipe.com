import React from 'react'
import styled from 'styled-components'
import { screen } from '../styles/screen'

const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 24px;

  ${screen.md} {
    gap: 8px;
  }
`

const FilterButton = styled.button`
  font-size: var(--font-size-xs);
  font-family: var(--font-title);
  font-weight: 700;
  color: var(--color-primary);
  background: transparent;
  border: none;
  border-radius: 0;
  padding: 6px 8px 8px;
  cursor: pointer;
  text-transform: uppercase;
  border-bottom: ${p => (p.$active ? '3px solid var(--color-tertiary)' : '1px solid #e0e0e0')};
  transition: border-color 100ms ease;

  &:hover {
    border-bottom-color: ${p => (p.$active ? 'var(--color-tertiary)' : '#bbb')};
  }

  ${screen.md} {
    font-size: var(--font-size-sm);
    padding: 8px 12px 12px;
  }
`

/**
 * Composable filter bar for filtering lists by category.
 * @param {Object} props
 * @param {Array<{value: string, label: string}>} props.options - Filter options
 * @param {string} props.value - Current active filter value
 * @param {function(string): void} props.onChange - Called when filter changes
 */
const FilterBar = ({ options, value, onChange }) => (
  <FilterRow>
    {options.map(({ value: optionValue, label }) => (
      <FilterButton
        key={optionValue}
        $active={value === optionValue}
        onClick={() => onChange(optionValue)}
        aria-current={value === optionValue ? 'true' : undefined}
      >
        {label}
      </FilterButton>
    ))}
  </FilterRow>
)

export default FilterBar
