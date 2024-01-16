<template>
    <div class="MuiBox-root css-eijx35">
        <div class="MuiBox-root css-1vyd9bp">
               <div class="MuiBox-root css-g3uffd aos-init " data-aos="fade-down" data-aos-anchor-placement="center-center">
                   <div class="MuiTypography-root MuiTypography-body1 text css-1w2lawf">
                       <div class="Typewriter" data-testid="typewriter-wrapper">
                        <!-- <TypeIt /> -->
                        <span id="type-it"></span>
                       </div>
                   </div>
               </div>
               <p class="MuiTypography-root MuiTypography-body1 text css-ab8sii  "   data-aos="fade-left">
                   Bitcoin Layer2</p>
               <p class="MuiTypography-root MuiTypography-body1 text css-ab8sii  "   data-aos="fade-right">
                Technology</p>
               <div class="MuiBox-root css-1h2sv0j">
                   <div class="paper MuiBox-root css-1c8kew5  " data-aos="fade-down" @click="goToWhitePage">Lite Paper<svg
                           class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium arrow css-vubbuv" focusable="false"
                           aria-hidden="true" viewBox="0 0 24 24" data-testid="EastIcon">
                           <path d="m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"></path>
                       </svg></div>
                   <div class="paper MuiBox-root css-1c8kew5  "  data-aos="fade-up">BTNU Odyssey<svg
                           class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium arrow css-vubbuv" focusable="false"
                           aria-hidden="true" viewBox="0 0 24 24" data-testid="EastIcon">
                           <path d="m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"></path>
                       </svg></div>
               </div>
               <div class="MuiBox-root css-18q59dw " data-aos="fade-up"><svg
                       class="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeMedium css-lwlo80"
                       focusable="false" aria-hidden="true" viewBox="0 0 101 10" width="101" height="10" fill="none">
                       <path d="M13 5H91V10H13V5Z" fill="#FFB852"></path>
                       <path d="M31 5H101V10H31V5Z" fill="black"></path>
                       <path d="M0 0H13V5H0V0Z" fill="#FFB852"></path>
                   </svg>
                   <div class="MuiBox-root css-14g07js"><a
                           class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-y3q6wp"
                           href="https://twitter.com/BTNU_Bitcoin" target="_blank"><img src="../assets/icon_twitter.svg"
                               style="width:30px;height:30px" alt="href"></a><a
                       class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-y3q6wp"
                       href="https://t.me/bsquared_chat" target="_blank"><img src="../assets/icon_tg.svg"
                           style="width:30px;height:30px" alt="href"></a>
                           <!-- <a
                       class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-y3q6wp"
                       href="https://www.discord.gg/bsquarednetwork" target="_blank"><img
                           src="../assets/icon_discord.svg" style="width:30px;height:30px" alt="href"></a><a
                       class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-y3q6wp"
                       href="https://github.com/b2network" target="_blank"><img src="../assets/icon_github.svg"
                           style="width:30px;height:30px" alt="href"></a><a
                       class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-y3q6wp"
                       href="https://medium.com/@bsquarednetwork" target="_blank"><img src="../assets/icon_medium.svg"
                           style="width:30px;height:30px" alt="href"></a> -->
                        </div>
           </div>
        </div>
        <div class="MuiBox-root css-1pq1h9a" data-aos="fade-in">
           <div class="MuiBox-root css-ytonpp"><img class="btc" src="../assets/btc.png" alt="btc"><img
                   class="shadow shadowAnimation" src="../assets/icon_shadow.svg" alt=""></div>
        </div>
   </div>
</template>
<script setup>
// import TypeIt from './TypeIt.vue';
import { onMounted } from 'vue';
import PDF from '../assets/B2.pdf';
onMounted(() => {
    new TypeIt('#type-it', {
        strings: ['<span style="color:#ffb853;">Next-Gen</span> Universal ', '<span style="color: #ffb853;"> AN</span> EVM-COMPATIBLE ', 'THE MOST <span style="color: #ffb853;">PRACTICA</span> '],
        speed: 100,
        breakLines: false,
        loop: true,
        waitUntilVisible: true
    }).go();
});

