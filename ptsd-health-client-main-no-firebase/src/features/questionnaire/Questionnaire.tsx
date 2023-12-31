import React, {useCallback, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  TextCenter,
  View,
  ScrollView,
} from '../../components';
import PagerView from 'react-native-pager-view';
import {useString} from '../i18n';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList, Routes} from '../navigation';
import {DefaultPageWrapper} from '../../components/default-page-wrapper/DefaultPageWrapper';

import 'react-native-get-random-values';
import {v4} from 'uuid';

import firestore from '@react-native-firebase/firestore';
import {getUniqueId} from 'react-native-device-info';
import {useDeviceBackClick} from '../../hooks/useDeviceBackClick.hook';
import {
  useNotificationsStrings,
  cancelAllPendingNotifications,
  scheduleNotification,
} from '../notifications';
import {Notifications} from '../notifications/types';
import {
  getStorageValue,
  NumberStorageKeys,
  setStorageValue,
} from '../storage/storage';

type Selections = Record<string, number>;

type Page = {id: string; text: string};

type SelectionOption = {score: number; text: string};

export function Questionnaire({
  navigation,
}: NativeStackScreenProps<RootStackParamList, Routes.Questionnaire>) {
  const [selections, setSelections] = useState<Selections>({});
  const [sendingResults, setSendingResults] = useState(false);

  const pagerViewRef = useRef<PagerView>(null);

  const [selectedPage, setSelectedPage] = useState<number>(0);
  const currentQuestionIndex = selectedPage;

  const lastUserScore = getStorageValue(NumberStorageKeys.LastUserScore);
  const isUserScore =
    lastUserScore >= 0 && lastUserScore !== null && lastUserScore !== undefined;

  function onPageViewerChange(pageNumber: number) {
    if (pageNumber === selectedPage) {
      return;
    }

    setSelectedPage(pageNumber);
  }

  function onOutsidePageChange(pageNumber: number) {
    pagerViewRef?.current?.setPage(pageNumber);
  }

  const saveResultsInDb = async (selections: Selections) => {
    const id = v4();
    const deviceId = await getUniqueId();

    const answers = Object.entries(selections).reduce(
      (acc, [stringIndex, selection]) => {
        acc[parseInt(stringIndex, 10)] = selection;
        return acc;
      },
      [] as number[],
    );

    const score = answers.reduce((acc, curr) => acc + curr, 0);

    await firestore().collection('answers').doc(id).set({
      id,
      answers,
      score,
      createdAt: new Date().toISOString(),
      deviceId,
    });

    return score;
  };

  const reTestStrings = useNotificationsStrings(Notifications.ReTest);
  const notAloneStrings = useNotificationsStrings(Notifications.NotAlone);
  const detachNegativeThoughtsStrings = useNotificationsStrings(
    Notifications.DetachNegativeThoughts
  );

  function onQuestionsFinish(selections: Selections) {
    setSendingResults(true);

    cancelAllPendingNotifications();
    saveResultsInDb(selections)
      .then(score => {
        setStorageValue(NumberStorageKeys.LastUserScore, score);

        const currentNumOfCompletedTest =
          getStorageValue(NumberStorageKeys.NumOfCompletedTests) || 0;

        setStorageValue(
          NumberStorageKeys.NumOfCompletedTests,
          currentNumOfCompletedTest + 1,
        );

        const currentTotalScore =
          getStorageValue(NumberStorageKeys.TotalTestsScore) || 0;

        setStorageValue(
          NumberStorageKeys.TotalTestsScore,
          currentTotalScore + score,
        );

        navigation.replace(Routes.Results);
        setSendingResults(false);
        return score;
      })
      .then(score => {
        if(score < 30) {
          scheduleNotification(reTestStrings, 7);
        } else if(score < 60) {
          scheduleNotification(reTestStrings, 7).then(() =>{
              scheduleNotification(notAloneStrings, 3);
          });
        } else {
           scheduleNotification(reTestStrings, 1).then(() =>{
              scheduleNotification(detachNegativeThoughtsStrings, 2);
          });
        }
      })
      .catch(error => console.log(error));
  }

  function onAnswerClick(score: number) {
    const newSelections = {
      ...selections,
      [currentQuestionIndex]: score,
    };

    setSelections(newSelections);

    const newPage = selectedPage + 1;
    const isFinished = newPage === pages.length;

    if (isFinished) {
      onQuestionsFinish(newSelections);
    } else {
      onOutsidePageChange(newPage);
    }
  }

  const onBack = useCallback(() => {
    if (selectedPage > 0) {
      onOutsidePageChange(selectedPage - 1);
    } else {
      navigation.replace(
        isUserScore ? Routes.GetSupport : Routes.Questionnaire,
      );
    }
  }, [navigation, selectedPage, isUserScore]);

  function handleDeviceBackPress() {
    onBack();

    return true;
  }

  useDeviceBackClick(handleDeviceBackPress, [onBack]);

  const pages: Page[] = [
    {id: '1', text: useString('questionnaire.question.1')},
    {id: '2', text: useString('questionnaire.question.2')},
    {id: '3', text: useString('questionnaire.question.3')},
    {id: '4', text: useString('questionnaire.question.4')},
    {id: '5', text: useString('questionnaire.question.5')},
    {id: '6', text: useString('questionnaire.question.6')},
    {id: '7', text: useString('questionnaire.question.7')},
    {id: '8', text: useString('questionnaire.question.8')},
    {id: '9', text: useString('questionnaire.question.9')},
    {id: '10', text: useString('questionnaire.question.10')},
    {id: '11', text: useString('questionnaire.question.11')},
    {id: '12', text: useString('questionnaire.question.12')},
    {id: '13', text: useString('questionnaire.question.13')},
    {id: '14', text: useString('questionnaire.question.14')},
    {id: '15', text: useString('questionnaire.question.15')},
    {id: '16', text: useString('questionnaire.question.16')},
    {id: '17', text: useString('questionnaire.question.17')},
    {id: '18', text: useString('questionnaire.question.18')},
    {id: '19', text: useString('questionnaire.question.19')},
    {id: '20', text: useString('questionnaire.question.20')},
  ];

  const selectionOptions: SelectionOption[] = [
    {score: 0, text: useString('questionnaire.selections.0')},
    {score: 1, text: useString('questionnaire.selections.1')},
    {score: 2, text: useString('questionnaire.selections.2')},
    {score: 3, text: useString('questionnaire.selections.3')},
    {score: 4, text: useString('questionnaire.selections.4')},
  ];

  const prefixText = useString('questionnaire.prefix');

  if (sendingResults) {
    return (
      <DefaultPageWrapper title={useString('questionnaire.header')}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
        </View>
      </DefaultPageWrapper>
    );
  }

  return (
    <DefaultPageWrapper
      title={useString('questionnaire.header')}
      onBackButtonClick={selectedPage > 0 || isUserScore ? onBack : undefined}>
      <PagerView
        ref={pagerViewRef}
        style={styles.pager}
        scrollEnabled={false}
        initialPage={selectedPage}
        onPageSelected={pageElement => {
          onPageViewerChange(pageElement?.nativeEvent?.position);
        }}>
        {pages.map(({id, text}) => {
          return (
            <View key={id} style={styles.view}>
              <View style={styles.numOfQuestionsSection}>
                <TextCenter>
                  {useString('questionnaire.questionText')}
                </TextCenter>
                <TextCenter style={styles.currentQuestionIndex}>
                  {id}
                </TextCenter>
                <TextCenter>{useString('questionnaire.ofText')}</TextCenter>
                <TextCenter style={styles.totalNumberOfQuestions}>
                  {pages.length}
                </TextCenter>
              </View>
              <View style={styles.questionSection}>
                <TextCenter style={styles.questionPrefix}>
                  {prefixText}
                </TextCenter>
                <ScrollView>
                  <TextCenter style={styles.question}>{text}</TextCenter>
                </ScrollView>
              </View>

              <View>
                {selectionOptions.map(({score, text: optionText}) => {
                  const isAnswerButtonSelected =
                    selections[currentQuestionIndex] === score;

                  return (
                    <View
                      key={score}
                      style={[score !== 0 && styles.nonFirstButton]}>
                      <Button
                        style={[
                          styles.button,
                          isAnswerButtonSelected && styles.selectedButton,
                        ]}
                        mode="contained"
                        onPress={() => onAnswerClick(score)}>
                        <TextCenter>{optionText}</TextCenter>
                      </Button>
                    </View>
                  );
                })}
              </View>
            </View>
          );
        })}
      </PagerView>
    </DefaultPageWrapper>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  pager: {flex: 1},
  view: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
  },
  numOfQuestionsSection: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  currentQuestionIndex: {
    color: '#33A5D9',
    fontWeight: 'bold',
  },
  totalNumberOfQuestions: {
    fontWeight: 'bold',
  },
  questionSection: {flex: 1, paddingTop: 8},
  question: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
  },
  questionPrefix: {
    textAlign: 'center',
    color: 'black',
  },
  nonFirstButton: {marginTop: 16},
  button: {
    padding: 6,
    backgroundColor: '#F2F2F2',
  },
  selectedButton: {
    backgroundColor: '#B6DFF2',
  },
});
