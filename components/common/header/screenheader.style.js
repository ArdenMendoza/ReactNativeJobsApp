import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => {
    console.log(dimension)
    return {
      width: 30,
      height: 30,
      borderRadius: SIZES.small / 1.25,
    };
  },
});

export default styles;
