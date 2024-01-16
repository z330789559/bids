
<template>
  <div class="MuiBox-root css-j7qwjs">
    <Header @changeMenu="changeMenu"  />
    <Content />
    <Footer />

    <div role="presentation" v-if="showMenu" class="MuiDrawer-root MuiDrawer-modal MuiModal-root css-y28f86">
      <div aria-hidden="true" class="MuiBackdrop-root MuiModal-backdrop css-919eu4"
        style="opacity: 1; transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;"></div>
      <div tabindex="0" data-testid="sentinelStart"></div>
      <div
        class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation16 MuiDrawer-paper MuiDrawer-paperAnchorRight css-1ab2xsx"
        tabindex="-1" style="transform: none; transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;">
        <ul class="MuiList-root MuiList-padding css-9l9ja4">
          <li class="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-twax0q"><a href="/"><img
                src="../assets/logo.png" alt="logo" class="logo-img"></a><button @click="changeMenu"
              class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk" tabindex="0"
              type="button"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-dwpknh" focusable="false"
                aria-hidden="true" viewBox="0 0 24 24" data-testid="CloseIcon">
                <path
                  d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                </path>
              </svg><span class="MuiTouchRipple-root css-w0pj6f"></span></button></li>
          <div
            class="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters css-1uwabd6"
            tabindex="0" role="button">
            <div class="MuiListItemText-root css-1tsvksn"><span
                class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-r53xoa">Bridge</span></div><span
              class="MuiTouchRipple-root css-w0pj6f"></span>
          </div>
          <div
            class="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters css-1uwabd6"
            tabindex="0" role="button">
            <div class="MuiListItemText-root css-1tsvksn"><span
                class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-r53xoa">Doc</span></div><span
              class="MuiTouchRipple-root css-w0pj6f"></span>
          </div>
        </ul>
      </div>
      <div tabindex="0" data-testid="sentinelEnd"></div>
    </div>
  </div>

</template>
<script setup>
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/vue'
import Header from '../components/Header.vue'
import Content from '../components/Content.vue'
import Footer from '../components/Footer.vue'
import { ref,onMounted } from 'vue'
import AOS from "aos";
import 'aos/dist/aos.css';

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '05621279f2b032319befec485ce5b7cb'
const showMenu = ref(false)
// 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}
const bsctest = {
  chainId: 97,
  name: 'bsctest',
  currency: 'tBNB',
  explorerUrl: 'https://testnet.bscscan.com/',
  rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
}
const goerli = {
  chainId: 5,
  name: 'Goerli',
  currency: 'GETH',
  explorerUrl: 'https://goerli.etherscan.io',
  rpcUrl: 'https://eth-goerli.g.alchemy.com/v2/q04sQKbbsntbXFOad8DCFZ_5kR8jEJ4x'
}
const bnb = {
  chainId: 56,
  name: 'Binance Smart Chain',
  currency: 'BNB',
  explorerUrl: 'https://bscscan.com/',
  rpcUrl: 'https://bsc-dataseed.binance.org/'
}

// 3. Create modal
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com',
  icons: ['https://avatars.mywebsite.com/']
}

const web3Modal = createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet, goerli, bsctest,bnb],
  projectId
})
const showPop = ref(false);


const changeShow = () => {
  showPop.value = !showPop.value;
}
const changeMenu = () => {
  showMenu.value = !showMenu.value;
}
</script>



<style scoped>
.css-1tsvksn {
  flex: 1 1 auto;
  min-width: 0px;
  margin-top: 4px;
  margin-bottom: 4px;
}
.css-r53xoa {
  margin: 0px;
  font-family: "Titillium Web", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, Hanson;
  line-height: 1.5;
  display: block;
  font-size: 16px;
  font-weight: 500;
}
.css-1uwabd6 {
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: 0px;
  border: 0px;
  margin: 0px;
  border-radius: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  color: inherit;
  display: flex;
  -webkit-box-flex: 1;
  flex-grow: 1;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  text-decoration: none;
  min-width: 0px;
  box-sizing: border-box;
  text-align: left;
  padding: 8px 16px;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.css-w0pj6f {
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  z-index: 0;
  inset: 0px;
  border-radius: inherit;
}
.css-dwpknh {
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentcolor;
  flex-shrink: 0;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: 24px;
}
.css-twax0q {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  padding: 8px  16px 8px 0;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.css-1yxmbwk {
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: 0px;
  border: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  text-align: center;
  flex: 0 0 auto;
  font-size: 1.5rem;
  padding: 8px;
  border-radius: 50%;
  overflow: visible;
  color: rgba(0, 0, 0, 0.54);
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.css-9l9ja4 {
  list-style: none;
  margin: 0px;
  padding: 8px 0px;
  position: relative;
  width: 100vw;
  box-sizing: border-box;
}
.css-1ab2xsx {
  background-color: rgb(255, 255, 255);
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1 0 auto;
  z-index: 1200;
  position: fixed;
  top: 0px;
  outline: 0px;
  right: 0px;
}
.css-919eu4 {
  position: fixed;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  inset: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
  z-index: -1;
}
.css-y28f86 {
  position: fixed;
  inset: 0px;
  z-index: 1200;
}
.css-1c5gr5s {
  position: fixed;
  z-index: 1300;
  inset: 0px;
}

.css-j7qwjs {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
@media (min-width: 0) {
  .logo-img{
    width: 100px;
  }
}

@media screen and (min-width: 600px) {
  .logo-img{
    width: 150px;
  }
  
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}</style>
