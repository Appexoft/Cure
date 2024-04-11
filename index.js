import 'react-native-gesture-handler';
import { AppRegistry, Linking } from 'react-native';
import { name as appName } from './app.json';
import Amplify from 'aws-amplify';
import Entrypoint from './src/Entrypoint';
import {
  APP_AWS_COGNITO_CLIENT_ID,
  APP_AWS_COGNITO_POOL_ID,
  APP_AWS_REGION,
  APP_AWS_COGNITO_OAUTH_DOMAIN,
} from '@env';

if (__DEV__) {
  import('./src/utils/Reactotron.ts');
}
import('./src/translation/i18n').then(() => console.log('i18 loaded'));
import InAppBrowser from 'react-native-inappbrowser-reborn';

const awsConfig = {
  aws_project_region: APP_AWS_REGION || 'eu-west-1',
  aws_cognito_region: APP_AWS_REGION || 'eu-west-1',
  aws_user_pools_id: APP_AWS_COGNITO_POOL_ID || 'eu-west-1_aB5rhzqpc',
  aws_user_pools_web_client_id:
    APP_AWS_COGNITO_CLIENT_ID || '3sm3nqvse73g48nnkaid4n2766',
  oauth: {
    domain:
      APP_AWS_COGNITO_OAUTH_DOMAIN ||
      'cure-dev.auth.eu-west-1.amazoncognito.com',
    scope: [
      'phone',
      'email',
      'openid',
      'profile',
      'aws.cognito.signin.user.admin',
    ],
    redirectSignIn: 'curecare://',
    redirectSignOut: 'curecare://',
    responseType: 'code',
  },
};

async function urlOpener(url, redirectUrl) {
  await InAppBrowser.isAvailable();
  const { type, url: newUrl } = await InAppBrowser.openAuth(url, redirectUrl, {
    showTitle: false,
    enableUrlBarHiding: true,
    enableDefaultShare: false,
    ephemeralWebSession: false,
  });

  if (type === 'success') {
    Linking.openURL(newUrl);
  }
}

// Configure Amplify
Amplify.configure({
  ...awsConfig,
  oauth: {
    ...awsConfig.oauth,
    urlOpener,
  },
});

// Start App
AppRegistry.registerComponent(appName, () => Entrypoint);
