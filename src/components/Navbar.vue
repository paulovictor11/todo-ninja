<template>
    <nav>
        <v-snackbar v-model="snackbar" :timeout="4000" color="success">
            <span>Awesome! You added a new project.</span>
            <template v-slot:action="{ attrs }">
                <v-btn text color="white" v-bind="attrs" @click="snackbar = false">Close</v-btn>
            </template>
        </v-snackbar>

        <v-app-bar flat app>
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>Ninja</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-menu offset-y>
                <template v-slot:activator="{on}">
                    <v-btn text color="grey" v-on="on">
                        <v-icon left>mdi-chevron-down</v-icon>
                        <span>Menu</span>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-btn text color="grey">
                <span>Sign Out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" class="primary">
            <v-row justify="center" class="mt-10">
                <v-col cols="6">
                    <v-avatar size="100" color="success">
                        <span class="white--text headline">PV</span>
                    </v-avatar>
                    <p class="white--text subtitle-1 mt-1">Paulo Victor</p>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="9">
                    <popup @projectAdded="snackbar = true" />
                </v-col>
            </v-row>

            <v-list>
                <v-list-item v-for="(link, index) in links" :key="index" router :to="link.route">
                    <v-list-item-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
    import Popup from './Popup';

    export default {
        components: {
            Popup
        },
        data () {
            return {
                drawer: false,
                links: [
                    { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
                    { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
                    { icon: 'mdi-account', text: 'Team', route: '/team' },
                ],
                snackbar: false
            }
        }
    }
</script>