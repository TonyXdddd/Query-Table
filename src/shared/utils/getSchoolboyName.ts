import { ISchoolboy } from '../../modules/AttendanceTracker/types'

export const getSchoolboyName = ({
  FirstName,
  SecondName,
  LastName
}: ISchoolboy) => {
  return `${FirstName || ''} ${SecondName || ''} ${LastName || ''}`
}
