interface IResponseData<T> {
  Quantity: number
  Items: T[]
}

export interface ILesson {
  Id: number
  Title: string
}

export type ILessons = IResponseData<ILesson>

type INamePart = string | null

export interface ISchoolboy {
  Id: number
  FirstName: INamePart
  SecondName: INamePart
  LastName: INamePart
}

export type ISchoolboys = IResponseData<ISchoolboy>

type ISchoolboyId = number

type ILessonId = number

export interface IAbsence {
  Id: number
  Title: string
  SchoolboyId: ISchoolboyId
  ColumnId: ILessonId
}

export type INewAttendanceStatus = {
  Title?: string
  SchoolboyId: ISchoolboyId
  ColumnId: ILessonId
}

export type IAbsences = IResponseData<IAbsence>

export interface INormalizedAbsences {
  [key: ISchoolboyId]: ILessonId[]
}

export enum IQueriesKeys {
  lessons = 'lessons',
  schoolboys = 'schoolboys',
  absences = 'absences'
}

export interface IAttendanceTable {
  lessons: ILessons
  absences: INormalizedAbsences
  schoolboys: ISchoolboys
  toggleAttendance: (newAttendanceStatus: INewAttendanceStatus) => void
  handleRedirectToSchoolboyInfo: (serialNumber: number) => void
}

export interface IAttendanceTableRowData {
  schoolboyId: ISchoolboyId
  serialNumber: number
  fullName: string
  absenceCells: string[]
}
