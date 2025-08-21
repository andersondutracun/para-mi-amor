import { Paper, Button, Typography, Box, Modal } from '@mui/material';
import React from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
      }}
    >
      <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
        <Typography variant='h4' component='h1' gutterBottom>
          Olá Pessoinha mais querida do meu coração!
        </Typography>

        <Button variant='contained' color='primary' onClick={handleOpen}>
          Clique aqui para continuar!!!!!
        </Button>
      </Paper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Beatriz.
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Nada pode descrever o que eu sinto por você, sei que o tempo ainda é curto, desde a
            primeira conversa, e também da mesma forma, do primeiro beijo, mas, saiba, que cada
            momento, fora especial e pode ter certeza, que irei guardar cada instante em minha
            memória, e sempre estarei carregando essa informações em meu peito, e nunca deixarei de
            cuidar de você e estar ao seu lado, como prometi, sempre serei sincero e cuidarei de
            você como se fosse única nesse mundo, você é muito especial para mim, e lembre-se de
            algo.
          </Typography>
          <Typography id='modal-modal-description-2' sx={{ mt: 2 }}>
            EU TE AMO
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}

export default App;
