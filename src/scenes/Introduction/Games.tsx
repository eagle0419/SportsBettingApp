import React from 'react';
import { Container, Content, Text, View, Header, Icon } from 'native-base';

import { LoadingImage } from '@Components';
import { Colors, Images } from '@Theme';
import styles from './styles';

import { CarosuelProps } from './types';

const Games: React.FC<CarosuelProps> = ({ nextPage, prevPage, closePage }) => {
  return (
    <Container style={styles.background}>
      <Header
        style={styles.header}
        iosBarStyle={'light-content'}
        androidStatusBarColor={Colors.green}>
        <View style={styles.headerView}>
          <Text style={styles.headerSubTitle}>Instructions:</Text>
          <Text style={styles.headerTitle}>Games</Text>
          <Icon
            type="AntDesign"
            name="closecircleo"
            onPress={closePage}
            style={styles.closeIcon}
          />
          <View style={styles.controlBar}>
            <Icon
              type="Entypo"
              name="chevron-thin-left"
              onPress={prevPage}
              style={styles.controlIcon}
            />
            <Icon
              type="Entypo"
              name="chevron-thin-right"
              onPress={nextPage}
              style={styles.controlIcon}
            />
          </View>
        </View>
      </Header>
      <Content contentContainerStyle={styles.contentView}>
        <LoadingImage source={Images.carousel1} style={styles.gamesImage} />
        <View style={styles.content}>
          <View style={styles.titleView}>
            <Text style={styles.blackBolderText}>"TOP RANKED"</Text>
            <Text style={styles.normalText}> shows games/events where</Text>
          </View>
          <Text style={styles.normalText}>
            the OddsR™ sees a <Text style={styles.greenBoldText}>VALUE</Text>{' '}
            (GREEN) Play.
          </Text>
          <View style={styles.titleView}>
            <Text style={styles.normalText}>Tap </Text>
            <Text style={styles.blackBolderText}>"ALL"</Text>
            <Text style={styles.normalText}> to see </Text>
            <Text style={styles.normalText}>the games today.</Text>
          </View>
          <View style={styles.gamesContent}>
            <Text style={styles.blackBolderText}>POSSIBILITIES ARE:</Text>
            <View style={styles.gameDescription}>
              <Icon
                type="FontAwesome"
                name="circle"
                style={styles.greenCircle}
              />
              <Text style={styles.blackBoldText}>SPREAD</Text>
              <Text style={styles.gameText}> (+/- points)</Text>
            </View>
            <View style={styles.gameDescription}>
              <Icon
                type="FontAwesome"
                name="circle"
                style={styles.greenCircle}
              />
              <Text style={styles.gameText}>
                <Text style={styles.blackBoldText}>WIN </Text>
                (+ means bet 100 units to win displayed MAR amount; - means bet
                this amount to win 100 units)
              </Text>
            </View>
            <View style={styles.gameDescription}>
              <Icon
                type="FontAwesome"
                name="circle"
                style={styles.greenCircle}
              />
              <Text style={styles.gameText}>
                <Text style={styles.blackBoldText}>OVER/UNDER </Text>
                (left side means final total will be over the indicated number;
                right side means final total will be under the indicated
                number).
              </Text>
            </View>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default Games;
