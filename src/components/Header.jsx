import React from 'react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'

const Header = () => {
  return (
    <div>
      <Box>
        <AppBar position='static'>
            <Toolbar variant='dense'>
                <Typography>
                    AccioJob
                </Typography>
            </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Header

