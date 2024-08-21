import { StyledComponentProps } from '@mui/material'

type ItemType = 'btn' | 'link' | 'input' | 'text'
const addDataTestId = (name: string, type: ItemType): Partial<Pick<StyledComponentProps, 'data-testid'>> => {
  // if (process.env.NODE_ENV === 'production') {
  //   return {}
  // }

  return { 'data-testid': `lumis-${type}-${name}` }
}

export default addDataTestId
