import { Stack } from '@mui/material';
import { FormikProps } from 'formik';
import { kebabCase } from 'lodash';
import ChecklistItem from './ChecklistItem';

interface PropTypes {
  config: { name: string; label: string; }[];
  formik: FormikProps<any>;
}

const Checklist = ({ config = [], formik }: PropTypes) => {
  return (
    <Stack>
      {config.map(({ name, label }) => (
        <ChecklistItem
          {...formik.getFieldProps(name)}
          key={name}
          label={label}
        />
      ))}
    </Stack>
  );
};

export default Checklist;
