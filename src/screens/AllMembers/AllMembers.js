import React from "react";
import styled from "styled-components/native";
import _ from "lodash";
import { useQuery, gql } from "@apollo/client";
import { FlatList, ActivityIndicator } from "react-native";
import { Header, MemberCard, Grid } from "../../components";
import { OverallContext } from "../../../store";

const UNSORTED = "Unsorted";
const ALPHABETICAL = "Alphabetical";
const RELEVANCE = "Relevance";

const OPTIONS = [UNSORTED, ALPHABETICAL, RELEVANCE];

// eslint-disable-next-line react/prop-types
const AllMembers = ({ navigation }) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [currentSortState, setCurrentSortState] = React.useState(0);

  const { state, dispatch } = React.useContext(OverallContext);

  const handleError = error => {
    alert("error occurred", error.message);
  };

  const { data, loading, refetch } = useQuery(ALL_MEMBERS_QUERY, {
    fetchPolicy: "network-only",
    notifyOnNetworkStatusChange: true,
    onError: handleError,
    onCompleted: () => {
      if (data.allMembers.length === 0) {
        setRefreshing(true);
        refetch();
      } else {
        dispatch({ type: "SET_MEMBERS", payload: data.allMembers });
        setRefreshing(false);
      }
    },
  });

  const extractKey = item => item.id;

  const sorter = (data, sortType) => {
    if (sortType === ALPHABETICAL) {
      return _.sortBy(data, o => o.firstName);
    } else if (sortType === RELEVANCE) {
      // sort by relevance
      return sortRelevance(data);
    } else return data;
  };

  const renderItem = ({ item }) => (
    <MemberCard
      firstName={item.firstName}
      lastName={item.lastName}
      avatar={item.avatar}
      title={item.title}
      // eslint-disable-next-line react/prop-types
      onPress={() => navigation.navigate("Team", { id: item.id })}
    />
  );

  const nextFilter = () => {
    setCurrentSortState(
      currentSortState + 1 === OPTIONS.length ? 0 : currentSortState + 1
    );
  };
  const currentData = state.members || [];

  function sortRelevance(arr, ascending) {
    // default to ascending
    if (typeof ascending === "undefined") ascending = true;

    const multiplier = ascending ? 1 : -1;

    const sorter = function (a, b) {
      if (a.avatar === b.avatar)
        // identical? return 0
        return 0;
      else if (a.avatar === "")
        // a is null? last
        return 1;
      else if (b.avatar === "")
        // b is null? last
        return -1;
      // compare, negate if descending
      else return a.avatar.localeCompare(b.avatar) * multiplier;
    };

    return arr.sort(sorter);
  }

  return (
    <Container>
      <Header
        toggleFunction={() => nextFilter()}
        rightText={OPTIONS[currentSortState]}
        centerText="All Members"
      />
      {loading && <ActivityIndicator size="large" testID="loadingSpinner" />}
      {refreshing && <ActivityIndicator size="large" testID="refreshSpinner" />}
      <FlatList
        data={sorter(currentData, OPTIONS[currentSortState])}
        decelerationRate="fast"
        keyExtractor={extractKey}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: Grid.BaseGutter }}
      />
    </Container>
  );
};

const Container = styled.View``;

export const ALL_MEMBERS_QUERY = gql`
  query {
    allMembers {
      id
      firstName
      lastName
      title
      experience
      avatar
      colleagues {
        id
        firstName
        lastName
        title
        experience
        avatar
      }
    }
  }
`;

export default AllMembers;
