<template>
    <div class="dashboard">
        <h1 class="subtitle-1 grey--text">Dashboard</h1>
        
        <v-container class="my-5">
            <v-row class="mb-3">
                <v-tooltip top>
                    <template v-slot:activator="{on}">
                        <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
                            <v-icon left small>mdi-folder</v-icon>
                            <span class="caption text-lowercase">By project name</span>
                        </v-btn>
                    </template>
                    <span>Sorts projects by name</span>
                </v-tooltip>
                
                <v-tooltip top>
                    <template v-slot:activator="{on}">
                        <v-btn small text color="grey" @click="sortBy('person')" v-on="on">
                            <v-icon left small>mdi-account</v-icon>
                            <span class="caption text-lowercase">By person name</span>
                        </v-btn>
                    </template>
                    <span>Sort projects by person</span>
                </v-tooltip>
            </v-row>

            <v-card flat class="px-3 mt-2" v-for="project in projects" :key="project.title">
                <v-row wrap :class="`pa-3 project ${project.status}`">
                    <v-col cols="12" md="6">
                        <div class="caption grey--text">Project Title</div>
                        <div>{{ project.title }}</div>
                    </v-col>
                    <v-col cols="6" sm="4" md="2">
                        <div class="caption grey--text">Person</div>
                        <div>{{ project.person }}</div>
                    </v-col>
                    <v-col cols="6" sm="4" md="2">
                        <div class="caption grey--text">Due by</div>
                        <div>{{ project.due }}</div>
                    </v-col>
                    <v-col cols="6" sm="4" md="2">
                        <div class="text-right">
                            <v-chip small :class="`${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
                        </div>
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    import db from '@/firebase';

    export default {
        name: "Dashboard",
        data () {
            return {
                projects: []
            }
        },
        methods: {
            sortBy (prop) {
                this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
            }
        },
        created () {
            db.collection('projects').onSnapshot(res => {
                const changes = res.docChanges()

                changes.forEach(change => {
                    if (change.type === 'added') {
                        this.projects.push({
                            ...change.doc.data(),
                            id: change.doc.id
                        })
                    }
                });
            })
        }
    };
</script>

<style scoped>
    .project.complete {
        border-left: 4px solid #3CD1C2;
    }

    .project.ongoing {
        border-left: 4px solid orange;
    }

    .project.overdue {
        border-left: 4px solid tomato;
    }

    .v-chip.v-chip--no-color.theme--light.complete {
        background: #3CD1C2;
    }

    .v-chip.v-chip--no-color.theme--light.ongoing {
        background: #FFAA2C;
    }

    .v-chip.v-chip--no-color.theme--light.overdue {
        background: #F83E70;
    }
</style>
