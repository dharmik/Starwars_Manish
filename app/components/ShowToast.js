import {Toast} from 'native-base';
import {ApplicationStyles} from '../theme';
const ShowToast = message => {
  Toast.show({
    text: message || '',
    buttonText: 'close',
    textStyle: ApplicationStyles.toastText,
    buttonTextStyle: ApplicationStyles.toastButtonTextStyle,
    duration: 5000,
  });
};

export default ShowToast;
