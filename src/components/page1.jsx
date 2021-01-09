import React, {Component} from 'react';
import styled from 'styled-components';
import zafs from '../images/zafs.jpg'

const Container = styled.div`
min-width: 100vw;
height: 100%;
display:flex;
@media (min-width: 1px) and (max-width: 426px) {
 flex-direction:column
}
`

const LeftContainer = styled.div`
width: 33.3%;
height: 100vh;
display:flex;
flex-direction:column
@media (min-width: 426px) and (max-width: 768px) {
  width: 33%;
 }
`

const TopBox = styled.div`
width:100%;
height: 50vh;
@media (min-width: 1px) and (max-width: 426px) {
  width: 100vw;
}
`

const BottomBox = styled.div`
width:100%;
height: 50vh;
background-size:100% 100%;
overflow-y: auto;
background:#1f1f1f;
@media  (min-width: 1px) and (max-width: 426px) {
  width: 100vw;
}
`

const BottomBoxText = styled.p`
color:white;
overflow-wrap: break-word;
padding:20px 20px;
line-height:22px;
margin: 0;
@media  (min-width: 1px) and (max-width: 426px) {
  padding:20px 20px;
}
@media (min-width: 426px) and (max-width: 768px) {
  padding:20px 20px;
 }
`

const RightContainer = styled.div`
  width: 70%;
  height: 100vh;
  float:right;
  position:relative;
@media  (min-width: 1px) and (max-width: 426px) {
  width: 100vw;
}
@media (min-width: 426px) and (max-width: 768px) {
  width: 100%;
 }

`

const Figure = styled.figure`
width: auto;
    height: 100%;
    position: relative;
    margin:0px;
`
const FigureCaption = styled.figcaption`
background-color: #1f1f1f;
font: italic smaller sans-serif;
color: #fff;
padding: 3px;
text-align: center;
position: absolute;
bottom: 0px;
width: auto;
padding: 20px;
`
const RightContainerFigureCaption = styled.figcaption`
background-color: #1f1f1f;
font: italic smaller sans-serif;
color: #fff;
padding: 3px;
text-align: left;
position: absolute;
top: 0px;
width: 17%;
padding: 20px;
`
const FigureImg = styled.img`
width: 100%;
height: 100%;
`

