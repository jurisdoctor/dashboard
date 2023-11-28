import { Box, Grid, Paper } from '@mui/material';

import DataRibbon from '../components/DataRibbon';
import TransactionsBottomRow from '../components/TransactionsBottomRow';
import TransactionsPerDay from '../components/TransactionsPerDay';
import scss from './dashboard.module.css';

const Dashboard = () => {
  return (
    <Box>
      <Grid container gap={4} marginTop={2}>
        <DataRibbon />
        <TransactionsPerDay />
      </Grid>
      <TransactionsBottomRow />
    </Box>
  );
};

export default Dashboard;
