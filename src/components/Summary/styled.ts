import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 112rem;
  margin: 0 auto;
  padding: 0 2.4rem;
  margin-top: -8rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.2rem;
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${({ theme }) => theme['gray-600']};
  border-radius: 4px;
  padding: 3.2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1.6rem;
    font-size: 3.2rem;
  }

  ${({ variant }) =>
    variant === 'green' &&
    css`
      background: ${({ theme }) => theme['green-700']};
    `}
`
