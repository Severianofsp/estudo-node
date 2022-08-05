import app from './app';

app.listen(process.env.APP_PORT, () => {
  console.log('Escutando na porta', process.env.APP_PORT);
});
