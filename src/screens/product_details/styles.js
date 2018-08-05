import {StyleSheet} from "react-native";
import {theme} from './theme';
import {colors} from "../../common/colors";

const MARGIN_TOP = 90;
const MARGIN_HORIZONTAL = 25;
const POSTER_WIDTH = 100;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.backgroundColor,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
        height: MARGIN_TOP + ((POSTER_WIDTH * 1.5) / 2),
        justifyContent: 'center',
        opacity: 0.15,
    },
    itemContainer: {
        marginHorizontal: MARGIN_HORIZONTAL,
        marginTop: MARGIN_TOP,
        marginBottom: 30,
        flexDirection: 'row',
    },
    divider: {
        marginHorizontal: MARGIN_HORIZONTAL,
        height: 1,
        backgroundColor: colors.divider,
    },
    itemTextContainer: {
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: MARGIN_HORIZONTAL,
        flexShrink: 1,
    },
    itemImage: {
        width: POSTER_WIDTH,
        height: POSTER_WIDTH * 1.5,
        borderRadius: 5,
    },
    title: {
        color: colors.profile_text,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        color: colors.transparent_text,
        fontSize: 14,
        lineHeight: 16,
        marginBottom: 10,
    },
    interactionBarContainer: {
        flexDirection: 'row',
        marginHorizontal: MARGIN_HORIZONTAL,
        justifyContent: 'space-between',
        paddingVertical: 8,
    },
    interactionBarButton: {
        backgroundColor: null,
    },
    interactionBarButtonText: {
        fontSize: 14,
    },
    detailsContainer: {
        marginHorizontal: MARGIN_HORIZONTAL,
    },
    detailsTitle: {
        color: colors.profile_text,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 15,
    },
    detailsText: {
        color: colors.transparent_text,
        fontSize: 14,
        lineHeight: 14 * 2,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    trailerText: {
        color: colors.profile_text,
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20,
        marginHorizontal: MARGIN_HORIZONTAL,
    },
    backButton: {
        position: 'absolute',
        left: 20,
        top: 30,
        height: 38,
        backgroundColor: null,
        paddingVertical: 0,
        paddingHorizontal: 0,
        borderRadius: 0,
    },
});
