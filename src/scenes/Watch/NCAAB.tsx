import React, { useState, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import { Container, Content, Text, Icon, View } from 'native-base';
import { TouchableOpacity, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';

import { SubHeader, NCAABWatch, Loading } from '@Components';
import { getTeamsGamedata, getSelectionGameData } from '@Store/watch/actions';
import { AuthContext, AuthContextType } from '@Context/AuthContext';
import { Routes } from '@Navigators/routes';
import { Colors } from '@Theme';
import { Props, FavortriteType } from './types';
import { RootState } from '@Store/store';
import { GameDataType } from '@Store/types';

import styles from './styles';

const NCAAB: React.FC<Props> = ({ selectedDate, sportName }) => {
  const navigation = useNavigation<StackNavigationProp<any, any>>();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const { user } = useContext(AuthContext) as AuthContextType;

  const { teamsGamedata, selectionsGamedata, teamsLoading, selectionsLoading } =
    useSelector((state: RootState) => state.watch);

  const [favoriteTeams, setFavoriteTeams] = useState<number[]>([]);
  const [mySelections, setMyselections] = useState<number[]>([]);
  const [loadingBar, setLoadingBar] = useState(true);

  const closeSelection = async (gameID: number) => {
    let selections = [...mySelections];
    if (selections.includes(gameID)) {
      selections = await removeSelection(selections, gameID);
    }
    setMyselections(selections);
    saveSelections(selections);
  };

  const removeSelection = (selections: number[], gameID: number) => {
    return selections.filter(selection => selection !== gameID);
  };

  const saveSelections = (gameIDs: number[]) => {
    if (user) {
      const docRef = firestore().collection('ncaabSelections').doc(user.uid);
      docRef.get().then(thisDoc => {
        if (thisDoc.exists) {
          docRef.update({
            gameIDs: gameIDs
          });
        }
      });
    }
  };

  const getSelections = async () => {
    if (user) {
      firestore()
        .collection('ncaabSelections')
        .doc(user.uid)
        .get()
        .then((doc: any) => {
          if (doc.exists) {
            setMyselections(doc.data().gameIDs);
          }
        })
        .catch(() => {
          setMyselections([]);
        });
    }
  };

  const getFavoriteTeams = async () => {
    if (user) {
      firestore()
        .collection('favoriteTeams')
        .doc(user.uid)
        .get()
        .then((doc: any) => {
          if (doc.exists) {
            let teams = [];
            if (doc.data().teams.length > 0) {
              teams = doc
                .data()
                .teams.map((team: FavortriteType) => {
                  if (team.teamSort === 'ncaab') return team.teamID;
                })
                .filter(
                  (notUndefined: undefined) => notUndefined !== undefined
                );
            }
            setFavoriteTeams(teams);
          }
        })
        .catch(() => {
          setFavoriteTeams([]);
        });
    }
  };

  useEffect(() => {
    dispatch(
      getTeamsGamedata(
        selectedDate,
        favoriteTeams.join(),
        sportName.trim(),
        'basketball',
        false
      )
    );
    dispatch(
      getSelectionGameData(
        selectedDate,
        mySelections.join(),
        sportName.trim(),
        'basketball',
        false
      )
    );
  }, [selectedDate]);

  useEffect(() => {
    dispatch(
      getTeamsGamedata(
        selectedDate,
        favoriteTeams.join(),
        sportName.trim(),
        'basketball',
        false
      )
    );
  }, [favoriteTeams]);

  useEffect(() => {
    dispatch(
      getSelectionGameData(
        selectedDate,
        mySelections.join(),
        sportName.trim(),
        'basketball',
        false
      )
    );
  }, [mySelections]);

  useEffect(() => {
    getFavoriteTeams();
    getSelections();
  }, [isFocused]);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        getTeamsGamedata(
          selectedDate,
          favoriteTeams.join(),
          sportName.trim(),
          'basketball',
          false
        )
      );
      dispatch(
        getSelectionGameData(
          selectedDate,
          mySelections.join(),
          sportName.trim(),
          'basketball',
          false
        )
      );
    }, 10000);
    if (!isFocused) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isFocused, mySelections, selectedDate, favoriteTeams]);

  useEffect(() => {
    if (!teamsLoading || !selectionsLoading) {
      setTimeout(() => setLoadingBar(teamsLoading || selectionsLoading), 1500);
    } else {
      setLoadingBar(teamsLoading || selectionsLoading);
    }
  }, [teamsLoading, selectionsLoading]);

  const renderMyTeam = (match: GameDataType, index: number) => {
    return (
      <NCAABWatch data={match} lastGame={teamsGamedata.length === index + 1} />
    );
  };

  const renderMySelection = (match: GameDataType, index: number) => {
    return (
      <View style={styles.selectionIconView}>
        <TouchableOpacity onPress={() => closeSelection(match.gameID)}>
          <Icon
            type="AntDesign"
            name="minuscircleo"
            color={Colors.black}
            style={styles.teamCloseIcon}
          />
        </TouchableOpacity>
        <View style={styles.selectionView}>
          <NCAABWatch
            data={match}
            lastGame={selectionsGamedata.length === index + 1}
          />
        </View>
      </View>
    );
  };

  if (loadingBar) {
    return <Loading />;
  }

  return (
    <Container style={styles.background}>
      <SubHeader />
      <Content contentContainerStyle={styles.contentView}>
        <View style={styles.container}>
          <View style={styles.myTeamsView}>
            <Text style={styles.teamPlusText}>My Teams</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(Routes.MyTeam)}>
              <Icon
                type="AntDesign"
                name="pluscircleo"
                color={Colors.black}
                style={styles.teamPlusIcon}
              />
            </TouchableOpacity>
          </View>
          <FlatList
            data={teamsGamedata}
            renderItem={({ item, index }) => renderMyTeam(item, index)}
            keyExtractor={(item: any) => item.game_uuid}
          />
          <View style={styles.myTeamsView}>
            <Text style={styles.teamPlusText}>My Selections</Text>
          </View>
          <FlatList
            data={selectionsGamedata}
            renderItem={({ item, index }) => renderMySelection(item, index)}
            keyExtractor={(item: any) => item.game_uuid}
          />
        </View>
      </Content>
    </Container>
  );
};

export default NCAAB;
