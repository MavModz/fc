<template>
    <Sidebar v-model:visible="addDocSidebar" header="Request Document" position="right"
        :style="{ width: '480px', 'overflow': 'hidden scroll' }">
        <p class="header-para">Upload or request documents effortlessly to simplify your agreement process and improve
            customer engagement.</p>
        <FormKit type="form" @submit="submitForm" class="leads-form-style">
            <!-- Radio Buttons -->
            <div class="radio-group">
                <div class="radio-item">
                    <RadioButton inputId="client-doc" v-model="form.document_type" value="Client Document" />
                    <label for="client-doc">Client Document</label>
                </div>
                <div class="radio-item">
                    <RadioButton inputId="process-doc" v-model="form.document_type" value="Process Document" />
                    <label for="process-doc">Process Document</label>
                </div>
            </div>

            <!-- Client Document Fields -->
            <div v-if="form.document_type === 'Client Document'">
                <!-- Show all fields for Client Document -->
                <div class="update-events-1stdrop">
                    <div class="my-6">
                        <label for="title" class="mb-2">Document Title</label>
                        <FormKit validation="required" id="update-event-select" name="Title" v-model="form.name"
                            class="single-lead-cmt-mdlo" type="text" placeholder="-------------------" />
                    </div>
                    <div class="my-6">
                        <label for="document_category" class="mb-2">Document Category</label>
                        <FormKit validation="required" id="update-event-select" name="document category"
                            v-model="form.document_category" class="single-lead-cmt-mdlo" type="select"
                            placeholder="Select Document Category" :options="[
                                'Educational',
                                'Finance',
                                'Residential',
                                'Others',
                            ]" />
                    </div>
                    <div class="my-6">
                        <label for="comment" class="mb-2">Comment</label>
                        <FormKit validation="required" id="update-event-select" name="comment" v-model="form.comment"
                            class="single-lead-cmt-mdlo" type="text" placeholder="-------------------" />
                    </div>
                </div>
            </div>
            <!-- Process Document Fields -->
            <div
                :class="{ 'mt-6': form.document_type === 'Client Document', 'mt-6': form.document_type === 'Process Document' }">
                <!-- Show only Document Title and Upload Document for Process Document -->
                <div
                    :class="{ 'mt-6': form.document_type === 'Client Document', 'mb-0': form.document_type === 'Process Document' }">
                    <label for="title" class="mb-2">Document Title</label>
                    <FormKit validation="required" id="update-event-select" name="Title" v-model="form.name"
                        class="single-lead-cmt-mdlo" type="text" placeholder="-------------------" />
                </div>
            </div>
            <div class="checkbox-card-container flex gap-5 mt-12">
                <!-- Conditionally display these options only for Client Document -->
                <div class="flex gap-3" v-if="form.document_type === 'Client Document'">
                    <!-- Request a Document -->
                    <label class="checkbox-card" :class="{ active: selectedOption === 'Request A Document' }">
                        <input type="radio" name="document-type" value="Request A Document" v-model="selectedOption"
                            class="hidden-radio" />
                        <div class="card-content">
                            <NuxtImg src="/svg-new-img/request-doc.svg" alt="Request Icon" width="30" height="30" />
                            <p>Request A Document</p>
                        </div>
                    </label>

                    <!-- Upload a Document -->
                    <label class="checkbox-card" :class="{ active: selectedOption === 'Upload A Document' }">
                        <input type="radio" name="document-type" value="Upload A Document" v-model="selectedOption"
                            class="hidden-radio" />
                        <div class="card-content">
                            <NuxtImg src="/svg-new-img/upload-doc.svg" alt="Upload Icon" width="30" height="30" />
                            <p>Upload A Document</p>
                        </div>
                    </label>
                </div>
            </div>

            <!-- Upload Document Field -->
            <div v-if="form.document_type === 'Process Document' || (form.document_type === 'Client Document' && selectedOption === 'Upload A Document')"
                class="upload-doc-wrapper"
                :class="{ 'mt-6': form.document_type === 'Client Document', 'mt-0': form.document_type === 'Process Document' }">
                <div
                    :class="{ 'mt-6': form.document_type === 'Client Document', 'mt-0': form.document_type === 'Process Document' }">
                    <label for="upload-doc" class="mb-2">Upload Document</label>
                    <FormKit validation="required" id="update-event-select" name="upload Document" v-model="form.link"
                        class="single-lead-cmt-mdlo" type="file" help="Supported File Type: PDF" accept=".pdf" />
                </div>
            </div>


            <div class="mt-11" style="padding: 20px;">
                <button type="submit" class="btn-red" :disabled="loading">
                    <span v-if="loading" class="spinner-border spinner-border-sm me-2" role="status"></span>
                    Submit
                </button>
            </div>
        </FormKit>
    </Sidebar>
</template>

<script>
import { requestDoc } from '~/utils/libs/services/api';

export default {
    props: {
        client_id: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            loading: false,
            addDocSidebar: false,
            selectedOption: "Request A Document", // Default selection
            form: {
                name: "",
                document_category: "",
                comment: "",
                document_type: "Client Document", // Default selection
                link: "",
            },
        };
    },

    methods: {
        async submitForm() {
            // Add `client_id` to form data
            const formData = {
                ...this.form,
                customer_id: this.client_id,
            };

            if (this.selectedOption === 'Request A Document') {
                delete formData.link;
            }

            // Start loading spinner
            this.loading = true;

            try {
                // Make the API call
                const response = await requestDoc(formData);

                if (response?.status) {
                    successAlert('Document request submitted successfully!');
                    this.addDocSidebar = false,
                        this.resetForm();
                    this.$emit("init")
                } else {
                    errorAlert(response?.msg || 'Failed to submit document request.');
                }
            } catch (error) {
                console.error('Error submitting document request:', error);
                errorAlert('An error occurred. Please try again.');
            } finally {
                // Stop loading spinner
                this.loading = false;
            }
        },

        resetForm() {
            // Reset the form fields after submission
            this.form = {
                name: "",
                document_category: "",
                comment: "",
                document_type: "Client Document",
                link: "",
            };
            this.selectedOption = 'Request A Document'
        },
    },

}

</script>

<style>
@import url('style.css');
</style>