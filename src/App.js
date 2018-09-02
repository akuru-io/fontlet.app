import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import img from './Assets/image/bg.jpg';
import ReactSVG from 'react-svg';
import fontletLogo from './Assets/image/fontCase_round_background_animated.svg'
import fl1 from './Assets/image/fl1.png';

import fl4 from './Assets/image/hhh.png';

import icon1 from './Assets/image/1.png';
import icon2 from './Assets/image/2.png';
import icon3 from './Assets/image/3.png';


const Wrapepr = styled.div`
width:100%;
height:100%;
background-color: white;
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
height:60vw;
border-radius:2px;
`;

const Content = styled.div`
width:100%;
`;

const Text= styled.p`
font-size:19px;
color:#222;
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
border-radius:2px;fl4
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
color:#222;
font-size:15px;
`;


const Download = styled.p`
font-size:25px;
color:white;
font-weight:bold;
`;

const DownloadWrapper =styled.div`
margin-top:20px;
display:flex;
width:100%;
justify-content:center;
align-items:center;
`;

const AboutWrapper = styled.div`
display:flex;
flex-direction:row;
align-items:center;
width:55%;
padding-top:80px;
`;

const About= styled.p`
font-size:19px;
color:#222;
text-align:center;
font-family: sans-serif;
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
              Fontlet brings you the latest and greatest free and open source fonts right to your computer!

              Also Fontlet will keep your fonts fresh by automatically updating them to fit the latest versions and even try out Beta versions before anybody else does!

             </Text>
            </TextWrapper>


          <ImageWrapper>

           <Image src={fl1}/>


         </ImageWrapper>




<AboutWrapper>
<About>
Fontlet is a free software project led by a community who loves libre fonts. <br></br><br></br>
Fontlet is in its early ALPHA stage and might have errors and bugs. You can install and register on the app to recive more updates on the development.

</About>
</AboutWrapper>




   <DownloadWrapper>
      <Download>DOWNLOAD</Download>
      </DownloadWrapper>


          <ImageWrappe2>






      <IconWrapper>
        <Button1 href="https://github.com/fontlet/fontlet-explorer/releases/download/v0.0.28-alpha/FontLet-Setup-0.0.28-alpha.exe"><Icon src={icon1}/></Button1>
        <Button href="https://github.com/fontlet/fontlet-explorer/releases/download/v0.0.28-alpha/FontLet-0.0.28-alpha-x86_64.AppImage"><Icon src={icon2}/></Button>
        <Button href="https://github.com/fontlet/fontlet-explorer/releases/download/v0.0.28-alpha/FontLet-0.0.28-alpha.dmg"><Icon src={icon3}/></Button>

</IconWrapper>


    </ImageWrappe2>




     <Footer>
<Copyright href="https://leafycode.com/">

  Initial development of Fontlet is supported by Mooniak, LeafyCode and HostGrid.

  Made with love by LeafyCode & Mooniak</Copyright>

     </Footer>
      </Wrapepr>
    );
  }
}

export default App;
