import React, { useEffect } from 'react';
import { navigateHeader } from '@tiendanube/nexo';
import { Page, Layout } from '@nimbus-ds/patterns';
import { Box } from '@nimbus-ds/components';

import { nexo } from '@/app';
import { Card } from './components';
import { examples } from './examples.definitions';

const Examples: React.FC = () => {
  useEffect(() => {
    navigateHeader(nexo, { goTo: '/', text: 'Volver ao inicio' });
  }, []);

  return (
    <>
      <Page maxWidth="900px">
        <Page.Header
          title="Galería de ejemplos"
          subtitle="¿Necesitás ayuda para construir tu app? Usá estos ejemplos de diferentes tipologías de diseño usando Nimbus para construir más rápido y seguro."
        />
        <Page.Body>
          <Layout columns="1">
            <Layout.Section>
              <Box
                display="grid"
                gridTemplateColumns={{
                  xs: '1fr',
                  md: '1fr 1fr',
                  lg: '1fr 1fr 1fr',
                }}
                gap="4"
              >
                {examples.map((example) => (
                  <Card
                    key={example.link}
                    title={example.title}
                    description={example.description}
                    href={example.link}
                  />
                ))}
              </Box>
            </Layout.Section>
          </Layout>
        </Page.Body>
      </Page>
    </>
  );
};

export default Examples;
