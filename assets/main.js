class MyNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#">Vocasia Project Api</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item dropdown active">
                        <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Admin
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="affiliate-admin.html">Affiliate</a></li>
                            <li><a class="dropdown-item" href="login&register.html">Authentication</a></li>
                            <li><a class="dropdown-item" href="category-admin.html">Category</a></li>
                            <li><a class="dropdown-item" href="community-admin.html">Community</a></li>
                            <li><a class="dropdown-item" href="course-admin.html">Course</a></li>
                            <li><a class="dropdown-item" href="coupon-admin.html">Coupon</a></li>
                            <li><a class="dropdown-item" href="dashboard-admin.html">Dashboard Admin</a></li>
                            <li><a class="dropdown-item" href="#">Enrol</a></li>
                            <li><a class="dropdown-item" href="instructor-admin.html">Instructor</a></li>
                            <li><a class="dropdown-item" href="lesson-admin.html">Lesson Admin</a></li>
                            <li><a class="dropdown-item" href="#">Revenue</a></li>
                            <li><a class="dropdown-item" href="#">Setting</a></li>
                            <li><a class="dropdown-item" href="users-mitra-admin.html">Users Mitra</a></li>
                            <li><a class="dropdown-item" href="workshop-admin.html">Workshop</a></li>
                            <li><a class="dropdown-item" href="workshop-student-admin.html">Workshop Student</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown active">
                        <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Instructor
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="dashboard-instructor.html">Dashboard
                                    Instructor</a></li>
                            <li><a class="dropdown-item" href="home-page.html">Home Page</a></li>
                            <li><a class="dropdown-item" href="lesson.html">Lesson</a></li>
                            <li><a class="dropdown-item" href="#">Question</a></li>
                            <li><a class="dropdown-item" href="#">Payment Balance</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown active">
                        <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Users
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="users.html">Users Profil</a>
                            <li><a class="dropdown-item" href="affiliate.html">Users Afiliate</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`;
  }
}

customElements.define("my-navbar", MyNavbar);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="container-fluid">
            <div class="card-footer text-center">
                Documentation Vocasia Project Api | 2021
            </div>
        </div>`;
  }
}

customElements.define("my-footer", MyFooter);
