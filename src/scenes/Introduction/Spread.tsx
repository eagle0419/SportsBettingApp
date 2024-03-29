import React from 'react';
import { Container, Content, Text, View, Icon, Header } from 'native-base';
import { SvgXml } from 'react-native-svg';

import { LoadingImage } from '@Components';
import { Colors, Images, Svgs } from '@Theme';
import { CarosuelProps } from './types';
import styles, { scale } from './styles';

const Spread: React.FC<CarosuelProps> = ({ nextPage, prevPage, closePage }) => {
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
        {/* <View style={styles.subHeader}>
          <Text style={styles.subHeaderText}>SPREAD</Text>
        </View> */}
        <View style={styles.body}>
          <View style={styles.firstView}>
            <LoadingImage source={Images.carousel2} style={styles.imageView} />
          </View>
          <View style={styles.secondView}>
            <SvgXml
              xml={Svgs.lineRaterBlackIcon}
              width={60 * scale}
              height={60 * scale}
              style={styles.mainIcon}
            />
            <Text style={styles.normalText}>
              LineMaster™ allows you to input odds you are seeing and determine
              whether you are getting closer to (or moving away from) a green
              value play.
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.gameDescription}>
            <Icon type="FontAwesome" name="circle" style={styles.greenCircle} />
            <Text style={styles.gameText}>Tap a team</Text>
          </View>
          <View style={styles.gameDescription}>
            <Icon type="FontAwesome" name="circle" style={styles.greenCircle} />
            <Text style={styles.gameText}>
              Select
              <Text style={styles.blackBoldText}> SPREAD</Text> or{' '}
              <Text style={styles.blackBoldText}>OVER / UNDER </Text>
            </Text>
          </View>
          <View style={styles.gameDescription}>
            <Icon type="FontAwesome" name="circle" style={styles.greenCircle} />
            <Text style={styles.gameText}>
              Toggle +/- to change the spread or odds.
            </Text>
          </View>
          <View style={styles.gameDescription}>
            <Icon type="FontAwesome" name="circle" style={styles.greenCircle} />
            <Text style={styles.gameText}>
              See whether the input moves you into (or closer to) the green.
            </Text>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default Spread;
