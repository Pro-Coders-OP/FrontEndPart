import React from 'react'
import './AboutUs_design.css'
import img_1 from '../assets/illus_kftyh4.png'
import img_2 from '../assets/img-1_e25nvh.jpg'
import img_3 from '../assets/img-2_vdgqgn.jpg'
import img_4 from '../assets/messi.jpg'
import img_5 from '../assets/avatar-3_hzlize.png'
import img_6 from '../assets/avatar-2_f8dowd.png'
import img_7 from '../assets/avatar-1_s02nlg.png'




export default function AboutUs() {
    return (
        <div>
            {/* <nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
  <div class="container"><a href="#" class="navbar-brand d-flex align-items-center"> <i class="fa fa-snowflake-o fa-lg text-primary mr-2"></i><strong>Snowflake</strong></a>
    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>
    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active"><a href="#" class="nav-link font-italic"> Home </a></li>
        <li class="nav-item active"><a href="#" class="nav-link font-italic"> About </a></li>
        <li class="nav-item active"><a href="#" class="nav-link font-italic"> Services </a></li>
        <li class="nav-item active"><a href="#" class="nav-link font-italic"> Contact</a></li>
      </ul>
    </div>
  </div>
</nav> */}

{/* <div class="bg-light">
  <div class="container py-5">
    <div class="row h-100 align-items-center py-5">
      <div class="col-lg-6">
        <h1 class="display-4">About us page</h1>
        <p class="lead text-muted mb-0">Create a minimal about us page using Bootstrap 4.</p>
        <p class="lead text-muted">Snippet by <a href="https://bootstrapious.com/snippets" class="text-muted"> 
                    <u>Bootstrapious</u></a>
        </p>
      </div>
      <div class="col-lg-6 d-none d-lg-block"><img src={img_1} alt="" class="img-fluid"/></div>
    </div>
  </div>
</div>

<div class="bg-white py-5">
  <div class="container py-5">
    <div class="row align-items-center mb-5">
      <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
        <h2 class="font-weight-light">Lorem ipsum dolor sit amet</h2>
        <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
      </div>
      <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src={img_2} alt="" class="img-fluid mb-4 mb-lg-0"/></div>
    </div>
    <div class="row align-items-center">
      <div class="col-lg-5 px-5 mx-auto"><img src={img_3} alt="" class="img-fluid mb-4 mb-lg-0"/></div>
      <div class="col-lg-6"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
        <h2 class="font-weight-light">Lorem ipsum dolor sit amet</h2>
        <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
      </div>
    </div>
  </div>
</div> */}

<div class="bg-light py-5">
  <div class="container py-5">
    <div class="row mb-4">
      <div class="col-lg-5">
        <h2 class="display-4 font-weight-light " style={{fontFamily: 'Audiowide, cursive'}}>Our team</h2>
        <p class="font-italic text-muted">This page gives infromation about the team members of project.</p>
      </div>
    </div>

    <div class="row  text-center">
      {/* <!-- Team item--> */}
      <div class="col-xl-6 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src={img_7} alt="" width="150"  class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0">PRASAD MALI</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
          <p>OP sir</p>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="https://www.facebook.com/mali45p" > <i className="fab fa-facebook-square text-blue h2 "></i></a></li>
            <li class="list-inline-item"><a href="https://twitter.com/pm_00007" ><i className="fab fa-twitter-square text-blue h2 "></i></a></li>
            <li class="list-inline-item"><a href="https://www.instagram.com/pm.java/" ><i className="fab fa-instagram text-danger h2"></i></a></li>
            <li class="list-inline-item"><a href="" ><i className="fab fa-linkedin text-info h2 d-block"></i></a></li>
          </ul>
        </div>
      </div>
      {/* <!-- End--> */}

      {/* <!-- Team item--> */}
      <div class="col-xl-6 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src={img_5} alt="" width="150" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0">ABHISHEK KADAM</h5><span class="small text-uppercase text-muted">CEO - Founder</span><p>Conqueror player </p>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="https://www.facebook.com/abhishek.kadam.96155669" > <i className="fab fa-facebook-square text-blue h2 d-block"></i></a></li>
            <li class="list-inline-item"><a href="#" ><i className="fab fa-twitter-square text-blue h2 d-block"></i></a></li>
            <li class="list-inline-item"><a href="https://www.instagram.com/abhishek_kadam522/" ><i className="fab fa-instagram text-danger h2"></i></a></li>
            <li class="list-inline-item"><a href="#"><i className="fab fa-linkedin text-info h2 d-block"></i></a></li>
          </ul>
        </div>
      </div>
      {/* <!-- End--> */}

      {/* <!-- Team item--> */}
      <div class="col-xl-6 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src={img_6} alt="" width="150" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0">PALAK HARINKHEDE</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="https://www.facebook.com/palak.harinkhede.16" > <i className="fab fa-facebook-square text-blue h2 d-block"></i></a></li>
            <li class="list-inline-item"><a href="https://twitter.com/Palak37163027" ><i className="fab fa-twitter-square text-blue h2 d-block"></i></a></li>
            <li class="list-inline-item"><a href="https://www.instagram.com/palak_harinkhede/" ><i className="fab fa-instagram text-danger h2"></i></a></li>
            <li class="list-inline-item"><a href="#" ><i className="fab fa-linkedin text-info h2 d-block"></i></a></li>
          </ul>
        </div>
      </div>
      {/* <!-- End--> */}

      {/* <!-- Team item--> */}
      <div class="col-xl-6 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src={img_7} alt="" width="150" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0" > SAIRAMAN KORAVENI</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="https://www.facebook.com/saikoravenipatel.koraveni" > <i className="fab fa-facebook-square text-blue h2 d-block"></i></a></li>
            <li class="list-inline-item"><a href="https://twitter.com/sairamankorave2" ><i className="fab fa-twitter-square text-blue h2 d-block"></i></a></li>
            <li class="list-inline-item"><a href="https://www.instagram.com/i.am.sairaman/" ><i className="fab fa-instagram text-danger h2"></i></a></li>
            <li class="list-inline-item"><a href="#"  ><i className="fab fa-linkedin text-info h2 d-block"></i></a></li>
          </ul>
        </div>
      </div>
      {/* <!-- End--> */}

    </div>
  </div>
</div>


        </div>
    )
}
