<template>
    <ContentBase>
      <div class="row">
        <div class="col-3">
          <UserProfileInfo @follow="follow" @unfollow="unfollow" :user="user" > </UserProfileInfo>
          <UserProfileWrite @post_a_post="post_a_post" v-if="is_me" />
        </div>
        <div class="col-9">
          <UserProfilePost :posts="posts" @delete_a_post="delete_a_post" > </UserProfilePost>
        </div>
      </div>
    </ContentBase>
</template>

<script>
// @ is an alias to /src
import ContentBase from '../components/ContentBase';
import UserProfileInfo from '@/components/UserProfileInfo';
import UserProfilePost from '@/components/UserProfilePost';
import UserProfileWrite from '@/components/UserProfileWrite';
import { reactive } from 'vue';
import $ from 'jquery';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'UserProfileView',
  components: {
    ContentBase,
    UserProfileInfo,
    UserProfilePost,
    UserProfileWrite,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const userId = parseInt(route.params.userId);

    console.log(userId);

    const user = reactive({});

    const posts = reactive({
      post:[]
    });

    const follow = () => {
      if (user.is_followed) return ;
      user.is_followed = true;
      user.followerCount += 1;
    }

    const unfollow = () => {
      if (!user.is_followed) return ;
      user.is_followed = false;
      user.followerCount -= 1;
    }

    const post_a_post = (content) => {
      posts.count ++ ;
      posts.post.unshift({
        id: posts.count,
        userId: 1,
        content: content.value,
      })
      content = "";
    }

    const delete_a_post = (post_id) => {
      posts.count -- ;
      posts.post = posts.post.filter(post => post.id != post_id);
    }

    const is_me = computed(() => userId === store.state.user.id);

    $.ajax({
      url: "https://app165.acapp.acwing.com.cn/myspace/getinfo/",
      type: "get",
      data: {
          user_id: userId,
      },
      headers: {
        'Authorization': "Bearer " + store.state.user.access,
      },
      success(resp) {
        user.id = resp.id;
        user.username = resp.username;
        user.photo = resp.photo;
        user.followerCount = resp.followerCount;
        user.is_followed = resp.is_followed;

        console.log(resp);
      }
    })

    $.ajax({
      url: "https://app165.acapp.acwing.com.cn/myspace/post/",
      type: "get",
      data: {
        user_id: userId,
      },
      headers: {
        'Authorization': "Bearer " + store.state.user.access,
      },
      success(resp) {
        posts.count = resp.length;
        posts.post = resp;
      }
    })



    return {
      user,
      follow,
      unfollow,
      posts,
      post_a_post,
      is_me,
      delete_a_post,
    }
  }
}
</script>

<style scoped>

</style>
