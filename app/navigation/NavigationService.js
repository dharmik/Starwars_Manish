import {createRef} from 'react';
import {Strings} from '../globals';
import {ShowToast} from '../components';

export const navigationRef = createRef();

const navigate = (stack, params) => {
  if (navigationRef.current) {
    return navigationRef.current.navigate(stack.name, {
      screen: stack.screen,
      params,
    });
  } else {
    ShowToast(`${stack.screen} ${Strings.navigationError}`);
  }
};

const reset = (stackName, screenName, params) => {
  if (navigationRef.current) {
    return navigationRef.current.reset({
      index: 0,
      routes: [
        {
          name: stackName,
          state: {
            routes: [
              {
                name: screenName,
                params,
              },
            ],
          },
        },
      ],
    });
  } else {
    ShowToast(`${screenName} ${Strings.navigationError}`);
  }
};

function goBack() {
  navigationRef.current.goBack();
}

export default {
  navigate,
  reset,
  goBack,
};
