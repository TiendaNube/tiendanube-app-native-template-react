import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Box, Text, ToastProvider } from '@nimbus-ds/components';
import { connect, iAmReady } from '@tiendanube/nexo/helpers';

import Router from '@/app/Router';
import nexo from './NexoClient';
import NexoSyncRoute from './NexoSyncRoute';
import { DarkModeProvider } from './DarkModeProvider';
import './I18n';

const App: React.FC = () => {
  const [isConnect, setIsConnect] = useState(false);

  useEffect(() => {
    if (!isConnect) {
      connect(nexo)
        .then(async () => {
          setIsConnect(true);
          iAmReady(nexo);
        })
        .catch(() => {
          setIsConnect(false);
        });
    }
  }, []);

  if (!isConnect)
    return (
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Conectando...</Text>
      </Box>
    );

  return (
    <DarkModeProvider>
      <ToastProvider>
        <BrowserRouter>
          <NexoSyncRoute>
            <Router />
          </NexoSyncRoute>
        </BrowserRouter>
      </ToastProvider>
    </DarkModeProvider>
  );
};

export default App;
