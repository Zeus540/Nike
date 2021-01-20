import React ,{useState} from 'react';
import './App.css';
import Parallax2 from './components/parallax2.jsx'
import Footer from './components/Footer.jsx'
import af1 from './images/react.jpg'
import af2 from './images/A5AEDE33-E71E-4BC1-B417-A83A46EFA2FB1.png';
import Fog from './images/e5c5a58103d2d993135ae505abfb08d7.png'
import Fog2 from './images/nike-air-fear-of-god-1-release-date-2.jpg'
import github from '../src/images/github.png'
import linkedin from '../src/images/linkedin.png'


function App() {

  const [State1] = useState([
    {key:"",
    img:af1,
    img1:af2,
    text1:"# AF-1",
    text2:'"REACT"',
    heading:"# AF-1",
    heading2:'"REACT"',
    paragraph1:"The AF1 React D/MS/X optimizes comfort with a full length Nike React midsole equipped with a heel Ramp Air unit. The upper features a large bold Swoosh and mesh construction on the side panels. The traditional AIR logo appears on the heel, along with a newly added Nike React branded stripe. Nike React’s pattern replaces the traditional stars at the heel and toe of the outsole.",

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
  

  return (
    <div className="App" >
        

            {State1.map((data, index) => (
            <Parallax2
             key={index} 
             color="#59c3a0" 
             Hcolor="#ffffff"
             Tcolor="white"
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
              
      {State5.map((data, index) => (
            <Parallax2 
            key={index} 
            color="#59c3a0" 
            Hcolor="#ffffff" 
            Tcolor="white" 
            img={data.img} 
            img1={data.img1} 
            text1={data.text1} 
            T1="white" 
            text2={data.text2} 
            T2="white" 
            heading={data.heading}
            heading2={data.heading2}  
            paragraph1={data.paragraph1} 
            />))}
     
   
<Footer link1={linkedin} link2={github}/>
    </div>
  );
}

export default App;
