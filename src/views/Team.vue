<template>
    <div class="team">
        <h1 class="subtitle-1 grey--text">Team</h1>
        
        <v-container class="my-5">
            <v-row wrap>
                <v-col cols="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
                    <v-card flat class="text-center">
                        <v-responsive class="pt-4">
                            <v-avatar color="success" size="100">
                                <span class="white--text headline">{{ person.brev }}</span>
                            </v-avatar>
                        </v-responsive>
                        <v-card-text>
                            <div class="subtitle-1">{{ person.name }}</div>
                            <div class="grey--text">{{ person.role }}</div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn text color="grey">
                                <v-icon small left>mdi-message</v-icon>
                                <span>Message</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "Team",
    data () {
        return {
            team: [
                { name: 'The Net Ninja', role: 'Web developer', brev: 'NN' },
                { name: 'Ryu', role: 'Graphic designer', brev: 'Ry' },
                { name: 'Chun Li', role: 'Web developer', brev: 'CL' },
                { name: 'Gouken', role: 'Social media maverick', brev: 'Go' },
                { name: 'Yoshi', role: 'Sales guru', brev: 'Yo' }
            ]
        }
    }
};
</script>
