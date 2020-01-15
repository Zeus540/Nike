import React ,{useState} from 'react';
import './App.css';
import Nav from './components/Nav.jsx'
import Parallax from './components/parallax.jsx'
import Parallax2 from './components/parallax2.jsx'
import af1 from './images/Nike-x-Carhartt-WIP-Air-Force-1-Low-_57.jpg'
import af2 from './images/maksim-larin-Ai356rggKvw-unsplash.jpg';
import gold from './images/fsdfsfsd.jpg'
import gold1 from './images/nike-sf-air-force-1-high-desert-ochre-903270-778-mood-2.jpg'



function App() {

  const [State1] = useState([
    {key:"",
    img:af1,
    img1:af2,
    heading:"About M",
    paragraph1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio odio quisquam rerum velit, impedit inventore aliquam culpa cupiditate laborum quia dolor recusandae sapiente quasi, incidunt cum temporibus quas voluptates ullam debitis praesentium deleniti animi mollitia. Repellendus laboriosam nulla velit numquam? Aliquid aliquam tempore eveniet tempora molestias excepturi quia eos illum?",

}
  ]);

  const [State2] = useState([
    {key:"",
    img:gold,
    img1:gold1,
    heading:"About ",
    paragraph1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio odio quisquam rerum velit, impedit inventore aliquam culpa cupiditate laborum quia dolor recusandae sapiente quasi, incidunt cum temporibus quas voluptates ullam debitis praesentium deleniti animi mollitia. Repellendus laboriosam nulla velit numquam? Aliquid aliquam tempore eveniet tempora molestias excepturi quia eos illum?",

}
  ]);

  const [State3] = useState([
    {key:"",
    img:af1,
    img1:af1,
    heading:"Abou",
    paragraph1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio odio quisquam rerum velit, impedit inventore aliquam culpa cupiditate laborum quia dolor recusandae sapiente quasi, incidunt cum temporibus quas voluptates ullam debitis praesentium deleniti animi mollitia. Repellendus laboriosam nulla velit numquam? Aliquid aliquam tempore eveniet tempora molestias excepturi quia eos illum?",

}
  ]);

  return (
    <div className="App" >
      <Nav id="Nav"/> 
      <Parallax/>
      {State1.map((data, index) => (
            <Parallax2 key={index} img={data.img} img1={data.img1} heading={data.heading} paragraph1={data.paragraph1} />))}

      <Parallax/>
      {State2.map((data, index) => (
            <Parallax2 key={index} img={data.img} img1={data.img1} heading={data.heading} paragraph1={data.paragraph1} />))}
      <Parallax/>
      {State3.map((data, index) => (
            <Parallax2 key={index} img={data.img} img1={data.img1} heading={data.heading} paragraph1={data.paragraph1} />))}
   
    </div>
  );
}

export default App;
