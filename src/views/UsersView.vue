<template>
  <v-card v-for="user in users.results" :key="user.id">
    <v-card-title primary-title>
      <div>
        <a
          ><h3 class="headline mb-0">{{ user.name }}</h3></a
        >
        <div>description</div>
      </div>
    </v-card-title>
    <v-avatar size="100PX" color="red">
      <img :src="user.image" :alt="user.name" />
    </v-avatar>
  </v-card>
</template>

<script lang="ts">
import { UsersService } from "@/client";
import { Paging_User_ as Users } from "@/client/models/Paging_User_";
import { Vue } from "vue-class-component";

export default class UsersController extends Vue {
  users: Users = { results: [], count: 0 };

  getUsers() {
    UsersService.readUsersV1UsersGet().then((value) => {
      this.users = value;
    });
  }

  created() {
    this.getUsers();
  }
}
</script>
