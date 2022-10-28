import React, { FunctionComponent } from 'react';

// Components
import Dashboard from './Dashboard/Dashboard';

// Styles
import { Container } from 'styles/global';

const DashboardPage: FunctionComponent = () => (
  <main>
    <Container>
      <Dashboard />
    </Container>
  </main>
);
export default DashboardPage;
