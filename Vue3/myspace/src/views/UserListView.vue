<template>
    <ContentBase>
      <div class="card" v-for="user in users" :key="user.id" @click="open_user_profile(user.id)">
        <div class="card-body">
          <div class="row">
            <div class="col-1">
              <img class="img-fluid" :src="user.photo" alt="user.username">
            </div>
            <div class="col-11">
              <div class="username">{{ user.username }}</div>
              <div class="follow-count">{{ user.followerCount }}</div>
            </div>
          </div>
        </div>
      </div>
    </ContentBase>
</template>
  
<script>
// @ is an alias to /src
import ContentBase from '../components/ContentBase.vue';
import $ from 'jquery';
import { ref } from 'vue';
import router from '@/router/index';
import { useStore } from 'vuex';

export default {
  name: 'UserListView', 
  components: {
    ContentBase,
  },
  setup() {
    const store = useStore();
    let users = ref([]);

    $.ajax({
      url: "https://app165.acapp.acwing.com.cn/myspace/userlist/",
      type: "get",
      success(resp) {
        users.value = resp;
      }
    });

    const open_user_profile = userId => {
      if (store.state.user.is_login) {
        router.push({
          name: "userprofile",
          params: {
            userId: userId,
          }
        });
      } else {
        router.push({
          name: "login",
          params: {

          }
        });
      }
    }

    return {
      users,
      open_user_profile,
    }
  }
}
</script>

<style scoped>
img {
  border-radius: 50%;
}

.username {
  font-weight: bold;
  height: 50%;
}

.follow-count {
  font-size: 12px;
  color: gray;
  height: 50%;
}

.card {
  margin-bottom: 20px;
  cursor: pointer;
}

.card:hover {
  box-shadow: 2px 2px 10px lightgray;
  transition: 500ms;
}
</style>
