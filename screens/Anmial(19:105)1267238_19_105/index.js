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
      <View style={styles.View_19_106}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4f9/2add/bfcd14d61e1007f895e21d4adf095f29"
          }}
          style={styles.ImageBackground_19_107}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/205a/15a6/5f36204f7ad4a2d68a9ebce076c370c0"
          }}
          style={styles.ImageBackground_19_108}
        />
      </View>
      <View style={styles.View_19_109}>
        <Text style={styles.Text_19_109}>
          Elephants are mammals of the family Elephantidae and the largest
          existing land animals. Three species are currently recognised: the
          African bush elephant, the African forest elephant, and the Asian
          elephant. Elephantidae is the only surviving family of the order
          Proboscidea; extinct members include the mastodons.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_19_110}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("19_65"))
        }
      >
        <View style={styles.View_I19_110_3_7} />
        <View style={styles.View_I19_110_3_8}>
          <Text style={styles.Text_I19_110_3_8}>Get Started</Text>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50fe/3a02/6da05dd23005410fecf3c476e903a360"
        }}
        style={styles.ImageBackground_19_111}
      />
      <View style={styles.View_19_112}>
        <View style={styles.View_19_113}>
          <Text style={styles.Text_19_113}>Elephant</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2042/34c9/5d91afa53b72dd82d861503b2970fe9b"
          }}
          style={styles.ImageBackground_19_114}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/270b/f945/f23889d698a9cbd67b56439df4ab0a74"
          }}
          style={styles.ImageBackground_19_116}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_19_106: {
    width: wp("121%"),
    minWidth: wp("121%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-127%"),
    top: hp("-6%")
  },
  ImageBackground_19_107: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%")
  },
  ImageBackground_19_108: {
    width: wp("118%"),
    minWidth: wp("118%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_19_109: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("58%"),
    justifyContent: "center"
  },
  Text_19_109: {
    color: "rgba(117, 123, 124, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_19_110: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("98%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I19_110_3_7: {
    flexGrow: 1,
    width: wp("84%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 175, 185, 1)"
  },
  View_I19_110_3_8: {
    flexGrow: 1,
    width: wp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I19_110_3_8: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_19_111: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94%"),
    top: hp("62%")
  },
  View_19_112: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("48%")
  },
  View_19_113: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_19_113: {
    color: "rgba(0, 129, 167, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_19_114: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  ImageBackground_19_116: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
