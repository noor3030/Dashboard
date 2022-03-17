<template>
  <user-card v-for="user in users.results" :user="user" :key="user.id" />
</template>

<script lang="ts">
import { UsersService } from "@/client";
import { Paging_User_ as Users } from "@/client/models/Paging_User_";
import UserCard from "@/components/UserCard.vue";
import increase_brightness from "@/utils/colors";

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
    printItem(item: any): void {
      console.log(item);
    },
    increase_brightness,
  },

  created() {
    this.getUsers();
  },
  components: {
    UserCard,
  },
};
</script>
