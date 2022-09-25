import { Box, Checkbox, FormControl, FormControlLabel } from '@mui/material';
import { ChangeEvent } from 'react';

interface PropTypes {
  name: string;
  label: string;
  value?: boolean | undefined;
  onChange: (event: ChangeEvent) => void;
}

const ChecklistItem = ({
  name,
  label,
  value,
  onChange,
}: PropTypes) => {
  return (
    <FormControl>
      <FormControlLabel
        label={label}
        control={(
          <Checkbox
            name={name}
            checked={value}
            onChange={onChange}
          />
        )}
      />
    </FormControl>
  );
};

export default ChecklistItem;
