import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import img from './Assets/image/bg.jpg';
import ReactSVG from 'react-svg';
import fontletLogo from './Assets/image/fontCase_round_background_animated.svg'
import fl1 from './Assets/image/fl1.png';
import fl2 from './Assets/image/fl2.png';
import fl3 from './Assets/image/fl4.png';

import icon1 from './Assets/image/1.png';
import icon2 from './Assets/image/2.png';
import icon3 from './Assets/image/3.png';


const Wrapepr = styled.div`
width:100%;
height:100%;
background-color: orange;
margin:0px;
padding:0px;
/* background-image: url(${img}); */
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`;
 
const LogoWrapper = styled.div`
margin-top:100px;
display:flex;
justify-content:center;
align-items:center;
`;


const ImageWrapper = styled.div`
width:85%;
padding-top:10px;
padding-bottom:10px;
margin-top:100px;
display:flex;
justify-content:center;
align-items:center;
`;


const ImageWrappe2 = styled.div`
width:85%;
padding-top:10px;
padding-bottom:10px;

display:flex;
justify-content:center;
align-items:center;
`;


const Image = styled.img`
height:100%;
border:2px solid #e0d8d8;
border-radius:2px;
`;

const Content = styled.div`
width:100%;
`;

const Text= styled.p`
font-size:19px;
color:#f7f7f7;
text-align:center;
font-family: sans-serif;
`;

const TextWrapper = styled.div`
margin-top:100px;
display:flex;
justify-content:center;
align-items:center;
width:70%;
`;

const Icon = styled.img`
height:50px;
width:50px;
`;


const Button = styled.a`
margin-left:40px;
background-color:transparent;
border:0px;
display:flex;
justify-content:center;
align-items:center;
padding:10px;
border-radius:2px;
  &:hover {
    background: #f2f2f2;
  }
`;

const Button1 = styled.a`
background-color:transparent;
border:0px;
display:flex;
justify-content:center;
align-items:center;
padding:10px;
border-radius:2px;
  &:hover {
    background: #f2f2f2;
  }
`;


const IconWrapper = styled.div`
width:100%;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`;


const Footer = styled.div`
height:100px;
width:90%;
display:flex;
margin-top:100px;
justify-content:flex-end;
align-items:center;
`;

const Copyright = styled.a`
font-family: sans-serif;
text-decoration: none;
color:#f7f7f7;
font-size:15px;
`;


const Download = styled.p`
font-size:25px;
color:white;
font-weight:bold;
`;

const DownloadWrapper =styled.div`
margin-top:100px;
display:flex;
width:100%;
justify-content:center;
align-items:center;
`;

class App extends Component {
  render() {
    return (
      <Wrapepr>
      <LogoWrapper>
            <ReactSVG
            src={fontletLogo}
            evalScripts="once"
            svgStyle={{ width: 170 }}
          />
         </LogoWrapper>



            <TextWrapper>
              <Text>
              Fontcase brings you the latest and greatest free and open source fonts right to your computer! Fontcase keeps your fonts fresh by automatically updating them to fit the latest versions and even try out Beta versions before anybody else does!

Right now Fontcase is in its early stages, but you can register now using your email to get updates.
             </Text>
            </TextWrapper>
             
             
          <ImageWrapper>
      
           <Image src={fl1}/>
             
         
         </ImageWrapper>

  

   <DownloadWrapper>
      <Download>DOWNLOAD</Download>
      </DownloadWrapper>

 
          <ImageWrappe2>
    

   

       
    
      <IconWrapper>
        <Button1 href="https://github.com/fontcase/fontcase-explorer/releases"><Icon src={icon1}/></Button1>
        <Button href="https://github.com/fontcase/fontcase-explorer/releases"><Icon src={icon2}/></Button>
        <Button href="https://github.com/fontcase/fontcase-explorer/releases"><Icon src={icon3}/></Button>

</IconWrapper>


    </ImageWrappe2>

      

         
     <Footer>
<Copyright href="https://leafycode.com/">Made with love by LeafyCode & Mooniak</Copyright>

     </Footer>
      </Wrapepr>
    );
  }
}

export default App;


