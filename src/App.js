import React from 'react';
import './App.css';
import docplanner from './docplanner.svg';
import Section1 from './Sections/Section1';
import Section2 from './Sections/Section2.js';
import Section3 from './Sections/Section3.js';
import Section4 from './Sections/Section4.js';
import  Section5 from './Sections/section5.js';
import Section6 from './Sections/Section6.js';
import Sectionheader from './Sections/Sectionheader';



const Improve = [
  { classname: "warsaw", name: 'Warsaw', image: 'https://www.docplanner.com/images/warsaw.png', btn: "SEE Opening" }, 
  { classname: "barcelona", name: 'Barcelona', image: 'https://www.docplanner.com/images/barcelona.png', btn: "SEE Opening" },
  { classname: "istanbul", name: 'Istanbul', image: 'https://www.docplanner.com/images/istanbul.png', btn: "SEE Opening" }, 
  { classname: "rome", name: 'Rome', image: 'https://www.docplanner.com/images/rome.png', btn: "SEE Opening" }, 
  { classname: "mexico", name: 'Mexico City', image: 'https://www.docplanner.com/images/mexico-city.png', btn: "SEE Opening" },
  { classname: "Curitiba", name: 'Curitiba', image: 'https://www.docplanner.com/images/curitiba.png', btn: "SEE Opening" }
]

const Paragraphe = ["We want patients to find the perfect doctor and book an appointment in the most easy way.The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere", 
"We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients."]

const Patient = [{
  clasName:"For-patients", className1:"box-vert", titre: "For patients", description: "Find a doctor, book a visit and solve any health-related doubt",
  image: "https://www.docplanner.com/img/screen-marketplace@2x.png"},
  { className:"For-doctors", className1:"box-blue", titre: "For Doctor", description: "Save time managing visits and cut no- shows by half", image: "https://www.docplanner.com/img/screen-saas@2x.png" }]

const Company = ['https://www.znamylekar.cz/img/cz/logo/logo-default-cz.svg?v=4', 'https://www.znamylekar.cz/img/cz/logo/logo-default-cz.svg?v=4', 'https://www.doctoralia.com.mx/img/mx/logo/logo-default-mx.svg?v=4', 'https://www.miodottore.it/img/it/logo/logo-default-it.svg?v=4', 'https://www.doktortakvimi.com/img/tr/logo/logo-default-tr.svg?v=4']

const Platform = [{
  classname: "leader", className1: "white-box",
  image: "https://www.docplanner.com/img/flag.png", title: "Leader in 10 countries", description:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"},
  {
    classname: "appointments", className1: "white-box1", image: "https://www.docplanner.com/img/visits.png", title: "1.5 million appointments", description: "booked last month"
  },
  {
    classname: "patients", className1: "white-box2", image: "https://www.docplanner.com/img/patients.png", title: "30 million unique patients", description: "visit us every month"
  },
  {
    classname: "doctors", className1: "white-box3", image: "https://www.docplanner.com/img/doctors.png", title: "2 million active doctors", description: "trust in our solutions"
  }
  ]
const Pays = ["Poland", "Turkey", "Spain", "Italy", "Czech Republic", "Mexico", "Colombia", "Brazil", "Argentina", " Chile"]


function App() {
  return (
    <div className="App">
      <header>
       <Sectionheader/>
      

      </header>
      <main>
        <div className="healthpara">
          <Section1 tab={Paragraphe} />
        </div>
        <div>
            <Section2 obj={Patient} />          

        </div>
        <div>
          <Section3 comp={Company} />

        </div>
        <div>
          <Section4 platform={Platform} />

        </div>
        <div>
          <Section5 improve={Improve} />

        </div>
      </main>
      <footer>
        <div>
          <Section6 pied={Pays} />

        </div>
      </footer>

   





    </div>
      );
    }
    
    export default App;
