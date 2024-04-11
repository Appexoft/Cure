import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { scaleHeight } from '../../../utils/size';
import {
  BorderRadius,
  Color,
  Margin,
  Sizes,
} from '../../../utils/GlobalStyles';
import { useNavigation } from '@react-navigation/native';
import FONTS from '../../../utils/fonts';
import { fontH6 } from '../../../utils/themeUtils';
import { SELECTED_TAB } from '@components/tabs';

interface Props {
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  onSelectedTab: (tab: SELECTED_TAB) => void;
}

export const FourTabs: React.FC<Props> = (props: Props) => {
  // @ts-ignore
  const { navigation } = useNavigation();
  const [activeTab, setActiveTab] = useState(SELECTED_TAB.FIRST);

  const getTabItem = (title: string, tabNr: SELECTED_TAB) => {
    return (
      <Pressable
        style={[
          activeTab === tabNr ? styles.active : styles.inactive,
          styles.tab,
        ]}
        onPress={() => {
          setActiveTab(tabNr);
          props.onSelectedTab(tabNr);
        }}>
        <Text
          style={[
            activeTab === tabNr ? styles.activeText : styles.inactiveText,
            styles.tabText,
          ]}>
          {title}
        </Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.contents}>
      {getTabItem(props.title1, SELECTED_TAB.FIRST)}
      {getTabItem(props.title2, SELECTED_TAB.SECOND)}
      {getTabItem(props.title3, SELECTED_TAB.THIRD)}
      {getTabItem(props.title4, SELECTED_TAB.FOURTH)}
    </View>
  );
};

const styles = StyleSheet.create({
  contents: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: Sizes.card_size,
    shadowColor: 'rgba(0, 0, 0, 0.07)',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowRadius: 64,
    elevation: 64,
    shadowOpacity: 1,
    height: scaleHeight(40),
    backgroundColor: Color.white,
    borderRadius: BorderRadius.large,
    flexDirection: 'row',
    marginTop: scaleHeight(Margin.between_entries),
  },
  tab: {
    width: '20%',
    marginLeft: Margin.m_8xs,
    flex: 1,
  },
  tabText: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: fontH6,
    fontWeight: '400',
    lineHeight: 18,
    textAlign: 'center',
  },
  active: {
    backgroundColor: Color.colourMain,
    borderRadius: BorderRadius.large,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: 40,
  },
  inactive: {
    zIndex: 2,
  },
  activeText: {
    color: Color.white,
    fontWeight: '600',
    fontFamily: FONTS.URBANIST.Bold,
  },
  inactiveText: {
    color: Color.accent,
    fontWeight: '400',
  },
});
