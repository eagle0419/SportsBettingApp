import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { Container, Content, Text, View, Icon, Header } from 'native-base';
import { SvgXml } from 'react-native-svg';

import { LoadingImage, GrayScaleImage } from '@Components';
import SpreadBaseball from './SpreadBaseball';
import Spread from './Spread';
import Win from './Win';
import OverUnder from './OverUnder';
import { Svgs, Colors } from '@Theme';
import { checkTeamIcon } from '@Lib/function';

import { Props } from './types';
import styles, { scale } from './styles';

const LineRater: React.FC<Props> = props => {
  const { gameData } = props?.route?.params;
  const sportName = gameData?.sport_name || '';

  const navigation = useNavigation<StackNavigationProp<any, any>>();
  const [selectedAwayTeam, setSelectedAwayTeam] = useState(true);
  const [selectedHomeTeam, setSelectedHomeTeam] = useState(false);
  const [segementBtn, setSegementBtn] = useState('spread');

  useEffect(() => {
    if (selectedHomeTeam && selectedAwayTeam) {
      setSelectedHomeTeam(false);
    }
  }, [selectedAwayTeam]);

  useEffect(() => {
    if (selectedAwayTeam && selectedHomeTeam) {
      setSelectedAwayTeam(false);
    }
  }, [selectedHomeTeam]);

  return (
    <Container style={styles.background}>
      <Header style={styles.header} androidStatusBarColor={Colors.green}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headerLeft}>
          <Icon
            type="SimpleLineIcons"
            name="arrow-left"
            style={styles.backIcon}
          />
          <Text style={styles.headerText}>ODDS-R LineMaster™</Text>
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <SvgXml
            xml={Svgs.lineRaterWhiteIcon}
            width={40 * scale}
            height={40 * scale}
          />
        </View>
      </Header>
      <Content contentContainerStyle={styles.contentView}>
        <View style={styles.lineSourceView}>
          <Text style={styles.btnText}>Line Source</Text>
          <Text style={styles.titleText}>Consensus</Text>
        </View>
        {Object.keys(gameData).length > 0 && (
          <>
            <View style={styles.teamLogoView}>
              <TouchableOpacity
                style={[
                  styles.teamStatusView,
                  segementBtn !== 'ou' &&
                    selectedAwayTeam &&
                    styles.activeAwayTeam
                ]}
                onPress={() => setSelectedAwayTeam(!selectedAwayTeam)}>
                <GrayScaleImage isFocus={selectedAwayTeam}>
                  <LoadingImage
                    source={checkTeamIcon(
                      sportName,
                      gameData.sport_name === 'NCAAFB' ||
                        gameData.sport_name === 'NCAAM' ||
                        gameData.sport_name === 'NBA'
                        ? gameData.awayTeamIcon
                        : gameData.away_team_abbr
                    )}
                    style={styles.teamLogo}
                  />
                </GrayScaleImage>
                <View
                  style={[
                    styles.teamInfoView,
                    !selectedAwayTeam && { opacity: 0.6 }
                  ]}>
                  <Text style={styles.teamNameText}>
                    {gameData.away_team_abbr}
                  </Text>
                  <Text style={styles.teamRecordText}>
                    {gameData.awayRecord}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.teamStatusView,
                  segementBtn !== 'ou' &&
                    selectedHomeTeam &&
                    styles.activeHomeTeam
                ]}
                onPress={() => setSelectedHomeTeam(!selectedHomeTeam)}>
                <GrayScaleImage isFocus={selectedHomeTeam}>
                  <LoadingImage
                    source={checkTeamIcon(
                      gameData.sport_name,
                      gameData.sport_name === 'NCAAFB' ||
                        gameData.sport_name === 'NCAAM' ||
                        gameData.sport_name === 'NBA'
                        ? gameData.homeTeamIcon
                        : gameData.home_team_abbr
                    )}
                    style={styles.teamLogo}
                  />
                </GrayScaleImage>
                <View
                  style={[
                    styles.teamInfoView,
                    !selectedHomeTeam && { opacity: 0.6 }
                  ]}>
                  <Text style={styles.teamNameText}>
                    {gameData.home_team_abbr}
                  </Text>
                  <Text style={styles.teamRecordText}>
                    {gameData.homeRecord}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.segementView}>
              <TouchableOpacity
                style={[
                  styles.segementBtn,
                  segementBtn === 'spread'
                    ? styles.activeBtn
                    : styles.disactiveBtn
                ]}
                onPress={() => setSegementBtn('spread')}>
                <Text
                  style={[
                    styles.btnText,
                    segementBtn === 'spread'
                      ? styles.activeBtnText
                      : styles.disactiveBtnText
                  ]}>
                  Spread
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.segementBtn,
                  segementBtn === 'win' ? styles.activeBtn : styles.disactiveBtn
                ]}
                onPress={() => setSegementBtn('win')}>
                <Text
                  style={[
                    styles.btnText,
                    segementBtn === 'win'
                      ? styles.activeBtnText
                      : styles.disactiveBtnText
                  ]}>
                  Win
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.segementBtn,
                  segementBtn === 'ou' ? styles.activeBtn : styles.disactiveBtn
                ]}
                onPress={() => setSegementBtn('ou')}>
                <Text
                  style={[
                    styles.btnText,
                    segementBtn === 'ou'
                      ? styles.activeBtnText
                      : styles.disactiveBtnText
                  ]}>
                  O/U
                </Text>
              </TouchableOpacity>
            </View>
            {segementBtn === 'spread' && (
              <>
                {sportName === 'MLB' && (
                  <SpreadBaseball
                    gameData={gameData}
                    selectedAwayTeam={selectedAwayTeam}
                    selectedHomeTeam={selectedHomeTeam}
                  />
                )}
                {sportName !== 'MLB' && (
                  <Spread
                    gameData={gameData}
                    selectedAwayTeam={selectedAwayTeam}
                    selectedHomeTeam={selectedHomeTeam}
                  />
                )}
              </>
            )}
            {segementBtn === 'win' && (
              <Win
                gameData={gameData}
                selectedAwayTeam={selectedAwayTeam}
                selectedHomeTeam={selectedHomeTeam}
              />
            )}
            {segementBtn === 'ou' && <OverUnder gameData={gameData} />}
          </>
        )}
      </Content>
    </Container>
  );
};

export default LineRater;
