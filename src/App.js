import React ,{useState} from 'react';
import './App.css';
import Landingpage from './components/landingpage.jsx'
import Parallax from './components/parallax.jsx'
import Parallax2 from './components/parallax2.jsx'
import af1 from './images/61tAtY2grYL._UL1078_.jpg'
import af2 from './images/917753_601_E_PREM.jpg';
import acw1 from './images/acw1.jpg'
import acw2 from './images/acw2.jpg';
import gold from './images/whereslugo-6QvRVC-6_Vo-unsplash.jpg'
import gold1 from './images/Cheap-Nike-SF-AF1-Mid-Lunar-New-Year-White-For-Sale-5.jpeg'

import goldmod from '../src/images/fsdfsfsdmod.jpg'
import gold3 from '../src/images/nike-sf-air-force-1-high-desert-ochre-903270-778-mood-3.jpg'

function App() {

  const [State1] = useState([
    {key:"",
    img:af1,
    img1:af2,
    text1:"# SF-AF1",
    text2:'"HABANERO"',
    heading:"# SF-AF1",
    heading2:'"HABANERO"',
    paragraph1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio odio quisquam rerum velit, impedit inventore aliquam culpa cupiditate laborum quia dolor recusandae sapiente quasi, incidunt cum temporibus quas voluptates ullam debitis praesentium deleniti animi mollitia. Repellendus laboriosam nulla velit numquam? Aliquid aliquam tempore eveniet tempora molestias excepturi quia eos illum?",

}
  ]);

  const [State2] = useState([
    {key:"",
    img:gold,
    img1:gold1,
    text1:"# SF-AF1",
    text2:'"Lunar New Year"',
    heading:"# SF-AF1 ",
    heading2:'"Lunar New Year"',
    paragraph1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio odio quisquam rerum velit, impedit inventore aliquam culpa cupiditate laborum quia dolor recusandae sapiente quasi, incidunt cum temporibus quas voluptates ullam debitis praesentium deleniti animi mollitia. Repellendus laboriosam nulla velit numquam? Aliquid aliquam tempore eveniet tempora molestias excepturi quia eos illum?",

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
    paragraph1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio odio quisquam rerum velit, impedit inventore aliquam culpa cupiditate laborum quia dolor recusandae sapiente quasi, incidunt cum temporibus quas voluptates ullam debitis praesentium deleniti animi mollitia. Repellendus laboriosam nulla velit numquam? Aliquid aliquam tempore eveniet tempora molestias excepturi quia eos illum?",

}
  ]);

  const [State5] = useState([
    {key:"",
    img:gold3,
    img1:goldmod,
    text1:"# SF-AF1",
    text2:'"test"',
    heading:"Abou",
    heading2:'"A COLD WALL"',
    paragraph1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio odio quisquam rerum velit, impedit inventore aliquam culpa cupiditate laborum quia dolor recusandae sapiente quasi, incidunt cum temporibus quas voluptates ullam debitis praesentium deleniti animi mollitia. Repellendus laboriosam nulla velit numquam? Aliquid aliquam tempore eveniet tempora molestias excepturi quia eos illum?",

}
  ]);
  

  return (
    <div className="App" >
            <Landingpage/>

            {State3.map((data, index) => (
            <Parallax2
             key={index} 
             color="#828884" 
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
               <Parallax/>
      {State1.map((data, index) => (
            <Parallax2
             key={index} 
             color="#141414" 
             Hcolor="#f32c2c"
             Tcolor="#f4f8ff"
             img={data.img} 
             img1={data.img1} 
             text1={data.text1} 
             T1="#141414" 
             text2={data.text2} 
             T2="#f32c2c" 
             heading={data.heading}
             heading2={data.heading2}  
             paragraph1={data.paragraph1}
              />))}

<Parallax/>
      {State5.map((data, index) => (
            <Parallax2 
            key={index} 
            color="#c6480e" 
            Hcolor="#ffffff" 
            Tcolor="#f4f8ff" 
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
     <Parallax/>
    {State2.map((data, index) => (
            <Parallax2 
            key={index} 
            color="#293746" 
            Hcolor="#e8c530" 
            Tcolor="#f4f8ff" 
            img={data.img} 
            img1={data.img1} 
            text1={data.text1} 
            T1="#f4f8ff" 
            text2={data.text2} 
            T2="#e2b62d" 
            heading={data.heading}
            heading2={data.heading2}  
            paragraph1={data.paragraph1} 
            />))}

          

   

    </div>
  );
}

export default App;
