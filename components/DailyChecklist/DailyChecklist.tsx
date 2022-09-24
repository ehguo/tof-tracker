import { useFormik } from 'formik';
import { Card, Container } from '@mui/material';
import { Checklist } from '../Checklist';
import { dailyItems, initialValues } from './config';

interface PropTypes { }

const DailyChecklist = ({ }: PropTypes) => {
  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {}
  });

  return (
    <Container maxWidth="sm">
      <Card sx={{ p: 2 }}>
        <Checklist
          items={dailyItems}
        />
      </Card>
    </Container>
  );
};

export default DailyChecklist;
