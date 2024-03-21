import { toast } from 'react-toastify'

export const errorToast = () =>
  toast('Something went wrong', {
    closeOnClick: true,
    type: 'error',
    theme: 'light'
  })
