import React from 'react';
import PropTypes from 'prop-types';
import {
  Skeleton as ChakraSkeleton,
  SkeletonCircle as ChakraSkeletonCircle,
  SkeletonText as ChakraSkeletonText,
} from '@chakra-ui/react';

let sharedTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
  isLoaded: PropTypes.bool,
};

export function Skeleton({ children, height = '18px', ...rest }) {
  return (
    <ChakraSkeleton height={height} borderRadius="base" {...rest}>
      {children}
    </ChakraSkeleton>
  );
}

export function SkeletonHeading({
  children,
  height = '24px',
  maxW = '45ch',
  ...rest
}) {
  return (
    <ChakraSkeleton height={height} maxW={maxW} borderRadius="base" {...rest}>
      {children}
    </ChakraSkeleton>
  );
}

export function SkeletonCircle({ children, size = '40px', ...rest }) {
  return (
    <ChakraSkeletonCircle size={size} {...rest}>
      {children}
    </ChakraSkeletonCircle>
  );
}

export function SkeletonText({ children, skeletonHeight = '18px', ...rest }) {
  return (
    <ChakraSkeletonText
      skeletonHeight={skeletonHeight}
      borderRadius="base"
      {...rest}
    >
      {children}
    </ChakraSkeletonText>
  );
}

Skeleton.propTypes = {
  ...sharedTypes,
};
SkeletonText.propTypes = {
  ...sharedTypes,
  skeletonHeight: PropTypes.string,
  noOfLines: PropTypes.number,
};
SkeletonHeading.propTypes = {
  ...sharedTypes,
  maxW: PropTypes.string,
};
SkeletonCircle.propTypes = {
  ...sharedTypes,
  size: PropTypes.string,
};
