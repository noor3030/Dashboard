<template>
<<<<<<< HEAD
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
=======
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    :single-select="true"
    item-key="name"
    show-select
    class="elevation-1"
  >
    <template v-slot:top="{ pagination, options, updateOptions }">
      <v-data-footer
        :pagination="pagination"
        :options="options"
        @update:options="updateOptions"
        items-per-page-text="$vuetify.dataTable.itemsPerPageText"
      />
    </template>
  </v-data-table>
>>>>>>> 64c3de94e86c4b737494187a98c2ea43a3f6eb49
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
