import DataCard from '@/app/components/Dashboard/DataCard/DataCard';
import { Grid } from '@mui/material';
import scss from './DataRibbon.module.scss';

const DataRibbon = () => {
  return (
    <Grid container gap={2} className={scss.dataRibbon}>
      <Grid>
        <DataCard
          title={'Total Sales'}
          value={'53'}
          description={'The totals of all homes sold in 2023'}
        />
      </Grid>
      <Grid>
        <DataCard
          title={'Total Value'}
          value={'$112,002,780.00'}
          description={'The total value of the current financial year'}
        />
      </Grid>
      <Grid>
        <DataCard
          title={'Avg. Home Value'}
          value={'$2,113,260.00'}
          description={
            'The average order value for all sales this current financial year'
          }
        />
      </Grid>
      <Grid>
        <DataCard
          title={'Conversion rate'}
          value={'20.61%'}
          description={'How many pitches become sales'}
        />
      </Grid>
    </Grid>
  );
};

export default DataRibbon;
