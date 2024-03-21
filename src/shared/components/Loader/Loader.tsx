import { ClipLoader } from 'react-spinners'

export const Loader = () => {
  return (
    <ClipLoader
      color={'rgba(60, 121, 201, 0.8)'}
      loading
      size={100}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  )
}
