<template>
    <div class="card">
        <DataTable :value="data" tableStyle="min-width: 50rem">

            <template #header>
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <span class="text-xl text-900 font-bold">Products</span>
                    <span class="text-xl text-900 font-bold" @click="addSidebar = true">Upload Csv</span>
                </div>
            </template>

            <Column field="filename" header="filename"></Column>
            <Column field="total_rows" header="total_rows"></Column>
            <Column field="inserted_rows" header="inserted_rows"></Column>
            <Column field="failed_rows" header="failed_rows"></Column>
            <Column field="uploaded_at" header="uploaded_at"></Column>
            <Column header="Action">
                <template #body="{ data }">
                    <div class="btn-align-center split-custom-class">
                        <button @click="showData(data._id)">Get Details</button>
                    </div>
                </template>
            </Column>

        </DataTable>
    </div>

    <Sidebar v-model:visible="addSidebar" header="Sidebar" position="right" class="w-25 md:w-20rem lg:w-30rem"
        title="CSV Upload Status">


        <br>
        <br>

        <button @click="jsonToCsv(defaultSample)">Download Sample Template</button>

        <br>
        <br>
        <br>

        <input type="file" accept=".csv" @change="handleFileUpload" title="Upload Csv" />

    </Sidebar>

    <Sidebar v-model:visible="upoadSidebar" header="Sidebar" position="right" class="w-25 md:w-20rem lg:w-30rem"
        title="CSV Upload Status">


        <br>
        <br>

        <br>
        <br>
        <br>


        Upload Sumary

        <Accordion :activeIndex="0">
            <AccordionTab header="Header I">
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <span>Status</span>
                    <span>Success</span>
                </div>
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <span>Total Uploaded Records</span>
                    <span>{{ this.csvData.total_rows }}</span>
                </div>
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <span>Success Count</span>
                    <span>{{ this.csvData.inserted_rows }}</span>

                </div>
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <span>Failed Count</span>
                    <span>{{ this.csvData.failed_rows }}</span>

                </div>
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <span>Uploaded On</span>
                    <span>{{ this.csvData.uploaded_at.split("T")[0] }}</span>
                </div>
                <br>
                <button @click="jsonToCsv(this.csvData.csv_data)">Download Uploaded Csv</button>
            </AccordionTab>
        </Accordion>


    </Sidebar>

</template>


<script>
definePageMeta({ layout: 'admin', middleware: ['admincrm'] });
import Papa from "papaparse";

export default {
    components: {
    },
    data() {
        return {
            data: [],
            csvData: null,
            addSidebar: false,
            upoadSidebar: false,
            csvData: [],
            csvHeaders: [],
            defaultSample: [{
                 "name": "lead name",
                 "email": "lead email",
                 "gender": "Male/Female",
                 "dob": "YYYY-MM-DD",
                 "age": "lead age",
                 "phone": "lead phone",
                 "city": "lead city",
                 "state": "lead state",
                 "country": "lead country",
                 "pincode": "lead pincode",
                 "per_address": "lead permanent address",
                 "corr_address": "lead corrospondence address",
                 "corr_city": "led current city",
                 "corr_state": "lead current state",
                 "corr_pincode": "lead pincode"},
            ]
        };
    },

    async mounted() {
        activateSubmenu('l1', 'All Leads');
        this.initData()
    },
    methods: {
        jsonToCsv(json) {
            const keys = Object.keys(json[0]);
            const csvData = [
                keys.join(','),
                ...json.map(row => keys.map(key => row[key]).join(','))
            ].join('\n');

            const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'data.csv';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        ,
        async showData(i) {
            this.addSidebar = false
            this.csvData = (await adminGet(`/lead-csv/${i}`)).data.data
            this.upoadSidebar = true
        },
        async initData() {
            this.data = (await adminGet(`/lead-csv`)).data.data
        },

        handleFileUpload(event) {
            const file = event.target.files[0];
            if (!file) return;

            if (!file.name.endsWith(".csv")) {
                alert("Invalid file type. Please upload a .csv file.");
                this.csvData = [];
                this.csvHeaders = [];
                return;
            }

            Papa.parse(file, {
                header: true,
                skipEmptyLines: true,
                complete: async (result) => {
                    if (result && result.data.length > 0) {
                        const headers = Object.keys(result.data[0]).filter(
                            (header) => header.trim() !== ""
                        );
                        this.csvHeaders = headers;

                        this.csvData = result.data.map((row) => {
                            const cleanedRow = {};
                            headers.forEach((header) => {
                                cleanedRow[header] = row[header];
                            });
                            return cleanedRow;
                        });

                        let data = {
                            filename: file.name,
                            total_rows: this.csvData.length,
                            csv_header: this.csvHeaders,
                            inserted_rows: 0,
                            failed_rows: 0,
                            csv_data: this.csvData,
                        };
                        const id = (await adminPost(`/lead-csv`, data)).data.id
                        this.showData(id)
                        this.initData()
                    }
                },
                error: (error) => {
                    console.error("Error reading CSV file:", error.message);
                },
            });
        },
    }
};
</script>
