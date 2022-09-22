import { createApp } from "vue";
import App from "./App.vue";
import Avatar from "./components/Avatar.vue";
import FeedCard from "./components/FeedCard.vue";
import FormTweet from "./components/FormTweet.vue";

import "./assets/main.css";

const app = createApp(App);

app
  .component("FeedCard", FeedCard)
  .component("Avatar", Avatar)
  .component("FormTweet", FormTweet);

app.mount("#app");
