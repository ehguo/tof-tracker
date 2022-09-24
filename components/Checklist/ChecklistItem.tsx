import { Box, Checkbox, FormControl, FormControlLabel } from '@mui/material';

interface PropTypes {
  label: string;
}

const ChecklistItem = ({
  label,
}: PropTypes) => {
  return (
    <FormControl>
      <FormControlLabel label={label} control={<Checkbox />} />
    </FormControl>
  );
};

export default ChecklistItem;
