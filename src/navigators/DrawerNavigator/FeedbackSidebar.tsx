import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

import { Svgs } from '@Theme';
import styles, { scale } from './styles';
import { Routes } from '@Navigators/routes';

const FeedbackSidebar: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<any, any>>();

  return (
    <View style={styles.feedbackContent}>
      <TouchableOpacity
        style={styles.feedbackTitleContent}
        onPress={() => navigation.navigate(Routes.Feedback)}>
        <SvgXml xml={Svgs.commentIcon} width={50 * scale} height={50 * scale} />
        <Text style={styles.feedbackTitleText}>Feedback</Text>
      </TouchableOpacity>
      <Text style={styles.feedbackGreenText}>OBI wants to hear from you!</Text>
      <Text style={styles.feedbackText}>
        Tap the talk bubble above to send a message, comment or ask a question.
      </Text>
    </View>
  );
};

export default FeedbackSidebar;
