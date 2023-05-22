import React from 'react';
import { Container, Content, Text, View, Icon, Header } from 'native-base';
import { SvgXml } from 'react-native-svg';

import { LoadingImage } from '@Components';
import { Colors, Images, Svgs } from '@Theme';
import { CarosuelProps } from './types';
import styles, { scale } from './styles';

const Win: React.FC<CarosuelProps> = ({ nextPage, prevPage, closePage }) => {
  return (
    <Container style={styles.background}>
      <Header
        style={styles.header}
        iosBarStyle={'light-content'}
        androidStatusBarColor={Colors.green}>
        <View style={styles.headerView}>
          <Text style={styles.headerSubTitle}>Instructions:</Text>
          <Text style={styles.headerTitle}>LineMaster™</Text>
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
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderText}>
            WIN <Text style={styles.subHeaderThinText}>(MONEY LINE)</Text>
          </Text>
        </View>
        <View style={styles.content}>
          <View style={styles.body}>
            <View style={styles.firstView}>
              <LoadingImage
                source={Images.carousel3}
                style={styles.imageView}
              />
            </View>
            <View style={styles.secondView}>
              <SvgXml
                xml={Svgs.lineRaterBlackIcon}
                width={60 * scale}
                height={60 * scale}
                style={styles.mainIcon}
              />
              <Text style={styles.normalText}>
                On <Text style={styles.blackBoldText}>WIN</Text>, first tap the
                team logo, then +/- on the Money Line to get an instant OBI
                evaluation (green- yellow-red-deep red). When starting in the
                deep red, OBI’s choice may never improve no matter how much the
                Money Line changes.
              </Text>
            </View>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default Win;
