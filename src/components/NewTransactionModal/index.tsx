import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styled'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      
      <Content>
        <CloseButton>
          <X />
        </CloseButton>

        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="text" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <TransactionType>
            <TransactionTypeButton variant='income' value='income'>
              <ArrowCircleUp />
              Entrada
            </TransactionTypeButton>

            <TransactionTypeButton variant='outcome' value='outcome'>
              <ArrowCircleDown />
              Saída
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}