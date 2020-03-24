import React from 'react';
import { WebView } from 'react-native-webview';

function Profile({ navigation }) {
  const git_user = navigation.getParam('git_user');
  return (
    <WebView style={{ flex: 1 }} source={{ uri: `https://github.com/${git_user}`}} />
  );
}

export default Profile;
