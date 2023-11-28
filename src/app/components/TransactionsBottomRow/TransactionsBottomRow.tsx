import DataChart from '../DataChart/DataChart';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { doughnutChartData } from '@/app/helper/mockData';
import scss from './TransactionsBottomRow.module.scss';

const TransactionsBottomRow = () => {
  return (
    <Grid container className={scss.bottomRow}>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={'doughnut'} data={doughnutChartData[0]} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={'doughnut'} data={doughnutChartData[1]} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={'doughnut'} data={doughnutChartData[2]} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={'doughnut'} data={doughnutChartData[3]} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TransactionsBottomRow;
