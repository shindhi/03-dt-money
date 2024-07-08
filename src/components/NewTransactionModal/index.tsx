import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styled'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
}) 

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const { 
    control,
    register, 
    handleSubmit, 
    formState: { isSubmitting }
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income'
    }
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    await new Promise(resolver => setTimeout(resolver, 2000))

    console.log(data)
  }

  return (
    <Dialog.Portal>
      <Overlay />
      
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <X />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input 
            type="text" 
            placeholder="Descrição" 
            required 
            {...register('description')}
          />
          <input 
            type="text" 
            placeholder="Preço" 
            required 
            {...register('price', { valueAsNumber: true })}
          />
          <input 
            type="text" 
            placeholder="Categoria" 
            required 
            {...register('category')}
          />

          <Controller 
            control={control} 
            name='type'
            render={({ field }) => {
              return(
                <TransactionType onValueChange={field.onChange} value={field.value}>
                  <TransactionTypeButton variant='income' value='income'>
                    <ArrowCircleUp />
                    Entrada
                  </TransactionTypeButton>

                  <TransactionTypeButton variant='outcome' value='outcome'>
                    <ArrowCircleDown />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}