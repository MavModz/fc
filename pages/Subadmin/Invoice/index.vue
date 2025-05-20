<template>
    <section class="user-details">
        <div v-if="visible" class="loader-overlay">
            <div class="loader">
                <ProgressSpinner />
            </div>
        </div>
        <div class="languages pb-[25px]">
            <div class="gallery-media-action">
                <div class="gallery-action">
                    <div class="search-container">
                        <img src="/img/svg/search-icon.svg" />&nbsp;&nbsp;
                        <input type="text" placeholder="Search..." v-model="searchQuery" @input="searchbylisting" />
                    </div>
                    <div class="search-invoice-filter">
                        <div :class="{ active: activeFilter === 'All' }" @click="setActiveFilter('All')">
                            <p>All</p>
                        </div>
                        <div :class="{ active: activeFilter === 'EMI' }" @click="setActiveFilter('EMI')">
                            <p>EMI</p>
                        </div>
                        <div :class="{ active: activeFilter === 'Full Payment' }"
                            @click="setActiveFilter('Full Payment')">
                            <p>Full Payment</p>
                        </div>
                    </div>

                </div>
                <div class="admin-invoice-generate-invoice">
                    <button @click="sendaddpayment('abc')">+ Generate Invoice</button>
                </div>
            </div>
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Category</th>
                            <th>Listing</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr v-for="i in invoice_list">
                            <td>
                                <span class="recommend-user-tavle-side">
                                    {{ i.shipping.name }}
                                </span>
                            </td>
                            <td>
                                <div class="details d-flex align-items-center flex-wrap gap-2">

                                    <span>{{ i.service }}</span>
                                </div>
                            </td>
                            <td>
                                <span>{{ i.service_listing?.title }}</span>

                            </td>
                            <td>
                                <span>{{ i.total_amount }}</span>{{ }}
                                <span class="payment-full"v-if="i.emi.length == 0">full</span>
                                <span class="payment-emi"v-if="i.emi.length > 0"> {{ getPaidEmiCount(i.emi) }} /{{ i.emi.length }}</span>
                            </td>
                            <td>
                                {{ DateFormat(i.created_at).month }}
                                {{ DateFormat(i.created_at).day }},
                                {{ DateFormat(i.created_at).year }}
                            </td>
                            <td>
                                <span>{{ i.payment_status }}</span>
                            </td>
                            <td>
                                <!-- <div class="btn-group">
                                    <span class="td-btn">
                                        <NuxtLink :to="`/subadmin/invoice/component/fullpayment/abcdef`">
                                            <img src="/img/svg/eye.svg" alt="" style="width: -webkit-fill-available" />
                                        </NuxtLink>


                                    </span>
                                </div> -->
                                <div class="btn-align-center split-custom-class-recommendation">
                                    <SplitButton class="leads-customopen-drpp-recommendation" :model="getItems(i)">
                                    </SplitButton>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    </section>



</template>

<script>



definePageMeta({ layout: 'subadmin', middleware: ['subadmin'] });

export default {
    data() {
        return {
            loading: false,
            suggestion: null,
            searchQuery: "",
            activeFilter: "All",
            invoice_list: [],
            items: [
                {
                    label: 'View Invoice',
                    command: (e) => { this.viewInvoice(e.i) }
                },
                {
                    label: 'Download Invoice',
                    command: (e) => { this.downloadInvoice(e.i) }
                },
                // {
                //     label: 'Send Reminder',
                //     command: (e) => {
                //     }
                // },
                {
                    label: 'Edit Invoice', command: (e) => {

                        this.$router.push({
                            path: `/subadmin/payments/${e.i._id}/update`,

                        });
                    }
                },
                {
                    label: 'Delete Invoice',
                    command: (e) => { this.delInvoice(e.i) }
                },

            ],
            visible: false,
        };
    },
    async setup() {
        const data = (await useFetch('/api/users/admin')).data.value;
        return { data }
    },
    async mounted() {
        activateMenu('admin-invoices', 'Invoice');
        await this.init();

    },

    methods: {
        getItems(i) {
            return this.items.map(item => ({
                ...item,
                command: () => item.command({ i })
            }));
        },
        getPaidEmiCount(emiArray) {

            return emiArray.filter(emi => emi.status === "paid").length;
        },

        async init() {
            try {
                const response = await adminGet("/admin-invoice-list-all"); // Make the API call
                if (response.data.status) {
                    this.invoice_list = response.data.data; // Set the response data to invoice_list
                } else {
                    console.error("Failed to fetch invoices:", response.data.message);
                }
            } catch (error) {
                console.error("Error fetching invoices:", error);
            }
        },
        sendaddpayment(id) {
            const routePath = `/subadmin/payments/${id}/new`;
            this.$router.push(routePath);

        },
        async setActiveFilter(filter) {
            this.activeFilter = filter;
            if (this.activeFilter === "All") {
                await this.init()
            }
            if (this.activeFilter === "EMI") {
                await this.init()
                this.invoice_list = this.invoice_list.filter(e => e.emi.length > 0)
            }
            if (this.activeFilter === "Full Payment") {
                await this.init()
                this.invoice_list = this.invoice_list.filter(e => e.emi.length <= 0)
            }

        },

        async searchbylisting() {
            this.loading = true;
            await adminGet(`/search-admin-invoice-list-all?name=${encodeURIComponent(this.searchQuery)}`).then(
                (response) => {
                    if (response.status) {
                        this.invoice_list = response.data.data
                    }
                },
            );
            this.loading = false;
        },

        async delInvoice(i) {
            if (i.payment_status == "paid") {
                if (await askConfirm('This invoice cannot be deleted as the Invoice has already been paid within the system.')) {

                    this.init()
                }
            }
            if (i.payment_status == "unpaid") {
                if (await deleteConfirm('Are you sure you want to delete this invoice.')) {
                    await adminDelete(`/delete-invoice/${i._id}`).then(r => { })
                    successAlert('Invoice Deleted');
                    this.init()
                }

            }
        },

        async downloadInvoice(i) {
            if (i.emi.length == 0) {
                this.downloadFull(i._id)
            } else {
                this.downloadEmiFull(i._id)
            }
        },
        async viewInvoice(i) {
            if (i.emi.length == 0) {
                this.$router.push({
                    path: `/subadmin/invoice/component/fullpayment/${i._id}`,

                });
            } else {
                this.$router.push({
                    path: `/subadmin/invoice/component/emi/${i._id}`,

                });
            }
        },

        async downloadFull(id) {
            this.visible = true;
            try {
                const response = await fetch(`/api/pdf?url=https://api.findandconsult.com/invoicepdf/full/${id}`);

                if (response.ok) {
                    const blob = await response.blob();
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(blob);
                    link.download = 'page.pdf'; // Specify the file name
                    link.click(); // Trigger the download
                    this.loading = false
                } else {
                    console.error('Error generating PDF:', response.statusText);
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                this.visible = false;
            }
        },
        async downloadEmiFull(id) {
            try {
                const response = await fetch(`/api/pdf?url=https://api.findandconsult.com/invoicepdf/emifull/${id}`);
                if (response.ok) {
                    const blob = await response.blob();
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(blob);
                    link.download = 'page.pdf'; // Specify the file name
                    link.click(); // Trigger the download
                } else {
                    console.error('Error generating PDF:', response.statusText);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        },

    },

}
</script>

<style scoped>
@import url('style.css');

.loader-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    /* Ensure it appears on top */
}

.loader {

    border-radius: 50%;
    width: 40px;
    height: 40px;

}
</style>