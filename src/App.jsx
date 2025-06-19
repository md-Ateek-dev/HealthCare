import React from 'react';
import AppRoutes from './Routes/Routes';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();
const App = () => {
  return <AppRoutes />;
};

export default App;
