class DoctorOne extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <script>
                        document.write(new Date().getFullYear());
                    </script>
                    Project PolMed został zrobiony przez <b>Lizaveta Rashchynskaya</b>, <b>Oscar Zając</b> i <b>Vlad Zinkovskyi</b>
                </div>
                <div class="col-md-6">
                    <div class="text-md-end footer-links d-none d-md-block">
                        <a href="javascript: void(0);">About</a>
                        <a href="javascript: void(0);">Support</a>
                        <a href="javascript: void(0);">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
      `
    }
}

customElements.define('my-footer', DoctorOne)
