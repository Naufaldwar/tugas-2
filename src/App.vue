<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
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
          reply: "false",
          comments: [
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
              isSmall: true,
            },
          ],
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
          reply: "false",
          comments: [
            {
              user: "Bayu Tri Nugroho",
              usernick: "@dwi",
              tweet: "ngomong opo seh cok..",
              photo:
                "https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/07/12/3455922448.jpg",
              heart: "false",
              like: 10,
              retweet: 50,
              isSmall: true,
            },
            {
              user: "Dedi Mumz si imoet",
              usernick: "@ari",
              tweet: "Kepo yaaa.. :v",
              photo:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlbfBgZmo3yMzBOEtGyS6UqD1PxZsVgubLzg&usqp=CAU",
              heart: "false",
              like: 15,
              retweet: 1220,
            },
          ],
        },
      ],
    };
  },

  provide() {
    return {
      user: this.user,
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
        retweet: 0,
        delete: true,
        reply: "false",
        comments: [],
      });
    },

    handleDelete(index) {
      console.log(index);
      this.feeds.splice(index, 1);
    },
    handleDeleteComment(number, index) {
      console.log(this.feeds[index]);
      this.feeds[number].comments.splice(index, 1);
    },

    handleComment(tweet, number) {
      this.feeds[number].comments.push({
        photo: this.user.photo,
        user: this.user.nama,
        usernick: this.user.nickname,
        tweet: tweet,
        heart: "false",
        delete: true,
        like: 0,
        retweet: 0,
        isSmall: true,
      });
    },
  },
};
</script>

<template>
  <Navbar :poto="user.photo" />
  <div class="flex justify-center mt-8">
    <div
      class="w-1/2 rounded-lg mt-4 px-4 bg-slate-100 border justify-self-center"
    >
      <FormTweet @tweets="handleTweet" />
    </div>
  </div>

  <h1 class="w-1/2 flex mx-auto my-4 text-xl text-slate-600">Feeds</h1>
  <div class="w-1/2 flex flex-col-reverse mx-auto">
    <FeedCard
      @comment="handleComment"
      v-for="(feed, index) in this.feeds"
      :feed="feed"
      :index="index"
      @delete="handleDelete"
      @deleteComment="handleDeleteComment"
      class="my-4"
    ></FeedCard>
  </div>
</template>
