import React from 'react';
import DesktopContextProvider from '../context/desktopContext';
import DesktopLayout from '../components/DesktopLayout';

const playground = () => {
  return ( 
    <DesktopContextProvider>
      <DesktopLayout />
    </DesktopContextProvider>
  );
}
 
export default playground;