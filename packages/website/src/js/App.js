import React from 'react';
import Onboarding from '@raise/onboarding';
import Lottie from 'react-lottie';
import animationData from '../animations/Farolillos_01.json';
//import Anime from 'react-anime'

import '../css/main.css';

import logoSVG from '../svg/logo.svg';

//- City
import cityCloudsSVG from '../svg/city_clouds.svg';
import cityBuildingsFarSVG from '../svg/city_buildings_far.svg';
import cityBuildingsNearSVG from '../svg/city_buildings_near.svg';

//- Sky
import skyStarsSVG from '../svg/sky_stars.svg';
import skyStelaSVG from '../svg/sky_stela.svg';
import skyPlanetsSVG from '../svg/sky_planets.svg';
import skyRocketSVG from '../svg/sky_rocket.svg';

//- Segments
import segment1 from '../svg/segment_1.svg';
import segment2 from '../svg/segment_1.svg';
import segment3 from '../svg/segment_1.svg';
import segment4 from '../svg/segment_1.svg';
import segment5 from '../svg/segment_1.svg';

let WIDTH = 100,
  HEIGHT = 100,
  isMobile = false;

const maxSm = 768,
  maxMd = 1024,
  maxLg = 1280;

let lastScrollY = 0,
  lastScrollY2 = 0,
  totalHeight = 0,
  difScroll = 0,
  percentScroll = 0,
  scrollVel = 1000,
  totalFramesLanterns = 0,
  maxTopLanterns = 1000;

//- Elements
let body,
  sections,
  mainEl,
  header,
  cityClouds,
  cityBuildingsFar,
  cityBuildingsNear,
  skyStars,
  skyStela,
  skyPlanets,
  skyRocket,
  floatElements,
  skyLanterns;

//-
class App extends React.Component {
  state = {
    open: false
  };

  constructor(props) {
    super(props);
    this.skyLanternsAnim = React.createRef();
  }

  resizeWindow() {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    totalHeight = sections.offsetHeight;
    maxTopLanterns = HEIGHT * 0.56;
    //-
    isMobile = WIDTH <= maxSm;
    console.log(`Mobile: ${isMobile} / ${WIDTH} / Total height: ${totalHeight}`);
    //-
    this.handleScroll(null);
  }

  componentDidMount() {
    body = document.body;
    sections = document.querySelector('#sections');
    mainEl = document.querySelector('main');
    header = document.querySelector('main > header');
    //- City
    cityClouds = document.querySelector('#city #clouds');
    cityBuildingsFar = document.querySelector('#city #buildings-far');
    cityBuildingsNear = document.querySelector('#city #buildings-near');
    //-Sky
    skyStars = document.querySelector('#sky #stars');
    skyStela = document.querySelector('#sky #stela');
    skyPlanets = document.querySelector('#sky #planets');
    skyRocket = document.querySelector('#sky #rocket');
    //-
    floatElements = document.querySelector('#background #floating-elements');
    skyLanterns = this.skyLanternsAnim.current.el;

    totalFramesLanterns = animationData.op;
    //-
    this.resizeWindow();
    mainEl.addEventListener('scroll', this.handleScroll);

    if (
      this.props.history.location.pathname.includes('/join') ||
      this.props.history.location.pathname.includes('/login')
    ) {
      this.setState({ open: true });
      this.props.history.push('join');
    }
  }

  componentWillUnmount() {
    mainEl.removeEventListener('scroll', this.handleScroll);
  }

  toggleOnboarding = () => this.setState(state => ({ open: !state.open }));

  handleScroll = e => {
    lastScrollY = mainEl.scrollTop;
    lastScrollY2 = lastScrollY + HEIGHT;
    difScroll = totalHeight - lastScrollY2;
    percentScroll = 1.165 - lastScrollY2 / (totalHeight - HEIGHT);
    if (percentScroll < 0) {
      //percentScroll = 0;
    }
    // console.log( percentScroll.toFixed(2), lastScrollY.toFixed(1), difScroll.toFixed(1) );
    //console.log( percentScroll );

    //- City
    cityClouds.style.transform = `translateY(${Math.round(difScroll * -2 + difScroll * 1.3)}px)`;
    cityBuildingsFar.style.transform = `translateY(${Math.round(difScroll * -2 + difScroll * 1.4)}px)`;
    cityBuildingsNear.style.transform = `translateY(${Math.round(difScroll * -2 + difScroll * 1.55)}px)`;

    //- Sky
    const topSky = lastScrollY * 2 + 90;
    skyStars.style.transform = `translateY(${Math.round(topSky - lastScrollY * 1.3)}px)`;
    skyStela.style.transform = `translateY(${Math.round(topSky - lastScrollY * 1.4)}px)`;
    skyPlanets.style.transform = `translateY(${Math.round(topSky - lastScrollY * 1.55)}px)`;
    skyRocket.style.transform = `translateY(${Math.round(topSky - lastScrollY * 1.8)}px)`;

    //- Float elements
    floatElements.style.transform = `translateY(${Math.round(percentScroll * HEIGHT * 2)}px)`;

    //- Sky lanterns
    const frame = Math.round(totalFramesLanterns * percentScroll);
    this.skyLanternsAnim.current.anim.goToAndStop(frame, true);
    //-
    if (lastScrollY > maxTopLanterns) {
      skyLanterns.classList.add('fixed');
      skyLanterns.style.top = `0px`;
    } else {
      skyLanterns.classList.remove('fixed');
      skyLanterns.style.top = `${maxTopLanterns}px`;
    }
    // console.log( frame );
    //-

    //- header
    if (percentScroll > 0.1) {
      header.classList.add('visible');
    } else {
      header.classList.remove('visible');
    }
  };

