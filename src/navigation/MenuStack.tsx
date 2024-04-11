import React, { memo, useRef, useCallback } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LeftMenu from '@screens/app/others/Menu';
import ScalingDrawer from 'react-native-scaling-drawer';
import ROUTES from '../utils/routes';
import StaticsHealth from '@screens/app/others/StaticsHealth';
import HeaderTitle from '@components/HeaderTittle';
import ButtonHeader from '@components/btns/ButtonHeader';
import SvgMenu from '@assets/svgs/SvgMenu';
import PatientHeaderBackground from '@screens/app/patient/navigation/PatientHeaderBackground';

const Stack = createStackNavigator();

const defaultScalingDrawerConfig = {
  scalingFactor: 0.8,
  minimizeFactor: 0.8,
  swipeOffset: 30,
  frontStyle: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: '#FFF',
    shadowOpacity: 0,
    shadowRadius: 0,
  },
};

const MenuStack = memo(() => {
  const drawer = useRef();
  const onClose = useCallback(() => {
    // @ts-ignore
    drawer.current?.close();
  }, []);
  const onOpen = useCallback(() => {
    // @ts-ignore
    drawer.current?.open();
  }, []);

  return (
    <ScalingDrawer
      ref={drawer}
      content={<LeftMenu onClose={onClose} onOpen={onOpen} />}
      {...defaultScalingDrawerConfig}>
      <Stack.Navigator>
        <Stack.Screen
          name={ROUTES.StaticsHealth}
          component={StaticsHealth}
          options={({ navigation }) => ({
            headerTitle: () => <HeaderTitle title={'Test Indicators'} />,
            headerLeft: () => (
              <ButtonHeader
                children={<SvgMenu />}
                onPress={() => {
                  navigation.navigate(ROUTES.Menu);
                }}
              />
            ),
            headerBackground: () => <PatientHeaderBackground />,
          })}
        />
      </Stack.Navigator>
    </ScalingDrawer>
  );
});

export default MenuStack;
