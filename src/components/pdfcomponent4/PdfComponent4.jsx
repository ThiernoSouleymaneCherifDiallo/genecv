import { useState } from 'react';
import './style.css'



export default function PdfComponent4() {

  let maxNewSection = 1;

  const [affiche, setAffiche] = useState(true)
  const [dinamique1, setDinamique1] = useState(true);
  const [dinamique2, setDinamique2] = useState(true);
  const [dinamique3, setDinamique3] = useState(true);
  const [dinamique4, setDinamique4] = useState(true);
  const [dinamique5, setDinamique5] = useState(true);


  function printpdf() {
    setAffiche(false)
    setDinamique1(false)

    var content = document.getElementById("resume");

    const allButtons = document.querySelectorAll("#print button");
    allButtons.forEach(button => {
      button.classList.add("none");
    });
    let allInputCheckboxes = document.querySelectorAll(".input-checkbox");
    allInputCheckboxes.forEach(input => {
      input.classList.add("none");
    })

    allButtons.forEach(button => {
      button.classList.remove("none");
    })
    allInputCheckboxes.forEach(input => {
      input.classList.remove("none");
    })

    html2pdf(content, {
      html2canvas: { scale: 1, logging: true, dpi: 500 }
    });
  }

  function addskill() {
    const head = document.createElement('div');
    document.getElementById("skills").appendChild(head);
    head.innerHTML = ('<div class="skill"><span><input type="checkbox" class="input-checkbox"></span><span><i class="fas fa-chevron-circle-right"></i></span>   <span contenteditable="true">write your skill here</span></div>');
    saveresume();
  }

  function addLang() {
    const head = document.createElement('div');
    document.getElementById("languages").appendChild(head);
    head.innerHTML = ('<div class="language"><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">LANGNAME</span> - <span contenteditable="true">level u know</span></div>');
    saveresume();
  }

  function addAch() {
    const head = document.createElement('div');
    document.getElementById("achievement").appendChild(head);
    head.innerHTML = ('<div class="achieve" ><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">Write your achievement</span></div>');
    saveresume();
  }
  function remAch(event) {
    let val = 0;
    const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length === 0) {
      alert("No fields are present to be deleted!")
    }
    else {
      console.log(array);
      array.forEach(element => {
        if (element.checked === true) {
          val = 1;
          element.parentElement.parentElement.remove();
        }
      })
      if (val === 0) alert("Please select the checkboxes to delete the required field!")
    }
    saveresume();
  }

  function addInt() {
    const head = document.createElement('div');
    document.getElementById("interest").appendChild(head);
    head.innerHTML = ('<div class="achieve" ><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">Write interest</span></div>');
    saveresume();
  }
  function remInt(event) {
    let val = 0;
    const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length === 0) {
      alert("No fields are present to be deleted!")
    }
    else {
      array.forEach(element => {
        if (element.checked === true) {
          val = 1;
          element.parentElement.parentElement.remove();
        }
      })
      if (val === 0) alert("Please select the checkboxes to delete the required field!")
    }
    saveresume();
  }


  function addedu() {
    const head = document.createElement('div');
    document.getElementById("education").appendChild(head);
    head.innerHTML = ('<div class="edublock"><span><input type="checkbox" class="input-checkbox"></span><span class="education-head" contenteditable="true">YOUR DEGREE</span><div ><span contenteditable="true">Institute name</span> - <span contenteditable="true">Passing Year</span></div></div>');
    saveresume();
  }
  function remedu(event) {
    let val = 0;
    let empty = true;
    const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length === 0) {
      alert("No fields are present to be deleted!")
    }
    else {
      console.log(array);
      array.forEach(element => {
        if (element.checked === true) {
          val = 1;
          element.parentElement.parentElement.remove();
        }
      })
      if (val === 0) alert("Please select the checkboxes to delete the required field!")
    }
    saveresume();
  }


  function remskill(event) {
    let val = 0;
    const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length === 0) {
      alert("No fields are present to be deleted!")
    }
    else {
      console.log(array);
      array.forEach(element => {
        if (element.checked === true) {
          val = 1;
          element.parentElement.parentElement.remove();
        }
      })
      if (val === 0) alert("Please select the checkboxes to delete the required field!")
    }
    saveresume();
  }



  function remLang(event) {
    let val = 0;
    const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length === 0) {
      alert("No fields are present to be deleted!")
    }
    else {
      console.log(array);
      array.forEach(element => {
        if (element.checked === true) {
          val = 1;
          element.parentElement.parentElement.remove();
        }
      })
      if (val === 0) alert("Please select the checkboxes to delete the required field!")
    }
    saveresume();
  }





  function addsec() {
    if (maxNewSection < 2) {
      const head = document.createElement('div');
      document.getElementById("newsec").appendChild(head);
      if (maxNewSection === 0) {
        head.innerHTML = ('<div><span><input type="checkbox" class="input-checkbox"></span><span class="title" contenteditable="true">NEW SECTION</span><br><br><div contenteditable="true">This is the description part of your new section. Try to stay within limit and write something which has less than 400 characters. The spaces and symbols you use will also be included so use them for an indentation effect.</div></div>');
      }
      else {
        head.innerHTML = ('<div><br><br><span><input type="checkbox" class="input-checkbox"></span><span class="title" contenteditable="true">NEW SECTION</span><br><br><div contenteditable="true">This is the description part of your new section. Try to stay within limit and write something which has less than 400 characters. The spaces and symbols you use will also be included so use them for an indentation effect.</div></div>');
      }

      maxNewSection = maxNewSection + 1;
    }
    else {
      alert("Atmost 2 NEW SECTION can be added!")

    }
    saveresume();
  }
  function remsec(event) {
    let val = 0;
    const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length === 0) {
      alert("No fields are present to be deleted!")
    }
    else {
      console.log(array);
      array.forEach(element => {
        if (element.checked === true) {
          val = 1;
          maxNewSection = maxNewSection - 1;
          element.parentElement.parentElement.remove();
        }
      })
      if (val === 0) alert("Please select the checkboxes to delete the required field!")
    }
    saveresume();
  }

  function changePhoto() {
    let file = document.getElementById('image').files[0]; //getting user selected file
    if (!file) return; // return if user hasn't selected file    
    document.getElementById('previewImg').src = URL.createObjectURL(file) // passing file url as preview img src 
  }

  function saveresume() {
    var sec = document.getElementById("print");
    value1 = sec.innerHTML;
    var info = document.getElementById("custinfo");
    info.value = value1;
  }

  return (
    <>
      <div className="nav">
        <button id="cmd" onClick={printpdf} className="navbtn">
          <i className="fas fa-download" />
        </button>
        <form>
          <input type="hidden" id="custinfo" name="custinfo" />
          <button className="navbtn">
            <i className="fas fa-save" />
          </button>
        </form>
        <button className="navbtn" href="">
          <i className="fas fa-home" />
        </button>
      </div>
      <div className="resume" id="resume">
        <section id="print">
          <div style={{ position: "relative" }} className="head">
            <div className="main">
              <img style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "50%",
                display: "block",
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)"
              }} id='previewImg' onClick={() =>
                document.getElementById('image').click()} src="jalikatou.jpg" alt="" />
              <input hidden type="file" id='image' onChange={changePhoto} />
              <span className="name" contentEditable="true">
                VOTRE
              </span>{" "}
              <span contentEditable="true">NOM</span>
              <div className="post" contentEditable="true">
                YOUR JOB PROFILE
              </div>
            </div>
          </div>
          <div className="contacts">
            <span contentEditable="true" className="content">
              231-3212-2132
            </span>
            <span className="symbol">
              {" "}
              <i className="fas fa-phone" />
            </span>
            <br />
            <span contentEditable="true" className="content">
              samplemail@email.in
            </span>
            <span className="symbol">
              {" "}
              <i className="fas fa-envelope" />
            </span>
            <br />
            <span contentEditable="true" className="content">
              linkedin/username.com
            </span>
            <span className="symbol">
              {" "}
              <i className="fab fa-linkedin" />
            </span>
            <br />
            <span contentEditable="true" className="content">
              sample street-India
            </span>
            <span className="symbol">
              {" "}
              <i className="fas fa-map-marker-alt" />
            </span>
          </div>
      </div>

      {/* <div className="line" > */}
      <div className="mainbody">
        <div className="leftside">
          <span className="title">Mes Compétences</span>
          <br />
          <br />
          <div>
            <div className="skill">
              <span>
                <input type="checkbox" className="input-checkbox" />
              </span>
              <span>
                <i className="fas fa-chevron-circle-right" />
              </span>{" "}
              <span contentEditable="true">Mettre vos compétences ici</span>
            </div>
            <div id="skills" />
              {affiche ? <div className="dynamiquebtns">
              <button
                id="skilladd"
                type="button"
                className="btn btn-success"
                onClick={addskill}
                >
                <i className="fas fa-plus-circle" /> Competence
              </button>
              <button
                id="skillrem"
                type="button"
                className="btn btn-danger"
                onClick={(e) => remskill(e)}
                >
                <i className="fas fa-minus-circle" /> Compétence
              </button>
            </div> : undefined}
          </div>
          <br />
          <br />
          <span className="title">LANGUES</span>
          <br />
          <br />
          <div>
            <div className="language">
              <span>
                <input type="checkbox" className="input-checkbox" />
              </span>
              <span contentEditable="true">Nom de langue</span> -{" "}
              <span contentEditable="true">Votre niveau</span>
            </div>
            <div id="languages" />

              {dinamique1 ? <div>
              <button
                id="langadd"
                type="button"
                className="btn btn-success"
                onClick={addLang}
                >
                <i className="fas fa-plus-circle" /> Langue
              </button>
              <button
                id="langrem"
                type="button"
                className="btn btn-danger"
                onClick={(e) => remLang(e)}
                >
                <i className="fas fa-minus-circle" /> Langue
              </button>
              </div> : undefined

              }
           </div>
           
          <br />
          <br />
          <span className="title">ACHIEVEMENTS</span>
          <br />
          <br />
          <div>
            <div className="achieve">
              <span>
                <input type="checkbox" className="input-checkbox" />
              </span>
              <span contentEditable="true">Write your achievement</span>
            </div>
            <div id="achievement" />
            <button
              id="achadd"
              type="button"
              className="btn btn-success"
              onClick={addAch}
            >
              <i className="fas fa-plus-circle" /> Achievement
            </button>
            <button
              id="achrem"
              type="button"
              className="btn btn-danger"
              onClick={(e) => remAch(e)}
              style={{ marginTop: 0 }}
            >
              <i className="fas fa-minus-circle" /> Achievement
            </button>
          </div>
          <br />
          <br />
          <span className="title">INTERESTS</span>
          <br />
          <br />
          <div>
            <div className="achieve">
              <span>
                <input type="checkbox" className="input-checkbox" />
              </span>
              <span contentEditable="true">Write interest</span>
            </div>
            <div id="interest" />
            <button
              id="Intadd"
              type="button"
              className="btn btn-success"
              onClick={addInt}
            >
              <i className="fas fa-plus-circle" /> Interest
            </button>
            <button
              id="Intrem"
              type="button"
              className="btn btn-danger"
              onClick={(e) => remInt(e)}
            >
              <i className="fas fa-minus-circle" /> Interest
            </button>
          </div>
        </div>
        <div className="border" />
        <div className="rightside">
          <span className="title">PROFILE</span>
          <br />
          <br />
          <div contentEditable="true">
            Here u can write the basic information about your career like your
            forte, something about yourself that you want your interviewer to
            know. Try to keep it brief and only provide necessary information.
            Do not include information which is already written in your resume
            in some other section.
          </div>
          <br />
          <br />
          <span className="title">EDUCATION</span>
          <br />
          <br />
          <div>
            <div id="education">
              <div className="edublock">
                <span>
                  <input type="checkbox" className="input-checkbox" />
                </span>
                <span className="education-head" contentEditable="true">
                  YOUR DEGREE
                </span>
                <div>
                  <span contentEditable="true">Institute name</span> -{" "}
                  <span contentEditable="true">Passing Year</span>
                </div>
              </div>
            </div>

            {dinamique1 ? <div className="dinatique1">
              <button
                id="eduadd"
                type="button"
                className="btn btn-success"
                onClick={addedu}
              >
                <i className="fas fa-plus-circle" /> Education
              </button>
              <button
                id="edurem"
                type="button"
                className="btn btn-danger"
                onClick={(e) => remedu(e)}
              >
                <i className="fas fa-minus-circle" /> Education
              </button>
            </div> : null}

          </div>

          <br />
          <br />
          <div className="new-section-div">
            <div>
              <span>
                <i n put type="checkbox" className="input-checkbox" />
              </span>
              <span className="title" contentEditable="true">
                NEW SECTION
              </span>
              <br />
              <br />
              <div contentEditable="true">
                This is the description part of your new section. Try to stay
                within limit and write something which has less than 400
                characters. The spaces and symbols you use will also be included
                so use them for an indentation effect.
              </div>
            </div>
            <div id="newsec" />
            <button
              id="secadd"
              type="button"
              className="btn btn-success"
              onClick={addsec}
            >
              <i className="fas fa-plus-circle" /> Section
            </button>
            <button
              id="secrem"
              type="button"
              className="btn btn-danger"
              onClick={(event) => remsec(event)}
            >
              <i className="fas fa-minus-circle" /> Section
            </button>
          </div>
        </div>
      </div>
    </section >
      </div >

    </>
  )
}
