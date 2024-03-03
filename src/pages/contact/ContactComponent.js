import React, { Component, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import BlogsImg from "./BlogsImg";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;



class Contact extends Component {
  render() {
    const theme = this.props.theme;
    const labels = [
      'The Elder Scrolls 5: Skyrim',
      'Tomb Raider (2013)',
      'Civilization V',
      'Valorant',
      'Sekiro: Shadows Die Twice',
      'Need for Speed: Most Wanted (2012)',
      'Pokemon Emerald',
      'Dragon Ball Z: Budokai Tenkaichi 3',
      'Mount & Blade Warband',
      'Gangsters 2: Vendetta',
      'Stardew Valley',
      'Burnout Paradise',
      'Neo Bomberman',
      'Red Alert 2: Yuri\'s Revenge',
      'Batman: Arkham Knight',
      'Beyblade G-Revolution',
      'Call of Duty 4: Modern Warfare Promod',
      'Icy Tower',
      'Pokemon Gold',
      'Neighbours from Hell',
      'Commandos: Behind Enemy Lines',
      'The Urbz: Sims in the City',
      'Virtua Cop 2',
      'Dangerous Dave',
      'Heavy Weapon',
      'Cities: Skylines',
      'Magic Farm',
      'Dragon Ball Z: Legacy of Goku II',
      'Stranded II',
      'Naruto Shippūden: Ultimate Ninja 5',
      'Jardinains!',
      'Harry Potter and the Chamber of Secrets',
      'Learn 2 Fly',
      'Clash Royale',
      'Pokemon FireRed',
      'Tomb Raider 2: Dagger of Xian',
      'Chicken Invaders 4: Ultimate Omellete',
      'Metal Slug 2',
      'Plants vs. Zombies',
      'The Sims 3',
      'Portal',
      'Theme Park',
      'Midtown Madness 2',
      'Diner Dash 2: Restaurant Rescue',
      'Insaniquarium',
    ];

    const linkedInBadge = `
    <head>
      <style>
      .artdeco-entity-image{display:inline-block;-ms-flex-negative:0;flex-shrink:0}.artdeco-entity-image--circle-1{width:32px;height:32px;-webkit-box-sizing:border-box;box-sizing:border-box;background-clip:content-box;border:3px solid rgba(0,0,0,0);border-radius:49.9%}.artdeco-entity-image--square-1{width:32px;height:32px;-webkit-box-sizing:border-box;box-sizing:border-box;background-clip:content-box;border:4px solid rgba(0,0,0,0);border-radius:6px}.artdeco-entity-image--circle-2{width:40px;height:40px;-webkit-box-sizing:border-box;box-sizing:border-box;background-clip:content-box;border:3px solid rgba(0,0,0,0);border-radius:49.9%}.artdeco-entity-image--square-2{width:40px;height:40px;-webkit-box-sizing:border-box;box-sizing:border-box;background-clip:content-box;border:4px solid rgba(0,0,0,0);border-radius:6px}.artdeco-entity-image--circle-3{width:48px;height:48px;-webkit-box-sizing:border-box;box-sizing:border-box;background-clip:content-box;border:2px solid rgba(0,0,0,0);border-radius:49.9%}.artdeco-entity-image--square-3{width:48px;height:48px;-webkit-box-sizing:border-box;box-sizing:border-box;background-clip:content-box;border:4px solid rgba(0,0,0,0);border-radius:6px}.artdeco-entity-image--circle-4{width:56px;height:56px;-webkit-box-sizing:border-box;box-sizing:border-box;background-clip:content-box;border:2px solid rgba(0,0,0,0);border-radius:49.9%}.artdeco-entity-image--square-4{width:56px;height:56px;-webkit-box-sizing:border-box;box-sizing:border-box;background-clip:content-box;border:4px solid rgba(0,0,0,0);border-radius:6px}.artdeco-entity-image--circle-5{width:72px;height:72px;-webkit-box-sizing:border-box;box-sizing:border-box;background-clip:content-box;border:1px solid rgba(0,0,0,0);border-radius:49.9%}.artdeco-entity-image--square-5{width:72px;height:72px;-webkit-box-sizing:border-box;box-sizing:border-box;background-clip:content-box;border:4px solid rgba(0,0,0,0);border-radius:6px}.artdeco-entity-image--circle-6{width:88px;height:88px;-webkit-box-sizing:border-box;box-sizing:border-box;background-clip:content-box;border:1px solid rgba(0,0,0,0);border-radius:49.9%}.artdeco-entity-image--square-6{width:88px;height:88px;-webkit-box-sizing:border-box;box-sizing:border-box;background-clip:content-box;border:4px solid rgba(0,0,0,0);border-radius:6px}.artdeco-entity-image--circle-7{width:104px;height:104px;-webkit-box-sizing:border-box;box-sizing:border-box;background-clip:content-box;border:0px solid rgba(0,0,0,0);border-radius:49.9%}.artdeco-entity-image--square-7{width:104px;height:104px;-webkit-box-sizing:border-box;box-sizing:border-box;background-clip:content-box;border:4px solid rgba(0,0,0,0);border-radius:6px}.artdeco-entity-image--circle-8{width:128px;height:128px;-webkit-box-sizing:border-box;box-sizing:border-box;background-clip:content-box;border:0px solid rgba(0,0,0,0);border-radius:49.9%}.artdeco-entity-image--square-8{width:128px;height:128px;-webkit-box-sizing:border-box;box-sizing:border-box;background-clip:content-box;border:4px solid rgba(0,0,0,0);border-radius:6px}.artdeco-entity-image--ghost{background-color:#b3b6b9}
        .profile-badge{
          background-color:#fff;
          border-radius:8px;
          overflow:hidden;
          -webkit-box-shadow:0px -1px 1px rgba(0,0,0,0.08),1px 0px 1px rgba(0,0,0,0.08),-1px 0px 1px rgba(0,0,0,0.08),0px 1px 1px rgba(0,0,0,0.08);
          box-shadow:0px -1px 1px rgba(0,0,0,0.08),1px 0px 1px rgba(0,0,0,0.08),-1px 0px 1px rgba(0,0,0,0.08),0px 1px 1px rgba(0,0,0,0.08);
          padding:0
        }
        .profile-badge--width-250{
          width:250px
        }
        .profile-badge--width-280{
          width:280px
        }
          .profile-badge--width-300{width:300px}.profile-badge--width-330{width:330px}.profile-badge--light{background-color:#fff;color:#000}.profile-badge--dark{background-color:#000;color:#fff}
        .profile-badge__header{
          padding:12px 16px
        }
        .profile-badge__header--light{
          background-color:#e9e5df
        }
        .profile-badge__header--dark{
          background-color:#38434f
        }
        .profile-badge__header-logo-icon{
          width:84px;height:21px;display:inline-block
        }
        .profile-badge__header-logo-icon--light{
          color:#0a66c2
        }
        .profile-badge__header-logo-icon--dark{
          color:#fff
        }
        .profile-badge__content{padding:0 16px}.profile-badge__content-profile-image{margin:12px 0 8px}.profile-badge__content-profile-name{padding:0 0 4px;color:inherit}.profile-badge__content-profile-name-link{font-size:1.6rem;line-height:1.5;font-weight:600;color:rgba(0,0,0,0.9);color:inherit}.profile-badge__content-profile-name-link--dark:focus,.profile-badge__content-profile-name-link--dark:hover,.profile-badge__content-profile-name-link--dark:active{color:#fff}.profile-badge__content-profile-name-link--dark:visited,.profile-badge__content-profile-name-link--dark:visited:active,.profile-badge__content-profile-name-link--dark:visited:focus,.profile-badge__content-profile-name-link--dark:visited:hover{color:#fff}.profile-badge__content-profile-name-link--light:focus,.profile-badge__content-profile-name-link--light:hover,.profile-badge__content-profile-name-link--light:active{color:#000}.profile-badge__content-profile-name-link--light:visited,.profile-badge__content-profile-name-link--light:visited:active,.profile-badge__content-profile-name-link--light:visited:focus,.profile-badge__content-profile-name-link--light:visited:hover{color:#000}.profile-badge__content-profile-headline{padding:0 0 4px;font-size:1.4rem;line-height:1.42857;font-weight:400;color:rgba(0,0,0,0.9);color:inherit}.profile-badge__content-profile-company-school-info{padding:0 0 4px;font-size:1.2rem;line-height:1.33333;font-weight:400;color:rgba(0,0,0,0.6);color:inherit}.profile-badge__content-profile-company-school-info-link{font-size:1.2rem;line-height:1.33333;font-weight:400;color:rgba(0,0,0,0.6);color:inherit}.profile-badge__content-profile-company-school-info-link--dark:focus,.profile-badge__content-profile-company-school-info-link--dark:hover,.profile-badge__content-profile-company-school-info-link--dark:active{color:#fff}.profile-badge__content-profile-company-school-info-link--dark:visited,.profile-badge__content-profile-company-school-info-link--dark:visited:active,.profile-badge__content-profile-company-school-info-link--dark:visited:focus,.profile-badge__content-profile-company-school-info-link--dark:visited:hover{color:#fff}.profile-badge__content-profile-company-school-info-link--light:focus,.profile-badge__content-profile-company-school-info-link--light:hover,.profile-badge__content-profile-company-school-info-link--light:active{color:#000}.profile-badge__content-profile-company-school-info-link--light:visited,.profile-badge__content-profile-company-school-info-link--light:visited:active,.profile-badge__content-profile-company-school-info-link--light:visited:focus,.profile-badge__content-profile-company-school-info-link--light:visited:hover{color:#000}.profile-badge__cta-btn{margin:4px 16px 12px;color:inherit}.profile-badge__cta-btn--light{background-color:rgba(0,0,0,0);border:0;border-radius:2px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#0073b1;cursor:pointer;display:inline-block;font-size:1.6rem;font-weight:600;font-family:inherit;height:32px;line-height:32px;overflow:hidden;outline-width:2px;padding:0 16px;position:relative;text-align:center;text-decoration:none;-webkit-transition-duration:167ms;transition-duration:167ms;-webkit-transition-property:background-color,color,-webkit-box-shadow;transition-property:background-color,color,-webkit-box-shadow;transition-property:background-color,box-shadow,color;transition-property:background-color,box-shadow,color,-webkit-box-shadow;-webkit-transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-timing-function:cubic-bezier(0, 0, 0.2, 1);vertical-align:middle;z-index:0;-webkit-box-shadow:inset 0 0 0 1px #0073b1,inset 0 0 0 2px rgba(0,0,0,0),inset 0 0 0 1px rgba(0,0,0,0);box-shadow:inset 0 0 0 1px #0073b1,inset 0 0 0 2px rgba(0,0,0,0),inset 0 0 0 1px rgba(0,0,0,0);border-radius:24px;-webkit-box-shadow:inset 0 0 0 1px #0a66c2;box-shadow:inset 0 0 0 1px #0a66c2;color:#0a66c2}@media only screen and (-ms-high-contrast: active){.profile-badge__cta-btn--light{border:1px solid currentColor;line-height:30px}}html.ie .profile-badge__cta-btn--light:focus,html.edge .profile-badge__cta-btn--light:focus{outline:1px dashed #7f7f7f}.profile-badge__cta-btn--light li-icon{top:2px;-webkit-box-sizing:content-box;box-sizing:content-box;height:16px;left:0;margin:-12px 0 0 -6px;padding:0 6px 0 0;position:relative;width:16px}.profile-badge__cta-btn--light li-icon>svg{-webkit-transition:-webkit-transform 167ms;transition:-webkit-transform 167ms;transition:transform 167ms;transition:transform 167ms, -webkit-transform 167ms;-webkit-transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-timing-function:cubic-bezier(0, 0, 0.2, 1);display:inline-block;vertical-align:top}.edge .profile-badge__cta-btn--light,.ie .profile-badge__cta-btn--light{border-radius:0}.profile-badge__cta-btn--light:not(:disabled)[data-is-animating-click=true],.profile-badge__cta-btn--light:hover:not(:disabled)[data-is-animating-click=true]{-webkit-box-shadow:inset 0 0 0 1px #0073b1,inset 0 0 0 2px rgba(0,0,0,0),inset 0 0 0 1px #004b7c;box-shadow:inset 0 0 0 1px #0073b1,inset 0 0 0 2px rgba(0,0,0,0),inset 0 0 0 1px #004b7c}.profile-badge__cta-btn--light:hover:not(:disabled):not(.disabled),.profile-badge__cta-btn--light.hover-not-disabled{background-color:rgba(152,216,244,0.25);color:#006097;-webkit-box-shadow:inset 0 0 0 1px #0073b1,inset 0 0 0 2px #006097,inset 0 0 0 1px rgba(0,0,0,0);box-shadow:inset 0 0 0 1px #0073b1,inset 0 0 0 2px #006097,inset 0 0 0 1px rgba(0,0,0,0)}.profile-badge__cta-btn--light:focus,.profile-badge__cta-btn--light.focus{background-color:rgba(152,216,244,0.25);color:#006097;-webkit-box-shadow:inset 0 0 0 1px #0073b1,inset 0 0 0 2px #006097,inset 0 0 0 1px rgba(0,0,0,0);box-shadow:inset 0 0 0 1px #0073b1,inset 0 0 0 2px #006097,inset 0 0 0 1px rgba(0,0,0,0)}.profile-badge__cta-btn--light:active:not(:disabled):not(.disabled),.profile-badge__cta-btn--light.active-not-disabled{background-color:rgba(152,216,244,0.45);color:#004b7c}.profile-badge__cta-btn--light:disabled,.profile-badge__cta-btn--light.disabled{color:rgba(0,115,177,0.35);-webkit-box-shadow:inset 0 0 0 1px rgba(0,115,177,0.35);box-shadow:inset 0 0 0 1px rgba(0,115,177,0.35);cursor:not-allowed}.profile-badge__cta-btn--light:focus,.profile-badge__cta-btn--light.focus,.profile-badge__cta-btn--light:hover:not(:disabled):not(.disabled),.profile-badge__cta-btn--light.hover-not-disabled{-webkit-box-shadow:inset 0 0 0 2px #0a66c2;box-shadow:inset 0 0 0 2px #0a66c2}.profile-badge__cta-btn--light:active,.profile-badge__cta-btn--light.active,.profile-badge__cta-btn--light:active:not(:disabled):not(.disabled),.profile-badge__cta-btn--light.active-not-disabled{-webkit-box-shadow:inset 0 0 0 1px #004182;box-shadow:inset 0 0 0 1px #004182}.profile-badge__cta-btn--light:focus,.profile-badge__cta-btn--light.focus,.profile-badge__cta-btn--light:hover:not(:disabled):not(.disabled),.profile-badge__cta-btn--light.hover-not-disabled{background-color:rgba(112,181,249,0.15);color:#0a66c2}.profile-badge__cta-btn--light:active,.profile-badge__cta-btn--light.active,.profile-badge__cta-btn--light:active:not(:disabled):not(.disabled),.profile-badge__cta-btn--light.active-not-disabled{background-color:rgba(112,181,249,0.3);color:#004182}.profile-badge__cta-btn--light:visited,.profile-badge__cta-btn--light:visited:active,.profile-badge__cta-btn--light:visited:focus,.profile-badge__cta-btn--light:visited:hover{color:#0a66c2}.profile-badge__cta-btn--light:hover{color:#0a66c2;text-decoration:none !important}.profile-badge__cta-btn--dark{background-color:rgba(0,0,0,0);border:0;border-radius:2px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;cursor:pointer;display:inline-block;font-size:1.6rem;font-weight:600;font-family:inherit;height:32px;line-height:32px;overflow:hidden;outline-width:2px;padding:0 16px;position:relative;text-align:center;text-decoration:none;-webkit-transition-duration:167ms;transition-duration:167ms;-webkit-transition-property:background-color,color,-webkit-box-shadow;transition-property:background-color,color,-webkit-box-shadow;transition-property:background-color,box-shadow,color;transition-property:background-color,box-shadow,color,-webkit-box-shadow;-webkit-transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-timing-function:cubic-bezier(0, 0, 0.2, 1);vertical-align:middle;z-index:0;-webkit-box-shadow:inset 0 0 0 1px rgba(255,255,255,0.7),inset 0 0 0 2px rgba(0,0,0,0),inset 0 0 0 1px rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,0.7),inset 0 0 0 2px rgba(0,0,0,0),inset 0 0 0 1px rgba(0,0,0,0);border-radius:24px;-webkit-box-shadow:inset 0 0 0 1px #fff;box-shadow:inset 0 0 0 1px #fff;box-shadow:inset 0 0 0 1px #fff}@media only screen and (-ms-high-contrast: active){.profile-badge__cta-btn--dark{border:1px solid currentColor;line-height:30px}}html.ie .profile-badge__cta-btn--dark:focus,html.edge .profile-badge__cta-btn--dark:focus{outline:1px dashed #7f7f7f}.profile-badge__cta-btn--dark li-icon{top:2px;-webkit-box-sizing:content-box;box-sizing:content-box;height:16px;left:0;margin:-12px 0 0 -6px;padding:0 6px 0 0;position:relative;width:16px}.profile-badge__cta-btn--dark li-icon>svg{-webkit-transition:-webkit-transform 167ms;transition:-webkit-transform 167ms;transition:transform 167ms;transition:transform 167ms, -webkit-transform 167ms;-webkit-transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-timing-function:cubic-bezier(0, 0, 0.2, 1);display:inline-block;vertical-align:top}.edge .profile-badge__cta-btn--dark,.ie .profile-badge__cta-btn--dark{border-radius:0}.profile-badge__cta-btn--dark:not(:disabled)[data-is-animating-click=true],.profile-badge__cta-btn--dark:hover:not(:disabled)[data-is-animating-click=true]{-webkit-box-shadow:inset 0 0 0 1px rgba(255,255,255,0.7),inset 0 0 0 2px rgba(0,0,0,0),inset 0 0 0 1px #fff;box-shadow:inset 0 0 0 1px rgba(255,255,255,0.7),inset 0 0 0 2px rgba(0,0,0,0),inset 0 0 0 1px #fff}.profile-badge__cta-btn--dark:hover:not(:disabled):not(.disabled),.profile-badge__cta-btn--dark.hover-not-disabled{background-color:rgba(255,255,255,0.1);color:#fff;-webkit-box-shadow:inset 0 0 0 1px rgba(255,255,255,0.7),inset 0 0 0 2px #fff,inset 0 0 0 1px rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,0.7),inset 0 0 0 2px #fff,inset 0 0 0 1px rgba(0,0,0,0)}.profile-badge__cta-btn--dark:focus,.profile-badge__cta-btn--dark.focus{background-color:rgba(255,255,255,0.1);color:#fff;-webkit-box-shadow:inset 0 0 0 1px rgba(255,255,255,0.7),inset 0 0 0 2px #fff,inset 0 0 0 1px rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,0.7),inset 0 0 0 2px #fff,inset 0 0 0 1px rgba(0,0,0,0)}.profile-badge__cta-btn--dark:active:not(:disabled):not(.disabled),.profile-badge__cta-btn--dark.active-not-disabled{background-color:rgba(255,255,255,0.1);color:#fff}.profile-badge__cta-btn--dark:disabled,.profile-badge__cta-btn--dark.disabled{color:rgba(255,255,255,0.35);-webkit-box-shadow:inset 0 0 0 1px rgba(255,255,255,0.35);box-shadow:inset 0 0 0 1px rgba(255,255,255,0.35);cursor:not-allowed}.profile-badge__cta-btn--dark:visited,.profile-badge__cta-btn--dark:visited:active,.profile-badge__cta-btn--dark:visited:focus,.profile-badge__cta-btn--dark:visited:hover{color:#fff}.profile-badge__cta-btn--dark:hover{color:#fff;text-decoration:none !important}.profile-badge{margin-left:1px}
      .text-premium-color-inbug {
    color: var(--premium-color-inbug);
}
        </style>
    </head>
    <body>
    <div class="profile-badge profile-badge--width-300 profile-badge--light" dir="ltr" style="  text-align: center;">
      <div class="profile-badge__header profile-badge__header--light">
        <span class="sr-only">LinkedIn</span>
        
  <icon class="profile-badge__header-logo-icon profile-badge__header-logo-icon--light" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 84 21" preserveAspectRatio="xMinYMin meet" version="1.1" focusable="false">
      <g class="inbug" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path d="M19.479,0 L1.583,0 C0.727,0 0,0.677 0,1.511 L0,19.488 C0,20.323 0.477,21 1.333,21 L19.229,21 C20.086,21 21,20.323 21,19.488 L21,1.511 C21,0.677 20.336,0 19.479,0" class="bug-text-color" transform="translate(63.000000, 0.000000)"></path>
        <path d="M82.479,0 L64.583,0 C63.727,0 63,0.677 63,1.511 L63,19.488 C63,20.323 63.477,21 64.333,21 L82.229,21 C83.086,21 84,20.323 84,19.488 L84,1.511 C84,0.677 83.336,0 82.479,0 Z M71,8 L73.827,8 L73.827,9.441 L73.858,9.441 C74.289,8.664 75.562,7.875 77.136,7.875 C80.157,7.875 81,9.479 81,12.45 L81,18 L78,18 L78,12.997 C78,11.667 77.469,10.5 76.227,10.5 C74.719,10.5 74,11.521 74,13.197 L74,18 L71,18 L71,8 Z M66,18 L69,18 L69,8 L66,8 L66,18 Z M69.375,4.5 C69.375,5.536 68.536,6.375 67.5,6.375 C66.464,6.375 65.625,5.536 65.625,4.5 C65.625,3.464 66.464,2.625 67.5,2.625 C68.536,2.625 69.375,3.464 69.375,4.5 Z" class="background" fill="currentColor"></path>
      </g>
      <g class="linkedin-text">
        <path d="M60,18 L57.2,18 L57.2,16.809 L57.17,16.809 C56.547,17.531 55.465,18.125 53.631,18.125 C51.131,18.125 48.978,16.244 48.978,13.011 C48.978,9.931 51.1,7.875 53.725,7.875 C55.35,7.875 56.359,8.453 56.97,9.191 L57,9.191 L57,3 L60,3 L60,18 Z M54.479,10.125 C52.764,10.125 51.8,11.348 51.8,12.974 C51.8,14.601 52.764,15.875 54.479,15.875 C56.196,15.875 57.2,14.634 57.2,12.974 C57.2,11.268 56.196,10.125 54.479,10.125 L54.479,10.125 Z" fill="currentColor"></path>
        <path d="M47.6611,16.3889 C46.9531,17.3059 45.4951,18.1249 43.1411,18.1249 C40.0001,18.1249 38.0001,16.0459 38.0001,12.7779 C38.0001,9.8749 39.8121,7.8749 43.2291,7.8749 C46.1801,7.8749 48.0001,9.8129 48.0001,13.2219 C48.0001,13.5629 47.9451,13.8999 47.9451,13.8999 L40.8311,13.8999 L40.8481,14.2089 C41.0451,15.0709 41.6961,16.1249 43.1901,16.1249 C44.4941,16.1249 45.3881,15.4239 45.7921,14.8749 L47.6611,16.3889 Z M45.1131,11.9999 C45.1331,10.9449 44.3591,9.8749 43.1391,9.8749 C41.6871,9.8749 40.9121,11.0089 40.8311,11.9999 L45.1131,11.9999 Z" fill="currentColor"></path>
        <polygon fill="currentColor" points="38 8 34.5 8 31 12 31 3 28 3 28 18 31 18 31 13 34.699 18 38.241 18 34 12.533"></polygon>
        <path d="M16,8 L18.827,8 L18.827,9.441 L18.858,9.441 C19.289,8.664 20.562,7.875 22.136,7.875 C25.157,7.875 26,9.792 26,12.45 L26,18 L23,18 L23,12.997 C23,11.525 22.469,10.5 21.227,10.5 C19.719,10.5 19,11.694 19,13.197 L19,18 L16,18 L16,8 Z" fill="currentColor"></path>
        <path d="M11,18 L14,18 L14,8 L11,8 L11,18 Z M12.501,6.3 C13.495,6.3 14.3,5.494 14.3,4.5 C14.3,3.506 13.495,2.7 12.501,2.7 C11.508,2.7 10.7,3.506 10.7,4.5 C10.7,5.494 11.508,6.3 12.501,6.3 Z" fill="currentColor"></path>
        <polygon fill="currentColor" points="3 3 0 3 0 18 9 18 9 15 3 15"></polygon>
      </g>
    </svg>
  </icon>

      </div>
      <div class="profile-badge__content">
        
      <img class="artdeco-entity-image artdeco-entity-image--circle-7
           profile-badge__content-profile-image" alt="Abdurrafay Bin Khurram" src="https://media.licdn.com/dms/image/D4D03AQE3hhJ__NVKMA/profile-displayphoto-shrink_200_200/0/1685707658706?e=1697673600&amp;v=beta&amp;t=3CTuaEY4qOrqwG_GwFEz2K9JffibJVZToqn-RBl5zqE">
  
        <h3 class="profile-badge__content-profile-name" itemprop="name">
          <a  style="font-size: 100%;" class="profile-badge__content-profile-name-link profile-badge__content-profile-name-link--light" href="https://pk.linkedin.com/in/rafay-pk?trk=public-profile-badge-profile-badge-profile-name" data-tracking-control-name="public-profile-badge-profile-badge-profile-name" data-tracking-will-navigate="">
            Abdurrafay Bin Khurram
          </a>
        </h3>

          <h4 class="profile-badge__content-profile-headline" style="font-size: 75%;">
            Video Game Fanatic | Tech Enthusiast | Computer Engineer
          </h4>

          <h4 class="profile-badge__content-profile-company-school-info" style="font-size: 80%;">
            <a href="https://www.linkedin.com/company/fiverr-com?trk=public-profile-badge-profile-badge_company-name" class="profile-badge__content-profile-company-school-info-link profile-badge__content-profile-company-school-info-link--light" data-tracking-control-name="public-profile-badge-profile-badge_company-name" data-tracking-will-navigate="true" style="font-size: 100%;">
            Fiverr</a>
             | 
            <a href="https://www.linkedin.com/school/nustofficial/?trk=public-profile-badge-profile-badge_school-name" class="profile-badge__content-profile-company-school-info-link profile-badge__content-profile-company-school-info-link--light" data-tracking-control-name="public-profile-badge-profile-badge_school-name" data-tracking-will-navigate="true" style="font-size: 100%;">CEME, NUST</a>
          </h4>
      </div>
      <a  style="font-size: 75%;" class="profile-badge__cta-btn profile-badge__cta-btn--light" href="https://pk.linkedin.com/in/rafay-pk?trk=public-profile-badge-profile-badge-view-profile-cta" target="_blank" data-tracking-control-name="public-profile-badge-profile-badge-view-profile-cta" data-tracking-will-navigate="">
        View profile
      </a>
<!---->    </div>
  
  </body>
    `;

    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="hbox">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                  alt=""
                />
              </div>
              <div className="contact-heading-text-div" style={{ maxWidth: "800px" }}>
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia theme={theme} />
                <div className="resume-btn-div">
                  <Button
                    text="See My Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                  />
                </div>
              </div>
              {/* <div dangerouslySetInnerHTML={{ __html: linkedInBadge }} /> */}
            </div>
          </Fade>
          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div">
              <div className="address-heading-text-div">
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {addressSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {addressSection["subtitle"]}
                </p>
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {phoneSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {phoneSection["subtitle"]}
                </p>
                <div className="address-btn-div">
                  <Button
                    text="Visit on Google Maps"
                    newTab={true}
                    href={addressSection.location_map_link}
                    theme={theme}
                  />
                </div>
              </div>
              <div className="contact-heading-img-div"> { }
                <AddressImg theme={theme} />
              </div>
            </div>
          </Fade>
          <p>&nbsp;</p>
        </div >
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div >
    );
  }
}

export default Contact;
