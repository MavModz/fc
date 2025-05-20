    <template>

        <Sidebar v-model:visible="onsiteAppointmentSidebar" modal :header="false" position="right"
            :style="{ 'width': '480px', 'overflow': 'hidden scroll' }">

            <div class="card-header" style="padding: 15px 0px;">
                <div class="d-flex justify-content-between">
                    <div class="col-sm-11">
                        <h3>Onsite Appointment</h3>
                    </div>
                    <div class="col-sm-6">
                        <BootstrapIcon name="x-lg" class="icon1" @click="this.onsiteAppointmentSidebar = false" />
                    </div>
                </div>
            </div>

            <div class="card-body">
                <div class="col-sm-12">
                    <FormKit type="form" @submit="addOnsite">
                        <div class="mt-2">
                            <FormKit type="select" validation="required" name="client" label="Select Client"
                                v-model="client" :options="clients" :disabled="isSelectedClient" />
                        </div>
                        <div class="mt-2">
                            <FormKit type="select" validation="required" name="host" label="Host Name"
                                placeholder="Host" :options="users" />
                        </div>
                        <div class="mt-2">
                            <FormKit type="text" validation="required" name="summary" label="Title" />
                        </div>
                        <div class="col-sm-12 mt-2">
                            <div class="row">
                                <div class="col-sm-6">
                                    <FormKit type="datetime-local" validation="required|date_after" name="st"
                                        :min="new Date().toISOString().slice(0, 16)" label="Start Time" />
                                </div>
                                <div class="col-sm-6">
                                    <FormKit type="datetime-local" validation="required|date_after" name="en"
                                        :min="new Date().toISOString().slice(0, 16)" label="End Time" />
                                </div>
                            </div>
                        </div>

                        <div class="mt-2">
                            <FormKit type="text" label="Location" name="location" />
                        </div>
                        <div class="mt-2">
                            <FormKit type="textarea" validation="required" name="description" label="Meeting Agenda" />
                        </div>

                        <div class="d-flex justify-content-center">
                            <button class="btn btn-primary w-75" style="margin-top: 2rem;margin-bottom: 2rem;"
                                type="submit">Submit</button>
                        </div>
                    </FormKit>
                </div>
            </div>

        </Sidebar>


        <Sidebar v-model:visible="onlineAppointmentSidebar" modal :header="false" position="right"
            :style="{ 'width': '480px', 'overflow': 'hidden scroll' }">

            <div class="card-header" style="padding: 15px 0px;">
                <div class="d-flex justify-content-between">
                    <div class="col-sm-11">
                        <h3>Online Appointment</h3>
                    </div>
                    <div class="col-sm-6">
                        <BootstrapIcon name="x-lg" class="icon1" @click="this.onlineAppointmentSidebar = false" />
                    </div>
                </div>
            </div>

            <div class="card-body">
                <div class="col-sm-12">
                    <FormKit type="form" @submit="addOnline">
                        <div class="mt-2">
                            <FormKit type="select" validation="required" name="client" label="Select Client"
                                v-model="client" :options="clients" :disabled="isSelectedClient" />
                        </div>
                        <div class="mt-2">
                            <FormKit type="select" validation="required" name="host" label="Host Name"
                                placeholder="Host" :options="users" />
                        </div>
                        <div class="mt-2">
                            <FormKit type="text" validation="required" name="summary" label="Title" />
                        </div>
                        <div class="col-sm-12 mt-2">
                            <div class="row">
                                <div class="col-sm-6">
                                    <FormKit type="datetime-local" validation="required|date_after" name="st"
                                        :min="new Date().toISOString().slice(0, 16)" label="Start Time" />
                                </div>
                                <div class="col-sm-6">
                                    <FormKit type="datetime-local" validation="required|date_after" name="en"
                                        :min="new Date().toISOString().slice(0, 16)" label="End Time" />
                                </div>
                            </div>
                        </div>
                        <div class="mt-2">
                            <FormKit type="textarea" validation="required" name="description" label="Meeting Agenda" />
                        </div>

                        <div class="d-flex justify-content-center">
                            <button class="btn btn-primary w-75" style="margin-top: 2rem;margin-bottom: 2rem;"
                                type="submit">Submit</button>
                        </div>
                    </FormKit>
                </div>
            </div>

        </Sidebar>

        <Sidebar v-model:visible="updateAppointmentSidebar" modal :header="false" position="right"
            :style="{ 'width': '480px', 'overflow': 'hidden scroll' }">
            <div class="card-header">
                <div class="d-flex justify-content-between">
                    <div class="col-sm-11">
                        <h3 v-if="updateData.mode == 'online'">Online Appointment</h3>
                        <h3 v-else>Onsite Appointment</h3>
                    </div>
                    <div class="col-sm-6">
                        <BootstrapIcon name="x-lg" class="icon1" @click="this.updateAppointmentSidebar = false" />
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div v-if="updateData" class="col-sm-12">
                    <FormKit type="form" @submit="updateOnline">
                        <div class="mt-2">
                            <FormKit type="select" validation="required" name="host" label="Host Name"
                                placeholder="Host" :options="users"
                                :value="`${updateData.organizer.email}_${updateData.admin_id._id}`" />
                        </div>
                        <div class="mt-2">
                            <FormKit type="text" v-model="updateData.summary" validation="required" name="summary"
                                label="Title" />
                        </div>
                        <div class="col-sm-12 mt-2">
                            <div class="row">
                                <div class="col-sm-6">
                                    <FormKit type="datetime-local" validation="required" name="st"
                                        :min="new Date().toISOString().slice(0, 16)"
                                        v-model="(updateData.start.dateTime).split('.')[0]" label="Start Time" />
                                </div>
                                <div class="col-sm-6">
                                    <FormKit type="datetime-local" validation="required" name="en"
                                        :min="new Date().toISOString().slice(0, 16)"
                                        v-model="(updateData.end.dateTime).split('.')[0]" label="End Time" />
                                </div>
                            </div>
                        </div>
                        <div v-if="updateData.mode == 'offline'" class="mt-2">
                            <FormKit type="text" label="Location" validation="required" name="location"
                                v-model="updateData.location" />
                        </div>
                        <div class="mt-2">
                            <FormKit type="textarea" validation="required" name="description"
                                v-model="updateData.description" label="Meeting Agenda" />
                        </div>

                        <div class="d-flex justify-content-center">
                            <button class="btn btn-primary m-4 w-75" type="submit">Submit</button>
                        </div>
                    </FormKit>
                </div>
            </div>

        </Sidebar>

    </template>

