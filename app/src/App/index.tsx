import { RouterProvider } from '@tanstack/react-router'
import { StrictMode } from 'react'

import { router } from './configs/router'
import { ToastProvider } from './configs/ToastProvider'

import './configs/styles.css'

export function App() {
  return (
    <StrictMode>
      <RouterProvider router={router} />
      <ToastProvider />
    </StrictMode>
  )
}
