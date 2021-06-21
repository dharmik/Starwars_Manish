import React, {useEffect, useState, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Pressable, Text, View, Image, BackHandler} from 'react-native';
import {Container, Content} from 'native-base';
import {getFilm, getSpacies, getStarships, clearData} from './../redux/actions';
import {Loading} from './../components';
import styles from './styles/CharacterDetailStyle';
import {Images} from '../theme';
import {Strings} from '../globals';

const RenderHeader = ({navigation, dispatch}) => {
  return (
    <View style={styles.headerContainer}>
      <Pressable
        onPress={() => {
          navigation.goBack();
          dispatch(clearData());
        }}>
        <Image style={styles.imgBack} source={Images.left_arrow} />
      </Pressable>
      <Text style={styles.headerText}>{Strings.characterDetail}</Text>
    </View>
  );
};

const RenderCharacter = ({characterDetail}) => {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.imgCharacter} />
      <View style={styles.characterMiddleView}>
        <Text style={styles.nameText}>{characterDetail.name}</Text>
        {/* <Text
          style={
            styles.speciesText
          }>{`Species:  ${characterDetail.birth_year}`}</Text> */}
      </View>
    </View>
  );
};

const RenderSpecies = ({spaciesArr}) => {
  return spaciesArr?.length > 0 ? (
    <View>
      <Text style={styles.movieTitleText}>{Strings.species}</Text>
      <View style={styles.detailView}>
        {spaciesArr?.map((data, i) => {
          return (
            <View key={i} style={styles.moviesSubView}>
              <Image style={styles.imgDot} source={Images.dot_icon} />
              <Text style={styles.movieText}>{data?.name}</Text>
            </View>
          );
        })}
      </View>
    </View>
  ) : null;
};

const RenderMovies = ({filmArr}) => {
  return filmArr?.length > 0 ? (
    <View>
      <Text style={styles.movieTitleText}>{Strings.movies}</Text>
      <View style={styles.detailView}>
        {filmArr?.map((data, i) => {
          return (
            <View key={i} style={styles.moviesSubView}>
              <Image style={styles.imgDot} source={Images.dot_icon} />
              <Text style={styles.movieText}>{data?.title}</Text>
            </View>
          );
        })}
      </View>
    </View>
  ) : null;
};

const RenderStarShipView = ({starShipArr}) => {
  return starShipArr?.length > 0 ? (
    <View>
      <Text style={styles.spaceShipTitleText}>{Strings.starships}</Text>
      <View style={styles.spaceShipView}>
        {starShipArr?.map((data, i) => {
          return (
            <View key={i} style={styles.speciesSubView}>
              <Image style={styles.imgDot} source={Images.dot_icon} />
              <Text style={styles.spaceShipText}>{data?.name}</Text>
            </View>
          );
        })}
      </View>
    </View>
  ) : null;
};

const RenderDetail = ({characterDetail, spaciesArr, filmArr, starShipArr}) => {
  return (
    <View style={styles.detailContainer}>
      <Image style={styles.imgTop} />
      <RenderCharacter characterDetail={characterDetail} />
      <View style={styles.seperator} />
      <RenderSpecies spaciesArr={spaciesArr} />
      <View style={styles.seperator} />
      <RenderMovies filmArr={filmArr} />
      <View style={styles.seperator} />
      <RenderStarShipView starShipArr={starShipArr} />
    </View>
  );
};

const CharacterDetailScreen = ({route, navigation}) => {
  const {characterDetail} = route.params;
  const {spaciesArr, filmArr, starShipArr, fetching} = useSelector(
    state => state.characterReducer,
  );
  const dispatch = useDispatch();
  const fetchSpecies = () => {
    characterDetail &&
      characterDetail.species.map(async data => {
        await dispatch(getSpacies(data));
      });
  };
  const fetchFilm = () => {
    characterDetail &&
      characterDetail.films.map(async data => {
        await dispatch(getFilm(data));
      });
  };
  const fetchStarships = () => {
    characterDetail &&
      characterDetail.starships.map(async data => {
        await dispatch(getStarships(data));
      });
  };
  const handleBackButtonClick = useCallback(() => {
    dispatch(clearData());
    return false;
  }, [dispatch]);

  useEffect(() => {
    fetchSpecies();
    fetchFilm();
    fetchStarships();
    console.log('filmArr res ' + JSON.stringify(filmArr));
  }, []);
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, [handleBackButtonClick]);

  return (
    <Content
      style={styles.container}
      contentInsetAdjustmentBehavior="automatic">
      <RenderHeader navigation={navigation} dispatch={dispatch} />
      <Content style={styles.container}>
        <RenderDetail
          characterDetail={characterDetail}
          spaciesArr={spaciesArr}
          filmArr={filmArr}
          starShipArr={starShipArr}
        />
      </Content>
      {fetching && <Loading />}
    </Content>
  );
};

export default CharacterDetailScreen;
