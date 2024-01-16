<!-- eslint-disable max-len -->
<template>
    <!-- <ConnectWallte />
    <HelloWorld /> -->
    <header
        class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorPrimary MuiAppBar-positionFixed mui-fixed css-19b32ki">
        <div class="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-vjknix">
            <div class="MuiBox-root css-18rdio4">
                <a href="/"><img style="width: 196px" src="../assets/logo.png" alt="logo" /></a>
            </div>
            <div class="MuiBox-root css-vgubd0">
                <div class="MuiBox-root css-8vpwel" @click="ChangeShow">
                    <div class="MuiBox-root css-0">Developers</div>
                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true"
                        viewBox="0 0 24 24" data-testid="ExpandMoreIcon">
                        <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                    </svg>

                    <div v-show="showPop" role="presentation" class="MuiPopover-root MuiModal-root css-1c5gr5s">
                        <div aria-hidden="true" class="MuiBackdrop-root MuiBackdrop-invisible MuiModal-backdrop css-esi9ax"
                            style="opacity: 1; transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;"></div>
                        <div tabindex="0" data-testid="sentinelStart"></div>
                        <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper css-1dmzujt"
                            tabindex="-1"
                            :style="style">
                            <div class="MuiBox-root css-0">
                                <div class="MuiBox-root css-1fhjg0"><a
                                        class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1atv1ru"
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSeUQE-BfDk4cRl9iyMhAlZNj-XTH4YJo3MaaNoHKA2IXc7gJQ/viewform"
                                        target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                                            fill="none">
                                            <circle cx="13" cy="13" r="13" fill="#000"></circle>
                                            <path fill="#fff" fill-rule="evenodd"
                                                d="M12.962 21.307a6.432 6.432 0 1 0 0-12.863 6.432 6.432 0 0 0 0 12.863"
                                                clip-rule="evenodd"></path>
                                            <path fill="#000"
                                                d="M12.56 10.87a.472.472 0 0 1 .809 0l1.032 1.714c.066.11.173.188.298.217l1.95.451c.346.08.483.501.25.77l-1.312 1.511a.473.473 0 0 0-.114.35l.173 1.995a.472.472 0 0 1-.655.475l-1.842-.78a.472.472 0 0 0-.369 0l-1.843.78a.472.472 0 0 1-.654-.476l.173-1.993a.472.472 0 0 0-.114-.35L9.03 14.021a.472.472 0 0 1 .25-.77l1.95-.451a.472.472 0 0 0 .298-.217l1.032-1.714">
                                            </path>
                                            <path fill="#fff" fill-rule="evenodd"
                                                d="M6.568 5.321a.472.472 0 0 1 .425-.678h3.624c.362 0 .692.207.85.532l1.095 2.256a7.42 7.42 0 0 0-4.203 1.58l-1.791-3.69m11.054 3.733 1.811-3.733a.472.472 0 0 0-.425-.678h-3.624a.944.944 0 0 0-.85.532l-1.097 2.26a7.42 7.42 0 0 1 4.185 1.62"
                                                clip-rule="evenodd"></path>
                                        </svg>Bug Bounty Program</a></div>
                                <div class="MuiBox-root css-1fhjg0"><a
                                        class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1atv1ru"
                                        href="https://github.com/b2network" target="_blank"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none">
                                            <path fill="#000"
                                                d="M13.002 0C5.818-.003 0 5.97 0 13.343c0 5.83 3.64 10.786 8.708 12.606.683.176.578-.322.578-.662v-2.312c-3.941.474-4.101-2.205-4.365-2.653-.535-.937-1.798-1.176-1.42-1.623.897-.475 1.812.12 2.872 1.727.767 1.167 2.263.97 3.02.776a3.79 3.79 0 0 1 1.009-1.814c-4.084-.752-5.786-3.312-5.786-6.355 0-1.477.473-2.835 1.403-3.93-.593-1.805.055-3.35.142-3.58 1.688-.155 3.442 1.241 3.578 1.351.959-.265 2.054-.405 3.28-.405 1.232 0 2.33.146 3.297.414.328-.256 1.955-1.456 3.523-1.31.084.23.718 1.74.16 3.521.941 1.098 1.42 2.468 1.42 3.948 0 3.05-1.713 5.612-5.81 6.352a3.856 3.856 0 0 1 1.108 2.715v3.357c.023.268 0 .534.435.534C22.297 24.219 26 19.227 26 13.346 26 5.97 20.179 0 13.002 0Z">
                                            </path>
                                        </svg>Github</a></div>
                            </div>
                        </div>
                        <div tabindex="0" data-testid="sentinelEnd"></div>
                    </div>
                </div>
                <p class="MuiTypography-root MuiTypography-body1 default-menu hvr-grow css-1dmd6e4">
                    Bridge
                </p>
                <p class="MuiTypography-root MuiTypography-body1 default-menu hvr-grow css-1dmd6e4">
                    Doc
                </p>
            </div>
            <div class="MuiBox-root css-h1swf4">
             
                <div  v-if="!getConnectStatus()" class="hvr-sweep-to-right MuiBox-root css-56tuuv" @click="connectWallet">connectWallet</div>
                <div  v-else class="MuiBox-root css-56tuuv" > <w3m-account-button /></div>
            </div>
            <!-- <pre>{{ JSON.stringify(this.modalState, null, 2) }}</pre> -->
            <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-lio1yf" tabindex="0" @click="$emit('changeMenu')"
                type="button">
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-phb9gr" focusable="false" aria-hidden="true"
                    viewBox="0 0 24 24" data-testid="MenuIcon">
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                </svg><span class="MuiTouchRipple-root css-w0pj6f"></span>
            </button>
        </div>
    </header>
