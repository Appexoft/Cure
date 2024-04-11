import { StyleSheet } from 'react-native';
import { Color, FontSize } from '../../../utils/GlobalStyles';
import FONTS from '../../../utils/fonts';
import { scaleHeight, scaleWidth } from '../../../utils/size';

export const styles = StyleSheet.create({
    modalViewBlock: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scaleHeight(22),
        backgroundColor: 'black',
        opacity: 0.7,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scaleHeight(22),

    },
    modalView: {
        backgroundColor: Color.white,
        shadowColor: '#000',
        width: '90%',
        borderRadius: scaleWidth(10),
        height: '60%',
    },
    iconContainer: {
        width: '100%',
        alignItems: 'flex-end',
        marginTop: scaleHeight(16),
        marginBottom: scaleHeight(16),
        paddingRight: scaleWidth(16),
    },
    modalContent: {
        width: '100%',
        height: '90%',
        paddingHorizontal: scaleWidth(40),
        alignItems: 'center',
    },
    description: {
        fontFamily: FONTS.URBANIST.Medium,
        fontSize: FontSize.headingModalTitle_size,
        textAlign: 'center',
    },
    textWrapper: {
        marginTop: scaleHeight(30),
    },
    btnContainer: {
        width: '100%',
        marginTop: scaleHeight(35),
    },
    mainBtn: {
        marginBottom: scaleHeight(8),
        backgroundColor: Color.main
    },
    secondBtn: {
        borderColor: Color.border,
        borderWidth: scaleHeight(1),
        backgroundColor: Color.white
    },
    mainTitle: {
        color: Color.white
    }
});
