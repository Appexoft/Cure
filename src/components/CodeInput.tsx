import React, { useEffect, useState } from 'react';
import { View, Text, ViewStyle } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../utils/GlobalStyles';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { scaleHeight, scaleWidth } from '../utils/size';
import FONTS from '../utils/fonts';

interface Props {
  sellCount: number;
  onCodeEntered: (code: string) => void;
  codeFieldRoot?: ViewStyle;
}

const CodeInput: React.FC<Props> = ({ sellCount, onCodeEntered, ...props }) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: sellCount });
  const [a, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    onCodeEntered(value);
  }, [value, onCodeEntered]);

  const renderItem = (index: number, symbol: string, isFocused: boolean) => {
    if (symbol) {
      const textChild = true ? '•' : symbol;
    } else if (isFocused) {
      const textChild = <Cursor />;
    }
    return (
      <Text
        key={index}
        style={[styles.cell, isFocused && styles.focusCell]}
        onLayout={getCellOnLayoutHandler(index)}>
        {symbol || (isFocused ? <Cursor /> : null)}
      </Text>
    );
  };

  return (
    <View>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={sellCount}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) =>
          renderItem(index, symbol, isFocused)
        }
      />
    </View>
  );
};

export default CodeInput;

const styles = ScaledSheet.create({
  codeFieldRoot: {
    marginTop: scaleHeight(29),
    marginHorizontal: scaleWidth(45),
  },
  cell: {
    width: scaleWidth(36),
    height: scaleWidth(44),
    backgroundColor: Color.cellBackground,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: FONTS.URBANIST.SemiBold,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    textTransform: 'uppercase',
    paddingTop: scaleHeight(13),
    marginRight: 5,
    color: Color.semiBlack,
  },
  focusCell: {
    borderColor: Color.semiBlack,
  },
});
