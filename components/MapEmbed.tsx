import React, { Component, useState, useEffect } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { View , StyleSheet} from "react-native";
import { GOOGLE_PLACES_KEY } from "@env";
import PlaceList, {placesItemInterface} from "./PlaceList";
import { useSelector } from "react-redux";
import { stateInterface } from "../reduxUtils/store";

const dummyLat: number = 37.871666;
const dummyLong: number = -122.272781;

/**
 * Get current user's position
 */
// function getCurrentLocation() {
//     navigator.geolocation.getCurrentPosition(position => {
//         const lat = position.coords.latitude;
//         const long = position.coords.longitude;
//         this.setState({ lat: lat, long: long });
//         this.getPlaces();
//     });
// }


// Construct the Place URL
function getPlacesUrl(lat, long, radius, type, apiKey) {
    const baseUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?`;
    const location = `location=${lat},${long}&radius=${radius}`;
    const typeData = `&types=${type}`;
    const api = `&key=${apiKey}`;
    return `${baseUrl}${location}${typeData}${api}`;
}

function getPlaces(lat: number, long: number, setPlaces: React.Dispatch<React.SetStateAction<any[]>>,  placeType: String = "restaurant") {
    const markers = [];
    const url = getPlacesUrl(lat, long, 3000, placeType, GOOGLE_PLACES_KEY);
    console.log(`The url for getplaces is ${url}`);
    fetch(url)
        .then(res => res.json())
        .then(res => {
        res.results.map((element, index) => {
            const markerObj: placesItemInterface = {
                id: index, 
                name: element.name, 
                photos: element.photos, 
                rating: element.rating, 
                vicinity: element.vicinity, 
                marker: { 
                    latitude: element.geometry.location.lat, 
                    longitude: element.geometry.location.lng
                }
            };
            markers.push(markerObj);
        });
        //update our places array
        console.log(`Our first markers are: ${JSON.stringify(markers[0], null, 4)}`);
        setPlaces(markers);
    });
}


export default function MapEmbed() {

    let [places, setPlaces] = useState<Array<placesItemInterface> | undefined>([]);

    const location = useSelector((state: stateInterface) => state.location);
    let lat: number = useSelector((state: stateInterface) => state.latitude);
    let long: number = useSelector((state: stateInterface) => state.longitude);

    useEffect(() => {
        console.log("The getPlaces (nearby restaruants) has run!!!");
        getPlaces(lat, long, setPlaces, "restaurant");
    }, [location]);

    return (
        <View style={styles.container}>
            <View style={styles.mapView}>
                <MapView
                    style={{
                    flex: 1
                    }}
                    provider={PROVIDER_GOOGLE}
                    region={{
                        latitude: lat,
                        longitude: long,
                        latitudeDelta: 0.004,
                        longitudeDelta: 0.004
                    }}
                >
                    {places.map((marker, i) => (
                    <Marker
                        key={i}
                        coordinate={{
                        latitude: marker.marker.latitude,
                        longitude: marker.marker.longitude
                        }}
                        title={marker.name}
                    />
                    ))}
                </MapView>
            </View>
            <View style={styles.placeList}>
                {/* <PlaceList places={places} /> */}
            </View>
      </View>
    );
}



// class MapScreenTe extends Component {
//   //Set the HeaderTitle screen
//   static navigationOptions = props => {
//     const placeName = props.navigation.getParam("placeName");
//     return { headerTitle: placeName.toUpperCase() };
//   };
//   constructor(props) {
//     super(props);
//     //Initial State
//     this.state = {
//       lat: null,
//       long: null,
//       places: [],
//       isLoading: false,
//       placeType: "restaurant"
//     };
//   }
//   componentDidMount() {
//     console.log(this.props);
//     const { navigation } = this.props;
//     const placeType = navigation.getParam("placeType");
//     this.setState({ placeType: placeType });

//     this.getCurrentLocation();
//   }
//   /**
//    * Get current user's position
//    */
//   getCurrentLocation() {
//     navigator.geolocation.getCurrentPosition(position => {
//       const lat = position.coords.latitude;
//       const long = position.coords.longitude;
//       this.setState({ lat: lat, long: long });
//       this.getPlaces();
//     });
//   }

//   /**
//    * Get the Place URL
//    */
//   getPlacesUrl(lat, long, radius, type, apiKey) {
//     const baseUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?`;
//     const location = `location=${lat},${long}&radius=${radius}`;
//     const typeData = `&types=${type}`;
//     const api = `&key=${apiKey}`;
//     return `${baseUrl}${location}${typeData}${api}`;
//   }

//   getPlaces() {
//     const { lat, long, placeType } = this.state;
//     const markers = [];
//     const url = this.getPlacesUrl(lat, long, 1500, placeType, GOOGLE_API_KEY);
//     fetch(url)
//       .then(res => res.json())
//       .then(res => {
//         res.results.map((element, index) => {
//           const marketObj = {};
//           marketObj.id = element.id;
//           marketObj.name = element.name;
//           marketObj.photos = element.photos;
//           marketObj.rating = element.rating;
//           marketObj.vicinity = element.vicinity;
//           marketObj.marker = {
//             latitude: element.geometry.location.lat,
//             longitude: element.geometry.location.lng
//           };

//           markers.push(marketObj);
//         });
//         //update our places array
//         this.setState({ places: markers });
//       });
//   }

//   render() {
//     const { lat, long, places } = this.state;
//     return (
//       <View style={styles.container}>
//         <View style={styles.mapView}>
//           <MapView
//             style={{
//               flex: 1
//             }}
//             provider={PROVIDER_GOOGLE}
//             initialRegion={{
//               latitude: lat,
//               longitude: long,
//               latitudeDelta: 0.0922,
//               longitudeDelta: 0.0421
//             }}
//           >
//             {places.map((marker, i) => (
//               <MapView.Marker
//                 key={i}
//                 coordinate={{
//                   latitude: marker.marker.latitude,
//                   longitude: marker.marker.longitude
//                 }}
//                 title={marker.name}
//               />
//             ))}
//           </MapView>
//         </View>
//         <View style={styles.placeList}>
//           <PlaceList places={places} />
//         </View>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  mapView: {
    flex: 1,
    justifyContent: "center",
    height: "50%",
    width: "100%"
  },
  placeList: {
    flex: 0,
    justifyContent: "center"
  }
});