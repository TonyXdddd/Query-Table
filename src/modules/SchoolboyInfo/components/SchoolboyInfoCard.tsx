import React from 'react'
import { CardContent } from '@mui/material'
import { StyledBackButton, StyledSchoolBoyCard } from './styled.ts'

interface ISchoolboyInfoCard {
  name: string
  onBackButtonClick: () => void
}

export const SchoolboyInfoCard: React.FC<ISchoolboyInfoCard> = ({
  name,
  onBackButtonClick
}) => {
  return (
    <>
      <StyledBackButton onClick={onBackButtonClick} />
      <StyledSchoolBoyCard variant="outlined">
        <CardContent>{name}</CardContent>
      </StyledSchoolBoyCard>
    </>
  )
}
