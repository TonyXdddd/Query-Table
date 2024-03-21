import { useMutation, useQueryClient } from '@tanstack/react-query'
import { postAttendanceStatus } from '../api'
import {
  INewAttendanceStatus,
  INormalizedAbsences,
  IQueriesKeys
} from '../types'
import { errorToast } from '../utils/errorNotification.ts'

export const useToggleAttendance = () => {
  const client = useQueryClient()

  return useMutation({
    mutationFn: postAttendanceStatus,
    onSuccess: (
      _: any,
      { SchoolboyId, ColumnId, Title }: INewAttendanceStatus
    ) => {
      client.setQueriesData<any>(
        { queryKey: [IQueriesKeys.absences] },
        (absences: INormalizedAbsences) => {
          if (Title === 'H') {
            absences[SchoolboyId].push(ColumnId)
          } else {
            const currentLessonIndex = absences[SchoolboyId].indexOf(ColumnId)
            absences[SchoolboyId].splice(currentLessonIndex, 1)
          }
        }
      )
    },
    onError: () => errorToast()
  })
}
