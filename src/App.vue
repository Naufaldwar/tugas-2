<script>
import Navbar from "./components/Navbar.vue";
import Heart from "./assets/heart.svg";
import FormTweet from "./components/FormTweet.vue";
import FeedCard from "./components/FeedCard.vue";

export default {
  components: {
    Navbar,
    FormTweet,
    FeedCard,
  },
  asset: {
    Heart,
  },

  data() {
    return {
      user: {
        nama: "Naufal Dwi Ariananto",
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSucE8cRhaQTngU1IJgSw7IB5poXfQNoTsGLf-RXRvaik-z6fieK13YwlYqLWHPTCzEWEE&usqp=CAU",
        nickname: "@nopaldwar",
      },
      feeds: [
        {
          user: "Bayu Tri Nugroho",
          usernick: "@dwi",
          tweet:
            "Géritole de maudite marde de saint-cimonaque de cul de purée de charrue de cossin de saint-ciboire de baptême de gériboire de viarge de mosus de tabarouette.",
          photo:
            "https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/07/12/3455922448.jpg",
          heart: "false",
          like: 10,
          retweet: 50,
          reply:"false"
        },
        {
          user: "Dedi Mumz si imoet",
          usernick: "@ari",
          tweet:
            "Sapristi de doux Jésus de cibouleau de colon de cochonnerie de sainte-viarge de purée de taboire de câlique de mosus de calvinouche d'étole.",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlbfBgZmo3yMzBOEtGyS6UqD1PxZsVgubLzg&usqp=CAU",
          heart: "false",
          like: 15,
          retweet: 1220,
          reply:"false"
        },
      ],
    };
  },

  provide() {
    return {
      nama: this.user.nama,
      photos: this.user.photo,
      nick: this.user.nickname,
      feeds: this.feeds,
    };
  },
  methods: {
    handleTweet(tweet) {
      this.feeds.push({
        photo: this.user.photo,
        user: this.user.nama,
        usernick: this.user.nickname,
        tweet: tweet,
        heart: "false",
        like: 0,
        retweet:0,
        delete:true,
        reply:"false"
      });
      console.log(tweet);
    },

    handleDelete(index){
      this.feeds.splice(index,1)
      console.log(this.feeds)
    }
  },
};
</script>

<template>
  <Navbar :poto="user.photo" />
  <FormTweet class="mt-8" @tweets="handleTweet" />
  <h1 class="w-1/2 flex mx-auto my-4 text-xl text-slate-600">Feeds</h1>
  <FeedCard @delete="handleDelete"></FeedCard>
</template>
