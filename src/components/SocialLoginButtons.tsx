import { TextStyle, View, ViewProps } from 'react-native';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import { commonStyles } from '../utils/styles/commonStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { isApple } from '../utils/isIphoneX';
import React, { memo } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../utils/size';

interface Props extends ViewProps {
  onFacebookPress: () => void;
  onGooglePress: () => void;
  onApplePress: () => void;
}

const SocialLoginButtons: React.FC<Props> = memo(
  (props: {
    onFacebookPress: () => void;
    onGooglePress: () => void;
    onApplePress: () => void;
  }) => {
    return (
      <View style={styles.socialSignupContainer}>
        <ButtonPrimary
          onPress={props.onFacebookPress}
          style={[styles.facebookIcon, commonStyles.loginIcons]}
          title={
            <Icon name="facebook" size={20} style={[styles.facebookIcon]} />
          }
        />
        <ButtonPrimary
          onPress={props.onGooglePress}
          style={[styles.googleIcon, commonStyles.loginIcons]}
          title={<Icon name="google" size={20} style={[styles.googleIcon]} />}
        />
        {isApple() && (
          <ButtonPrimary
            onPress={props.onApplePress}
            style={[styles.appleIcon, commonStyles.loginIcons]}
            title={<Icon name="apple" size={20} style={[styles.appleIcon]} />}
          />
        )}
      </View>
    );
  },
);
export default SocialLoginButtons;

const styles = ScaledSheet.create({
  socialSignupContainer: {
    height: scaleHeight(70),
    flexDirection: 'row',
    marginHorizontal: scaleWidth(40),
    marginTop: scaleHeight(0),
    justifyContent: 'center',
  },
  socialIcon: {
    marginRight: scaleWidth(10),
  },
  facebookIcon: {
    backgroundColor: Color.secondBlue,
  },
  googleIcon: {
    backgroundColor: Color.secondRed,
  },
  appleIcon: {
    backgroundColor: Color.accent,
  },
});
