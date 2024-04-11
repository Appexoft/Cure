import React, { memo, useEffect } from 'react';
import { Image, ImageSourcePropType, Pressable } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Border, Color, Padding } from '../../../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import FONTS from '../../../../utils/fonts';
import FastImage from 'react-native-fast-image-with-url-params-ignore';
import useGetAvatar from './useAvatar';
import {
  AvatarSizeType,
  getWrapperStyles,
  ImageEntityType,
  ImageType,
} from '../../../../utils/entityUtils';
import Error from '@screens/app/common/error';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Feather';

FastImage.setIgnoreUrlParams(true);

interface Props {
  entityId?: number;
  entityType: ImageEntityType;
  type: ImageType;

  size: AvatarSizeType;
  url?: string;

  image?: ImageSourcePropType;
  imageUrl?: string;
  name?: string;
  rateStar?: number;
  style?: any;

  onPress?: any;
  onRefresh?: any;
}

const Avatar = memo((props: Props) => {
  const { entityId, url, entityType, type, size, style, name, rateStar } =
    props;
  const { t } = useTranslation('common');
  const getWidth = () => {
    switch (size) {
      case AvatarSizeType.LIST_LARGE:
        return 100;
      case AvatarSizeType.HEADER:
        return 85;
    }
    return 100;
  };

  const getHeight = () => {
    switch (size) {
      case AvatarSizeType.LIST_LARGE:
        return 100;
      case AvatarSizeType.HEADER:
        return 90;
    }
    return 100;
  };

  const getDefaultImage = () => {
    switch (entityType) {
      case ImageEntityType.PATIENT:
        return require('@assets/Empty/user-empty.png');
      case ImageEntityType.PRACTITIONER:
        return require('@assets/Empty/doctor.png'); // todo take into consideration the gender?
      case ImageEntityType.PRACTITIONER_ROLE:
        return require('@assets/Empty/practitioner-role.png');
      case ImageEntityType.HOSPITAL:
        return require('@assets/Empty/hospital.png');
    }
    return require('@assets/Empty/account.png');
  };

  return (
    <Pressable
      style={getWrapperStyles(styles.contents, style)}
      onPress={() => {
        if (props.onPress) {
          props.onPress();
        }
      }}>

      {url && (
        <FastImage
          style={{
            width: getWidth(),
            height: getHeight(),
            borderRadius: 10,
            borderColor: Color.white,
            borderWidth: 2,
          }}
          source={{
            uri: url,
            headers: {
            },
            priority: FastImage.priority.normal,
          }}
          fallback={true}
          defaultSource={getDefaultImage()}
          setIgnoreUrlParams={true}
          resizeMode={FastImage.resizeMode.cover}
        />
      )}
    </Pressable>
  );
});
export default Avatar;

const styles = ScaledSheet.create({
  contents: {
    paddingVertical: scaleHeight(Padding.avatar),
    paddingHorizontal: scaleWidth(Padding.avatar),
    width: scaleWidth(100),
    borderRadius: Border.br_xs,
    backgroundColor: Color.ghostwhite_100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoView: {
    flexDirection: 'row',
  },
  avatarUser: {
    width: scaleWidth(100),
    height: scaleWidth(100),
    borderRadius: scaleWidth(20),
    overflow: 'hidden',
    marginRight: scaleWidth(12),
  },
  txtNameUser: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: Color.semiBlack,
    textTransform: 'uppercase',
  },
  txtTimeReview: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '600',
    fontSize: scaleHeight(12),
    lineHeight: scaleHeight(16),
    color: Color.silverChalice,
  },
  txtDesciptionReview: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(20),
    color: Color.dimgray,
    marginTop: scaleHeight(13),
  },
  starItem: {
    position: 'absolute',
    right: scaleWidth(16),
    top: scaleHeight(19),
  },
});
