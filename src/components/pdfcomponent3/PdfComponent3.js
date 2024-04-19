import './style.css'
import React, { Fragment } from 'react'
import { Stack } from 'react-bootstrap'
import { BsLinkedin, BsGithub, BsGlobe } from 'react-icons/bs'
import { GiGraduateCap } from 'react-icons/gi'
import { HiLocationMarker, HiOfficeBuilding, HiOutlineMail, HiPhone } from 'react-icons/hi'
import jsPDF from 'jspdf';
import html2canvas from "html2canvas";
import axios from 'axios';
import { saveAs } from 'file-saver';


import { useSelector } from 'react-redux';

function PdfComponent3() {

  const profile = useSelector(state => state.profile)
  const name = profile.name.split(" ");
  const file = useSelector(state => state.file)
  const about = useSelector(state => state.about)
  const experienceList = useSelector(state => state.experienceList)
  const educationList = useSelector(state => state.educatiosnList)
  const skills = useSelector(state => state.skills)

  const createAndDownloadPdf = () => {
    const data = {
      previewofile: previewofile,
      name: name,
      file: file,
      about: about,
      experienceList: experienceList,
      educationList: educationList,
      skills: skills
    }
    axios.post('http://localhost:5000/create-pdf', data)
      .then(() => axios.get('http://localhost:5000/fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'newPdf.pdf');
      })
  }

  const printDocument = () => {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'pt', 'a4', false);
        pdf.addImage(imgData, 'PNG', 0, 0, 600, 0, undefined, false);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
      ;
  };
  const GetIcon = (icon) => {
    switch (icon.icon) {
      case "HiOutlineMail":
        return <HiOutlineMail size={30} />
      case "HiPhone":
        return <HiPhone size={30} />
      case "BsLinkedin":
        return <BsLinkedin size={30} />
      case "BsGithub":
        return <BsGithub size={30} />
      case "BsGlobe":
        return <BsGlobe size={30} />
      default:
        return "●"
    }
  }
  const GetLinks = () => {
    const list = [];
    if (profile.email) {
      list.push({
        icon: "HiOutlineMail",
        link: profile.email,
      });
    }
    if (profile.contact) {
      list.push({
        icon: "HiPhone",
        link: profile.contact,
      });
    }
    if (profile.linkedin) {
      list.push({
        icon: "BsLinkedin",
        link: profile.linkedin,
      });
    }
    if (profile.github) {
      list.push({
        icon: "BsGithub",
        link: profile.github,
      });
    }
    if (profile.website) {
      list.push({
        icon: "BsGlobe",
        link: profile.website,
      });
    }

    return (
      list.map((item, id) => {
        return (
          <div className={id % 2 === 0 ? "d-flex aligh-items-start align-items-center bg-white text-dark p-3" : "d-flex aligh-items-start align-items-center bg-primary text-dark p-3"} key={id}>
            <p className="m-0"><GetIcon icon={item.icon} /></p><span className="mx-2"></span><p className="m-0">{item.link}</p>
          </div>
        )
      })
    )

  }
  return (
    <div>
      <div className="d-grid col-2 mx-auto mt-4">
        <button className="nav-link align-middle bg-dark text-white p-2 rounded" onClick={printDocument}>Download</button>
        <button className="nav-link align-middle bg-dark text-white p-2 rounded mt-2" onClick={createAndDownloadPdf}>Download Version 2.0</button>
      </div>
      <header>
        <div className="photo">
          <img src="01.png" width="100%" height="100%" alt="" />
        </div>
        <div className="des">
          <h3>ALHASSANE</h3>
          <p className="post">Développeur Web & Mobile</p>
        </div>
        <div className="right">
          <p><img src="mail.png" className="info" />gueyeazou201629@gmail</p>
          <p><img src="maps.png" className="info" />Thies-Senegal</p>
          <p><img src="tele.png" className="info" />+221781762414</p>
        </div>
      </header>


      <section className="section-left">
        <h4>Atouts</h4>
        <hr className="light" />
        <div className="atouts">
          <div>Travail d'équipe</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</div>
          <div>Adaptabilité/flexibilité</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</div>
        </div>


        <h4>Diplômes et Formations</h4>
        <hr className="light" />
        <div className="div">
          <div><b>Certificat de spécialisation en développement web et d'application
            mobile </b><strong>entreprise/ecole</strong>  ville, Lieux <br />La de Date
          </div>
          <br />
          <div><b>Certificat de spécialisation en développement web et d'application
            mobile </b><strong>entreprise/ecole</strong>  ville, Lieux <br />La de Date
          </div>
        </div>

        <h4>Expériences professionnelles</h4>
        <hr className="light" />
        <div className="div" >
          <p><b>Stagiaire Développeur web</b> <strong>(ENTREPRISE), (lieux)</strong><br />
            (date)<br />
            Développement d'une application web pour la gestion des demandes
            d'achat sur tout le réseau <strong>(ENTREPRISE)</strong>.
          </p>

          <p><b>Stagiaire Développeur web</b> <strong>(ENTREPRISE)</strong>, (lieux)<br />
            (date)<br />
            Développement d'une application web pour la gestion des demandes
            d'achat sur tout le réseau <strong>(ENTREPRISE)</strong>.
          </p>

          <p> <br />Stagiaire Développeur web<br /> <strong>(ENTREPRISE)</strong>, (lieux)<br />
            (date)<br />
            Développement d'une application web pour la gestion des demandes
            d'achat sur tout le réseau <strong>(ENTREPRISE)</strong>.
          </p>
        </div>
      </section>

      <section className="section-right">
        <h4>Competences</h4>
        <hr className="light" />
        <div className="skls">

          <div className="po">
            <p>html, css, Javascript</p>
            <div className="cool">
              <div style={{ width:"80%"}} className="inner"></div>
            </div>
          </div>

          <div className="po">
            <p>PHP, MySQL, Java</p>
            <div className="cool">
              <div style={{ width:"75%"}} className="inner"> </div>
            </div>
          </div>

          <div className="po">
            <p>MongoDB, NodeJs, Oracle</p>
            <div className="cool">
              <div style={{ width:"71%"}} className="inner"> </div>
            </div>
          </div>

          <div className="po">
            <p>Photoshop, Illustrator, Adobe XD/UI</p>
            <div className="cool">
              <div style={{ width:"60%"}} className="inner"> </div>
            </div>
          </div>
        </div>


        <h4>Langues</h4>
        <hr className="light" />
        <div className="skls">
          <div className="po">
            <p>Français</p>
            <div className="cool">
              <div style={{ width:"90%"}} className="inner"> </div>
            </div>
          </div>
          <div className="po">
            <p>Anglais</p>
            <div className="cool">
              <div style={{ width:"60%"}} className="inner"> </div>
            </div>
          </div>
        </div>
        <h4>Réseaux sociaux</h4>
        <hr className="light" />
        <div className="interet">
          <p><img src="f.png" className="info" /><span>https://www.facebook.com/tsinform/</span></p>
          <p><img src="l.png" className="info" /><span>https://www.instagram.com/tsi0950</span></p>
          <p><img src="g.png" className="info" /><span>assane5</span></p>
          <p><img src="t.png" className="info" /><span>https://www.twitter.com/pro_azou?s=08</span></p>
        </div>


        <h4>Centres d'intérêt</h4>
        <hr className="light" />
        <div className="interet">
          <div><b>Sport</b></div>
          <div><b>Naviguer sur Internet</b></div>
          <div><b>Lecture</b></div>
          <div><b>Voyage</b></div>
        </div>
      </section>
      <div className="srkl">

      </div>
      <hr className="light" />
    </div>
  )
}

export default PdfComponent3;