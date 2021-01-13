import React from 'react'
import './AboutUs_design.css'

import img_2 from '../assets/img-1_e25nvh.jpg'
import img_3 from '../assets/img-2_vdgqgn.jpg'
import img_4 from '../assets/Sairaman_pic.jpeg'
import img_5 from '../assets/Abhishek_pic.jpg'
import img_6 from '../assets/Palak_pic_1.jpg'
import img_7 from '../assets/Prasad_pic.jpg'




export default function AboutUs() {
    return (
        <div>
           

<div class="bg-light pb-5">
  <div class="container pb-5">
    <div class="row mb-4">
      <div class="col-lg-5">
        <h2 class="display-3 font-weight-light " style={{fontFamily: 'Permanent Marker, cursive'}}>Our team</h2>
        <p class="font-italic text-muted">This page gives information about the team members of project.</p>
      </div>
    </div>

    <div class="row  text-center">
      {/* <!-- Team item--> */}
      <div class="col-xl-6 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4" ><img src={img_7}  alt="" width="200" height="200" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0" style={{ fontFamily: 'Caveat, cursive',fontSize:"30px",color:"#800080"}}>PRASAD MALI</h5>
          
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
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src={img_5} alt="" width="200" height="200" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                  <h5 class="mb-0" style={{ fontFamily: 'Caveat, cursive',fontSize:"30px",color:"#191970"}}>ABHISHEK KADAM</h5>
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
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src={img_6} alt="" width="200" height="200" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0" style={{ fontFamily: 'Caveat, cursive',fontSize:"30px",color:"#800000"}}>PALAK HARINKHEDE</h5>
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
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src={img_4} alt="" width="200" height="200" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0" style={{ fontFamily: 'Caveat, cursive',fontSize:"30px",color:"#4169E1"}}> SAIRAMAN KORAVENI</h5>
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
