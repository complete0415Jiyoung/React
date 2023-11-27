import './App.css';
import { Typography,  Avatar, Link, Checkbox, Button, CssBaseline, TextField, FormControl, FormControlLabel, FormHelperText, Grid, Box, Container } from '@mui/material';
import  LockOutlinedIcon  from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Menu from './components/Menu';

function App() {

  
  const theme = createTheme();

  return (
  <ThemeProvider theme={theme} className='App'>
    <Container component="main" maxWidth="xs">
      <CssBaseline>
        <Box
          sx={{
            marginTop: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <Avatar sx={{m:1, bgcolor: 'secondary.main'}}>
          <LockOutlinedIcon/>

        </Avatar>









        </Box>
      </CssBaseline>
    </Container>
  
  
  </ThemeProvider>
  );
}

export default App;
