<template>
  <v-app class="main-fade">
    <v-app-bar
      class="app-bar"
      fixed
      app
      flat
      height="100px"
      :style="{'padding': isMobile ? '5px 0' : null}"
    >
      <!-- Logo -->
      <button @click="toHome()">
        <img src="~/assets/images/logo-hzn.png" :height="isMobile ? '50px' : windowWidth > 1000 ? '70px' : '50px'" />
      </button>

      <v-spacer />
      <div v-if="(!isMobile && windowWidth > 1000)">
        <v-btn class="nav-btns"
          v-for="(btn, i) in navBtns"
          :key="i"
          :to="btn.to"
          text
        >
          {{ btn.text }}
        </v-btn>
      </div>

      <v-menu
        v-if="(isMobile || windowWidth <= 1000)"
        close-on-click
        close-on-content-click
        bottom
        transition="slide-y-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-on="on" v-bind="attrs">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(btn, i) in navBtns"
            :key="i"
          >
            <v-btn class="nav-btns"
              :to="btn.to"
              text
            >
              {{ btn.text }}
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
      
    </v-app-bar>

    <v-main class="main">
      <v-container class="main">
        <DonateButton @click="donate()" />
        <Nuxt class="main" />
      </v-container>
    </v-main>

    <v-footer
      absolute
      app
    >
      <span>&copy; 2023 Delta Apps, LLC</span>
      <!-- <a class="footer" target="_blank" href="privacy_policy.pdf">Privacy Policy</a> -->
      <v-spacer />
      <span>Contact Us &ndash; <a href="mailto:deltaappsteam@gmail.com">deltaappsteam@gmail.com</a></span>
    </v-footer>

    <Logo id="logo" />
  </v-app>
</template>

<script>
import Logo from '~/components/Logo.vue'
import DonateButton from '~/components/DonateButton.vue'
export default {
  name: 'DefaultLayout',

  created () {
    window.addEventListener('resize', this.resizeHandler)
  },

  mounted() {
    const logo = document.getElementById('logo')
    setTimeout(() => {
      logo.style.zIndex = '-1'
    }, 3000);
  },

  components: {
    Logo,
    DonateButton,
  },

  data () {
    return {
      title: 'Delta Apps',
      windowWidth: window.innerWidth,
      navBtns: [
        {
          text: 'Home',
          to: '/',
        },
        {
          text: 'About',
          to: '/about',
        },
        {
          text: 'Products',
          to: '/products',
        },
        {
          text: 'Contact',
          to: '/contact',
        },
      ],
    }
  },

  methods: {
    toHome() {
      this.$router.push('/')
    },
    
    donate() {
      window.open('https://donate.stripe.com/test_8wMaGxgvnatS7wkdQQ')
    },

    resizeHandler() {
      this.windowWidth = window.innerWidth
    },
  },

  computed: {
    isMobile () {
      let check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r750|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    }
  }
}
</script>

<style scoped>
@import '~/assets/style.css';

.app-bar {
  backdrop-filter: blur(10px);
  opacity: 0.99;
  background-color: transparent !important;
  position: fixed;
  z-index: 10;
  padding: 5px 32px;
}

.nav-btns {
  margin-left: 10px;
  height: 50px !important;
  font-size: 16px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif !important;
  color: #f1f2fa;
}


</style>