</template>
<script>
import { useWeb3Modal,useWeb3ModalState,useWeb3ModalAccount,useWeb3ModalEvents } from '@web3modal/ethers/vue'
  // 4. Use modal composable


  
export default {
    components: {
        // TypeitComponent,
    },
    mounted(){
        const modal = useWeb3Modal()
        const modalState = useWeb3ModalState()
        const events = useWeb3ModalEvents()
        const account = useWeb3ModalAccount()
        this.init(modal,modalState,events,account);
    },

    computed: {


        isConnect() {
            debugger
            return this.modalState&&this.modalState.selectedNetworkId&&this.modalState.selectedNetworkId!="";
        },

        // ...mapState(['account', 'networkId', 'balance']),
        // ...mapGetters(['account', 'networkId', 'balance']),
    },
    watch : {
        netWorkId(val,oldVal){
            console.log(val)
            if(oldVal!=val && this.modalState.open){
               this.modal.close();
            }

        }
    },
    methods: {

        getConnectStatus(){
            return this.modalState&&this.modalState.selectedNetworkId&&this.modalState.selectedNetworkId!="";
        },
        init(modal,modalState,events,account){
            console.log(modal,modalState,events)
           this.modal = modal;
           this.events = events;
           this.modalState = modalState;
           this.account = account;
        },

        connectWallet(){
            this.modal.open("Networks").then((provider)=>{
                console.log(provider)
            }).catch((err)=>{
                console.log(err)
            })

        },
        ChangeShow(evt) {
            console.log(evt)
            let x=evt.currentTarget.offsetLeft;
            this.showPop = !this.showPop
              if(this.showPop){
                this.style = "top: 74px; left: "+x+ "px; transform-origin: 0px 0px 0px; opacity: 1;"
              }else{
                this.style = ""
              }
        }
    },
    data() {
        return {
            isConnect: false,
            modal: {},
            netWorkId: "",
            modalState: {},
            style:"",
            showPop: false,
            events: {},
            account: {}
        }
    }

};
</script>
<style lang="css">
.css-w0pj6f {
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    z-index: 0;
    inset: 0px;
    border-radius: inherit;
}
.css-phb9gr {
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
    color: white;
    font-size: 24px;
}
.css-1fhjg0 {
    margin-bottom: 18px;
    opacity: 0.6;
}
.css-1atv1ru {
    margin: 0px;
    font-style: inherit;
    font-variant: inherit;
    font-weight: inherit;
    font-stretch: inherit;
    line-height: inherit;
    font-family: inherit;
    font-optical-sizing: inherit;
    font-kerning: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 17px;
    color: black;
    text-decoration: none;
    font-size: 18px;
    cursor: pointer;
}
.css-1c5gr5s .MuiPaper-root {
    border-radius: 8px;
    margin-top: 5px;
    padding: 20px 20px 2px;
}
.css-1dmzujt {
    background-color: rgb(255, 255, 255);
    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
    position: absolute;
    overflow: hidden auto;
    min-width: 16px;
    min-height: 120px;
    max-width: calc(100% - 32px);
    max-height: calc(100% - 32px);
    outline: 0px;
}

.css-56tuuv:hover {
    border-radius: 22px;
    border: none;
    cursor: pointer;
}

.css-56tuuv {
    border-radius: 22px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 20px;
    width: 247px;
    text-transform: capitalize;
    white-space: nowrap;
    margin: auto;
}

.css-56tuuv:hover {
    border-radius: 22px;
    border: none;
    cursor: pointer;
}

.css-1dmd6e4[data-v-c970699f] {
    margin: 0;
    font-family: Titillium Web, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Hanson;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    margin-left: 15px;
    margin-right: 15px;
    font-weight: 400;
    font-size: 20px;
    text-transform: none;
}

.css-1dmd6e4[data-v-c970699f] {
    margin: 0;
    font-family: Titillium Web, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Hanson;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    margin-left: 15px;
    margin-right: 15px;
    font-weight: 400;
    font-size: 20px;
    text-transform: none;
}

