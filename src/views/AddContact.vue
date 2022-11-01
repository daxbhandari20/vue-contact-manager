<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">Add Contact</p>
                <p class="fst-italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ipsum harum
                    exercitationem corporis error. Dolores porro labore impedit libero nobis accusamus odit. Ratione,
                    provident tenetur laborum qui distinctio eum assumenda.</p>

            </div>
        </div>
    </div>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-4">
                <form @submit.prevent="submitCreate()">
                    <div class="mb-2">
                        <input type="text" v-model="contact.name" class="form-control" placeholder="Name" required>
                    </div>
                    <div class="mb-2">
                        <input type="text" v-model="contact.photo" class="form-control" placeholder="Photo URL"
                            required>
                    </div>
                    <div class="mb-2">
                        <input type="email" v-model="contact.email" class="form-control" placeholder="Email" required>
                    </div>
                    <div class="mb-2">
                        <input type="number" v-model="contact.mobile" class="form-control" placeholder="Mobile"
                            required>
                    </div>
                    <div class="mb-2">
                        <input type="text" v-model="contact.company" class="form-control" placeholder="Company"
                            required>
                    </div>
                    <div class="mb-2">
                        <input type="text" v-model="contact.title" class="form-control" placeholder="Title" required>
                    </div>
                    <div class="mb-2">
                        <select class="form-control" v-model="contact.groupId">
                            <option value="">Select Group</option>
                            <option :value="group.id" v-for="group of groups" :key="group.id">{{ group.name }}</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <input type="submit" value="Create" class="btn btn-success">
                    </div>
                </form>
            </div>
            <div class="col-md-4">
                <img :src="contact.photo" alt="Please Insert Photo URL" class="contact-img">
            </div>
        </div>

    </div>
</template>

<script>
import { ContactService } from '@/services/ContactService'
export default {
    name: "AddContact",
    data: function () {
        return {
            contact: {
                name: '',
                photo: '',
                email: '',
                mobile: '',
                company: '',
                title: '',
                groupId: ''
            },
            groups: []
        }
    },
    created: async function () {
        try {
            let response = await ContactService.getAllGroups();
            this.groups = response.data;
        } catch (error) {
            console.log('error ===========', error);
        }
    },
    methods: {
        submitCreate: async function () {
            try {
                let response = await ContactService.createContact(this.contact);
                if (response) {
                    return this.$router.push('/');
                } else {
                    return this.$router.push('/contact/add');
                }
            } catch (error) {
                console.log('Error =======', error);
            }
        }
    }
}
</script>

<style>

</style>