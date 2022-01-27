class DoctorOne extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="container-fluid">
    <div class="row col-12 gy-8" style="background-color: #E4ECED; border-radius: 20px;">
        <div class="col-xxl-4 col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3">
            <img src="../img/doctors/doct-5.svg" style=" padding-left: 15px; padding-top: 30px;" alt="icon of a doctor" />
        </div>
        <div class="col-xxl-8 col-xl-10 col-lg-10 col-md-9 col-sm-9 col-9">
            <h3 style="color: #232E54; padding-top: 20px; padding-left: 15px;">
                Dr. Liba Ellisson  </h3>
            <h4 style="color: #9C9FBE; padding-left: 15px;">
            Psychiatrist, Cracow, Poland</h4>
        </div>

        <!-- End header dr -->
        <!-- rating dr -->

        <div class="row align-items-center">
            <div class="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1">
                <img src="./img/star-icon.svg" class="float-start" style="padding-left: 15px;" alt="icon of a star" />
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                <h4 style="color: #232E54; padding-left: 15px;">4,5</h4>

            </div>
            <div class="col-xxl-7 col-xl-7 col-ls-7 col-md-7 col-sm-7 col-7">
                <h4 style="color: #9C9FBE; ">(187 reviews)</h4>
            </div>
        </div>
        <!-- End rating dr -->
        <!-- time dr -->
        <div class="row align-items-center">
            <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5">
                <h4 style="color: #9C9FBE; padding-left: 15px;">
                    Available
                    data</h4>
            </div>
            <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5">
                <h4 style="color: #9C9FBE; padding-left: 15px;">Time
                </h4>
            </div>
        </div>
        <!-- End time dr -->
        <!-- date dr -->
        <div class="row align-items-center">
            <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5" style="padding-left: 20px;">
                <h4 style="color: #232E54; ">27 Jun 2022</h4>
            </div>
            <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5" style="padding-left: 40px;">
                <h4 style="color: #232E54; padding-left: 15px;">11:00 AM
                </h4>
            </div>
        </div>
        <!-- End date dr -->

        <div class="row" style="margin-bottom: 30px;">
            <div class="col" style="padding: 15px;">
                <button type="button" class="btn btn-outline-dark" style="border-radius: 15px; width: 100%;">
                    <a href="apps-chat.html">
                        <h4>Chat</h4>
                    </a>
                </button>
            </div>
            <div class="col" style="padding: 15px;">
                <button type="button" class="btn btn-outline-dark" style="border-radius: 15px; width: 100%;">
                    <a href="your_treatmen.html">
                        <h4>Appointment</h4>
                    </a>
                </button>
            </div>
        </div>

    </div>
</div>
      `
    }
}

customElements.define('doct-five', DoctorOne)
