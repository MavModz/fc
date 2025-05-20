<template>
    <div class="lead-card">
        <div>
            <div class="lead-header mb-[25px] d-flex align-items-top justify-content-between flex-wrap gap-3">
                <div class="lead-header-left">
                    <div class="d-flex gap-2 align-items-center mr-1">
                        <div class="lead-avatar">
                            <img src="/public/img/png/lead-profile-avatar.png" alt="Lead Avatar" />
                        </div>
                        <div class="lead-info">
                            <div class="lead-name">Lead Name</div>
                            <div class="lead-meta">Created On <span class="lead-meta-date">12 Aug 2022</span></div>
                            <div class="lead-id">#CN • L • 23801</div>
                        </div>
                    </div>
                    <div class="lead-details d-flex align-items-top ml-2">
                        <div class="d-flex align-items-center flex-wrap gap-4">
                            <div class="lead-detail">
                                <span>Phone Number </span>
                                <p>+123 98678 9588 95058</p>
                            </div>
                            <div class="lead-detail ">
                                <span>Lead Source </span>
                                <p>Facebook</p>
                            </div>
                            <div class="lead-detail">
                                <span>Next Follow Up</span>
                                <p>12 Jun 2025</p>
                            </div>
                        </div>
                        <div class="full-width">
                            <div class="duplicate-lead  d-flex align-items-center gap-[5px]"><img
                                    @mouseenter="isShowing = true" @mouseleave="isShowing = false"
                                    src="/public/img/png/alert-vector.png" width="14px"> DUPLICATE
                                LEAD</div>
                            <div v-if="isShowing" class="tooltip-box">
                                This lead has Inquired <strong>{2nd} Time by (Source)</strong> on <span
                                    class="highlight">Date</span>
                                &amp; Assigned to <strong>{User}</strong> &amp; is stored in <strong>{Campaign
                                    Name}</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lead-actions">
                    <div class="select-option">
                        <select class="custom-select cursor-pointer" required>
                            <option>Open Lead / Call Back Later</option>
                        </select>
                    </div>

                    <div class="button-group ">
                        <button class="btn follow-up">
                            <span class="add-icon"><i class="bi bi-plus-circle"></i></span> ADD FOLLOW UP
                        </button>
                        <button class="btn call-cta">
                            <span class="call-icon"><i class="pi pi-phone" style="font-size: 12px"></i></span> Call CTA
                        </button>
                    </div>
                </div>
            </div>
            <div class="horizontal-bar">
            </div>
            <div class="lead-tabs">
                <div class="tab active d-flex align-items-center gap-[8px]"
                    :class="{ active: activeTab === 'overview' }" @click="activeTab = 'overview'"><i
                        class="bi bi-info-circle"></i> Overview
                </div>
                <div class="tab d-flex align-items-center gap-[8px]" :class="{ active: activeTab === 'documents' }"
                    @click="activeTab = 'documents'"><i class="bi bi-file-earmark-text"></i>
                    Documentation</div>
                <div class="tab d-flex align-items-center gap-[8px]" :class="{ active: activeTab === 'recommendation' }"
                    @click="activeTab = 'recommendation'"><i class="bi bi-stars"></i>Recommendation</div>
                <div class="tab d-flex align-items-center gap-[8px]"><i class="bi bi-calendar-month"></i> Appointments
                </div>
                <div class="tab d-flex align-items-center gap-[8px]"> <i class="bi bi-clipboard-minus"></i> Estimate &
                    Invoice</div>
                <div class="tab d-flex align-items-center gap-[8px]" :class="{ active: activeTab === 'agreement' }"
                    @click="activeTab = 'agreement'"> <i class="bi bi-blockquote-left"></i> Aggrement
                </div>
                <div class="tab d-flex align-items-center gap-[8px]" :class="{ active: activeTab === 'comments' }"
                    @click="activeTab = 'comments'"> <i class="bi bi-card-list"></i>Comments</div>
            </div>
        </div>
    </div>
    <div class="info-section  mt-[18px] md:mt-[32px] d-flex gap-[35px]" v-if="activeTab === 'overview'">
        <div class="info-left">
            <div class="info-card ">
                <div class="info-header d-flex align-items-center justify-content-between">
                    <div class="header-title d-flex align-items-center gap-[12px]">
                        <img src="public/img/png/lead-user.png">
                        <span class="info-heade-heading">Personal Information</span>
                    </div>

                    <img @click="isOpen = !isOpen" src="public/img/png/chevron-down.png">
                </div>
                <div class="mid-bar"></div>
                <div v-if="isOpen">
                    <div class="ad-details mt-[46px] mb-3">
                        <p class="mb-[5px] fw-medium">AD Name • Canada Visa with Travel Assistance</p>
                        <small class="text-muted">Source: Facebook | <span> AD ID: 2739485</span></small>
                    </div>

                    <div class="info-row">
                        <div class="info-block">
                            <label>Full Name</label>
                            <p>Frances Cole</p>
                        </div>
                        <div class="info-block">
                            <label>Date Of Birth</label>
                            <p>22 Dec 1989</p>
                        </div>
                        <div class="info-block">
                            <label>Phone Number</label>
                            <p>+91 652637XXXX</p>
                        </div>
                    </div>

                    <div class="mid-bar"></div>
                    <div class="info-row mt-[18px]">
                        <div class="info-block">
                            <label>Email ID</label>
                            <p>Diane68@hotmail.com</p>
                        </div>
                        <div class="info-block">
                            <label>Gender</label>
                            <p>MALE</p>
                        </div>
                        <div class="info-block">
                            <label>Age</label>
                            <p>32</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="info-card mt-[18px] ">
                <div class="info-header d-flex align-items-center justify-content-between">
                    <div class="header-title d-flex align-items-center gap-[12px]">
                        <img src="public/img/png/black-location.png">
                        <span class="info-heade-heading">Address</span>
                    </div>

                    <img @click="isAddressOpen = !isAddressOpen" src="public/img/png/chevron-down.png">
                </div>
                <div class="mid-bar"></div>
                <div v-if="isAddressOpen">
                    <div class="address-card mt-[32px] ">
                        <div class="address-header pb-2">
                            <span>Present Address</span>
                            <img src="public/img/png/encircle-dropdown.png">
                        </div>
                        <div class="mid-bar"></div>
                        <div class="address-section mt-[16px]">
                            <div class="add-label">Address</div>
                            <div class="ex-address">
                                Survey no 111, Singanayakanahalli, Bengaluru, Karnataka 560064
                            </div>
                        </div>
                        <div class="mid-bar"></div>
                        <div class="address-grid">
                            <div>
                                <div class="add-label">Country</div>
                                <div class="ex-address">INDIA</div>
                            </div>
                            <div>
                                <div class="add-label">State</div>
                                <div class="ex-address">Karnataka</div>
                            </div>
                            <div>
                                <div class="add-label">City</div>
                                <div class="ex-address">Bengaluru</div>
                            </div>
                            <div>
                                <div class="add-label">Postal Code</div>
                                <div class="ex-address">560064</div>
                            </div>
                        </div>
                    </div>
                    <div class="address-card mt-[32px] ">
                        <div class="address-header pb-2">
                            <span>Correspondence Address</span>
                            <img src="public/img/png/encircle-dropdown.png">
                        </div>
                        <div class="mid-bar"></div>
                        <div class="address-section mt-[16px]">
                            <div class="add-label">Address</div>
                            <div class="ex-address">
                                Survey no 111, Singanayakanahalli, Bengaluru, Karnataka 560064
                            </div>
                        </div>
                        <div class="mid-bar"></div>
                        <div class="address-grid">
                            <div>
                                <div class="add-label">Country</div>
                                <div class="ex-address">INDIA</div>
                            </div>
                            <div>
                                <div class="add-label">State</div>
                                <div class="ex-address">Karnataka</div>
                            </div>
                            <div>
                                <div class="add-label">City</div>
                                <div class="ex-address">Bengaluru</div>
                            </div>
                            <div>
                                <div class="add-label">Postal Code</div>
                                <div class="ex-address">560064</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="info-card mt-[18px]">
                <div class="info-header d-flex align-items-center justify-content-between">
                    <div class="header-title d-flex align-items-center gap-[12px]">
                        <img src="public/img/png/family-vector.png">
                        <span class="info-heade-heading">Family Details</span>
                    </div>

                    <img @click="isFamilyDetailsOpen = !isFamilyDetailsOpen" src="public/img/png/chevron-down.png">
                </div>
                <div class="mid-bar"></div>
                <div v-if="isFamilyDetailsOpen">

                    <div class="info-row">
                        <div class="info-block">
                            <label> Name</label>
                            <p>Frances Cole</p>
                        </div>
                        <div class="info-block">
                            <label>Relation</label>
                            <p>INDIA</p>
                        </div>
                        <div class="info-block">
                            <label>Phone Number</label>
                            <p>+91 652637XXXX</p>
                        </div>
                    </div>

                    <div class="mid-bar"></div>
                    <div class="info-row mt-[18px]">
                        <div class="info-block">
                            <label>Email ID</label>
                            <p>Diane68@hotmail.com</p>
                        </div>
                        <div class="info-block">
                            <label>Gender</label>
                            <p>MALE</p>
                        </div>
                        <div class="info-block">
                            <label>Occupation</label>
                            <p>Lorem</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="info-card mt-[18px] ">
                <div class="info-header d-flex align-items-center justify-content-between">
                    <div class="header-title d-flex align-items-center gap-[12px]">
                        <img src="public/img/png/education.png">
                        <span class="info-heade-heading">Education Details</span>
                    </div>

                    <img @click="isEducationOpen = !isEducationOpen" src="public/img/png/chevron-down.png">
                </div>
                <div class="mid-bar"></div>
                <div v-if="isEducationOpen">
                    <div class="address-card mt-[32px] ">
                        <div class="address-header pb-2">
                            <span>Primary Education</span>
                            <img src="public/img/png/encircle-dropdown.png">
                        </div>
                        <div class="mid-bar"></div>
                        <div class="address-section mt-[16px]">
                            <div class="add-label">Organization Name</div>
                            <div class="ex-address">
                                Survey no 111, Singanayakanahalli, Bengaluru, Karnataka 560064
                            </div>
                        </div>
                        <div class="mid-bar"></div>
                        <div class="address-grid">
                            <div>
                                <div class="add-label">Board</div>
                                <div class="ex-address">CBSE</div>
                            </div>
                            <div>
                                <div class="add-label">Pursuing</div>
                                <div class="ex-address">Class X</div>
                            </div>
                            <div>
                                <div class="add-label">Stream</div>
                                <div class="ex-address">-------</div>
                            </div>
                            <div>
                                <div class="add-label">Passing Year</div>
                                <div class="ex-address">22 DEC 1999</div>
                            </div>
                            <div>
                                <div class="add-label">Stream</div>
                                <div class="ex-address">------</div>
                            </div>
                            <div>
                                <div class="add-label">Score</div>
                                <div class="ex-address">CBSE</div>
                            </div>
                            <div>
                                <div class="add-label">TYPE</div>
                                <div class="ex-address">Class X</div>
                            </div>
                        </div>
                    </div>
                    <div class="address-card mt-[32px] ">
                        <div class="address-header pb-2">
                            <span>Professional Course</span>
                            <img src="public/img/png/encircle-dropdown.png">
                        </div>
                        <div class="mid-bar"></div>
                        <div class="address-section mt-[16px]">
                            <div class="add-label">Organization Name</div>
                            <div class="ex-address">
                                Survey no 111, Singanayakanahalli, Bengaluru, Karnataka 560064
                            </div>
                        </div>
                        <div class="mid-bar"></div>
                        <div class="education-grid">
                            <div>
                                <div class="add-label">University</div>
                                <div class="ex-address">Indian Institute of Science</div>
                            </div>
                            <div>
                                <div class="add-label">Pursuing</div>
                                <div class="ex-address">Computer Science and Engineering (CSE)</div>
                            </div>
                        </div>
                        <div class="education-1-grid">
                            <div>
                                <div class="add-label">Stream</div>
                                <div class="ex-address">Computer Science</div>
                            </div>
                            <div>
                                <div class="add-label">Passing Year</div>
                                <div class="ex-address">22 DEC 2008</div>
                            </div>
                            <div>
                                <div class="add-label">CGPA / POINTS / Grade</div>
                                <div class="ex-address">------</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="info-right">
            <div class="card-section">
                <div class="dropdown-box rounded-tr-lg rounded-tl-lg">
                    <p class="label d-flex gap-[6px] align-items-center"><img src="/public/img/png/add-user-vector.png">
                        Assigned To</p>
                    <div class="select-option-1">
                        <select class="custom-select-1 cursor-pointer" required>
                            <option>Lead Not Assigned yet</option>
                        </select>
                    </div>
                    <!-- <div class="dropdown-text">
                        Lead Not Assigned Yet
                        <img src="public/img/png/lead-small-dropdown.png">
                    </div> -->
                </div>
                <div class="dropdown-box">
                    <p class="label d-flex gap-[6px] align-items-center"><img src="public/img/png/campaign-vector.png">
                        Campaign</p>
                    <div class="select-option-1">
                        <select class="custom-select-1 cursor-pointer" required>
                            <option> Campaign Name Here</option>
                        </select>
                    </div>
                </div>
                <div class="dropdown-box rounded-br-lg rounded-bl-lg">
                    <p class="label d-flex gap-[6px] align-items-center"><img
                            src="public/img/png/Service-opted-vector.png"> Service Opted</p>
                    <div class="select-option-1">
                        <select class="custom-select-1 cursor-pointer" required>
                            <option> Service Opted Name</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="info-card mt-[18px] ">
                <div class="info-header d-flex align-items-center justify-content-between">
                    <div class="header-title d-flex align-items-center gap-[12px]">
                        <img src="public/img/png/language.png">
                        <span class="info-heade-heading">Language Proficiency</span>
                    </div>
                    <img @click="isLanguageProficiencyOpen = !isLanguageProficiencyOpen"
                        src="public/img/png/chevron-down.png">
                </div>
                <div class="mid-bar"></div>
                <div v-if="isLanguageProficiencyOpen">
                    <div class="mt-[32px] pb-2">
                        <div class="status">
                            <span class="status-dot"></span>
                            <span class="status-text">Pursuing</span>
                        </div>
                        <div class="add-label mt-3">Examination Name</div>
                        <div class="ex-address">Balanced multi-state software</div>
                    </div>
                    <div class="mid-bar"></div>
                    <div class="mt-4 mb-3">
                        <div class="add-label">Examination Name</div>
                        <div class="ex-address">Balanced multi-state software</div>
                    </div>
                    <div>
                        <div class="add-label">Completion Year</div>
                        <div class="ex-address">22 Dec 2012</div>
                    </div>
                    <div class="language-grid mt-[24px]">
                        <div>
                            <div class="add-label">Reading</div>
                            <div class="ex-address">A+</div>
                        </div>
                        <div>
                            <div class="add-label">Listening</div>
                            <div class="ex-address">A+</div>
                        </div>
                        <div>
                            <div class="add-label">Writing</div>
                            <div class="ex-address">A+</div>
                        </div>
                        <div>
                            <div class="add-label">Speaking</div>
                            <div class="ex-address">A+</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="info-card mt-[18px] ">
                <div class="info-header d-flex align-items-center justify-content-between">
                    <div class="header-title d-flex align-items-center gap-[12px]">
                        <img src="public/img/png/Career.png">
                        <span class="info-heade-heading">Career Details</span>
                    </div>
                    <img @click="isCareerDetailsOpen = !isCareerDetailsOpen" src="public/img/png/chevron-down.png">
                </div>
                <div class="mid-bar"></div>
                <div v-if="isCareerDetailsOpen">
                    <div class="mt-[32px] pb-2">
                        <div class="status">
                            <span class="status-dot"></span>
                            <span class="status-text">Pursuing</span>
                        </div>
                        <div class="add-label mt-3">Organization Name</div>
                        <div class="ex-address">Balanced multi-state software</div>
                    </div>
                    <div class=" pb-2">
                        <div class="add-label mt-3">Job Role</div>
                        <div class="ex-address">Full Stack Developer</div>
                    </div>
                    <div class=" pb-2">
                        <div class="add-label mt-3">Starting Year</div>
                        <div class="ex-address">22 Dec 2012</div>
                    </div>
                    <div class="mid-bar"></div>
                    <div class="mt-4 pb-2">
                        <div class="add-label mt-3">Organization Name</div>
                        <div class="ex-address">Balanced multi-state software</div>
                    </div>
                    <div class="pb-2">
                        <div class="add-label mt-3">Job Role</div>
                        <div class="ex-address">Full Stack Developer</div>
                    </div>
                    <div class="language-grid pb-2 ">
                        <div>
                            <div class="add-label mt-3">Starting Year</div>
                            <div class="ex-address">22 Dec 2012</div>
                        </div>
                        <div>
                            <div class="add-label mt-3">Ending Year</div>
                            <div class="ex-address">22 Nov 2015</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="info-card mt-[18px] ">
                <div class="info-header d-flex align-items-center justify-content-between">
                    <div class="header-title d-flex align-items-center gap-[12px]">
                        <img src="public/img/png/Refusal-vector.png">
                        <span class="info-heade-heading">Refusal</span>
                    </div>
                    <img @click="isRefusalOpen = !isRefusalOpen" src="public/img/png/chevron-down.png">
                </div>
                <div class="mid-bar"></div>
                <div v-if="isRefusalOpen">
                    <div class="mt-[32px] pb-2">
                        <div class="language-grid pb-[22px] ">
                            <div>
                                <div class="add-label ">Country</div>
                                <div class="ex-address">INDIA</div>
                            </div>
                            <div>
                                <div class="add-label ">Year</div>
                                <div class="ex-address">2022</div>
                            </div>
                        </div>
                        <div class="pb-[10px]">
                            <div class="add-label">Refusal Note</div>
                            <div class="ex-address">Lorem ipsum dolor sit amet</div>
                        </div>
                        <div class="mid-bar"></div>
                        <div class="language-grid  mt-[30px] pb-[22px] ">
                            <div>
                                <div class="add-label ">Country</div>
                                <div class="ex-address">INDIA</div>
                            </div>
                            <div>
                                <div class="add-label ">Year</div>
                                <div class="ex-address">2022</div>
                            </div>
                        </div>
                        <div>
                            <div class="add-label">Refusal Note</div>
                            <div class="ex-address">Lorem ipsum dolor sit amet</div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
    <div>
        <LeadDocuments v-if="activeTab === 'documents'" />
        <LeadComments v-if="activeTab === 'comments'" />
        <LeadRecommendation v-if="activeTab === 'recommendation'" />
        <LeadAgreement v-if="activeTab === 'agreement'" />
    </div>

    <!-- quick-action-button -->
    <div class="conatiner-open">
        <div v-show="quickActionOpen" class="quick-actions">
            <div class="quick-head">
                <img src="/public/img/png/quick-action.png"> Quick Actions
            </div>
            <div class="action-items">
                <div class="action-item">
                    <div class="inner-item"><img src="/public/img/png/user-image.png">Convert Lead To Customer</div>
                    <img src="/public/img/png/side-arrow.png">
                </div>
                <div class="action-item follow-ups">
                    <div class="inner-item"><img src="/public/img/png/Calendar-img.png">Follow Up's</div> <img
                        src="/public/img/png/side-arrow.png">
                    <span class="badge">8</span>
                </div>
                <div class="action-item">
                    <div class="inner-item"><img src="/public/img/png/Telephone.png"> Call Lead</div> <img
                        src="/public/img/png/side-arrow.png">
                </div>
                <div class="action-item-1">
                    <div class="inner-item"><img src="/public/img/png/logos_whatsapp-icon-small.png">WhatsApp</div> <img
                        src="/public/img/png/side-arrow.png">
                </div>
            </div>
            <div @click="quickActionOpen = false" class="close-btn">&times;</div>
        </div>
        <div class="quick-actions-button" @click="quickActionOpen = true">
            <img src="/public/img/png/quick-action.png"> <span>Quick Actions</span>
        </div>


    </div>
    <!-- footer-popup -->
    <div class="follow-up-card">
        <div class="left-section">
            <div class="icon"><img src="/public/img/png/warning-vector.png"></div>
            <div class="content">
                <div class="date">OCT 15 2024, 03:25 PM</div>
                <div class="note">
                    Follow-Up Note lorem ipsum...
                    <a href="#" class="read-more">read more</a>
                </div>
            </div>
        </div>
        <div class="right-section">
            <button class="btn-outline"><span class="icon"><img src="/public/img/png/clock-vector.png"></span>
                Ignore</button>
            <button class="btn-filled"><span class="icon"><img src="/public/img/png/Double-tick-vector.png"></span>
                Followuped</button>
        </div>
    </div>

    <!-- call-lead  -->
    <div class="call-lead" @click="addSidebar = true">
        <div class="action-items">
            <div class="call-item">
                <div class="inner-item"><img src="/public/img/png/Telephone.png"> Call Lead</div> <img
                    src="/public/img/png/side-arrow.png" class="call-lead-down-arrow">
            </div>
        </div>
    </div>


    <!-- call-lead-first-offcanvas -->

    <Sidebar v-model:visible="addSidebar" position="right"
        class=" w-[90vw] h-[45vh] sm:w-[70vw] sm:h-[45vh] md:w-[45vw] md:h-[40vh] lg:w-[30vw] lg:h-[35vh] xl:w-[17vw] xl:h-[36vh]  border-t-[4px] border-[#18353B] rounded-lg"
        title="CSV Upload Status">
        <div class="call-action-items">
            <div class="call-item">
                <div class="inner-item"><img src="/public/img/png/Telephone.png"> Call Lead</div> <img
                    src="/public/img/png/side-arrow.png">
            </div>
        </div>
        <div class="contact-card">
            <div class="contact-name">Laura Santos</div>
            <div class="contact-phone">
                <i class="pi pi-phone"></i> +91 7090 76 2833
            </div>
        </div>
        <div class="call-action-item-1" @click="addSecondSidebar = true">
            Call Connected<img src="/public/img/png/side-arrow.png">
        </div>
        <div class="call-action-item-1" @click="addThirdSidebar = true">
            Call Not Connected<img src="/public/img/png/side-arrow.png">
        </div>
    </Sidebar>

    <Sidebar v-model:visible="addSecondSidebar" position="right"
        class=" w-[90vw] h-[45vh] sm:w-[70vw] sm:h-[45vh] md:w-[45vw] md:h-[40vh] lg:w-[30vw] lg:h-[35vh] xl:w-[17vw] xl:h-[36vh]  border-t-[4px] border-[#18353B] rounded-lg"
        title="CSV Upload Status">
        <div class="call-action-items">
            <div class="call-item">
                <div class="call-inner-item"><i class="pi pi-phone"></i> Call Connected</div> <img
                    src="/public/img/png/side-arrow.png" class="call-lead-up-arrow">
            </div>
        </div>
        <div class="call-timer-card">
            <div class="timer-display">04 : 76 sec</div>
            <div class="end-call">End Call</div>
        </div>
        <div class="call-action-item-1" @click="addFollowup = true">
            Add Remark<img src="/public/img/png/side-arrow.png">
        </div>
        <div class="call-action-item-1" @click="addFollowup = true">
            Add Followup<img src="/public/img/png/side-arrow.png">
        </div>
    </Sidebar>

    <Sidebar v-model:visible="addThirdSidebar" position="right"
        class=" w-[90vw] h-[45vh] sm:w-[70vw] sm:h-[45vh] md:w-[45vw] md:h-[40vh] lg:w-[30vw] lg:h-[35vh] xl:w-[17vw] xl:h-[36vh] border-t-[4px] border-[#18353B] rounded-lg"
        title="CSV Upload Status">
        <div class="call-action-items pb-3">
            <div class="call-item">
                <div class="call-inner-item"><img src="/public/img/png/call-cut.png"> Call Not Connected</div> <img
                    src="/public/img/png/side-arrow.png" class="call-lead-up-arrow">
            </div>
        </div>
        <div class="call-action-item-1" @click="addFollowup = true">
            Add Remark<img src="/public/img/png/side-arrow.png">
        </div>
        <div class="call-action-item-1" @click="addFollowup = true">
            Add Followup<img src="/public/img/png/side-arrow.png">
        </div>
    </Sidebar>




    <Dialog v-model:visible="addFollowup" modal header="Schedule Follow-Up" class="popup-container"
        :style="{ width: '630px', padding: '2rem 1.5rem' }"
        :breakpoints="{ '2500px': '85vw', '1199px': '55vw', '575px': '98vw' }">
        <div class="form-popup">
            <div class="form-sec">
                <div class="input-group mt-1">
                    <label>Reminder Date & Time <span class="label-fade">(optional)</span></label>
                    <input id="startMonthYear" type="month" class="update-event-dte" />
                </div>
                <div class="input-group">
                    <label>Set Status</label>
                    <div class="select-option">
                        <select class="custom-select cursor-pointer">
                            <option class="cursor-pointer" vlaue="online">In Progress</option>
                            <option class="cursor-pointer" vlaue="online">Online</option>
                            <option class="cursor-pointer" vlaue="offline">Offline</option>
                        </select>
                    </div>
                </div>
                <div class="input-group">
                    <label>Service</label>
                    <div class="select-option">
                        <select class="custom-select cursor-pointer">
                            <option class="cursor-pointer" vlaue="online">---------</option>
                            <option class="cursor-pointer" vlaue="online">Online</option>
                            <option class="cursor-pointer" vlaue="offline">Offline</option>
                        </select>
                    </div>
                </div>
                <div class="input-gp">
                    <div>
                        <label>Follow-Up Note</label>
                    </div>
                    <div class="study-visa-description-block">
                        <QuillEditor class="mb-5" style="height:120px" />
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-between mt-[-12px]">
            <button @click="addFollowup = true" class="btn btn-secondary">
                Go Back</button>
            <button type="submit" class="btn btn-primary">
                Submit<i class="bi bi-chevron-right"></i></button>
        </div>
    </Dialog>


</template>
<script>
definePageMeta({ layout: 'admin', middleware: ['admin'] });
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import LeadDocuments from '../Components/LeadDocuments/LeadDocuments.vue';
import LeadComments from '../Components/LeadComments/index.vue';
import LeadRecommendation from '../Components/LeadRecommendation/index.vue';
import LeadAgreement from '../Components/LeadAgreement/index.vue';
export default {
    components: {
        QuillEditor,
        LeadDocuments,
        LeadComments,
        LeadRecommendation,
        LeadAgreement
    },
    data() {
        return {
            isOpen: true,
            isAddressOpen: false,
            isFamilyDetailsOpen: false,
            isEducationOpen: false,
            isLanguageProficiencyOpen: false,
            isCareerDetailsOpen: false,
            isRefusalOpen: false,
            isShowing: false,
            quickActionOpen: false,
            addSidebar: false,
            addSecondSidebar: false,
            addThirdSidebar: false,
            addFollowup: false,
            activeTab: 'overview'
        }

    },


}
</script>

<style scoped>
@import url('style.css');
</style>