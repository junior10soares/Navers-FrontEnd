import 'styled-components'
import { DefaultTheme } from '../styles/Themes/default'

type ThemeType = typeof DefaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
