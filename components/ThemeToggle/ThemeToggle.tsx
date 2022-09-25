import { Box, IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useThemeMode } from '../../hooks';

interface PropTypes {}

const ThemeToggle = ({ }: PropTypes) => {
  const themeMode = useThemeMode();

  return (
    <Box sx={{ position: 'fixed', bottom: 1, right: 1 }}>
      <IconButton onClick={themeMode.toggleThemeMode}>
        {themeMode.mode === 'light' ? (
          <LightModeIcon />
        ) : (
          <DarkModeIcon />
        )}
      </IconButton>
    </Box>
  );
};

export default ThemeToggle;
