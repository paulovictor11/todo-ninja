<template>
    <v-dialog max-width="600px" v-model="dialog">
        <template v-slot:activator="{ on }">
            <v-btn depressed v-on="on" color="success">Add new project</v-btn>
        </template>
        <v-card>
            <v-card-title>
                <h2>Add a New Project</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
                    <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>

                    <v-menu max-width="290px">
                        <template v-slot:activator="{on}">
                            <v-text-field :value="formattedDate" :rules="inputRules" v-on="on" label="Due date" prepend-icon="mdi-calendar-range"></v-text-field>
                        </template>
                        <v-date-picker no-title v-model="due"></v-date-picker>
                    </v-menu>

                    <v-btn depressed color="success mx-0" @click="submit" :loading="loading">Add Project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    import format from 'date-fns/format/index';
    import { parseISO } from 'date-fns/fp';
    import db from '@/firebase';

    export default {
        data () {
            return {
                title: '',
                content: '',
                due: null,
                inputRules: [
                    v => v.length >= 3 || 'Minimum length is 3 characters'
                ],
                loading: false,
                dialog: false
            }
        },
        methods: {
            submit () {
                if (this.$refs.form.validate()) {
                    // console.log(this.title, this.content)
                    this.loading = true;

                    const project = {
                        title: this.title,
                        content: this.content,
                        due: format(parseISO(this.due), 'do MMM yyyy'),
                        person: 'The Net Ninja',
                        status: 'ongoing'
                    }

                    db.collection('projects').add(project).then(() => {
                        this.loading = false;
                        this.dialog = false;
                        this.$emit('projectAdded')
                    })
                }
            }
        },
        computed: {
            formattedDate () {
                return this.due ? format(parseISO(this.due), 'do MMM yyyy') : ''
            }
        }
    }
</script>