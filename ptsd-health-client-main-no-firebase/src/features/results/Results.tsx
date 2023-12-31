import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {RootStackParamList} from '../navigation/types';
import {Routes} from '../navigation';
import {
  Button,
  ScrollView,
  StyleSheet,
  TextCenter,
  View,
} from '../../components';
import {DefaultPageWrapper} from '../../components/default-page-wrapper/DefaultPageWrapper';
import {useString} from '../i18n';
import {getStorageValue, NumberStorageKeys} from '../storage/storage';
import {HealthMeter} from './health-meter/HealthMeter';

const MAIN_VIEW_PADDING_LEFT = 16;
const MAIN_VIEW_PADDING_RIGHT = 16;
const NUM_OF_TESTS_NEEDED_TO_COMPLETE_FOR_MULTI_SCORE = 4;
const MAX_SCORE = 80;

export function Results({
  navigation,
}: NativeStackScreenProps<RootStackParamList, Routes.Results>) {
  const [mainViewWidth, setMainViewWidth] = useState<number>(0);

  const numOfCompletedTests =
    getStorageValue(NumberStorageKeys.NumOfCompletedTests) || 0;

  const isMultiScoreMode =
    numOfCompletedTests >= NUM_OF_TESTS_NEEDED_TO_COMPLETE_FOR_MULTI_SCORE;

  const lastScore = getStorageValue(NumberStorageKeys.LastUserScore);
  const score = calculateScore();

  const isLowScore = score < 30;
  const isMediumScore = score >= 30 && score < 60;
  const isHighScore = score >= 60;

  function calculateScore() {
    const totalScore = getStorageValue(NumberStorageKeys.TotalTestsScore);

    if (isMultiScoreMode) {
      return Math.round(totalScore / numOfCompletedTests);
    }

    return lastScore;
  }

  function onBack() {
    navigation.replace(Routes.Questionnaire);
  }

  function onToolboxClick() {
    navigation.replace(Routes.Toolbox);
  }

  function onGetSupportClick() {
    navigation.replace(Routes.GetSupport);
  }

  const resultTextDefault = isLowScore
    ? useString('results.lowScore')
    : isMediumScore
    ? useString('results.mediumScore')
    : isHighScore
    ? useString('results.highScore')
    : 'Error getting score';

  const resultTextMultiTries = isLowScore
    ? useString('results.lowScoreAfterMultiAttempts')
    : isMediumScore
    ? useString('results.mediumScoreAfterMultiAttempts')
    : isHighScore
    ? useString('results.highScoreAfterMultiAttempts')
    : 'Error getting score';

  return (
    <DefaultPageWrapper
      onBackButtonClick={onBack}
      title={useString('results.header')}>
      <View
        style={styles.mainView}
        onLayout={event => {
          setMainViewWidth(event?.nativeEvent?.layout?.width || 0);
        }}>
        <TextCenter style={styles.totalScoreText}>
          {useString('results.totalScore')}
        </TextCenter>
        <View
          style={[
            styles.scoreContainer,
            isLowScore && styles.lowScoreContainer,
            isMediumScore && styles.mediumScoreContainer,
            isHighScore && styles.highScoreContainer,
          ]}>
          <TextCenter style={styles.scoreText}>{score}</TextCenter>
        </View>

        <HealthMeter
          containerWidth={
            mainViewWidth - MAIN_VIEW_PADDING_LEFT - MAIN_VIEW_PADDING_RIGHT
          }
          score={score}
          maxScore={MAX_SCORE}
        />

        {/* Results text and footer */}
        <ScrollView>
          <TextCenter>
            {isMultiScoreMode ? resultTextMultiTries : resultTextDefault}
          </TextCenter>
        </ScrollView>

        {/* Footer */}
        <View style={styles.footer}>
          <Button
            onPress={onGetSupportClick}
            style={styles.button}
            mode="contained">
            {useString('results.supportButton')}
          </Button>
          <Button
            onPress={onToolboxClick}
            style={styles.button}
            mode="contained">
            {useString('results.toolboxButton')}
          </Button>
        </View>
      </View>
    </DefaultPageWrapper>
  );
}

const styles = StyleSheet.create({
  mainView: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 20,
    gap: 20,
    alignItems: 'center',
    flex: 1,
  },
  totalScoreText: {
    fontWeight: '600',
    fontSize: 16,
  },
  scoreContainer: {
    width: 94,
    height: 48,
    borderRadius: 12,
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 24,
    fontWeight: '600',
  },
  lowScoreContainer: {backgroundColor: '#7ABAA5'},
  mediumScoreContainer: {backgroundColor: '#F5AF47'},
  highScoreContainer: {backgroundColor: '#EA7666'},
  footer: {
    gap: 10,
    width: '100%',
  },
  button: {
    width: '100%',
    padding: 2,
  },
});
