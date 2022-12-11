import { StyledFooter } from './styles/StyledFooter'

const date = new Date()
const year = date.getFullYear()

export const Footer = () => {
  return <StyledFooter>&copy; {year} All Rights Reserved.</StyledFooter>
}
