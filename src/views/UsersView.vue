<template>
  <v-card v-for="user in users.results" :key="user.id">
    <v-card-media :src="user.image" height="200px"> </v-card-media>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ user.name }}</h3>
        <div>{{ user.email }}</div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat color="primary">text</v-btn>
      <v-btn flat color="primary">text</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { UsersService } from "@/client";
import { Paging_User_ as Users } from "@/client/models/Paging_User_";

export default {
  data() {
    return {
      users: {} as Users,
    };
  },

  methods: {
    getUsers() {
      UsersService.readUsersV1UsersGet().then((value) => {
        this.users = value;
      });
    },
  },

  created() {
    this.getUsers();
  },
};
</script>
