import styled from 'styled-components'

export const TransactionContainer = styled.main`
  width: 100%;
  max-width: 112rem;
  margin: 6.4rem auto 0;
  padding: 0 2.4rem;
`

export const TransactionTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.8rem;
  margin-top: 2.4rem;

  td {
    padding: 2rem 3.2rem;
    background: ${({ theme }) => theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}
export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${({ theme, variant }) =>
    variant === 'income' ? theme['green-300'] : theme['red-300']};
`
