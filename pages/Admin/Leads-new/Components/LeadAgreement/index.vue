<template>
    <div class="m-container mt-[32px]">
        <div class="search-wrapper">
            <span class="search-icon"><i class="bi bi-search"></i></span>
            <input type="text" placeholder="Search" />
        </div>

        <div class="card-grid mt-[27px]">
            <!-- Repeat this card as needed -->
            <div class="f-card">
                <div class="card-header d-flex justify-content-between ">
                    <div>
                     <h3>Agreement Name</h3>
                    <p>Sun Immigrations Visa Center</p>
                    <div class="user-info">
                        <span class="icon"><i class="bi bi-person-circle"></i></span>
                        <span>Ramesh Verma</span>
                    </div>
                    </div>
                    <span class="date-tag">12 Jun 2023</span>
                </div>
                <div class="card-footer">
                    <div class="tags">
                        <span class="badge waiting mr-3">Waiting</span>
                        <span class="badge visa">Study Visa</span>
                    </div>
                    <div class="actions">
                        <button class="icon-btn"><i class="bi bi-eye"></i></button>
                        <button class="icon-btn"><i class="bi bi-download"></i></button>
                    </div>
                </div>
            </div>

            <div class="f-card">
                <div class="card-header d-flex justify-content-between ">
                    <div>
                     <h3>Agreement Name</h3>
                    <p>Sun Immigrations Visa Center</p>
                    <div class="user-info">
                        <span class="icon"><i class="bi bi-person-circle"></i></span>
                        <span>Ramesh Verma</span>
                    </div>
                    </div>
                    <span class="date-tag">12 Jun 2023</span>
                </div>
                <div class="card-footer">
                    <div class="tags">
                        <span class="badge mr-3 submitted">Submitted</span>
                        <span class="badge visa">Study Visa</span>
                    </div>
                    <div class="actions">
                        <button class="icon-btn"><i class="bi bi-eye"></i></button>
                        <button class="icon-btn"><i class="bi bi-download"></i></button>
                    </div>
                </div>
            </div>

            <div class="f-card">
                <div class="card-header d-flex justify-content-between ">
                    <div>
                     <h3>Agreement Name</h3>
                    <p>Sun Immigrations Visa Center</p>
                    <div class="user-info">
                        <span class="icon"><i class="bi bi-person-circle"></i></span>
                        <span>Ramesh Verma</span>
                    </div>
                    </div>
                    <span class="date-tag">12 Jun 2023</span>
                </div>
                <div class="card-footer">
                    <div class="tags">
                        <span class="badge mr-3 submitted">Submitted</span>
                        <span class="badge visa">Study Visa</span>
                    </div>
                    <div class="actions">
                        <button class="icon-btn"><i class="bi bi-eye"></i></button>
                        <button class="icon-btn"><i class="bi bi-download"></i></button>
                    </div>
                </div>
            </div>
            <!-- End Card -->
        </div>

        <div class="pagination ">
            <span class="page active">1</span>
            <span class="page">2</span>
            <span class="page">3</span>
            <span class="dots">...</span>
            <span class="page">8</span>
            <span class="arrow"><i class="bi bi-chevron-right"></i></span>
        </div>
    </div>
</template>

<style scoped>
@import url('style.css');
</style>