import { Container } from '@mui/material';
import { DailyChecklist } from '../components/DailyChecklist';
import { ThemeToggle } from '../components/ThemeToggle';

const Home = () => {
  return (
    <Container sx={{ my: 2 }}>
      <ThemeToggle />
      <DailyChecklist />
    </Container>
  );
}

export default Home;
