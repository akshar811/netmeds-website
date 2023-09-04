const navbar = () => {
    return `
    
    <header class="position-sticky navbar-expand-md">
        <div class="container d-flex align-items-center justify-content-between">
            <div>
                <a href="/index.html"><img src="https://nms-assets.s3-ap-south-1.amazonaws.com/images/cms/aw_rbslider/slides/1663609483_netmeds-new-logo.svg" class="logo"></a>
            </div>
            <div class="deliver">
                 <div class="deliver-1">
                  Deliver to <span>
                      110002
                  </span>
                 </div>
              </div>
              <form action="">
                  <input type="text" placeholder="Search for medicine & wellness products…">
              </form> 
            <div id="headerMenu">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item px-2"><a href="#" class="nav-link text-light"><i class="bi bi-newspaper"></i>
                            Upload</a></li>
                    <li class="nav-item px-2"><a href="#" class="nav-link text-light"><i class="bi bi-tag"></i>
                            Offers</a></li>
                    <li class="nav-item px-2"><a href="pages/cart.html" class="nav-link text-light"><i
                                    class="bi bi-cart3"></i>
                            Cart<a></li>
                    <li class="nav-item px-2"><a href="pages/login.html" class="nav-link text-light"><i
                                class="bi bi-person-circle"></i> Sign in / Sign up</a></li>
                </ul>
            </div>
        </div>

    </header>

    <nav class="">
        <div class="sub-menu pb-1">
            <ul class="container d-flex justify-content-evenly">
                <div class="d-flex align-items-center">
                    <div class="me-2">
                        <img src="https://www.netmeds.com/assets/version1693541495/gloryweb/images/icons/medicine.svg" class="">
                    </div>
                    <div>
                        <li class="text-light"><a href="/pages/ayurvedic.html"
                            class="text-decoration-none text-light">Aayurvedic</a> </li>
                    </div>
                </div>
               
                <div class="d-flex align-items-center">
                    <div class="me-2">
                        <img src="https://www.netmeds.com/assets/gloryweb/images/icons/diagnostics.svg" class="">
                    </div>
                    <div>
                        <li class="text-light"><a href="/pages/homeopathey.html"
                            class="text-decoration-none text-light">Homeopathy</a> </li>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <div class="me-2">
                        <img src="https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg" class="">
                    </div>
                    <div>
                        <li class="text-light"><a href="/pages/eyewear.html"
                            class="text-decoration-none text-light">Eyewear</a> </li>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <div class="me-2">
                        <img src="https://www.netmeds.com/assets/version1693541495/gloryweb/images/icons/health-library.svg" class="">
                    </div>
                    <div>
                        <li class="text-light"><a href="/pages/veterinary.html"
                            class="text-decoration-none text-light">Veterinary</a> </li>
                    </div>
                </div>
            </ul>
        </div>
    </nav>

    `
}

export default navbar