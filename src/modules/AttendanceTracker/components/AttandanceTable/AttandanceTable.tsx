import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import {
  IAttendanceTable,
  IAttendanceTableRowData,
  ILesson,
  INewAttendanceStatus
} from '../../types'
import {
  StyledAbsenceTableCell,
  StyledFullnameTableCell,
  StyledHeadTableCell,
  StyledSerialNumberTableCell
} from './styled.ts'
import { withViewStateStatusHOC } from '../../../../hocs/WithViewStateStatusHOC.tsx'
import { getSchoolboyName } from '../../../../shared/utils/getSchoolboyName.ts'

const TableComponent: React.FC<IAttendanceTable> = ({
  lessons: { Items: lessonsList },
  schoolboys: { Items: schoolBoysList },
  absences,
  toggleAttendance,
  handleRedirectToSchoolboyInfo
}) => {
  const attendanceHeadRowsBasicTemplate: string[] = ['№', 'ПІБ']

  const rowsData: any = schoolBoysList.map(
    (schoolboy, index): IAttendanceTableRowData => {
      return {
        schoolboyId: schoolboy.Id,
        serialNumber: index + 1,
        fullName: getSchoolboyName(schoolboy),
        absenceCells: lessonsList.map(({ Id: lessonId }) =>
          absences[schoolboy.Id]?.includes(lessonId) ? 'H' : ''
        )
      }
    }
  )

  return (
    <TableContainer sx={{ maxHeight: '100vh' }} component={Paper}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {attendanceHeadRowsBasicTemplate.map((tableThTitle) => (
              <StyledHeadTableCell>{tableThTitle}</StyledHeadTableCell>
            ))}
            {lessonsList.map(({ Title }: ILesson) => (
              <StyledHeadTableCell align="right">{Title}</StyledHeadTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsData.map(
            (
              {
                schoolboyId,
                serialNumber,
                fullName,
                absenceCells
              }: IAttendanceTableRowData,
              rowIndex: number
            ) => (
              <TableRow key={`row-${rowIndex}`}>
                <StyledSerialNumberTableCell>
                  {serialNumber}
                </StyledSerialNumberTableCell>
                <StyledFullnameTableCell
                  onClick={() => handleRedirectToSchoolboyInfo(serialNumber)}
                >
                  {fullName}
                </StyledFullnameTableCell>
                {absenceCells.map((cellValue, cellIndex) => (
                  <StyledAbsenceTableCell
                    align="right"
                    onClick={() => {
                      const payload: INewAttendanceStatus = {
                        SchoolboyId: schoolboyId,
                        ColumnId: lessonsList[cellIndex].Id
                      }
                      if (!cellValue) {
                        payload.Title = 'H'
                      }
                      toggleAttendance(payload)
                    }}
                  >
                    {cellValue}
                  </StyledAbsenceTableCell>
                ))}
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export const AttendanceTable = withViewStateStatusHOC(TableComponent)
