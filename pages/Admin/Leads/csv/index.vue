<template>
    <div class="card">
        <DataTable :value="data" tableStyle="min-width: 50rem">

            <template #header>
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <span class="text-xl text-900 font-bold">CSV List</span>
                    <span class="text-xl  upload-csv-button cursor-pointer" @click="addSidebar = true">Upload Csv</span>
                </div>
            </template>

            <Column field="filename" header="File Name"></Column>
            <Column field="total_rows" header="Total Rows"></Column>
            <Column field="inserted_rows" header="Inserted Rows"></Column>
            <Column field="failed_rows" header="Failed Rows"></Column>
            <Column field="uploaded_at" header="Uploaded At"></Column>
            <Column header="Action">
                <template #body="{ data }">
                    <div class="btn-align-center split-custom-class">
                        <button @click="showData(data._id)">Get Details</button>
                    </div>
                </template>
            </Column>

        </DataTable>
    </div>

    <Sidebar v-model:visible="addSidebar" position="right" class="w-25 md:w-20rem lg:w-30rem"
        title="CSV Upload Status">
        <div class="upload-container">
            <div class="first-section">
            <h2>Upload Csv</h2>
        <label for="doc-title">Download sample</label>
        <button  @click="jsonToCsv(defaultSample)" class="sample-download-button">Download Sample</button>
        
        <!-- <div class="upload-box" onclick="document.getElementById('file-input').click()"> -->
               <label class="custom-upload">
            <input class="upload-box" type="file" accept=".csv" @change="handleFileUpload" hidden />
            <img src="/img/svg/upload-doc.svg" alt="upload-icon"/>
            <b><p> Upload Document</p></b>
        </label>
        <!-- <p v-if="fileName" class="file-name">Selected File: {{ fileName }}</p> -->
            <!-- <input type="file" id="file-input" accept=".csv" @change="handleFileUpload" style="display: none;"> -->
      
        <p>Allowed File Type: Csv Only</p>
        </div>
        
    </div>

<!-- 
        <br>
        <br>

        <button @click="jsonToCsv(defaultSample)">Download Sample Template</button>

        <br>
        <br>
        <br>

        <input type="file" accept=".csv" @change="handleFileUpload" title="Upload Csv" /> -->

    </Sidebar>

    <Sidebar v-model:visible="upoadSidebar"  position="right" class="w-25 md:w-20rem lg:w-30rem"
        title="CSV Upload Status">
        <div class="upload-container">
            <div class="first-section">
                <h2>Upload Summary</h2>
       
<!-- 
        <br>
        <br>

        <br>
        <br>
        <br>


        Upload Sumary -->

        <Accordion :activeIndex="0">
            <AccordionTab  class="accordion-heading" header="Header I">
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <span class="accordion-text">Status</span>
                    <span class="accordion-text">Success</span>
                </div>
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <span class="accordion-text">Total Uploaded Records</span>
                    <span class="accordion-text">{{ this.csvData.total_rows }}</span>
                </div>
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <span class="accordion-text">Success Count</span>
                    <span class="accordion-text">{{ this.csvData.inserted_rows }}</span>

                </div>
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <span class="accordion-text">Failed Count</span>
                    <span class="accordion-text">{{ this.csvData.failed_rows }}</span>

                </div>
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <span class="accordion-text">Uploaded On</span>
                    <span class="accordion-text">{{ this.csvData.uploaded_at.split("T")[0] }}</span>
                </div>
                <br>
                <!-- <button @click="jsonToCsv(this.csvData.csv_data)">Download Uploaded Csv</button> -->
            </AccordionTab>
        </Accordion>
</div>
        <div class="buttons">
            <button @click="upoadSidebar = false" class="button go-back">Go back</button>
            <!-- <button class="button upload">Upload</button> -->
            <button class="button upload" @click="jsonToCsv(this.csvData.csv_data)">Download Csv</button>
        </div>
        
        </div>
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


<style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f8f9fa;
        }
        .p-accordion-header-text{
font-size: 20px;
        }
        .upload-container {
            background: white;
            padding:48px  20px;
            text-align: left;
           display: flex;
           flex-direction: column;
           justify-content: space-between;
           height: 100vh;
        }
        .accordion-text{
            font-size: 18px;
            line-height: 35px; 
        }
      
        p{
           color:#64748B;
            font-size: 17px;
        }
        .first-section h2 {
            font-size: 30px;
            font-weight: 700;
            color:#1F1B2D;
            margin-bottom: 30px;
        }
        label{
            width:100%;
            font-size: 21px;
             font-weight: 500;
          color: #0F172A;
        }
        .input-box {
            margin-top: 7px;
            width: 100%;
            margin-bottom: 60px;
        }
        input[type=text]{
            padding: 20px; 
            background-color: #F1F5F966;
            color:#64748B;
            border-radius: 15px;
            border: 1.5px solid #CBD5E1;  
        }
        input[type="text"]:focus {
            border-color: #ff5c5c;}
      
.custom-upload p{
    font-size: 18px;
    margin: 0px;
color: #FF5757;
letter-spacing: 0.2px;
line-height: 25px;
}
      
        .buttons {
            display: flex;
            justify-content: space-between;
        }
        .button {
            padding:4%;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            width:44%;
        }
        .go-back {
            background-color: #f1f1f1;
        }
        .custom-upload {
    gap: 11px;
    border: 2px dashed #FF5757;
            padding: 30px;
            margin-bottom: 10px;
            cursor: pointer;
            flex-direction: column;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 17px;
            background-color: #FE61611A;
}

.custom-upload input {
    width: 280px;
    /* display: none; */
}

        .upload {
            background-color: #ff5757;
            color: white;
            border: 1px solid #ff5757;
        }
        .upload:hover,  .upload-csv-button:hover , .sample-download-button:hover {
            background-color: #ffffff;
            color: #ff5757;
        }
        .upload-csv-button, .sample-download-button{
            background-color: #ff5757;
            color: white;
            border: 1px solid #ff5757;
            padding: 12px 18px;
            border-radius: 5px;
            font-weight: 500px;
        }
        .sample-download-button{
            margin: 18px 0px 50px;
            width:100%;
            background-color: #ff5757;
            color: white;
            border: 1px solid #ff5757;
            padding: 15px 18px;
            border-radius: 5px;
            font-weight: 500px;
            font-size: 18px;
            font-weight: 600;
        }
    </style>
