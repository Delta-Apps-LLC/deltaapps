<template>
  <v-row justify="center" align="center">
    <v-col class="text-center">
      <div data-aos="fade-up">
        <h1 class="tagline text-center"
          :class="{'active': headingActive}"
          :key="headingKey"
          :style="{'font-size': isMobile ? null : '45px'}"
          v-if="!animated"
        >
          Here to Make a Difference
        </h1>
        <h1 class="text-center"
          v-if="animated"
          :style="{'font-size': isMobile ? null : '45px'}"
        >
          Here to Make a Difference
        </h1>

        <p class="description">
          At Delta Apps, we are committed to making a difference in the world through technology. Home to all kinds of software development services, you can outsource your development needs to us or browse the variety of <nuxt-link to="/products">products we offer</nuxt-link>.
        </p>

        <h2 class="text-center">
          Our Guarantee:<br v-if="isMobile">{{isMobile ? null : '&ensp;'}} A Positive 
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <span v-on="on" v-bind="attrs">&ldquo;Delta&rdquo;</span>
            </template>
            <span>Delta &ndash; &Delta; (Greek)</span><br>
            <span>&ldquo;To represent a change&rdquo;</span>
          </v-tooltip>
        </h2>
      </div>

      <v-btn
        class="button"
        to="/contact"
        data-aos="fade-down"
      >
        Get in touch
      </v-btn>

      <h2 style="margin-top: 40px; margin-bottom: 2px;" data-aos="fade-up">Our Services</h2>
      <hr data-aos="fade-up" :style="{'height': '3px', 'border-radius': '5px', 'background-color': '#dddddd'}">
      <v-spacer style="margin-top: 1%;"/>

      <v-row class="services-row" justify="center">
        <v-card class="services-card"
          v-for="(service, i) in services"
          :key="i"
          :data-aos="i == 0 ? 'fade-right' : i == 1 ? 'fade-up' : 'fade-left'"
        >
          <v-card-text class="service-title">{{service.title}}</v-card-text>
          <v-card-text>
            <v-icon class="services-icon" size="50">{{service.image}}</v-icon>
          </v-card-text>
          <v-card-text class="service-description">{{service.description}}</v-card-text>
        </v-card>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import Logo from "~/components/Logo.vue"
import CarouselComponent from "~/components/CarouselComponent.vue"
import aosMixin from '~/mixins/aos'

export default {
  name: 'IndexPage',
  mixins: [aosMixin],

  created () {
    window.addEventListener('resize', this.resizeHandler)
  },

  mounted() {
    this.headingKey++
    setTimeout(() => {
      this.headingActive = true
    }, 2000);
    setTimeout( async () => {
      await this.$store.commit('animation/setHasAnimated', true)
    }, 3000);
  },

  components: {
    Logo,
    CarouselComponent,
  },

  data () {
    return {
      windowWidth: window.innerWidth,
      headingKey: 0,
      headingActive: false,
      services: [
        {
          title: 'Mobile Applications',
          image: 'mdi-cellphone',
          description: 'Our mobile apps, primarily built with the Flutter framework, are available on the Google Play Store and Apple App Store.'
        },
        {
          title: 'Web Applications',
          image: 'mdi-web',
          description: 'Our web apps, primarily built with NuxtJS, are available for use and will make a positive impact.'
        },
        {
          title: 'Freelance Development',
          image: 'mdi-code-braces',
          description: 'We are ready to work with you on whatever needs you have! No matter the ask, we guarantee high-quality products.'
        },
      ]
    }
  },

  methods: {
    resizeHandler() {
      this.windowWidth = window.innerWidth
    }
  },

  computed: {
    isMobile () {
      let check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r750|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    },

    animated () {
      return this.$store.state.animation.hasAnimated
    }
  },
}
</script>

<style scoped>
@import '~/assets/style.css';

h1 {
  letter-spacing: 4px;
  margin: 20px;
}

h2 {
  margin: 40px;
  letter-spacing: 2.5px;
}

.tagline {
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 1s ease-out;
}

.tagline.active {
  transform: scaleX(1);
}

.button {
  width: 50%;
  padding: 30px !important;
  font-size: 20px !important;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif !important;
}

.services-row {
  margin-bottom: 30px;
  margin-top: 10px;
}

.services-card {
  width: 250px;
  margin: 20px;
}

.service-title {
  color: #f1f2fa;
  font-size: 18px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.service-description {
  color: #f1f2fa;
  font-size: 16px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.services-icon {
  background-image: linear-gradient(to bottom, #233bfa, #5bb3fa);
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

</style>