import React, {useEffect, useState, useCallback} from 'react';
import {Text, View, FlatList, Pressable, Image, Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container, Content} from 'native-base';
// import {listCharacters} from './../globals/StaticData';
import {CustomTextInput, Loading} from './../components';
import styles from './styles/CharactersListStyles';
import {useSelector, useDispatch} from 'react-redux';
import {getCharacters, getFilterCharacters} from './../redux/actions';
import {Images, Colors} from '../theme';
import {Strings} from '../globals';

const filterList = (list, searchText) => {
  const filterData = list.filter(
    listItem =>
      listItem.name &&
      listItem.name.toLowerCase().includes(searchText.toLowerCase()),
  );
  return filterData;
};

const RenderHeader = ({
  isSearch,
  setSearch,
  searchText,
  setSearchText,
  listCharacters,
  setListChaaracters,
  dispatch,
}) => {
  return isSearch ? (
    <RenderSearch
      isSearch={isSearch}
      setSearch={setSearch}
      searchText={searchText}
      setSearchText={setSearchText}
      listCharacters={listCharacters}
      setListChaaracters={setListChaaracters}
      dispatch={dispatch}
    />
  ) : (
    <View style={styles.headerSubContainer}>
      <Text style={styles.headerText}>{Strings.characterList}</Text>
      <Pressable
        style={styles.headerSearchView}
        onPress={() => setSearch(true)}>
        <Image source={Images.search} style={styles.searchIcon} />
      </Pressable>
    </View>
  );
};

const RenderSearch = ({
  isSearch,
  setSearch,
  searchText,
  setSearchText,
  listCharacters,
  setListChaaracters,
  dispatch,
}) => {
  return (
    <View style={styles.searchContainer}>
      <CustomTextInput
        placeholder={Strings.searchHere}
        placeholderTextColor={Colors.black}
        autoCapitalize={'none'}
        style={styles.searchInput}
        rightIcon={<Image source={Images.close} style={styles.closeIcon} />}
        value={searchText}
        onChangeText={value => {
          setSearchText(value);
          dispatch(getFilterCharacters(searchText));
          // const filterdata = filterList(listCharacters, value);
          // console.log('listCharacters ' + JSON.stringify(filterdata));
          // setListChaaracters([...filterdata]);
        }}
        onIconPress={() => {
          setSearchText('');
          setSearch(false);
          dispatch(getCharacters());
        }}
        onSubmitEditing={() => Keyboard.dismiss()}
      />
    </View>
  );
};

const RenderList = ({renderCharacter, characters, listCharacters}) => {
  //console.log('characters data' + JSON.stringify(listCharacters));
  return (
    <FlatList
      contentContainerStyle={styles.listContainer}
      keyExtractor={(item, index) => index.toString()}
      data={listCharacters?.length > 0 ? listCharacters : characters?.results}
      renderItem={renderCharacter}
    />
  );
};

const RenderCharacter = ({navigation, item}) => {
  const onCharacterPress = async () => {
    navigation.navigate('CharacterDetail', {
      characterDetail: item,
    });
  };

  return (
    <Pressable style={styles.itemContainer} onPress={onCharacterPress}>
      <View style={styles.characterLeftView}>
        <Image style={styles.imgCharacter} />
        <View style={styles.characterMiddleView}>
          <Text style={styles.titleText}>{item.name}</Text>
          {/* <Text style={styles.subTitleText}>{item.birth_year}</Text> */}
        </View>
      </View>
      <Image style={styles.imgDetail} source={Images.right_arrow} />
    </Pressable>
  );
};

const CharactersList = () => {
  const [searchText, setSearchText] = useState('');
  const [isSearch, setSearch] = useState(false);
  const [listCharacters, setListChaaracters] = useState([]);
  const {characters, fetching} = useSelector(state => state.characterReducer);
  const dispatch = useDispatch();
  const fetchCharacters = () => dispatch(getCharacters());
  useEffect(() => {
    fetchCharacters();
    characters && setListChaaracters(characters?.results);
  }, []);

  const navigation = useNavigation();
  const renderCharacter = useCallback(
    ({item, index}) =>
      RenderCharacter({
        navigation,
        item,
        index,
      }),
    [navigation],
  );

  return (
    <Container
      style={styles.container}
      contentInsetAdjustmentBehavior="automatic">
      <Content>
        <RenderHeader
          isSearch={isSearch}
          setSearch={setSearch}
          searchText={searchText}
          setSearchText={setSearchText}
          listCharacters={characters?.results}
          setListChaaracters={setListChaaracters}
          dispatch={dispatch}
        />
        {searchText && characters?.results?.length === 0 ? (
          <View style={styles.noDataContainer}>
            <Text style={styles.noDataText}>{Strings.noDataFound}</Text>
          </View>
        ) : (
          <View style={styles.listView}>
            <RenderList {...{renderCharacter, characters, listCharacters}} />
          </View>
        )}
        {fetching && <Loading />}
      </Content>
    </Container>
  );
};

export default CharactersList;
