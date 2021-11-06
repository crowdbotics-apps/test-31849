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
      <View style={styles.View_5_151}>
        <Text style={styles.Text_5_151}>Animal Wiki</Text>
      </View>
      <View style={styles.View_5_176}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f0d/c0f2/b06bd96296783586330865a9d56c30cb"
          }}
          style={styles.ImageBackground_5_169}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a25/12dc/0474b70abecdb09ac674f969f367ce9d"
          }}
          style={styles.ImageBackground_5_172}
        />
      </View>
      <View style={styles.View_5_180}>
        <View style={styles.View_5_183}>
          <View style={styles.View_5_177}>
            <Text style={styles.Text_5_177}>Popular</Text>
          </View>
        </View>
        <View style={styles.View_5_178}>
          <Text style={styles.Text_5_178}>Mammalians</Text>
        </View>
        <View style={styles.View_5_181}>
          <Text style={styles.Text_5_181}>Amphbians</Text>
        </View>
        <View style={styles.View_5_182}>
          <Text style={styles.Text_5_182}>Birds</Text>
        </View>
      </View>
      <View style={styles.View_5_184} />
      <View style={styles.View_5_189}>
        <View style={styles.View_5_185} />
        <View style={styles.View_5_186}>
          <Text style={styles.Text_5_186}>Mammalians</Text>
        </View>
        <View style={styles.View_5_187}>
          <Text style={styles.Text_5_187}>Lions</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/368c/ebf5/cf6fd7be1cc724225a264f5a4238a918"
          }}
          style={styles.ImageBackground_5_188}
        />
      </View>
      <View style={styles.View_5_190}>
        <View style={styles.View_5_205}>
          <View style={styles.View_5_191} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62fb/8db6/85d89f0b6938f67e58e5b286208fc43b"
            }}
            style={styles.ImageBackground_5_194}
          />
        </View>
        <View style={styles.View_5_192}>
          <Text style={styles.Text_5_192}>Mammalians</Text>
        </View>
        <View style={styles.View_5_193}>
          <Text style={styles.Text_5_193}>Tiger</Text>
        </View>
      </View>
      <View style={styles.View_5_195}>
        <View style={styles.View_5_196} />
        <View style={styles.View_5_197}>
          <Text style={styles.Text_5_197}>Mammalians</Text>
        </View>
        <View style={styles.View_5_198}>
          <Text style={styles.Text_5_198}>Tortise</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc58/e4af/950f97993dcffa0fd839a17c49dcdebe"
          }}
          style={styles.ImageBackground_5_199}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_5_200}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("19_105"))
        }
      >
        <View style={styles.View_5_201} />
        <View style={styles.View_5_202}>
          <Text style={styles.Text_5_202}>Mammalians</Text>
        </View>
        <View style={styles.View_5_203}>
          <Text style={styles.Text_5_203}>Elephant</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05aa/b32a/3036955c458290a4a1949ea7ecd9391b"
          }}
          style={styles.ImageBackground_5_204}
        />
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_5_151: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_5_151: {
    color: "rgba(0, 129, 167, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_176: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("6%")
  },
  ImageBackground_5_169: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_172: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_5_180: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_183: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 129, 167, 1)"
  },
  View_5_177: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_177: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_178: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_178: {
    color: "rgba(0, 129, 167, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_181: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_181: {
    color: "rgba(0, 129, 167, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_182: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_182: {
    color: "rgba(0, 129, 167, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_184: {
    width: wp("135%"),
    minWidth: wp("135%"),
    height: hp("80%"),
    minHeight: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-7%"),
    top: hp("31%"),
    backgroundColor: "rgba(102, 207, 213, 1)"
  },
  View_5_189: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("38%")
  },
  View_5_185: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_5_186: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_5_186: {
    color: "rgba(0, 129, 167, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_187: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_5_187: {
    color: "rgba(0, 129, 167, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_188: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  View_5_190: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("56%")
  },
  View_5_205: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_5_191: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_5_194: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_5_192: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_5_192: {
    color: "rgba(0, 129, 167, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_193: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_5_193: {
    color: "rgba(0, 129, 167, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_195: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("72%")
  },
  View_5_196: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_5_197: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_5_197: {
    color: "rgba(0, 129, 167, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_198: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_5_198: {
    color: "rgba(0, 129, 167, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_199: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  TouchableOpacity_5_200: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("89%")
  },
  View_5_201: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_5_202: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_5_202: {
    color: "rgba(0, 129, 167, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_203: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_5_203: {
    color: "rgba(0, 129, 167, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_204: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("0%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
