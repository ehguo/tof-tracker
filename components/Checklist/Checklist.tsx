import { Stack } from '@mui/material';
import { kebabCase } from 'lodash';
import ChecklistItem from './ChecklistItem';

interface PropTypes {
  items: string[];
}

const Checklist = ({ items = [] }: PropTypes) => {
  return (
    <Stack>
      {items.map((item) => (
        <ChecklistItem
          key={kebabCase(item)}
          label={item}
        />
      ))}
    </Stack>
  );
};

export default Checklist;
