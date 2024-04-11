import Reactotron, { networking } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = Reactotron.configure({ name: 'getHealing' }) // controls connection & communication settings
  .use(reactotronRedux())
  .use(networking())
  .useReactNative({
    asyncStorage: false, // there are more options to the async storage.
    networking: {
      // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/,
    },
    editor: false, // there are more options to editor
    errors: { veto: (stackFrame) => false }, // or turn it off with false
    overlay: false, // just turning off overlay
  });

if (__DEV__) {
  console.log('Reactotron Configured and connected');
  reactotron.connect();
  console.trace = (...args) => {
    console.log(...args);
    Reactotron.display({
      name: 'CONSOLE.LOG',
      value: args,
      preview: args.length > 1 ? JSON.stringify(args) : args[0],
    });
  };
}

export default reactotron;
