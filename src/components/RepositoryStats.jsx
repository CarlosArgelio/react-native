import React from 'react'
import { parseThousands } from '../utils/parseThousands'
import { View } from 'react-native'
import StyledText from './StyledText'

const RepositoryStats = (props) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <View>
        <StyledText align='center' fontWeight='bold'>Starts</StyledText>
        <StyledText align='center'>{parseThousands(props.stargazersCount)}</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>Forks</StyledText>
        <StyledText align='center'>{parseThousands(props.forksCount)}</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>Reviews</StyledText>
        <StyledText align='center'>{parseThousands(props.reviewCount)}</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>Rating</StyledText>
        <StyledText align='center'>{parseThousands(props.ratingAverage)}</StyledText>
      </View>
    </View>
  )
}

export default RepositoryStats
