import {StyleSheet, View, Text} from '../../../components';
import LinearGradient from 'react-native-linear-gradient';
import {useState} from 'react';
import {useLocale} from '../../../features/i18n/useLocale';
import {Polygon} from '../../../components/images';

const HEALTH_METER_HEIGHT = 68;
const HEALTH_METER_WIDTH = '100%';
const HEALTH_METER_MAX_WIDTH = 360;
const HEALTH_METER_SCORES = [0, 10, 20, 30, 40, 50, 60, 70, 80];
const HEALTH_METER_SCORES_AMOUNT = HEALTH_METER_SCORES.length;
const HEALTH_METER_NUMBER_OF_LINES = HEALTH_METER_SCORES_AMOUNT;
const HEALTH_METER_NUMBER_OF_INTERNAL_AREAS = HEALTH_METER_SCORES_AMOUNT - 1;
const HEALTH_METER_LINE_WIDTH = 2;

export interface HealthMeterProps {
  containerWidth: number;
  score: number;
  maxScore: number;
}

export const HealthMeter = ({
  containerWidth,
  score,
  maxScore,
}: HealthMeterProps) => {
  const [healthMeterWidth, setHealthMeterWidth] = useState<number>(0);
  const [healthMeterScoreTextMaxWidth, setHealthMeterScoreTextMaxWidth] =
    useState<number>(0);

  const {isRtl} = useLocale();

  const healthMeterOneAreaWidth =
    healthMeterWidth / HEALTH_METER_NUMBER_OF_INTERNAL_AREAS;

  return (
    <View style={styles.healthMeterContainer}>
      {/* container adds marginLeft to polygon icon to align arrow in the middle*/}
      <View style={styles.polygonContainer}>
        <Polygon
          style={[
            styles.polygonIcon,
            {
              marginLeft:
                // how many areas should the arrow move ? score/10, then subtract some line width
                // if left to right view, we need to adjust with score calculation
                !isRtl
                  ? (score / 10) * healthMeterOneAreaWidth -
                    HEALTH_METER_LINE_WIDTH * 4
                  : ((maxScore - score) / 10) * healthMeterOneAreaWidth -
                    HEALTH_METER_LINE_WIDTH * 4,
            },
          ]}
        />
      </View>

      {/* HealthMeter: */}
      <LinearGradient
        colors={[
          '#79B9A4',
          '#79B9A4',
          '#F4AF46',
          '#F4AF46',
          '#EA7565',
          '#EA7565',
        ]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <View
          style={[
            styles.healthMeter,
            {
              width: containerWidth || HEALTH_METER_WIDTH,
            },
          ]}
          onLayout={event => {
            setHealthMeterWidth(event?.nativeEvent?.layout?.width || 0);
          }}>
          {/* HealthMeter lines:*/}
          {Array.from({length: HEALTH_METER_NUMBER_OF_LINES}, (_, index) => (
            <View
              style={[
                styles.healthMeterLine,
                {
                  marginLeft: healthMeterOneAreaWidth * index,
                },
              ]}
              key={index}
            />
          ))}
        </View>
      </LinearGradient>

      {/* health meter scores text */}
      <View
        style={[
          styles.healthMeterScoresContainer,
          isRtl && {flexDirection: 'row-reverse'},
        ]}>
        {HEALTH_METER_SCORES.map((value, index) => (
          <Text
            onLayout={event => {
              const width = event?.nativeEvent?.layout?.width || 0;

              if (width > healthMeterScoreTextMaxWidth) {
                setHealthMeterScoreTextMaxWidth(width);
              }
            }}
            style={[
              styles.healthMeterScoreText,
              healthMeterScoreTextMaxWidth > 0 && {
                width: healthMeterScoreTextMaxWidth,
              },
              index > 0 && {
                marginLeft:
                  healthMeterOneAreaWidth -
                  (healthMeterScoreTextMaxWidth || 20) -
                  2,
              },
              isRtl && {flexDirection: 'row-reverse'},
            ]}
            key={value}>
            {value}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  healthMeterContainer: {
    position: 'relative',
  },
  healthMeter: {
    maxWidth: HEALTH_METER_MAX_WIDTH,
    height: HEALTH_METER_HEIGHT,
    flexDirection: 'row',
    position: 'relative',
  },
  healthMeterLine: {
    height: HEALTH_METER_HEIGHT,
    backgroundColor: '#CDCDCD',
    width: HEALTH_METER_LINE_WIDTH,
    position: 'absolute',
    zIndex: 10,
  },
  healthMeterScoreText: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  healthMeterScoresContainer: {
    flexDirection: 'row',
    maxWidth: HEALTH_METER_MAX_WIDTH,
    width: '100%',
  },
  polygonIcon: {
    position: 'absolute',
    zIndex: 10,
  },
  polygonContainer: {
    marginLeft: -3,
  },
});
