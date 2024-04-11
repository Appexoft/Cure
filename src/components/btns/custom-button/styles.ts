import { StyleSheet } from "react-native";
import { scaleHeight, scaleWidth } from "../../../utils/size";
import FONTS from '../../../utils/fonts';
import { FontSize } from "../../../utils/GlobalStyles";
export const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: scaleHeight(40),
        borderRadius: scaleWidth(10),
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtTitle: {
        fontFamily: FONTS.URBANIST.Medium,
        fontSize: FontSize.fontH6,
    }
  });
