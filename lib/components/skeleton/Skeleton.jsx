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

export function Skeleton({ children, ...rest }) {
  return (
    <ChakraSkeleton borderRadius="base" {...rest}>
      {children}
    </ChakraSkeleton>
  );
}

export function SkeletonHeading({ children, ...rest }) {
  return (
    <ChakraSkeleton borderRadius="base" {...rest}>
      {children}
    </ChakraSkeleton>
  );
}

export function SkeletonCircle({ children, ...rest }) {
  return <ChakraSkeletonCircle {...rest}>{children}</ChakraSkeletonCircle>;
}

export function SkeletonText({ children, ...rest }) {
  return (
    <ChakraSkeletonText borderRadius="base" {...rest}>
      {children}
    </ChakraSkeletonText>
  );
}

Skeleton.defaultProps = { height: '18px' };
SkeletonText.defaultProps = { skeletonHeight: '18px' };
SkeletonHeading.defaultProps = { height: '24px', maxW: '45ch' };
SkeletonCircle.defaultProps = { size: '40px' };

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
