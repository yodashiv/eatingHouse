import React, { Component } from "react";
import { Container, View } from "native-base";
import { Image, StyleSheet } from "react-native";
import { Text } from "react-native-elements";


export default function Profile() {
    const imagePlaceholder = "https://via.placeholder.com/150";

    return (
      <Container style={styles.container}>
        <Image
          source={{ uri: imagePlaceholder }}
          style={{
            alignSelf: "center",
            borderRadius: 100,
            width: 125,
            height: 125,
            marginBottom: 20,
            marginTop: 30
          }}
        />

        <View
          style={{
            flex: 1,
            marginHorizontal: 30,
            width: "80%",
            alignContent: "flex-start"
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              marginTop: 20
            }}
          >
            <Text>Name:</Text>
            <Text style={{ alignSelf: "flex-start" }}>Name</Text>
          </View>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              marginTop: 20
            }}
          >
            <Text>Email: </Text>
            <Text style={{ alignSelf: "flex-start" }}>Email</Text>
          </View>
        </View>
      </Container>
    );
}

// class ProfileScreenTe extends Component {
//   static navigationOptions = {
//     headerTitle: "Profile"
//   };

//   render() {
//     const imagePlaceholder = "https://via.placeholder.com/150";

//     return (
//       <Container style={styles.container}>
//         <Image
//           source={{ uri: imagePlaceholder }}
//           style={{
//             alignSelf: "center",
//             borderRadius: 100,
//             width: 125,
//             height: 125,
//             marginBottom: 20,
//             marginTop: 30
//           }}
//         />

//         <View
//           style={{
//             flex: 1,
//             marginHorizontal: 30,
//             width: "80%",
//             alignContent: "flex-start"
//           }}
//         >
//           <View
//             style={{
//               justifyContent: "space-between",
//               flexDirection: "row",
//               marginTop: 20
//             }}
//           >
//             <Text>Name:</Text>
//             <Text style={{ alignSelf: "flex-start" }}>Name</Text>
//           </View>
//           <View
//             style={{
//               justifyContent: "space-between",
//               flexDirection: "row",
//               marginTop: 20
//             }}
//           >
//             <Text>Email: </Text>
//             <Text style={{ alignSelf: "flex-start" }}>Email</Text>
//           </View>
//         </View>
//       </Container>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: 0,
    paddingHorizontal: 20
  }
});