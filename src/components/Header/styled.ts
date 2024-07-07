import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme['gray-900']};
  padding: 4rem 0 12rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 112rem;
  margin: 0 auto;
  padding: 0 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewTransactionButton = styled.button`
  height: 5rem;
  border: 0;
  background: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme.white};
  font-weight: 700;
  padding: 0 2rem;
  border-radius: 6px;
  
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme['green-700']};
    transition: background .2s;
  }
`