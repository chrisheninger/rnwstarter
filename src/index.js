import { AppRegistry, Platform } from "react-native";

import App from "./App";

AppRegistry.registerComponent("RNWStarter", () => App);

if (Platform.OS === "web") {
  AppRegistry.runApplication("RNWStarter", {
    rootTag: document.getElementById("root"),
  });

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: http://bit.ly/CRA-PWA
  const serviceWorker = require("./serviceWorker");
  serviceWorker.unregister();
}
