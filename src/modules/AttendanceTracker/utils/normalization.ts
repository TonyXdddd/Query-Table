import { IAbsences, INormalizedAbsences } from '../types'

//The normalized object is represented as key - value pairs (schoolboy id - lesson id).
export const absencesNormalization = ({ Items: items }: IAbsences) => {
  const normalizedAbsences: INormalizedAbsences = {}

  items.forEach(({ SchoolboyId, ColumnId }: any) => {
    normalizedAbsences[SchoolboyId]
      ? normalizedAbsences[SchoolboyId].push(ColumnId)
      : (normalizedAbsences[SchoolboyId] = [ColumnId])
  })

  return normalizedAbsences
}
