import * as React from 'react';
import { Link } from '@mui/material'
import {Box} from '@mui/material'

const Menu = () => {
  return (
    <Box
    sx={{
      typography: 'body1',
      '& > :not(style) ~ :not(style)': {
        ml: 2,
      },
    }}
    
  >
    
<Link href="#">About</Link>
<Link href="#">Service</Link>
<Link href="#">Contact</Link>
  
  </Box>
  )
}

export default Menu
