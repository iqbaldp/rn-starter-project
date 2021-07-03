import React from 'react';
import { View, Text } from 'react-native-ui-lib';
import Animated, { withSpring, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

import { Bounceable } from './bounceable';
import { genNativeId } from '../services/navigation/sharedTransition';
import { SharedTransitionId } from '../services/navigation/types';

type Reanimated2Props = {
  stID?: SharedTransitionId;
};

export const Reanimated2: React.FC<Reanimated2Props> = ({ stID }: Reanimated2Props) => {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value * 250 - 100 }],
  }));

  const moveObject = () => {
    offset.value = withSpring(Math.random());
  };

  return (
    <View padding-xs>
      <Animated.View style={[animatedStyles]}>
        <View center padding-xs>
          <Bounceable onPress={moveObject} activeScale={0.9}>
            <View nativeID={genNativeId(stID)} center bg-primary padding-xl br40>
              <Text whitish>Bounceable</Text>
            </View>
          </Bounceable>
        </View>
      </Animated.View>
    </View>
  );
};
