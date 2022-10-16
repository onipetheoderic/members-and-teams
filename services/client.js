import { ApolloClient, InMemoryCache } from "@apollo/client";
import { Platform } from "react-native";
import { config } from "../config";

const API_URL =
  Platform.OS === "ios" ? config.IOS_API_URL : config.ANDROID_API_URL;

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

export default client;
