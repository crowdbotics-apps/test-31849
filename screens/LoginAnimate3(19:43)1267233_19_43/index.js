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
      <View style={styles.View_19_44}>
        <Text style={styles.Text_19_44}>Welcome Back!</Text>
      </View>
      <View style={styles.View_19_45}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/921c/b08c/34841a7de77f5e94999b49d3012712a3"
          }}
          style={styles.ImageBackground_19_46}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85c0/be67/45f81f4ef09bbaa715b3f521d831b7b8"
          }}
          style={styles.ImageBackground_19_47}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_19_48}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("19_65"))
        }
      >
        <View style={styles.View_I19_48_3_7} />
        <View style={styles.View_I19_48_3_8}>
          <Text style={styles.Text_I19_48_3_8}>Login</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_19_49}>
        <View style={styles.View_19_50}>
          <View style={styles.View_19_51}>
            <Text style={styles.Text_19_51}>Email</Text>
          </View>
          <View style={styles.View_19_52}>
            <Text style={styles.Text_19_52}>johndoe@gmail.com</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c679/e3f6/167cb8a52bb0dcbdbab3c8c16c2e2f27"
            }}
            style={styles.ImageBackground_19_53}
          />
        </View>
        <View style={styles.View_19_54}>
          <View style={styles.View_19_55}>
            <Text style={styles.Text_19_55}>Password</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c679/e3f6/167cb8a52bb0dcbdbab3c8c16c2e2f27"
            }}
            style={styles.ImageBackground_19_56}
          />
          <View style={styles.View_19_63}>
            <Text style={styles.Text_19_63}>***********************</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_19_57}>
        <View style={styles.View_I19_57_3_12} />
        <View style={styles.View_I19_57_3_13}>
          <Text style={styles.Text_I19_57_3_13}>Get Started</Text>
        </View>
      </View>
      <View style={styles.View_19_58}>
        <Text style={styles.Text_19_58}>Forget your pasword?</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_19_44: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("41%"),
    justifyContent: "flex-start"
  },
  Text_19_44: {
    color: "rgba(0, 129, 167, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_45: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("-7%")
  },
  ImageBackground_19_46: {
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
  ImageBackground_19_47: {
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
  TouchableOpacity_19_48: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("84%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I19_48_3_7: {
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
  View_I19_48_3_8: {
    flexGrow: 1,
    width: wp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I19_48_3_8: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_49: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("57%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_19_50: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_19_51: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_19_51: {
    color: "rgba(0, 129, 167, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_52: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_19_52: {
    color: "rgba(0, 129, 167, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.56,
    textTransform: "none"
  },
  ImageBackground_19_53: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_19_54: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_19_55: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_19_55: {
    color: "rgba(0, 129, 167, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_19_56: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_19_63: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_19_63: {
    color: "rgba(0, 129, 167, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.56,
    textTransform: "none"
  },
  View_19_57: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("93%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I19_57_3_12: {
    flexGrow: 1,
    width: wp("84%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 175, 185, 1)",
    borderWidth: 2
  },
  View_I19_57_3_13: {
    flexGrow: 1,
    width: wp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I19_57_3_13: {
    color: "rgba(0, 175, 185, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_58: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("104%"),
    justifyContent: "flex-start"
  },
  Text_19_58: {
    color: "rgba(0, 129, 167, 1)",
    fontSize: 11,
    fontWeight: "400",
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
