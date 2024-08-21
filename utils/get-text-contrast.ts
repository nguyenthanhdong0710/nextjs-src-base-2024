import { hexToRgb } from '@mui/system'

/**
 ** get text contrast from Hex color or RGBA color
 */
export const getTextContrast = (hexColor: string) => {
  if (!hexColor.includes('#')) {
    throw new Error('color must be Hexcolor')
  }
  const rgb = hexToRgb(hexColor).replace('rgb', '').replace('(', '').replace(')', '').replaceAll(' ', '').split(',')

  const brightness = Math.round((parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000)
  const textColor = brightness > 125 ? 'black' : 'white'

  return textColor
}
