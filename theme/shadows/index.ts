// ** Type Imports
import { PaletteMode, ThemeOptions } from '@mui/material'

const Shadows = (mode: PaletteMode): ThemeOptions['shadows'] => {
  if (mode === 'light') {
    return [
      'none',
      '0px 1px 2px 0px rgba(0, 30, 45, 0.06), 0px 1px 3px 0px rgba(0, 30, 45, 0.1)',
      '0px 4px 6px -2px rgba(0, 30, 45, 0.03), 0px 12px 16px -4px rgba(0, 30, 45, 0.08)',
      '0px 24px 48px -12px rgba(0, 30, 45, 0.18)',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none'
    ]
  } else {
    return [
      'none',
      '0px 1px 2px 0px rgba(0, 30, 45, 0.06), 0px 1px 3px 0px rgba(0, 30, 45, 0.1)',
      '0px 4px 6px -2px rgba(0, 30, 45, 0.03), 0px 12px 16px -4px rgba(0, 30, 45, 0.08)',
      '0px 24px 48px -12px rgba(0, 30, 45, 0.18)',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none'
    ]
  }
}
export default Shadows
