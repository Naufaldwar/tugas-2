import { createApp } from "vue";
import App from "./App.vue";
import Avatar from "./components/Avatar.vue";
import Button from "./components/Button.vue"
import FeedCard from './components/FeedCard.vue'
import Navbar from './components/Navbar.vue'
import FormTweet from './components/FormTweet.vue'

import "./assets/main.css";


const app = createApp(App);

app.component('FeedCard',FeedCard)
app.component("Avatar", Avatar)
app.component("Button", Button)
app.component("Navbar", Navbar)
app.component('FormTweet',FormTweet)

app.mount("#app")