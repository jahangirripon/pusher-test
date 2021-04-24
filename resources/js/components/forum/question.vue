<template>
  <v-card
    class="mx-auto"
  >
      <v-card-title>
          <router-link :to="ripon.path">
              {{ ripon.title }}
          </router-link>
      </v-card-title>

    <v-card-subtitle class="pb-0 grey--text">
      {{ ripon.created_at }} by <span class="black--text">{{ ripon.user }}</span>
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ ripon.body }}</div>
    </v-card-text>

  </v-card>
</template>

<script>

export default  {

    props: ['ripon']

}
</script>


<style>

</style>