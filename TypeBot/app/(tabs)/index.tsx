import { StyleSheet, View, Text } from 'react-native';
import { Bubble } from "@typebot.io/react";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>É isso bb tá certo!!</Text>
      <Bubble
      typebot="my-typebot-no6je14"
      theme={{ button: { backgroundColor: "#FFFFFF", customIconSrc: "🤖" } }}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  }
});
