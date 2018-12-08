import { StyleSheet } from "react-native";

/* --- BUTTONS ---- */

const button = StyleSheet.create({
  primary: {
    flex: 1,
    height: 50,
    width: 240,
    backgroundColor: "#ffc200",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50
  },

  secondary: {
    flex: 1,
    height: 50,
    width: 240,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderColor: "#ffc200",
    borderWidth: 1
  }
});

/* --- TEXTS ---- */

const text = StyleSheet.create({
  h1: {
    fontFamily: "Karla-Bold",
    fontSize: 20,
    color: "#262626"
  },
  h2: {
    fontFamily: "Karla-Bold",
    fontSize: 18,
    color: "#262626"
  },
  h3: {
    fontFamily: "Karla-Bold",
    fontSize: 15,
    color: "#262626"
  },
  p: {
    fontFamily: "Karla-Regular",
    fontSize: 15,
    color: "#585858",
    lineHeight: 18
  },

  textButton: {
    fontFamily: "Karla-Regular",
    fontSize: 20,
    color: "#262626"
  },

  bikeCategory: {
    fontFamily: "Karla-Regular",
    fontSize: 15,
    color: "#ffc200"
  },
  localisation: {
    fontFamily: "Karla-Regular",
    fontSize: 15,
    color: "#c2c2c2"
  },
  rate: {
    fontFamily: "Karla-Regular",
    fontSize: 15,
    color: "#c2c2c2"
  },
  placeholder: {
    fontFamily: "Karla-Regular",
    fontSize: 15,
    color: "#c2c2c2",
    justifyContent: "flex-start"
  },
  inputCompleted: {
    fontFamily: "Karla-Regular",
    fontSize: 15,
    color: "#262626"
  },
  fullPrice: {
    fontFamily: "Karla-Bold",
    fontSize: 18,
    color: "#262626",
    justifyContent: "center"
  },
  pricePerDay: {
    fontFamily: "Karla-Italic",
    fontSize: 13,
    color: "#c2c2c2",
    justifyContent: "center"
  }
});

/* --- AVATARS ---- */

const avatar = StyleSheet.create({
  big: {
    width: 122,
    height: 122,
    borderRadius: 122 / 2
  },
  medium: {
    width: 66,
    height: 66,
    borderRadius: 66 / 2
  },
  small: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2
  }
});

export { button, text, avatar };
