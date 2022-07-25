import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const Loader = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item
        width="100%"
        height={240}
        borderBottomLeftRadius={10}
        borderBottomRightRadius={10}
        marginBottom={20}
      />
      <SkeletonPlaceholder.Item
        width="100%"
        height={240}
        borderBottomLeftRadius={10}
        borderBottomRightRadius={10}
        marginBottom={20}
      />
      <SkeletonPlaceholder.Item
        width="100%"
        height={240}
        borderBottomLeftRadius={10}
        borderBottomRightRadius={10}
        marginBottom={20}
      />
    </SkeletonPlaceholder>
  );
};

export default Loader;
