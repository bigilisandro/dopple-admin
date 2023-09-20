import { useMemo } from 'react';

// material-ui
import { Grid } from '@mui/material';

// third-party
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { isMobile } from 'react-device-detect';

// project import
import Layout from 'layout';
import Page from 'components/Page';
import RowDragDrop from 'sections/tables/react-table/RowDragDrop';
import ColumnDragDrop from 'sections/tables/react-table/ColumnDragDrop';
import makeData from 'data/react-table';

// ==============================|| REACT TABLE - DRAG & DROP ||============================== //

const DragDrop = () => {
  const data = useMemo(() => makeData(20), []);

  return (
    <Page title="Drag Drop Table">
      <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <RowDragDrop data={data.slice(0, 10)} />
          </Grid>
          <Grid item xs={12}>
            <ColumnDragDrop data={data.slice(10, 19)} />
          </Grid>
        </Grid>
      </DndProvider>
    </Page>
  );
};

DragDrop.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default DragDrop;
