import React from 'react';
import {
  Box,
  Text,
  Link,
  Icon,
  Card as NimbusCard,
} from '@nimbus-ds/components';
import { ExternalLinkIcon } from '@nimbus-ds/icons';
import { ICard } from './card.types';

const Card: React.FC<ICard> = ({ title, description, href }) => (
  <Box as={NimbusCard} key={title} boxShadow={{ xs: '1', hover: '3' }}>
    <NimbusCard.Header title={title} />
    <NimbusCard.Body>
      <Text lineClamp={4}>{description}</Text>
    </NimbusCard.Body>
    <NimbusCard.Footer>
      <Link appearance="primary" as="a" href={href} target="_blank">
        Ver exemplo
        <Icon color="primary-interactive" source={<ExternalLinkIcon />} />
      </Link>
    </NimbusCard.Footer>
  </Box>
);

export default Card;