.hvr-sweep-to-right:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(270deg, transparent 50%, #ffa728 0);
    background-size: 210% 100%;
    background-position: 100% 100%;
    height: 100%;
    width: 100%;
    transition: all 1s;
    border-radius: 100px;
}

.hvr-sweep-to-right {
    color: #fff;
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    transition-property: color;
    transition-duration: .5s;
    background: #000;
}

.css-1dmd6e4 {
    margin: 0;
    font-family: Titillium Web, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Hanson;
    font-weight: 400;
    font-size: 1rem;
    line-height: 3;
    margin-left: 15px;
    margin-right: 15px;
    font-weight: 400;
    font-size: 20px;
    text-transform: none;
}

.css-1dmd6e4:before {
    content: "";
    display: none;
    vertical-align: middle;
    margin-right: 3px;
    width: 5px;
    height: 5px;
    border-radius: 10px;
    background: #000;
    font-size: 20px;
}

.css-vubbuv {
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
}

.css-8vpwel {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    gap: 3px;
    font-size: 20px;
    color: #000;
    font-weight: 400;
    cursor: pointer;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    min-width: 135px;
}

.css-lio1yf {
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
    outline: 0;
    border: 0;
    margin: 0;
    border-radius: 0;
    padding: 0;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: middle;
    -moz-appearance: none;
    -webkit-appearance: none;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: inherit;
    text-align: center;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    font-size: 1.5rem;
    padding: 8px;
    border-radius: 50%;
    overflow: visible;
    color: rgba(0, 0, 0, 0.54);
    -webkit-transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.css-lio1yf::-moz-focus-inner {
    border-style: none;
}

.css-lio1yf.Mui-disabled {
    pointer-events: none;
    cursor: default;
}

@media print {
    .css-lio1yf {
        -webkit-print-color-adjust: exact;
        color-adjust: exact;
    }
}

.css-lio1yf:hover {
    background-color: rgba(0, 0, 0, 0.04);
}

@media (hover: none) {
    .css-lio1yf:hover {
        background-color: transparent;
    }
}

.css-lio1yf.Mui-disabled {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.26);
}

@media (min-width: 600px) {
    .css-lio1yf {
        display: none;
    }
}

.css-h1swf4 {
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: white;
    height: 100%;
    flex: 1;
    border-radius: 8px;
    padding-left: 15px;
    padding-right: 30px;
}

@media (min-width: 0px) {
    .css-h1swf4 {
        display: none;
    }
}

@media (min-width: 600px) {
    .css-h1swf4 {
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
    }
}

.css-vgubd0 {
    background: #f8f8f8;
    border-radius: 8px;
    height: 100%;
    -webkit-flex: 2;
    -ms-flex:2;
    flex: 2;
    justify-content: space-around;
}

@media (min-width: 0px) {
    .css-vgubd0 {
        display: none;
    }
}

@media (min-width: 900px) {
    .css-vgubd0 {
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
    }
}

.css-18rdio4 {
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
    padding-left: 30px;
    padding-right: 30px;
    margin-left: 0px;
    border-radius: 8px;
    height: 100%;
}

@media (min-width: 0px) {
    .css-18rdio4 {
        background: black;
    }
}

@media (min-width: 600px) {
    .css-18rdio4 {
        background: white;
    }
}

.css-vjknix {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    min-height: 56px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    border-top: 2px solid #000;
    gap: 1px;
    width: 100%;
    background: black;
    max-width: 1290px;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    border-bottom: 1px solid #000;
}

@media (min-width: 600px) {
    .css-vjknix {
        padding-left: 24px;
        padding-right: 24px;
    }
}

@media (min-width: 0px) {
    @media (orientation: landscape) {
        .css-vjknix {
            min-height: 48px;
        }
    }
}

@media (min-width: 600px) {
    .css-vjknix {
        min-height: 64px;
    }
}

@media (min-width: 0px) {
    .css-vjknix {
        padding-left: 1px;
        padding-right: 1px;
        height: 74px;
    }
}

@media (min-width: 600px) {
    .css-vjknix {
        height: 100px;
    }
}

.css-19b32ki {
    background-color: #fff;
    color: rgba(0, 0, 0, 0.87);
    -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    position: fixed;
    z-index: 90;
    top: 0;
    left: auto;
    right: 0;
    background-color: #1976d2;
    color: #fff;
    border-bottom: #f4f4f4;
    background-image: none;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    box-shadow: none;
}

@media print {
    .css-19b32ki {
        position: absolute;
    }
}

@media (min-width: 0px) {
    .css-19b32ki {
        background-color: #000;
    }
}

@media (min-width: 600px) {
    .css-19b32ki {
        background-color: #fff;
    }
}</style>
  