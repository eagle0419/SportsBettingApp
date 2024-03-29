import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
//import { useNavigation } from '@react-navigation/core';
//import { StackNavigationProp } from '@react-navigation/stack';

import { Svgs } from '@Theme';
import styles, { scale } from './styles';
//import { Routes } from '@Navigators/routes';
import { Linking } from 'react-native';
const FeedbackSidebar: React.FC = () => {
  //const navigation = useNavigation<StackNavigationProp<any, any>>();

  return (
    <View style={styles.feedbackContent}>
      <TouchableOpacity
        style={styles.feedbackTitleContent}
        onPress={() => Linking.openURL('https://oddsr.com/contacts.html')}>
        <SvgXml xml={Svgs.commentIcon} width={50 * scale} height={50 * scale} />
        <Text style={styles.feedbackTitleText}>Support</Text>
      </TouchableOpacity>
      <Text style={styles.feedbackGreenText}>
        We’re here for you if you have any questions or feedback.
      </Text>
      <Text style={styles.feedbackText}>
        Tap the word balloon above to send a message, comment, or request for
        help.
      </Text>
    </View>
  );
};

export default FeedbackSidebar;
