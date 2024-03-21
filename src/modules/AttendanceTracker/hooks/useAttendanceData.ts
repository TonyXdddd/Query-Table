import { useQuery } from '@tanstack/react-query'
import { getAbsences, getLessons, getSchoolboys } from '../api'
import { IQueriesKeys } from '../types'
import { IFetchedDataStateTypes } from '../../../shared/types'

export const useAttendanceData = () => {
  const {
    data: lessonsData,
    isError: lessonsDataError,
    isPending: isLessonsPending
  } = useQuery({
    queryKey: [IQueriesKeys.lessons],
    queryFn: getLessons,
    refetchInterval: 120000
  })

  const {
    data: schoolboysData,
    isError: schoolboysDataError,
    isPending: isSchoolboysPending
  } = useQuery({
    queryKey: [IQueriesKeys.schoolboys],
    queryFn: getSchoolboys,
    refetchInterval: 120000
  })

  const {
    data: absenceData,
    isError: absenceDataError,
    isPending: isAbsencePending
  } = useQuery({
    queryKey: [IQueriesKeys.absences],
    queryFn: getAbsences,
    refetchInterval: 60000
  })

  switch (true) {
    case !!(lessonsData && schoolboysData && absenceData):
      return {
        status: IFetchedDataStateTypes.success,
        items: {
          lessons: lessonsData,
          schoolboys: schoolboysData,
          absences: absenceData
        }
      }
    case lessonsDataError || schoolboysDataError || absenceDataError:
      return { status: IFetchedDataStateTypes.error }
    case isLessonsPending || isSchoolboysPending || isAbsencePending:
      return { status: IFetchedDataStateTypes.fetching }
  }
}