<script>
export default {
    props: {
        selectedClient: {},
        isSelectedClient: { type: Boolean }
    },

    data() {
        return {
            onsiteAppointmentSidebar: false,
            onlineAppointmentSidebar: false,
            updateAppointmentSidebar: false,
            client: this.selectedClient || null,
            users: [],
            clients: [],
            updateData: null,
            admin: null
        }
    },
    async setup() {
        
        const admin = (await useFetch('/api/users/admin')).data.value;
        return { admin };
    },
    async mounted() {

        this.users = (await adminGet(`/all-employe`)).data.emp.map((i) => ({
            label: getSlicedContent(i.user_id.name,30),
            value: `${i.user_id.email}_${i.user_id._id}`,
        }));

        this.clients = (await adminGet(`/all-clients`)).data.client.map((i) => ({
            label: getSlicedContent(i.name,30),
            value: `${i.email}_${i._id}`,
        }))


        if(!this.client && this.clients.length){
            this.client=this.clients[0].value
        }
    },
    methods: {
        async addOnsite(v) {
            v.organizer = { email: v.host.split("_")[0] }
            v.lead_id = v.client.split("_")[1]
            v.admin_id = v.host.split("_")[1]
            v.start = { dateTime: v.st }
            v.end = { dateTime: v.en }
            v.attendees = [{ email: v.client.split("_")[0] }, { email: v.host.split("_")[0] }]
            v.mode = 'offline'
            v.user_email = v.client.split("_")[0]
            v.accept_admin = true

            // adminGet('/admin-google-token').then(async (r) => {
            //     if (r.data.data) {


            this.addData(v)
            //     } else {
            //         if (await askConfirm('No Google Account Linked', 'Google Account', 'Link Now', 'Cancel')) {
            //             // const res = await axios.request({ method: 'get', url: `/api/google` });
            //             // if (res.data.status) {
            //                 await adminPost('/admin-google-signin', res.data.data)
            //                 this.addData(v)
            //             // } else {
            //             //     errorAlert(res.data.msg)
            //             // }
            //         }
            //     }
            // })
            this.onsiteAppointmentSidebar = false;
        },
        async addOnline(v) {
            v.organizer = { email: v.host.split("_")[0] }
            v.lead_id = v.client.split("_")[1]
            v.admin_id = v.host.split("_")[1]
            v.start = { dateTime: v.st }
            v.end = { dateTime: v.en }
            v.attendees = [{ email: v.client.split("_")[0] }, { email: v.host.split("_")[0] }]
            v.mode = 'online'
            v.user_email = v.client.split("_")[0]
            v.accept_admin = true
            v.attendees.push({email:this.admin.user.user.email})

            // adminGet('/admin-google-token').then(async (r) => {

            //     if (r.data.data) {


            this.addData(v)
            // } else {
            //     if (await askConfirm('No Google Account Linked', 'Google Account', 'Link Now', 'Cancel')) {
            //         const res = await axios.request({ method: 'get', url: `/api/google` });
            //         if (res.data.status) {
            //             await adminPost('/admin-google-token', res.data.data)
            //             this.addData(v)
            //         } else {
            //             errorAlert(res.data.msg)
            //         }
            //     }
            // }
            // })
            this.onlineAppointmentSidebar = false
        },
        async addData(v) {
            await adminPost(`/admin-appointment`, v).then((r) => {
                this.$emit("appointmentAdded");
            }).catch((e) => { })
        },
        async updateOnline(v) {
            v.organizer = { email: v.host.split("_")[0] }
            v.admin_id = v.host.split("_")[1]
            v.start = { dateTime: v.st }
            v.end = { dateTime: v.en }
            v.userRequest = false
            v.status = 'rescheduled'
            this.updateAppointmentSidebar = false
            await adminPut(`/admin-appointment/${this.updateData._id}`, v).then((r) => {
                this.$emit("appointmentAdded");
            }).catch((e) => { })
        },
        async update(i) {
            this.updateData = i
            this.updateAppointmentSidebar = true
        },
    }
}
</script>

<style scoped>

</style>