const goToWhitePage = () => {
    window.open(PDF, '_blank');
}

</script>
<style>
.css-ytonpp {
    position: relative;
    width: 400px;
    height: 400px;
    background: url("../assets/top_bg.svg");
    -webkit-background-size: cover;
    background-size: cover;
}

.css-ytonpp .shadow {
    position: absolute;
    bottom: 50px;
    right: 125px;
}
.css-1pq1h9a {
    border-radius: 8px;
    background: white;
}

@media (min-width: 0px) {
    .css-1pq1h9a {
        display:none;
    }
}

@media (min-width: 1200px) {
    .css-1pq1h9a {
        display:-webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
    }
}
.css-y3q6wp {
    margin: 0;
    font: inherit;
    color: #1976d2;
    -webkit-text-decoration: underline;
    text-decoration: underline;
    text-decoration-color: rgba(25, 118, 210, 0.4);
    opacity: 0.6;
}

.css-y3q6wp:hover {
    text-decoration-color: inherit;
}

.css-y3q6wp:hover {
    opacity: 1;
    cursor: pointer;
}
.css-14g07js {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

@media (min-width: 0px) {
    .css-14g07js {
        gap:10px;
    }
}

@media (min-width: 900px) {
    .css-14g07js {
        gap:15px;
    }
}
.css-lwlo80 {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentColor;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-size: 1.5rem;
    color: #1976d2;
    width: 101px;
    height: 10px;
}
.css-18q59dw {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    margin-top: 60px;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.css-1c8kew5 {
    padding: 15px 30px;
    border-radius: 100px;
    font-family: Titillium Web;
    font-size: 24px;
    font-weight: 700;
    border: 1px solid #000;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    max-width: 226px;
    margin-top: 20px;
    cursor: pointer;
    -webkit-box-flex-wrap: nowrap;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    white-space: nowrap;
}

.css-1c8kew5 .arrow {
    margin-left: 16px;
    color: black;
}

.css-1c8kew5:hover .arrow {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transition: 1s;
    transition: 1s;
    color: white;
}
.css-1h2sv0j {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 10px;
}
.css-1vyd9bp {
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 30px;
    padding-right: 30px;
    min-height: 400px;
    background: white;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    border-radius: 8px;
    color: #000;
}
.css-127zz3m {
    display: flex;
    width: 100%;
    -webkit-box-align: stretch;
    align-items: stretch;
    min-height: 330px;
    padding: 1px;
    gap: 1px;
    overflow: hidden;
}

.css-1vyd9bp .text {
    font-size: 46px;
    font-weight: 700;
    line-height: 1.2;
    font-family: Hanson;
    text-transform: uppercase;
}

.css-1vyd9bp .most {
    font-size: 46px;
    font-weight: 700;
    line-height: 1.2;
    font-family: Hanson;
    text-transform: uppercase;
    color: white;
    text-shadow: #000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;
    -webkit-text-stroke: 1px #000;
}
.css-g3uffd {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 0px;
}
.css-1pq1h9a {
    border-radius: 8px;
    background: white;
}

@media (min-width: 0px) {
    .css-1pq1h9a {
        display:none;
    }
}

@media (min-width: 1200px) {
    .css-1pq1h9a {
        display:-webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
    }
}
.css-1vyd9bp {
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 30px;
    padding-right: 30px;
    min-height: 400px;
    background: white;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    border-radius: 8px;
    color: #000;
}

.css-1vyd9bp .text {
    font-size: 46px;
    font-weight: 700;
    line-height: 1.2;
    font-family: Hanson;
    text-transform: uppercase;
}

.css-1vyd9bp .most {
    font-size: 46px;
    font-weight: 700;
    line-height: 1.2;
    font-family: Hanson;
    text-transform: uppercase;
    color: white;
    text-shadow: #000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;
    -webkit-text-stroke: 1px #000;
}
.css-eijx35 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-align-items: stretch;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    min-height: 400px;
    padding: 1px;
    gap: 1px;
    overflow: hidden;
}
</style>