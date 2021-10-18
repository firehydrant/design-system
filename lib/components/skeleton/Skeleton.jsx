import React from 'react';
import PropTypes from 'prop-types';
import {
  Skeleton as ChakraSkeleton,
  SkeletonCircle as ChakraSkeletonCircle,
  SkeletonText as ChakraSkeletonText,
} from '@chakra-ui/react';

let sharedStyles = {
  borderRadius: 'base',
};

export function Skeleton({ children, ...rest }) {
  return <ChakraSkeleton {...rest}>{children}</ChakraSkeleton>;
}

export function SkeletonHeading({ children, ...rest }) {
  return <ChakraSkeleton {...rest}>{children}</ChakraSkeleton>;
}

export function SkeletonCircle({ children, ...rest }) {
  return <ChakraSkeletonCircle {...rest}>{children}</ChakraSkeletonCircle>;
}

export function SkeletonText({ children, ...rest }) {
  return <ChakraSkeletonText {...rest}>{children}</ChakraSkeletonText>;
}

Skeleton.defaultProps = { sharedStyles, height: '18px' };
SkeletonText.defaultProps = { sharedStyles, skeletonHeight: '18px' };
SkeletonHeading.defaultProps = { sharedStyles, height: '24px', maxW: '45ch' };
SkeletonCircle.defaultProps = { size: '40px' };

Skeleton.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
  isLoaded: PropTypes.bool,
};

SkeletonCircle.propTypes = {
  size: PropTypes.string,
};
