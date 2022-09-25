import { useState } from 'react';
import { useFormik } from 'formik';
import { Accordion, AccordionDetails, AccordionSummary, Box, Card, Container, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Checklist } from '../Checklist';
import { checklistConfig, initialValues } from './config';
import { getTimersUntilReset } from '../../utils/timeToReset';
import { useInterval, useLocalStorage } from '../../hooks';
import { isAfter } from 'date-fns';

interface PropTypes { }

const DailyChecklist = ({ }: PropTypes) => {
  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => { }
  });

  const [dayEnd, setDayEnd] = useLocalStorage('dayEnd', getTimersUntilReset(new Date()).dayEnd);
  const [timeToReset, setTimeToReset] = useState('');

  useInterval(() => {
    const { dailyTimer, dayEnd: newDayEnd } = getTimersUntilReset(new Date());
    setTimeToReset(dailyTimer);

    if (isAfter(new Date(), new Date(dayEnd))) {
      setDayEnd(newDayEnd);
      formik.resetForm();
    }
  }, 1000);

  return (
    <Container maxWidth="sm">
      <Accordion>
        <AccordionSummary
          expandIcon={(
            <ExpandMoreIcon />
          )}
        >
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            mr: 1
          }}>
            <Typography sx={{ fontWeight: 'bold' }}>
              Daily
            </Typography>
            <Typography>
              Reset: {timeToReset}
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Checklist
            config={checklistConfig}
            formik={formik}
          />
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default DailyChecklist;