class Page1 extends Component {

render() {
 
    return (
      
      <Container color={this.props.color}>
 
        
        <LeftContainer>

          <TopBox>
          <Figure>
            <FigureImg src={zafs}
            alt="Elephant at sunset"/>
          <FigureCaption>An elephant at sunset</FigureCaption>
          </Figure>
          </TopBox>

          <BottomBox>
            <BottomBoxText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, non. Deserunt, a aut explicabo dicta consectetur nesciunt commodi praesentium reiciendis deleniti. Praesentium consectetur fugiat facere ut quidem ipsa itaque recusandae provident, impedit numquam quam dicta, voluptate totam rem ad magni est, tenetur quod nisi doloremque odit? Officiis eaque eius asperiores velit animi quas, nostrum neque, ex sed nisi commodi, sequi adipisci laborum accusamus nobis natus recusandae deserunt architecto explicabo consectetur vitae maiores! Quia, ipsum eveniet officia veniam optio ducimus. Cumque perspiciatis, dignissimos laborum consectetur dicta, facere voluptatem minus repellendus a dolores ipsa nihil in illo, qui quae rerum. Cum voluptatibus inventore magni, vel fugit ipsa sit et magnam commodi laborum saepe odio corporis eaque distinctio pariatur neque ut nisi ab. Placeat officiis, tempora fugit quis hic nulla adipisci, excepturi neque vero culpa, suscipit pariatur sint incidunt sequi et! Libero minima ipsa qui quibusdam obcaecati! Quasi ut modi </BottomBoxText>
          </BottomBox>

        </LeftContainer>

        <LeftContainer>
        <BottomBox>
  <BottomBoxText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, non. Deserunt, a aut explicabo dicta consectetur nesciunt commodi praesentium reiciendis deleniti. Praesentium consectetur fugiat facere ut quidem ipsa itaque recusandae provident, impedit numquam quam dicta, voluptate totam rem ad magni est, tenetur quod nisi doloremque odit? Officiis eaque eius asperiores velit animi quas, nostrum neque, ex sed nisi commodi, sequi adipisci laborum accusamus nobis natus recusandae deserunt architecto explicabo consectetur vitae maiores! Quia, ipsum eveniet officia veniam optio ducimus. Cumque perspiciatis, dignissimos laborum consectetur dicta, facere voluptatem minus repellendus a dolores ipsa nihil in illo, qui quae rerum. Cum voluptatibus inventore magni, vel fugit ipsa sit et magnam commodi laborum saepe odio corporis eaque distinctio pariatur neque ut nisi ab. Placeat officiis, tempora fugit quis hic nulla adipisci, excepturi neque vero culpa, suscipit pariatur sint incidunt sequi et! Libero minima ipsa qui quibusdam obcaecati! Quasi ut modi </BottomBoxText>
</BottomBox>
<TopBox>
<Figure>
  <FigureImg src={zafs}
  alt="Elephant at sunset"/>
<FigureCaption>An elephant at sunset</FigureCaption>
</Figure>
</TopBox>



</LeftContainer>

<LeftContainer>

<TopBox>
<Figure>
  <FigureImg src={zafs}
  alt="Elephant at sunset"/>
<FigureCaption>An elephant at sunset</FigureCaption>
</Figure>
</TopBox>

<BottomBox>
  <BottomBoxText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, non. Deserunt, a aut explicabo dicta consectetur nesciunt commodi praesentium reiciendis deleniti. Praesentium consectetur fugiat facere ut quidem ipsa itaque recusandae provident, impedit numquam quam dicta, voluptate totam rem ad magni est, tenetur quod nisi doloremque odit? Officiis eaque eius asperiores velit animi quas, nostrum neque, ex sed nisi commodi, sequi adipisci laborum accusamus nobis natus recusandae deserunt architecto explicabo consectetur vitae maiores! Quia, ipsum eveniet officia veniam optio ducimus. Cumque perspiciatis, dignissimos laborum consectetur dicta, facere voluptatem minus repellendus a dolores ipsa nihil in illo, qui quae rerum. Cum voluptatibus inventore magni, vel fugit ipsa sit et magnam commodi laborum saepe odio corporis eaque distinctio pariatur neque ut nisi ab. Placeat officiis, tempora fugit quis hic nulla adipisci, excepturi neque vero culpa, suscipit pariatur sint incidunt sequi et! Libero minima ipsa qui quibusdam obcaecati! Quasi ut modi </BottomBoxText>
</BottomBox>

</LeftContainer>

<LeftContainer>
        <BottomBox>
  <BottomBoxText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, non. Deserunt, a aut explicabo dicta consectetur nesciunt commodi praesentium reiciendis deleniti. Praesentium consectetur fugiat facere ut quidem ipsa itaque recusandae provident, impedit numquam quam dicta, voluptate totam rem ad magni est, tenetur quod nisi doloremque odit? Officiis eaque eius asperiores velit animi quas, nostrum neque, ex sed nisi commodi, sequi adipisci laborum accusamus nobis natus recusandae deserunt architecto explicabo consectetur vitae maiores! Quia, ipsum eveniet officia veniam optio ducimus. Cumque perspiciatis, dignissimos laborum consectetur dicta, facere voluptatem minus repellendus a dolores ipsa nihil in illo, qui quae rerum. Cum voluptatibus inventore magni, vel fugit ipsa sit et magnam commodi laborum saepe odio corporis eaque distinctio pariatur neque ut nisi ab. Placeat officiis, tempora fugit quis hic nulla adipisci, excepturi neque vero culpa, suscipit pariatur sint incidunt sequi et! Libero minima ipsa qui quibusdam obcaecati! Quasi ut modi </BottomBoxText>
</BottomBox>
<TopBox>
<Figure>
  <FigureImg src={zafs}
  alt="Elephant at sunset"/>
<FigureCaption>An elephant at sunset</FigureCaption>
</Figure>
</TopBox>



</LeftContainer>

      </Container>
  );
  }
}

export default Page1;
