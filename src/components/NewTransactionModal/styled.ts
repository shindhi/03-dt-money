import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 51.2rem;
  border-radius: 6px;
  padding: 4rem 4.8rem;
  background: ${({ theme }) => theme['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 3.2rem;
    
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    input {
      border-radius: 6px;
      border: 0;
      background: ${({ theme }) => theme['gray-900']};
      color: ${({ theme }) => theme['gray-300']};
      padding: 1.6rem;

      &::placeholder {
        color: ${({ theme }) => theme['gray-500']};
      }
    }

    button[type="submit"] {
      height: 5.8rem;
      border: 0;
      background: ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme.white};
      font-weight: 700;
      padding: 0 2rem;
      border-radius: 6px;
      margin-top: 2.4rem;
      
      cursor: pointer;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${({ theme }) => theme['green-700']};
        transition: background .2s;
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 2.4rem;
  right: 2.4rem;
  line-height: 0;
  color: ${({ theme }) => theme['gray-500']};

  cursor: pointer;

  > svg {
    font-size: 2.4rem;
  }
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template: repeat(2, 1fr);
  gap: 1.4rem;
  margin-top: .8rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  color: ${({ theme }) => theme['gray-300']};
  background: ${({ theme }) => theme['gray-700']};
  padding: 1.6rem;
  border: 0;
  border-radius: 6px;
  line-height: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  cursor: pointer;
  
  > svg {
    color: ${({ theme, variant }) => variant === 'income' ? theme['green-300'] : theme['red-300']};
    font-size: 2.4rem;
  }

  &[data-state='unchecked']:hover {
    transition: background .2s;
    background: ${({ theme }) => theme['gray-600']};
  }

  &[data-state='unchecked']:hover {
    transition: background .2s;
    background: ${({ theme, variant }) => variant === 'income' ? theme['green-700'] : theme['red-500']};

    > svg {
      color: ${({ theme }) => theme.white};
    }
  }
`
