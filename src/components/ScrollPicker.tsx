import React, { useEffect, useState } from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import { widthScreen } from '../utils/dimensions';
import { scaleHeight } from '../utils/size';

interface Props {
  style?: ViewStyle;
  itemWrapperStyle?: ViewStyle;
  dataSource: any[];
  selectedIndexProp?: number;
  onValueChange: (selectedValue: any, selectedIndex: number) => void;
  renderItem?: () => void;
  highlightColor?: string;
  itemHeightProp?: number;
  wrapperHeightProp?: number;
}

export const ScrollPicker: React.FC<Props> = ({
  dataSource,
  highlightColor,
  itemHeightProp,
  itemWrapperStyle,
  onValueChange,
  renderItem,
  selectedIndexProp,
  style,
  wrapperHeightProp,
}) => {
  const [itemHeight, setItemHeight] = useState(itemHeightProp || 50);
  const [wrapperHeight, setWrapperHeight] = useState(
    wrapperHeightProp || itemHeight * 5 || 0,
  );
  const [selectedIndex, setSelectedIndex] = useState(selectedIndexProp || 0);
  const [isScrollTo, setIsScrollTo] = useState(false);

  const _renderPlaceHolder = () => {
    let h = (wrapperHeight - itemHeight) / 2;
    let header = <View style={{ height: h, flex: 1 }} />;
    let footer = <View style={{ height: h, flex: 1 }} />;
    return { header, footer };
  };

  const _renderItem = (data: any, index: number) => {
    let isSelected = index === selectedIndex;
    let item = (
      <Text
        style={
          isSelected
            ? [styles.itemText, styles.itemTextSelected]
            : [styles.itemText]
        }>
        {data}
      </Text>
    );

    if (renderItem) {
      item = renderItem(data, index, isSelected);
    }

    return (
      <View
        style={[[styles.itemWrapper, itemWrapperStyle], { height: itemHeight }]}
        key={index}>
        {item}
      </View>
    );
  };

  const _scrollFix = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    let y = 0;
    let h = itemHeight;
    if (e.nativeEvent.contentOffset) {
      y = e.nativeEvent.contentOffset.y;
    }
    let selectedIndex = Math.round(y / h);
    let _y = selectedIndex * h;
    if (_y !== y) {
      if (Platform.OS === 'ios') {
        setIsScrollTo(true);
      }
      this.sview.scrollTo({ y: _y });
    }
    if (this.state.selectedIndex === selectedIndex) {
      return;
    }
    let selectedValue = dataSource[selectedIndex];
    setSelectedIndex(selectedIndex);
    onValueChange(selectedValue, selectedIndex);
  };

  const _onScrollBeginDrag = () => {
    this.dragStarted = true;
    if (Platform.OS === 'ios') {
      setIsScrollTo(false);
    }
    this.timer && clearTimeout(this.timer);
  };

  const _onScrollEndDrag = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    this.dragStarted = false;
    let _e = {
      nativeEvent: {
        contentOffset: {
          y: e.nativeEvent.contentOffset.y,
        },
      },
    };
    this.timer && clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      if (!this.momentumStarted && !this.dragStarted) {
        _scrollFix(_e, 'timeout');
      }
    }, 10);
  };

  const _onMomentumScrollBegin = (
    e: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    this.momentumStarted = true;
    this.timer && clearTimeout(this.timer);
  };

  const _onMomentumScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    this.momentumStarted = false;
    if (!this.isScrollTo && !this.momentumStarted && !this.dragStarted) {
      this._scrollFix(e);
    }
  };

  const scrollToIndex = (ind: number) => {
    setSelectedIndex(ind);
    let y = itemHeight * ind;
    this.sview.scrollTo({ y: y });
  };

  const getSelected = () => dataSource[selectedIndex];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (selectedIndexProp) {
      timeout = setTimeout(() => {
        scrollToIndex(selectedIndex);
      }, 0);
    }
    return () => clearTimeout(timeout);
  }, []);

  let { header, footer } = _renderPlaceHolder();
  return (
    <View
      style={[
        styles.wrapperStyle,
        {
          height: wrapperHeight,
        },
      ]}>
      <ScrollView
        ref={(sview) => {
          sview = sview;
        }}
        bounces={false}
        showsVerticalScrollIndicator={false}
        onMomentumScrollBegin={_onMomentumScrollBegin}
        onMomentumScrollEnd={_onMomentumScrollEnd}
        onScrollBeginDrag={_onScrollBeginDrag}
        onScrollEndDrag={_onScrollEndDrag}>
        {header}
        {dataSource.map(_renderItem)}
        {footer}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    color: '#000000',
  },
  itemTextSelected: {
    color: '#FFFFFF',
  },
  selectView: {
    height: scaleHeight(57),
    position: 'absolute',
    width: widthScreen,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(75, 102, 234, 0.1)',
  },
  wrapperStyle: {
    flex: 1,
    overflow: 'hidden',
  },
});
