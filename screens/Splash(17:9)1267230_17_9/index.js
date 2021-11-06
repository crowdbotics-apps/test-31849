import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_17_10}>
        <Text style={styles.Text_17_10}>Animal Wiki</Text>
      </View>
      <View style={styles.View_17_11}>
        <Text style={styles.Text_17_11}>
          What do you know about the animal Kingdom ?
        </Text>
      </View>
      <View style={styles.View_17_12}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/921c/b08c/34841a7de77f5e94999b49d3012712a3"
          }}
          style={styles.ImageBackground_17_13}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85c0/be67/45f81f4ef09bbaa715b3f521d831b7b8"
          }}
          style={styles.ImageBackground_17_14}
        />
      </View>
      <View style={styles.View_17_15}>
        <View style={styles.View_I17_15_3_7} />
        <View style={styles.View_I17_15_3_8}>
          <Text style={styles.Text_I17_15_3_8}>Get Started</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_17_10: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("55%"),
    justifyContent: "flex-start"
  },
  Text_17_10: {
    color: "rgba(0, 129, 167, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_11: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("62%"),
    justifyContent: "flex-start"
  },
  Text_17_11: {
    color: "rgba(0, 129, 167, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_12: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("106%"),
    top: hp("-7%")
  },
  ImageBackground_17_13: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_17_14: {
    width: wp("58%"),
    minWidth: wp("58%"),
    height: hp("53%"),
    minHeight: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("6%")
  },
  View_17_15: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("86%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I17_15_3_7: {
    flexGrow: 1,
    width: wp("84%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 175, 185, 1)",
    opacity: 0
  },
  View_I17_15_3_8: {
    flexGrow: 1,
    width: wp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I17_15_3_8: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
