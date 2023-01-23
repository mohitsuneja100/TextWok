import React from 'react';

function About(props) {
  return (
    <>
   <div className="container my-2">
   <div className="p-3 mb-2 bg-primary text-white "></div>
      <div className={`jumbotron bg-${props.mode}`}>
        <div className="float-end m-2 text-end">
          <p className="text-start">E-mail:-sunejamohit0@gmail.com</p>
          <p className="text-start">Mobile No.:-7206216100</p>
          <p className="text-start">Father's Name:-Sanjeev kumar</p>
          <p className="text-start">Mother's Name:-Renu</p>
        </div>
        
        <h1 className="display-4" >Mohit Suneja</h1>
        <p className="lead ">Web Developer</p>
        
        <hr className="my-4"/>
        <p>These are my details....</p>

        <div className="p-3 mb-2 bg-primary text-white "></div>
        <div className="row">
        <div className="col">
        <h2>Education:-</h2>
        <div className="col">
          <ul className="list-group ">
              <li className="list-group-item ">Chandigarh University
              <p>Pursuing-MCA • Kharar, Punjab</p></li>
              <li className="list-group-item ">Kurukshetra University
              <p>BCA • Kaithal, Haryana • 77% </p></li>
              <li className="list-group-item ">R.K.S.D. pubic school
              <p>12th(Sci.) • Kaithal,Haryana • 72%</p></li>
              <li className="list-group-item ">R.K.S.D. pubic school
              <p>10th • Kaithal,Haryana • 72%</p></li>
          </ul>    
        </div></div>
        <div className="col">
        <h2>Skills</h2>
        <div className="col">
          <ul className="list-group ">
            <li className="list-group-item ">Progrmmming in C</li>
            <li className="list-group-item">Programming in C++ </li>
            <li className="list-group-item">Programming in C++</li>
            <li className="list-group-item">HTML</li>
            <li className="list-group-item">CSS</li>
            <li className="list-group-item">BOOTSTRAP</li>
            <li className="list-group-item">JAVASCRIPT</li>
            <li className="list-group-item">PYTHON</li>
          </ul>
       </div>
      </div>
      <div className="col">
        <h2>Hobbies</h2>
        <div className="col">
          <ul className="list-group ">
            <li className="list-group-item p-3">Playing Badminton</li>
            <li className="list-group-item p-3">Watching Movies</li>
            <li className="list-group-item p-3">Learn Visual Contents</li>
            <li className="list-group-item p-3">Travelling</li>
            <li className="list-group-item p-3">Explore New Things</li>
            
          </ul>
       </div>

      </div>
    </div>
    
      </div>
      <div className="p-3 mb-2 bg-primary text-white my-2"></div>
      <div className="p-3 mb-2 bg-secondary text-white my-4">
      <div className="accordion accordion-flush my-3" id="accordionFlushExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                TextUtils App
            </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body"> It is the app used to enter the text and add some functionality to your text </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Functionalities
            </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body"><code>UpperCase:</code>It is to change the case of the text means lower to upper.<br/><code>LowerCase:</code>It is to change the case of the text means upper to lower.<br/><code>Clear:</code>It is used to clear the text.</div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Modes
            </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body"><code>Dark Mode:</code>You can also enables the dark mode by simply switch the button</div>
            </div>
        </div>
      </div>
    </div>
    </div>
   
    </>
  );
}

export default About;
