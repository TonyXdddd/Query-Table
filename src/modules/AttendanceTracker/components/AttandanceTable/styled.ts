import TableCell from '@mui/material/TableCell'
import styled from '@emotion/styled'

const border = `
  border-right: 1px solid rgba(224, 224, 224, 1);
`

const cellsWithInteraction = `
  ${border}
  cursor: pointer;
`

export const StyledHeadTableCell = styled(TableCell)`
  ${border};
  background-color: rgba(187, 187, 187, 1);
`

export const StyledSerialNumberTableCell = styled(TableCell)`
  ${border}
`
export const StyledFullnameTableCell = styled(TableCell)`
  ${cellsWithInteraction}
  &:hover {
    background-color: rgba(192, 201, 60, 0.1);
  }
`

export const StyledAbsenceTableCell = styled(TableCell)`
  ${cellsWithInteraction}
  &:hover {
    background-color: rgba(60, 121, 201, 0.1);
  }
`
