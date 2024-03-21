import { useNavigate } from 'react-router-dom'
import { useAttendanceData } from './hooks/useAttendanceData.ts'
import { AttendanceTable } from './components/AttandanceTable/AttandanceTable.tsx'
import { useToggleAttendance } from './hooks/useToggleAttendance.ts'
import { IAttendanceTable } from './types'
import { IPages } from '../../shared/types'

export const AttendanceTracker = () => {
  const navigate = useNavigate()

  const data = useAttendanceData()
  const { mutate: toggleAttendance } = useToggleAttendance()

  const handleRedirectToSchoolboyInfo = (serialNumber: number) => {
    navigate(`${IPages.schoolboyInfo}?serialNumber=${serialNumber}`)
  }

  return (
    <AttendanceTable
      status={data?.status}
      props={
        {
          ...data?.items,
          toggleAttendance,
          handleRedirectToSchoolboyInfo
        } as IAttendanceTable
      }
    />
  )
}
