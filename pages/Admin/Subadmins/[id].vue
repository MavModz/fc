<template>

    <div class="row">

        <div v-if="subadminData" class="col-sm-12">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <div class="row">
                            <div class="col">
                                <Avatar :image="subadminData.user_id.profile_image" class="mr-2" size="xlarge"
                                    shape="circle" />
                            </div>
                            <div class="col">
                                <span class="mb-1">{{ subadminData.user_id.name }}</span>
                            </div>
                        </div>
                        <div>
                            <div class="col-sm-2">
                                <FormKit type=select :options="['Subadmin Role']"
                                    style="width: 250px;padding-left: 30px;" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-sm-12 mt-3" v-if="subadminData">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between">
                        <h3>My Business</h3>
                        <div>
                            <InputSwitch v-model="checked" class="mt-2" />
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Access Name</th>
                                <th scope="col">View </th>
                                <th scope="col">Create </th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Gallery Image</td>
                                <td>
                                    <InputSwitch v-model="subadminData.gallery.image.view" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.gallery.image.add" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.gallery.image.edit" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.gallery.image.delete" class="mt-2" />
                                </td>
                            </tr>
                            <tr>
                                <td>Gallery Video</td>
                                <td>
                                    <InputSwitch v-model="subadminData.gallery.video.view" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.gallery.video.add" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.gallery.video.edit" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.gallery.video.delete" class="mt-2" />
                                </td>
                            </tr>
                            <tr>
                                <td>Testimonials</td>
                                <td>
                                    <InputSwitch v-model="subadminData.achievers.view" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.achievers.add" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.achievers.edit" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.achievers.delete" class="mt-2" />
                                </td>
                            </tr>
                            <tr>
                                <td>Blogs</td>
                                <td>
                                    <InputSwitch v-model="subadminData.blogs.view" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.blogs.add" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.blogs.edit" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.blogs.delete" class="mt-2" />
                                </td>
                            </tr>
                            <tr>
                                <td>Events</td>
                                <td>
                                    <InputSwitch v-model="subadminData.events.view" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.events.add" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.events.edit" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.events.delete" class="mt-2" />
                                </td>
                            </tr>
                            <tr>
                                <td>Agreement</td>
                                <td>
                                    <InputSwitch v-model="subadminData.agreement.view" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.agreement.add" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.agreement.edit" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.agreement.delete" class="mt-2" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="col-sm-12 mt-3" v-if="subadminData">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between">
                        <h3>CRM</h3>
                        <div>
                            <InputSwitch v-model="checked" class="mt-2" />
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Access Name</th>
                                <th scope="col">View </th>
                                <th scope="col">Create </th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Leads</td>
                                <td>
                                    <InputSwitch v-model="subadminData.leads.view" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.leads.add" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.leads.edit" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.leads.delete" class="mt-2" />
                                </td>
                            </tr>
                            <tr>
                                <td>Leads Documents</td>
                                <td>
                                    <InputSwitch v-model="subadminData.leads.documents.view" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.leads.documents.add" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.leads.documents.edit" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.leads.documents.delete" class="mt-2" />
                                </td>
                            </tr>
                            <tr>
                                <td>Leads Recommendation</td>
                                <td>
                                    <InputSwitch v-model="subadminData.leads.recommendation.view" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.leads.recommendation.add" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.leads.recommendation.edit" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.leads.recommendation.delete" class="mt-2" />
                                </td>
                            </tr>
                            <tr>
                                <td>Leads Appointment</td>
                                <td>
                                    <InputSwitch v-model="subadminData.leads.appointment.view" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.leads.appointment.add" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.leads.appointment.edit" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.leads.appointment.delete" class="mt-2" />
                                </td>
                            </tr>
                            <tr>
                                <td>Leads Agreements</td>
                                <td>
                                    <InputSwitch v-model="subadminData.leads.agreements.view" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.leads.agreements.add" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.leads.agreements.edit" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.leads.agreements.delete" class="mt-2" />
                                </td>
                            </tr>
                            <tr>
                                <td>Leads Comments</td>
                                <td>
                                    <InputSwitch v-model="subadminData.leads.comments.view" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.leads.comments.add" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.leads.comments.edit" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.leads.comments.delete" class="mt-2" />
                                </td>
                            </tr>
                            <tr>
                                <td>Leads Logs</td>
                                <td>
                                    <InputSwitch v-model="subadminData.leads.logs.view" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.leads.logs.add" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.leads.logs.edit" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.leads.logs.delete" class="mt-2" />
                                </td>
                            </tr>

                            <tr>
                                <td>Customer</td>
                                <td>
                                    <InputSwitch v-model="subadminData.customer.view" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.customer.add" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.customer.edit" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.customer.delete" class="mt-2" />
                                </td>
                            </tr>

                            <tr>
                                <td>Customers Documents</td>
                                <td>
                                    <InputSwitch v-model="subadminData.customer.documents.view" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.customer.documents.add" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.customer.documents.edit" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.customer.documents.delete" class="mt-2" />
                                </td>
                            </tr>
                            <tr>
                                <td>Customers Recommendation</td>
                                <td>
                                    <InputSwitch v-model="subadminData.customer.recommendation.view" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.customer.recommendation.add" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.customer.recommendation.edit" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.customer.recommendation.delete" class="mt-2" />
                                </td>
                            </tr>
                            <tr>
                                <td>Customers Appointment</td>
                                <td>
                                    <InputSwitch v-model="subadminData.customer.appointment.view" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.customer.appointment.add" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.customer.appointment.edit" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.customer.appointment.delete" class="mt-2" />
                                </td>
                            </tr>
                            <tr>
                                <td>Customers Agreements</td>
                                <td>
                                    <InputSwitch v-model="subadminData.customer.agreements.view" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.customer.agreements.add" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.customer.agreements.edit" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.customer.agreements.delete" class="mt-2" />
                                </td>
                            </tr>
                            <tr>
                                <td>Customers Comments</td>
                                <td>
                                    <InputSwitch v-model="subadminData.customer.comments.view" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.customer.comments.add" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.customer.comments.edit" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.customer.comments.delete" class="mt-2" />
                                </td>
                            </tr>
                            <tr>
                                <td>Customers Logs</td>
                                <td>
                                    <InputSwitch v-model="subadminData.customer.logs.view" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.customer.logs.add" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.customer.logs.edit" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.customer.logs.delete" class="mt-2" />
                                </td>
                            </tr>

                            <tr>
                                <td>Payments</td>
                                <td>
                                    <InputSwitch v-model="subadminData.payments.view" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.payments.add" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.payments.edit" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.payments.delete" class="mt-2" />
                                </td>
                            </tr>
                            <tr>
                                <td>Forms</td>
                                <td>
                                    <InputSwitch v-model="subadminData.forms.view" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.forms.add" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.forms.edit" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.forms.delete" class="mt-2" />
                                </td>
                            </tr>
                            <tr>
                                <td>Todos</td>
                                <td>
                                    <InputSwitch v-model="subadminData.todos.view" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.todos.add" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.todos.edit" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.todos.delete" class="mt-2" />
                                </td>
                            </tr>
                            <tr>
                                <td>Pipeline</td>
                                <td>
                                    <InputSwitch v-model="subadminData.pipeline.view" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.pipeline.add" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.pipeline.edit" class="mt-2" />
                                </td>
                                <td>
                                    <InputSwitch v-model="subadminData.pipeline.delete" class="mt-2" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <center>
            <button class="btn btn-primary mt-4" @click="update">Update Permissions</button>
        </center>
    </div>

</template>

<script>
definePageMeta({
    layout: 'admin',
    middleware: ['admincrm'],
})

export default {
    data() {
        return {
            checked: false,
            subadminData: null,
            loading: false
        }
    },
    async mounted() {
        activateMenu('settings', 'Subadmins',true);
        this.init()
    },
    methods: {
        async init() {
            this.loading = true
            await adminGet(`/admin-subadmins/${this.$route.params.id}`).then((response) => {
                this.subadminData = response.data.emp;
            });
            this.loading = false
        },
        async update() {
            this.loading = true
            await adminPut(`/admin-subadmins/${this.$route.params.id}`, this.subadminData).then((response) => {
                useNuxtApp().$makeSubadminreload(this.subadminData.user_id._id);
                successAlert("Subadmin Updated")
            });
            this.loading = false
        }
    }

}
</script>

<style scoped>
@import url('style.css');
</style>