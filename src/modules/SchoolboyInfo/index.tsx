import { useLocation, useNavigate } from 'react-router-dom'
import { SchoolboyInfoCard } from './components/SchoolboyInfoCard.tsx'
import { useQueryClient } from '@tanstack/react-query'
import { IQueriesKeys } from '../AttendanceTracker/types'
import { SchoolBoysInfo } from './types'
import { getSchoolboyName } from '../../shared/utils/getSchoolboyName.ts'
import { IPages } from '../../shared/types'

export const SchoolboyInfo = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const queryClient = useQueryClient()

  const data: SchoolBoysInfo | undefined = queryClient.getQueryData([
    IQueriesKeys.schoolboys
  ])
  const schoolboySerialNumber = Number(
    new URLSearchParams(location.search).get('serialNumber')
  )
  const currentSchoolboy = data?.Items[schoolboySerialNumber - 1]

  const schoolboyFullname = currentSchoolboy
    ? getSchoolboyName(currentSchoolboy)
    : 'Schoolboy not selected'

  const handleRedirectToIndexPage = () => navigate(IPages.index)

  return (
    <SchoolboyInfoCard
      onBackButtonClick={handleRedirectToIndexPage}
      name={schoolboyFullname}
    />
  )
}
