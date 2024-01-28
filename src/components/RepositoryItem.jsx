import React from 'react'
import { View, StyleSheet } from 'react-native'
import StyledText from './StyledText'

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5
  },
  strong: {
    color: '#09f',
    fontWeight: 'bold',
    marginBottom: 5
  }
})

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <StyledText fontSize='subheading' fontWeight='bold'>Fullname: {props.fullName}</StyledText>
      <StyledText>{props.description}</StyledText>
      <StyledText>{props.language}</StyledText>
      <StyledText>Starts: {props.stargazersCount}</StyledText>
      <StyledText>Forks: {props.forksCount}</StyledText>
      <StyledText>Reviews: {props.reviewCount}</StyledText>
      <StyledText>Rating: {props.ratingAverage}</StyledText>
    </View>
  )
}

export default RepositoryItem
