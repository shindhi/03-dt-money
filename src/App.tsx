import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/globals'
import { defaultTheme } from './styles/themes/default'
import { Transactions } from './pages/Transactions'
import { TransactionsProvider } from './contexts/TransactionsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
