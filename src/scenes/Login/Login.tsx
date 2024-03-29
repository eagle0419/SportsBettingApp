import React, { useState, useContext, useEffect } from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes
} from '@react-native-google-signin/google-signin';
import { appleAuth } from '@invertase/react-native-apple-authentication';
import firestore from '@react-native-firebase/firestore';
import { ImageBackground, TouchableOpacity, Image } from 'react-native';
import {
  Container,
  Content,
  Button,
  Text,
  View,
  Item,
  Input,
  Icon
} from 'native-base';
import { SvgXml } from 'react-native-svg';
import jwt_decode from 'jwt-decode';

import { Loading, Button as CustomButton, TermsPrivacy } from '@Components';
import { ToastMessage, existUser, getRandomSportName } from '@Lib/function';
import { getImage } from '@Store/types';
import { Routes } from '@Navigators/routes';
import { WEB_CLIENT_ID } from '@env';
import { AuthContext, AuthContextType } from '@Context/AuthContext';
import { Images, Svgs } from '@Theme';

import styles, { scale } from './styles';

GoogleSignin.configure({
  webClientId: WEB_CLIENT_ID,
  offlineAccess: false
});

const Login: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<any, any>>();
  const { emailLogin, user, setUser, setDisplayName } = useContext(
    AuthContext
  ) as AuthContextType;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const onGoogleLogin = async () => {
    try {
      setLoading(true);
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      const currentUser = await GoogleSignin.getCurrentUser();
      const check = await existUser(currentUser?.user?.email, 'google');

      if (!check) {
        setLoading(false);
        ToastMessage(
          "The email address doesn't exists. Please create an account",
          'warning',
          'bottom'
        );
        return;
      }

      const googleCredential = await auth.GoogleAuthProvider.credential(
        idToken
      );
      await auth().signInWithCredential(googleCredential);
      setLoading(false);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        setLoading(false);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        setLoading(false);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        setLoading(false);
      }
    }
  };

  const onAppleLogin = async () => {
    try {
      setLoading(true);
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME]
      });

      const { identityToken, nonce } = appleAuthRequestResponse;
      if (identityToken) {
        const decodeData: any = jwt_decode(identityToken);
        const check = await existUser(decodeData?.email, 'apple');
        if (!check) {
          setLoading(false);
          ToastMessage(
            "The email address doesn't exists. Please create an account",
            'warning',
            'bottom'
          );
          return;
        }
        const appleCredential = auth.AppleAuthProvider.credential(
          identityToken,
          nonce
        );
        await auth().signInWithCredential(appleCredential);
      }
    } catch {
    } finally {
      setLoading(false);
    }
  };

  const onAuthStateChanged = (authUser: any) => {
    setUser(authUser);
  };

  const login = () => {
    if (email === '') {
      ToastMessage('Please input Email Address', 'warning', 'bottom');
      return;
    }
    if (password === '') {
      ToastMessage('Please input Password', 'warning', 'bottom');
      return;
    }
    emailLogin(email.trim(), password.trim());
  };

  const getUserName = async () => {
    if (user) {
      await firestore()
        .collection('users')
        .doc(user.uid)
        .get()
        .then((doc: any) => {
          const currentUser = doc.data();
          if (currentUser) {
            setDisplayName(currentUser.firstName + ' ' + currentUser.lastName);
          }
        });
    }
  };

  useEffect(() => {
    (async function () {
      if (user) {
        await getUserName();
        navigation.navigate(Routes.DrawerRoute);
      }
    })();
  }, [user]);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <Container style={styles.background}>
      <ImageBackground
        source={getImage(Images)(`${getRandomSportName()}Background1` as any)}
        resizeMode="stretch"
        style={styles.backgroundImage}>
        <Content
          contentContainerStyle={styles.contentView}
          scrollEnabled={false}>
          {loading ? (
            <Loading />
          ) : (
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.closeBtn}
                onPress={() => navigation.navigate(Routes.Splash)}>
                <Image source={Images.closeIcon} style={styles.closeIcon} />
              </TouchableOpacity>
              <View style={styles.loginForm}>
                <Text style={styles.loginFormTitle}>Sign in</Text>
                <Item style={styles.loginItem}>
                  <SvgXml
                    xml={Svgs.emailIcon}
                    width={35 * scale}
                    height={35 * scale}
                  />
                  <Input
                    placeholder="Email Address"
                    placeholderTextColor="white"
                    autoCapitalize="none"
                    value={email}
                    textContentType="emailAddress"
                    style={styles.input}
                    onChangeText={userEmail => setEmail(userEmail)}
                  />
                </Item>
                <Item style={styles.loginItem}>
                  <SvgXml
                    xml={Svgs.passwordIcon}
                    width={38 * scale}
                    height={38 * scale}
                  />
                  <Input
                    placeholder="Password"
                    placeholderTextColor="white"
                    autoCapitalize="none"
                    value={password}
                    textContentType="password"
                    secureTextEntry={showPassword}
                    style={styles.input}
                    returnKeyType="go"
                    onChangeText={userPass => setPassword(userPass)}
                    onSubmitEditing={login}
                  />
                  <TouchableOpacity
                    style={styles.eyeIconView}
                    onPress={() => setShowPassword(!showPassword)}>
                    <Icon
                      type="FontAwesome5"
                      name={showPassword ? 'eye' : 'eye-slash'}
                      style={styles.eyeIcon}
                    />
                  </TouchableOpacity>
                </Item>
              </View>
              <View style={styles.loginFormBtns}>
                <CustomButton text="Sign in" onPress={login} />
                <Button
                  full
                  rounded
                  light
                  style={styles.loginFormNeedBtn}
                  onPress={() => navigation.navigate(Routes.Register)}>
                  <Text style={styles.buttonBlackText}>Need an Account?</Text>
                </Button>
              </View>
              <Text style={styles.signTitle}>
                Or sign in using your Google{' '}
                {Platform.OS === 'ios' && 'or Apple'} account
              </Text>
              <View style={styles.socialBtns}>
                {Platform.OS === 'ios' && (
                  <Button
                    full
                    rounded
                    light
                    style={styles.loginFormNeedBtn}
                    onPress={onAppleLogin}>
                    <SvgXml
                      xml={Svgs.appleIcon}
                      width={35 * scale}
                      height={35 * scale}
                    />
                  </Button>
                )}
                <Button
                  full
                  rounded
                  light
                  style={styles.loginFormNeedBtn}
                  onPress={onGoogleLogin}>
                  <SvgXml
                    xml={Svgs.googleIcon}
                    width={35 * scale}
                    height={35 * scale}
                  />
                </Button>
              </View>
              <TermsPrivacy />
            </View>
          )}
        </Content>
      </ImageBackground>
    </Container>
  );
};

export default Login;
