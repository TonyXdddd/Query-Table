import { CssBaseline } from '@mui/material'
import { IndexPage } from './pages'
import { SchoolboyInfoPage } from './pages/schoolboyInfo.tsx'
import { IPages } from './shared/types'
import { Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <ToastContainer theme="colored" />
        <Routes>
          <Route path={IPages.index} element={<IndexPage />} />
          <Route path={IPages.schoolboyInfo} element={<SchoolboyInfoPage />} />
        </Routes>
      </QueryClientProvider>
    </>
  )
}

export default App
