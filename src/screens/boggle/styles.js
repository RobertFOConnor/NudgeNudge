import {StyleSheet} from "react-native";
import {colors} from '../../common/colors';

const SQUARE_SIZE = 70;
const SQUARE_RADIUS = 12;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    gridContainer: {
        borderRadius: SQUARE_RADIUS,
        marginBottom: 20,
        backgroundColor: colors.orange,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        shadowRadius: 20,
        shadowOpacity: 0.5,
        shadowColor: colors.black,
    },
    timerContainer: {
        alignItems: 'center',
        opacity: 0.5,
        marginBottom: 100,
        marginHorizontal: 20,
        padding: 5,
        borderRadius: 50,
        backgroundColor: colors.black,
    },
    timerText: {
        fontSize: 36,
        color: colors.white,
    },
    square: {
        borderRadius: SQUARE_RADIUS,
        width: SQUARE_SIZE,
        height: SQUARE_SIZE,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: colors.white,
    },
    squareImage: {
        resizeMode: 'cover',
        position: 'absolute',
        width: SQUARE_SIZE,
        height: SQUARE_SIZE,
        left: 0,
        top: 0,
        opacity: 0.7,
    },
    squareText: {
        color: colors.navy,
        fontSize: 50,
        fontWeight: 'bold',
    },
});
