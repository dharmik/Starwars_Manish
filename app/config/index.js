import DebugConfig from './DebugConfig';
import Config from './AppConfig'; // eslint-disable-line no-unused-vars

if (__DEV__) {
  // If ReactNative's yellow box warnings are too much, it is possible to turn
  // it off, but the healthier approach is to fix the warnings.  =)
  console.disableYellowBox = DebugConfig.yellowBox;
}
export {DebugConfig, Config};
