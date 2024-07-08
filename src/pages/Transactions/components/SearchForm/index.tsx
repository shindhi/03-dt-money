import { MagnifyingGlass } from "phosphor-react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { SearchFormContainer } from './styled'

const searchFormSchema = z.object({
  query: z.string()
}) 

type searchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<searchFormInputs>({
    resolver: zodResolver(searchFormSchema) 
  })

  async function handleSearchTransactions(data: searchFormInputs) {
    await new Promise(resolver => setTimeout(resolver, 2000)) 
    console.log(data)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input 
        type="text" 
        placeholder="Busque por transações" 
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass />
        Buscar
      </button>
    </SearchFormContainer> 
  )
}