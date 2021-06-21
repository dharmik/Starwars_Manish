import PropTypes from 'prop-types';
import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {ApplicationStyles as styles, Colors} from '../theme';

const Loading = ({isShowOpacity = true}) => (
  <>
    {isShowOpacity && <View style={styles.opacityContainer} />}
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.white} />
    </View>
  </>
);
Loading.propTypes = {
  isShowOpacity: PropTypes.bool,
};
export default Loading;
