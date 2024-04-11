import React, { useEffect, useState } from 'react';
import { StyleProp, Text, TextInput, TextStyle, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '../../utils/size';
import SvgLoading from '@assets/svgs/SvgLoading';
import FONTS from '../../utils/fonts';
import Icon from 'react-native-vector-icons/Feather';
import { commonStyles } from '../../utils/styles/commonStyles';
import {
  BorderRadius,
  Color,
  FontFamily,
  FontSize,
  Padding,
  Sizes,
} from '../../utils/GlobalStyles';
import {fontH3, fontH6, fontH5, fontH4} from '../../utils/themeUtils';
import { Platform } from 'react-native';

interface Props {
  inputRef?: React.LegacyRef<TextInput>;
  label?: string;
  subLabel?: string;
  svg?: React.ReactNode;
  iconLeft?: string;
  iconRight?: string;
  placeholder?: string;
  style?: StyleProp<TextStyle>;
  displayShowPass?: boolean;
  isEditable?: boolean;
  secure?: boolean;
  type?: string;
  editable?: boolean;
  value?: string;
  returnKeyType?: any;
  onSubmitEditing?: any;
  onChangedText?: (text: string) => void;
  onRawChangedText?: (text: string) => void;
  onTouchStart?: any;
  validate?: (text: string) => boolean;
  validationMsg?: string;
  blurOnSubmit?: boolean;
  numberOfLines?: number;
  isMultiline?: boolean;
  modalInputWidth?: boolean;
  halfWidth?: boolean;
  fullSize?: boolean;
  inputMode?: string;
  marginTop?: boolean;
}

export const VALIDATION_STATE = {
  NO_INPUT: -1,
  VALIDATION_IN_PROGRESS: 0,
  FAILED: 1,
  SUCCESS: 2,
};

const TextInputCustom = (props: Props) => {
  const [changedText, setChangedText] = useState(props.value);
  const [secure, setSecure] = useState(props.secure);
  const [validationStatus, setValidationStatus] = useState(
    VALIDATION_STATE.NO_INPUT,
  );
  const timeout = React.useRef(null);

  useEffect(() => {
    if (props && props.value && props.value !== changedText) {
      setChangedText(props.value);
    }
  }, [props]);

  const handleOnChange = (data: string) => {
    clearTimeout(timeout.current);
    setChangedText(data);
    if (props.type === 'date') {
      const numericDate = data.replace(/\D/g, '');
      if (numericDate.length <= 2 && props.onRawChangedText) {
        setChangedText(numericDate);
        props.onRawChangedText(numericDate);
      } else if (numericDate.length <= 4 && props.onRawChangedText) {
        setChangedText(`${numericDate.slice(0, 2)}/${numericDate.slice(2)}`);
        props.onRawChangedText(numericDate);
      } else if (props.onRawChangedText) {
        setChangedText(
          `${numericDate.slice(0, 2)}/${numericDate.slice(
            2,
            4,
          )}/${numericDate.slice(4, 8)}`,
        );
        props.onRawChangedText(
          `${numericDate.slice(0, 2)}/${numericDate.slice(
            2,
            4,
          )}/${numericDate.slice(4, 8)}`,
        );
      }
    } else {
      if (props.onRawChangedText) {
        props.onRawChangedText(data);
      }

      timeout.current = setTimeout(() => {
        if (!data || data.length === 0) {
          setValidationStatus(VALIDATION_STATE.VALIDATION_IN_PROGRESS);
          if (props.onChangedText) {
            props.onChangedText(data);
          }
        } else {
          if (!props.validate) {
            setValidationStatus(VALIDATION_STATE.NO_INPUT);
            if (props.onChangedText) {
              console.log('setting value now', data);
              props.onChangedText(data);
            }
            return;
          } else {
            if (props.validate(data)) {
              if (props.onChangedText) {
                props.onChangedText(data);
              }
              setValidationStatus(VALIDATION_STATE.SUCCESS);
            } else {
              setValidationStatus(VALIDATION_STATE.FAILED);
              console.log(
                'InputText [' + data + '] is not valid, will not be passed on',
              );
            }
          }
        }
      }, 800);
    }
  };

  return (
    <View
      style={[
        styles.inputHeight,
        props.marginTop ? styles.marginTop : styles.noMarginTop,
        props.modalInputWidth
          ? styles.modalInputContainer
          : props.halfWidth
          ? styles.halfWidthInput
          : props.fullSize
          ? styles.input_full_size
          : styles.inputContainer,
      ]}>
      {props.label && <Text style={[styles.label]}>{props.label}</Text>}
      {props.subLabel && (
        <Text style={[styles.subLabel]}>{props.subLabel}</Text>
      )}
      <View
        style={[
          styles.inputArea,
          commonStyles.mt5,
          props.style,
          validationStatus === VALIDATION_STATE.FAILED
            ? styles.validationError
            : styles.validationOk,
        ]}>
        {/*deprecated*/}
        {props.svg ? <Text style={styles.svg}>{props.svg}</Text> : null}
        {props.iconLeft && (
          <Icon name={props.iconLeft} size={40} style={styles.iconLeft} />
        )}

        <TextInput
          ref={props.inputRef}
          autoComplete={'off'}
          autoCorrect={false}
          style={[
            styles.input,
            validationStatus === VALIDATION_STATE.FAILED
              ? styles.textValidationError
              : styles.textValidationOk,
          ]}
          placeholder={props.placeholder}
          secureTextEntry={secure}
          multiline={
            props.numberOfLines ? props.numberOfLines > 1 : props.isMultiline
          }
          numberOfLines={props.numberOfLines}
          placeholderTextColor={Color.inputPlaceholder}
          editable={props.editable}
          returnKeyType={props.returnKeyType}
          onChangeText={(text) => {
            handleOnChange(text);
          }}
          value={changedText}
          onTouchStart={() => {
            if (props.onTouchStart) {
              props.onTouchStart();
            }
          }}
          onSubmitEditing={props.onSubmitEditing}
          blurOnSubmit={props.blurOnSubmit}
        />
        {props.displayShowPass && (
          <>
            {secure ? (
              <Icon
                name="eye-off"
                size={16}
                style={styles.icon}
                onPress={() => {
                  setSecure(false);
                }}
              />
            ) : (
              <Icon
                name="eye"
                size={16}
                style={styles.icon}
                onPress={() => {
                  setSecure(true);
                }}
              />
            )}
          </>
        )}
        {props.iconRight && (
          <Icon name={props.iconRight} size={20} style={styles.iconRight} />
        )}

        {validationStatus === VALIDATION_STATE.VALIDATION_IN_PROGRESS &&
          !props.isMultiline && <SvgLoading style={styles.svgIcon} />}
        {validationStatus === VALIDATION_STATE.SUCCESS &&
          !props.isMultiline && (
            <Icon name="check" size={16} style={styles.icon} />
          )}
        {validationStatus === VALIDATION_STATE.FAILED && !props.isMultiline && (
          <Icon name="alert-circle" size={16} style={styles.iconError} />
        )}
      </View>
      {validationStatus === VALIDATION_STATE.FAILED && (
        <Text style={styles.validationMsg}>{props.validationMsg}</Text>
      )}
    </View>
  );
};

export default TextInputCustom;

const styles = ScaledSheet.create({
  inputContainer: {
    width: Sizes.input_size,
  },
  inputHeight: {
    marginBottom: scaleHeight(3),
    marginTop: scaleHeight(3),
  },
  input_full_size: {
    width: Sizes.input_full_size,
  },
  halfWidthInput: {
    width: Sizes.half_width,
  },
  modalInputContainer: {
    width: Sizes.modal_input_size,
  },
  marginTop: {
    marginTop: scaleHeight(5),
  },
  noMarginTo: {
    marginTop: 0,
  },
  label: {
    lineHeight: 15,
    fontWeight: '400',
    color: Color.inputLabel,
    fontSize: fontH5,
    textAlign: 'left',
    fontFamily: FONTS.URBANIST.Medium,
  },
  subLabel: {
    lineHeight: 15,
    fontWeight: '200',
    color: Color.gray_300,
    fontSize: fontH6,
    textAlign: 'left',
    fontFamily: FONTS.URBANIST.Regular,
  },
  labelTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.textInputError1,
  },
  labelTypo1: {
    color: Color.primaryNeutral9001,
    fontSize: FontSize.fontH5,
    textAlign: 'left',
    fontFamily: FontFamily.textInputError1,
  },
  inputArea: {
    alignSelf: 'stretch',
    borderRadius: BorderRadius.medium,
    backgroundColor: Color.white,
    borderStyle: 'solid',
    borderColor: Color.border,
    borderWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: Platform.OS === 'ios' ? Padding.p_10 : Padding.p_4,
    paddingVertical: Platform.OS === 'ios' ? Padding.p_10 : Padding.p_5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    color: Color.inputIcon,
    marginRight: scaleWidth(5),
    marginLeft: scaleWidth(5),
  },
  iconLeft: {
    color: Color.inputIcon,
    marginLeft: scaleWidth(5),
  },
  iconRight: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    color: Color.inputIcon,
    marginRight: scaleWidth(0),
  },
  iconError: {
    color: Color.error,
    marginRight: scaleWidth(5),
  },
  validationOk: {
    borderColor: Color.border,
  },
  validationError: {
    borderColor: Color.error,
  },
  textValidationError: {
    color: Color.error,
  },
  textValidationOk: {
    color: Color.text,
  },
  validationMsg: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    width: Sizes.input_size,
    marginTop: scaleHeight(2),
    paddingTop: scaleHeight(1),
    fontSize: scaleWidth(10),
    color: Color.error,
  },
  input: {
    flex: 1,
    height: '100%',
    width: '100%',
    marginLeft: scaleWidth(10),
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: fontH4,
  },
  svg: {
    marginLeft: scaleWidth(16),
    width: scaleWidth(16),
    height: scaleHeight(18),
  },
  svgIcon: {
    marginRight: scaleWidth(16),
    width: scaleWidth(15),
    height: scaleHeight(8),
    color: Color.inputPlaceholder,
  },
  svgEye: {
    marginRight: scaleWidth(16),
    width: scaleWidth(10),
    height: scaleHeight(5),
    color: Color.accent,
  },
});
