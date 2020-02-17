import React ,{useState} from 'react';
import './App.css';
import Landingpage from './components/landingpage.jsx'
import Parallax from './components/parallax.jsx'
import Parallax2 from './components/parallax2.jsx'
import Footer from './components/Footer.jsx'
import af1 from './images/react.jpg'
import af2 from './images/A5AEDE33-E71E-4BC1-B417-A83A46EFA2FB.jpg';
import acw1 from './images/acw1.jpg'
import acw2 from './images/acw2.jpg';
import Fog from './images/e5c5a58103d2d993135ae505abfb08d7.jpg'
import Fog2 from './images/nike-air-fear-of-god-1-release-date-2.jpg'
import FogLogo from '../src/images/FEAROFGODBRANDING_joeperez3.jpg'
import github from '../src/images/github.png'
import linkedin from '../src/images/linkedin.png'
import ContactMe from './components/ContactMe.jsx';

function App() {

  const [State1] = useState([
    {key:"",
    img:af1,
    img1:af2,
    text1:"# AF-1",
    text2:'"REACT D/MS/X"',
    heading:"# AF-1",
    heading2:'"REACT"',
    paragraph1:"The AF1 React D/MS/X optimizes comfort with a full length Nike React midsole equipped with a heel Ramp Air unit. The upper features a large bold Swoosh and mesh construction on the side panels. The traditional AIR logo appears on the heel, along with a newly added Nike React branded stripe. Nike React’s pattern replaces the traditional stars at the heel and toe of the outsole.",

}
  ]);

  const [State3] = useState([
    {key:"",
    img:acw2,
    img1:acw1,
    text1:"# AF-1",
    text2:'"A COLD WALL"',
    heading:'# AF-1 ',
    heading2:'"A COLD WALL"',
    paragraph1:"Building on a partnership that began in 2017, A-COLD-WALL* and Nike return with an Air Force 1. Led by Samuel Ross, A-COLD-WALL* is a curated representation of British street culture. The new Air Force 1 Low by A-COLD-WALL* harkens back to their original AF-1 High design from 2017, and features a Flyleather construction made with at least 50% leather fibre. Flyleather looks and feels like natural leather, but is made by recapturing the leather fibres that were previously destined for landfills.",

}
  ]);

  const [State5] = useState([
    {key:"",
    img:Fog2,
    img1:Fog,
    text1:"# NIKE",
    text2:'"FEAR OF GOD"',
    heading:"# NIKE",
    heading2:'"FEAR OF GOD"',
    paragraph1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio odio quisquam rerum velit, impedit inventore aliquam culpa cupiditate laborum quia dolor recusandae sapiente quasi, incidunt cum temporibus quas voluptates ullam debitis praesentium deleniti animi mollitia. Repellendus laboriosam nulla velit numquam? Aliquid aliquam tempore eveniet tempora molestias excepturi quia eos illum?",

}
  ]);
  const [State6] = useState([
    {key:"",
    img:FogLogo,
}
  ]);

  return (
    <div className="App" >
            <Landingpage/>

            {State3.map((data, index) => (
            <Parallax2
             key={index} 
             color="#8c9790" 
             Hcolor="#ffffff" 
             Tcolor="#f4f8ff" 
             img={data.img} 
             img1={data.img1} 
             text1={data.text1} 
             T1="#f4f8ff" 
             text2={data.text2} 
             T2="#f4f8ff" 
             heading={data.heading}
             heading2={data.heading2}  
             paragraph1={data.paragraph1}
              />))}

               {State1.map((data, index) => (
            <Parallax2
             key={index} 
             color="#762320" 
             Hcolor="#ffffff"
             Tcolor="#ffffff"
             img={data.img} 
             img1={data.img1} 
             text1={data.text1} 
             T1="#ffffff" 
             text2={data.text2} 
             T2="#ffffff" 
             heading={data.heading}
             heading2={data.heading2}  
             paragraph1={data.paragraph1}
              />))}
              

            {State6.map((data, index) => (
            <Parallax
            key={index} 
            img={data.img}
            />))}

        <ContactMe/>

      {State5.map((data, index) => (
            <Parallax2 
            key={index} 
            color="#bfbdae" 
            Hcolor="#ffffff" 
            Tcolor="#f4f8ff" 
            img={data.img} 
            img1={data.img1} 
            text1={data.text1} 
            T1="#4d6a88" 
            text2={data.text2} 
            T2="#4d6a88" 
            heading={data.heading}
            heading2={data.heading2}  
            paragraph1={data.paragraph1} 
            />))}
     



<Footer link1={linkedin} link2={github}/>
    </div>
  );
}

export default App;
