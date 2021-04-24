<template>
    <v-container>
        <v-card>
            <v-card-title>
                <div>
                    <div class="headline">
                        {{ data.title }}
                    </div>
                    <v-card-subtitle class="pb-0 grey--text">
                        {{ data.created_at }} by <span class="black--text">{{ data.user }}</span>
                    </v-card-subtitle>
                </div>
                <v-spacer></v-spacer>
                <v-btn color="teal">5 Replies</v-btn>
            </v-card-title>

            <v-card-text v-html="data.body">

            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>

export default {
    props: ['data']
}
</script>


<style>

</style>