  onOpenLogin = () => {
    this.toggleOnboarding();
    this.props.history.push('login');
  };

  onOpenSignUp = () => {
    this.toggleOnboarding();
    this.props.history.push('join');
  };

  render() {
    setTimeout(function() {
      mainEl.scrollTo(0, 999999999999);
      body.classList.add('visible');
    }, scrollVel);

    return (
      <main>
        <Onboarding
          blur={false}
          open={this.state.open}
          history={this.props.history}
          closeButton
          onClose={this.toggleOnboarding}
        />
        <header>
          <div className="content">
            <img src={logoSVG} id="logo-raise" alt="Raise logo" />
            <div className="buttons">
              <button id="login" className="white" onClick={this.onOpenLogin}>
                Log In
              </button>
              <button id="signup" className="lp-get-started" onClick={this.onOpenSignUp}>
                Sign Up
              </button>
            </div>
          </div>
        </header>

        <div id="background">
          <div id="floating-elements">
            <img src={segment1} className="segment" id="segment1" />
            <img src={segment2} className="segment" id="segment2" />
            <img src={segment3} className="segment" id="segment3" />
            <img src={segment4} className="segment" id="segment4" />
            <img src={segment5} className="segment" id="segment5" />
          </div>

          <section id="footer">
            <div id="sky">
              <img src={skyStarsSVG} className="layer" id="stars" alt="stars" />
              <img src={skyStelaSVG} className="layer" id="stela" alt="stela" />
              <img src={skyPlanetsSVG} className="layer" id="planets" alt="planets" />
              <img src={skyRocketSVG} className="layer" id="rocket" alt="rocket" />
            </div>
          </section>
          <section id="keypoints" />
          <section id="testimonials" />
          <section id="borrow" />
          <section id="lender" />
          <section id="how" />
          <section id="home">
            <div id="city">
              <img src={cityCloudsSVG} className="layer" id="clouds" alt="clouds" />
              <img src={cityBuildingsFarSVG} className="layer" id="buildings-far" alt="buildings-far" />
              <img src={cityBuildingsNearSVG} className="layer" id="buildings-near" alt="buildings-near" />
            </div>
          </section>
        </div>

        <Lottie
          ref={this.skyLanternsAnim}
          options={{
            loop: false,
            autoplay: false,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }}
        />

        <div id="sections">
          <section id="home">
            <div className="content">
              <h1>The only marketplace that makes your money grow</h1>
              <h4>Access to all the loan offers and invest in the ones that match your preferences</h4>
              <button className="colored" onClick={this.toggleOnboarding}>
                Get Early Acces
              </button>
            </div>
          </section>

          <section id="how">
            <div className="content">
              <h1>How does it work</h1>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, tenetur esse enim nisi id officiis
                fugit quia quasi, repellat laudantium earum sapiente corporis veritatis neque voluptas, eos qui minus
                reprehenderit?
              </h4>
              <div id="infography" />
            </div>
          </section>

          <section id="lender">
            <h1>Your Money, Your Rules</h1>

            <div className="cards">
              <div className="card">
                <picture />
                <div className="text">
                  <h4>Access compelling investment options via the Raise marketplace</h4>
                </div>
              </div>

              <div className="card">
                <picture />
                <div className="text">
                  <h4>Pick interest rates that are attractive to you</h4>
                </div>
              </div>

              <div className="card">
                <picture />
                <div className="text">
                  <h4>Seal the agreement through our on-chain loan protocol</h4>
                </div>
              </div>
            </div>

            <button className="colored" onClick={this.toggleOnboarding}>
              Get Early Acces
            </button>
          </section>

          <section id="borrow">
            <div className="content">
              <h1>Shape your loan</h1>

              <div className="columns">
                <div className="column" id="col-1">
                  <h3>Get the credit you need at a price that makes everyone happy</h3>
                  <button className="colored" onClick={this.toggleOnboarding}>
                    Request Loan
                  </button>
                </div>
                <div className="column" id="col-2">
                  <picture />
                </div>
              </div>
            </div>
          </section>

          <section id="testimonials">
            <h1>What they say about us</h1>
            <div className="cards">
              <div className="card">
                <p className="quote">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, tenetur esse enim nisi id officiis
                  fugit quia quasi.
                </p>
              </div>

              <div className="card">
                <p className="quote">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, tenetur esse enim nisi id officiis
                  fugit quia quasi.
                </p>
              </div>

              <div className="card">
                <p className="quote">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, tenetur esse enim nisi id officiis
                  fugit quia quasi.
                </p>
              </div>
            </div>
          </section>

          <section id="keypoints">
            <h1>How to get started?</h1>

            <div className="cards">
              <div className="card">
                <picture />
                <p>Run one of the following browsers: Firefox, Chrome, Opera or Brave</p>
              </div>

              <div className="card">
                <picture />
                <p>Get a digital wallet like MetaMask</p>
              </div>

              <div className="card">
                <picture />
                <p>Acquire Hero Tokens, you will need them to access Raise</p>
              </div>
            </div>

            <button className="colored" onClick={this.toggleOnboarding}>
              Get Early Acces
            </button>
            <a href="#">Learn More</a>
          </section>

          <footer>
            <div className="content">
              <nav>
                <a href="#">Help</a>
                <a href="#">About us</a>
                <a href="#">Contact</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of service</a>
              </nav>
            </div>
          </footer>
        </div>
      </main>
    );
  }
}

export default App;
