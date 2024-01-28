import React from 'react'
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'gray'
  },
  bold: {
    fontWeight: 'bold'
  },
  blue: {
    color: 'blue'
  },
  big: {
    fontSize: 20
  },
  small: 10
})

export default function StyledText ({ blue, bold, children, big, small }) {
  const textStyles = [
    styles.text,
    blue && styles.blue,
    bold && styles.bold,
    big && styles.big,
    small && styles.small
  ]

  return (
    <Text style={textStyles}>
      {children}
    </Text>
  )
}
