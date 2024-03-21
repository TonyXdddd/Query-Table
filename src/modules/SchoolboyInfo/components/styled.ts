import styled from '@emotion/styled'
import { Card } from '@mui/material'
import BackArrow from '../../../assets/back-arrow.png'

export const StyledSchoolBoyCard = styled(Card)`
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  border: 1px solid rgba(154, 154, 154, 0.3);
`

export const StyledBackButton = styled.div`
  margin-right: 20px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  opacity: 0.45;
  transition: 0.3s;
  background-image: url(${BackArrow});
  background-size: cover;

  &:hover {
    opacity: 7;
  }
`
