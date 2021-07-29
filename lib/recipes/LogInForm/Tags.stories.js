import React from 'react';
import {
  AlertIcon,
  SuccessIcon,
  WarningIcon,
  InfoIcon,
  Tag,
  TagLeftIcon,
  TagLabel,
  Wrap,
} from '../../main';

export default {
  title: 'Recipes/Status Tags',
};

export const Neutral = () => (
  <Wrap spacing={2} p={2}>
    <Tag colorScheme="grey">Neutral</Tag>
    <Tag colorScheme="grey">
      <TagLeftIcon>
        <InfoIcon />
      </TagLeftIcon>
      <TagLabel>Neutral</TagLabel>
    </Tag>
  </Wrap>
);

export const Alert = () => (
  <Wrap spacing={2} p={2}>
    <Tag colorScheme="red">Alert</Tag>
    <Tag colorScheme="red">
      <TagLeftIcon>
        <AlertIcon />
      </TagLeftIcon>
      <TagLabel>Alert</TagLabel>
    </Tag>
  </Wrap>
);

export const Warning = () => (
  <Wrap spacing={2} p={2}>
    <Tag colorScheme="brown">Warning</Tag>
    <Tag colorScheme="brown">
      <TagLeftIcon>
        <WarningIcon />
      </TagLeftIcon>
      <TagLabel>Warning</TagLabel>
    </Tag>
  </Wrap>
);

export const Success = () => (
  <Wrap spacing={2} p={2}>
    <Tag colorScheme="green">Success</Tag>
    <Tag colorScheme="green">
      <TagLeftIcon>
        <SuccessIcon />
      </TagLeftIcon>
      <TagLabel>Success</TagLabel>
    </Tag>
  </Wrap>
);
