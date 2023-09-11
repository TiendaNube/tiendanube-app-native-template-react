import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import { Layout, Page } from '@nimbus-ds/patterns';
import { goTo, navigateHeaderRemove } from '@tiendanube/nexo';
import {
  Card,
  Text,
  Link,
  Icon,
  Box,
  Button,
  Title,
  IconButton,
  Spinner,
} from '@nimbus-ds/components';
import {
  ExternalLinkIcon,
  PictureIcon,
  PlusCircleIcon,
} from '@nimbus-ds/icons';

import { nexo } from '@/app';
import { Responsive } from '@/components';
import HomeDataProvider from './HomeDataProvider';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('translations');

  useEffect(() => {
    navigateHeaderRemove(nexo);
  }, []);

  return (
    <Page maxWidth="800px">
      <Page.Header
        title="App Template"
        buttonStack={
          <Responsive
            mobileContent={
              <IconButton
                backgroundColor="transparent"
                borderColor="transparent"
                onClick={() => navigate('/examples')}
                source={<PictureIcon />}
                size="2rem"
              />
            }
            desktopContent={
              <Box display="flex" gap="2">
                <Button onClick={() => navigate('/examples')}>
                  <Icon source={<PictureIcon />} color="currentColor" />
                  Exemplos
                </Button>
                <Button
                  appearance="primary"
                  onClick={() => goTo(nexo, '/orders')}
                >
                  Ir as vendas
                </Button>
              </Box>
            }
          />
        }
      />
      <Page.Body>
        <Layout columns="1">
          <Layout.Section>
            <Card>
              <Card.Header title={t('home.first-card.title')} />
              <Card.Body>
                <Text>
                  <Trans
                    i18nKey={t('home.first-card.description')}
                    components={[
                      <Link
                        as="a"
                        href="https://nimbus.tiendanube.com/"
                        target="_blank"
                        appearance="primary"
                        textDecoration="none"
                        children=""
                      />,
                      <Link
                        as="a"
                        href="https://tiendanube.github.io/api-documentation/intro"
                        target="_blank"
                        appearance="primary"
                        textDecoration="none"
                        children=""
                      />,
                    ]}
                  />
                </Text>
              </Card.Body>
              <Card.Footer>
                <Link
                  as="a"
                  target="_blank"
                  href={t('home.first-card.link.url')}
                >
                  {t('home.first-card.link.text')}
                  <Icon color="currentColor" source={<ExternalLinkIcon />} />
                </Link>
              </Card.Footer>
            </Card>
            <HomeDataProvider>
              {({ totalProducts, onCreateProduct, isLoading }) => (
                <Card>
                  <Card.Header title={t('home.second-card.title')} />
                  <Card.Body>
                    <Box display="flex" flexDirection="column" gap="4" mb="2">
                      <Text>{t('home.second-card.description')}</Text>
                      <Box display="flex" gap="2" alignItems="center">
                        <Text color="neutral-textDisabled">
                          {t('home.second-card.total-product')}:
                        </Text>
                        {!isLoading.totalProducts && (
                          <Title as="h6" fontSize="h1">
                            {totalProducts ?? 0}
                          </Title>
                        )}
                        {isLoading.totalProducts && (
                          <Title.Skeleton as="h6" height="25px" width="28px" />
                        )}
                      </Box>
                    </Box>
                  </Card.Body>
                  <Card.Footer>
                    <Button
                      appearance="primary"
                      onClick={onCreateProduct}
                      disabled={isLoading.createProduct}
                    >
                      {isLoading.createProduct && (
                        <Spinner color="currentColor" size="small" />
                      )}
                      {!isLoading.createProduct && (
                        <Icon
                          color="currentColor"
                          source={<PlusCircleIcon />}
                        />
                      )}
                      {t('home.second-card.create-products')}
                    </Button>
                    <Button onClick={() => navigate('/products')}>
                      Produtos
                    </Button>
                  </Card.Footer>
                </Card>
              )}
            </HomeDataProvider>
          </Layout.Section>
        </Layout>
      </Page.Body>
    </Page>
  );
};

export default Home;
