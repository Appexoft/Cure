import React from 'react';
import { Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Color } from '../../../../../../../../utils/GlobalStyles';
import { DocumentLinkDto } from '../../../../../../../../utils/entityUtils';
import { scaleHeight, scaleWidth } from '../../../../../../../../utils/size';
import { commonStyles } from '../../../../../../../../utils/styles/commonStyles';
import { useTranslation } from 'react-i18next';

interface IProps {
  photo: DocumentLinkDto;
  index: number;
  isFirst: boolean;
  isLast: boolean;
  onMoveUp: (crt: DocumentLinkDto, index: number) => void;
  onMoveDown: (crt: DocumentLinkDto, index: number) => void;
  onClose: (crt: DocumentLinkDto) => void;
}

const PhotoPreviewCard: React.FC<IProps> = ({
  photo,
  index,
  isFirst,
  isLast,
  onMoveUp,
  onMoveDown,
  onClose,
}) => {
  const { t } = useTranslation();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        paddingRight: scaleWidth(10),
        paddingLeft: scaleWidth(10),
        height: isFirst ? scaleHeight(190) : scaleHeight(165),
        marginBottom: scaleHeight(10),
        borderColor: isFirst ? Color.main : Color.border,
      }}>
      <View
        style={[
          commonStyles.directionRow,
          { alignItems: 'center', paddingVertical: scaleHeight(5) },
        ]}>
        {isFirst && <Text>{t('services:mainPhoto')}</Text>}

        <Image
          style={{
            resizeMode: 'cover',
            borderRadius: 10,
            marginTop: scaleHeight(5),
            height: scaleHeight(150),
            width: scaleHeight(150),
          }}
          source={{ uri: photo?.contentBase64 }}
        />
      </View>

      <View>
        {((!isFirst && isLast) || (!isLast && !isFirst)) && (
          <Icon
            onPress={() => {
              onMoveUp(photo, index);
            }}
            size={30}
            name="chevron-up"
          />
        )}
        {((isFirst && !isLast) || (!isLast && !isFirst)) && (
          <Icon
            onPress={() => {
              onMoveDown(photo, index);
            }}
            size={30}
            name="chevron-down"
          />
        )}
      </View>

      <Icon
        onPress={() => {
          onClose(photo);
        }}
        size={30}
        name="x"
      />
    </View>
  );
};

export default PhotoPreviewCard;
