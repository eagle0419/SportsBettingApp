import React from 'react';
import { Container, Content, Text, View, Icon, Header } from 'native-base';
import { SvgXml } from 'react-native-svg';

import { LoadingImage } from '@Components';
import { Colors, Images, Svgs } from '@Theme';
import { CarosuelProps } from './types';
import styles, { scale } from './styles';

const OBISays: React.FC<CarosuelProps> = ({
  nextPage,
  prevPage,
  closePage
}) => {
  return (
    <Container style={styles.background}>
      <Header
        style={styles.header}
        iosBarStyle={'light-content'}
        androidStatusBarColor={Colors.green}>
        <View style={styles.headerView}>
          <Text style={styles.headerSubTitle}>Instructions:</Text>
          <Text style={styles.headerTitle}>Roi Says</Text>
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
        <View style={styles.body}>
          <View style={styles.firstView}>
            <LoadingImage source={Images.carousel5} style={styles.imageView} />
          </View>
          <View style={styles.secondView}>
            <SvgXml
              xml={Svgs.obiIcon}
              width={60 * scale}
              height={60 * scale}
              style={styles.mainIcon}
            />
            <Text style={styles.normalText}>
              Meet Roi (pronounced "Roy"), job title Figurehead, who explains
              all things betting in a series of commentaries with the newest on
              top. If you’ve just joined, scroll down to Roi #1 to start at the
              beginning.
            </Text>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default OBISays;
