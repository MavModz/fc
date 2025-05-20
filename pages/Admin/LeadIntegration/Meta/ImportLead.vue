<template>
    <Dialog v-model:visible="importModal" modal header="Import Lead" :style="{ 'min-width': '25vw' }"
        :draggable="false">
        <FormKit type="form" @submit="submitForm" :value="current">
            <div class="input-field">
                <FormKit label="Import Type" validation="required" type="select" name="type" v-model="selectType"
                    placeholder="select import type" :options="['Standard Import', 'Import With Pipeline']" />

            </div>
            <div v-if="selectType == 'Import With Pipeline'">
                <FormKit label="Select Pipeline to Import" validation="required" type="select" name="pipeline"
                    placeholder="Select Pipeline" :options="allPipeline" @change="setCampaign()"
                    v-model="currentPipe" />
                <FormKit label="Select campaign to Import" validation="required" type="select" name="campaign"
                    placeholder="Select campaign" :options="allCampaign" />
            </div>
            <div class="button-container py-3 justify-content-center">
                <center>
                    <Button type="submit" :loading="loading.i" label="Import" icon="pi pi-save"
                        class="cropper-upload" />
                </center>
            </div>
        </FormKit>
    </Dialog>
</template>

<script>
export default {
    props: {
        page_id: "",
        access_token: ""
    },
    data() {
        return {
            lead_id: null,
            importModal: false,
            current: null,
            loading: { i: false },
            selectType: null,
            currentPageData: null,
            allPipelines: [],
            allPipeline: [],
            allCampaign: [],
        }
    },
    async mounted() {
        this.allPipelines = (await adminGet(`/pipelines`)).data.data
        this.allPipeline = this.allPipelines.map(i => ({
            label: i.pipeline_name,
            value: i._id,
        }));
    },
    methods: {
        setCampaign() {
            for (let i = 0; i < this.allPipelines.length; i++) {
                if (this.allPipelines[i]._id == this.currentPipe) {
                    this.allCampaign = this.allPipelines[i].campaigns.map(i => ({
                        label: i.name,
                        value: i._id,
                    }));
                }
            }
        },
        selectPipeline(i) {
            if (i.ads?.data[0]?.leads?.data?.length > 0) {
                this.current = i; this.CompaninModal = false; this.pipelineModal = true
            } else {
                errorAlert("There is no Leads To Import")
            }
        },
        async submitForm(v) {

            this.loading.i = true
            if (this.selectType == 'Import With Pipeline') {
                v.access_token = this.access_token
                v.lead_id = this.lead_id.id
                v.name = this.lead_id.name
                v.account_id = this.page_id
                await adminPost(`/fb-lead-import-pipeline/${v.campaign}`, v)
            } else {
                v.access_token = this.access_token
                v.lead_id = this.lead_id.id
                v.name = this.lead_id.name
                v.account_id = this.page_id
                await adminPost(`/fb-lead-import`, v)
            }
            this.loading.i = false
            this.importModal = false
            successAlert('Lead Imported Successfully');
        },
        async subscribeToLeadgen() {
            // try {
            //     const response = await fetch(
            //         `https://graph.facebook.com/v20.0/${this.currentPageData.access_token}/subscribed_apps`,
            //         {
            //             method: "POST",
            //             headers: {
            //                 "Content-Type": "application/json",
            //             },
            //             body: JSON.stringify({
            //                 subscribed_fields: ["leadgen"],
            //                 access_token: pageAccessToken,
            //             }),
            //         }
            //     );
            //     const data = await response.json();
            //     if (response.ok) {
            //     } else {
            //         console.error(`Failed to subscribe for page ${pageId}:`, data);
            //     }
            // } catch (error) {
            //     console.error("Error subscribing to leadgen:", error);
            // }
        },
    }
}
</script>