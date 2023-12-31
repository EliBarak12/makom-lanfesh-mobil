import {Pressable, StyleSheet, View} from '../index';
import {useLocale} from '../../features/i18n/useLocale';

const SELECTED_CIRCLE_SIZE = 8;
const DEFAULT_CIRCLE_SIZE = 8;

export interface CirclePaginationProps {
  numOfPages: number;
  selectedPage: number;

  onPageClick(pageNumber: number): void;
}

export const CirclePagination = ({
  numOfPages,
  selectedPage,
  onPageClick,
}: CirclePaginationProps) => {
  const {isRtl} = useLocale();

  return (
    <View style={styles.mainView}>
      <View
        style={[
          styles.circlesContainer,
          isRtl && {flexDirection: 'row-reverse'},
        ]}>
        {Array.from({length: numOfPages}, (_, i) => (
          <Pressable
            style={i === selectedPage ? styles.selected : styles.default}
            key={i}
            onPress={() => onPageClick(i)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  circlesContainer: {
    gap: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  default: {
    height: DEFAULT_CIRCLE_SIZE,
    width: DEFAULT_CIRCLE_SIZE,
    backgroundColor: '#CCCCCC',
    borderRadius: DEFAULT_CIRCLE_SIZE / 2,
  },
  selected: {
    height: SELECTED_CIRCLE_SIZE,
    width: SELECTED_CIRCLE_SIZE,
    backgroundColor: '#33A5D9',
    borderRadius: SELECTED_CIRCLE_SIZE / 2,
  },
});
