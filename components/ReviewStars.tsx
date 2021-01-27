import React, { Component } from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements";

let FullStar = key => (
    <Icon color="#FFC300" key={key} type="ionicon" name="ios-star" size={12} />
  );

let HalfStar = key => (
    <Icon
      color="#FFC300"
      key={key}
      type="ionicon"
      name="md-star-half"
      size={12}
    />
  );

let EmptyStar = key => (
    <Icon
        color="#FFC300"
        key={key}
        type="ionicon"
        name="ios-star-outline"
        size={12}
    />
  );

interface reviewStarsPropsInterface {
    numStars: number
}

export default function ReviewStars(props: reviewStarsPropsInterface) {
    const numStars = props.numStars;
    let starReviews = [];
    for (let i = 1; i <= 5; i++) {
        let star = FullStar(i);
        if (i > numStars) {
          star = EmptyStar(i);
        }
        starReviews.push(star);
    }

    return (
        <View style={{ flex: 1, flexDirection: "row" }}>{starReviews}</View>
    );
}

// class ReviewStarsTe extends Component {
//   FullStar = key => (
//     <Icon color="#FFC300" key={key} type="ionicon" name="ios-star" size={12} />
//   );

//   HalfStar = key => (
//     <Icon
//       color="#FFC300"
//       key={key}
//       type="ionicon"
//       name="md-star-half"
//       size={12}
//     />
//   );

//   EmptyStar = key => (
//     <Icon
//       color="#FFC300"
//       key={key}
//       type="ionicon"
//       name="ios-star-outline"
//       size={12}
//     />
//   );
//   render() {
//     const { stars } = this.props;
//     let starReviews = [];
//     for (let i = 1; i <= 5; i++) {
//       let star = this.FullStar(i);
//       if (i > stars) {
//         star = this.EmptyStar(i);
//       }
//       starReviews.push(star);
//     }
//     return <View style={{ flex: 1, flexDirection: "row" }}>{starReviews}</View>;
//   }
// }