<template>
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
