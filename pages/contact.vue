<template>
  <div justify="center" align="center" style="color: #F4F6FC;">
    <v-col>
      <h2 data-aos="fade-up" data-aos-duration="1000">Contact Us</h2>
      <hr :style="{'height': '3px', 'border-radius': '5px', 'background-color': '#dddddd'}">
      <div style="text-align: center;">
        <div class="description"
          data-aos="fade-right"
          data-aos-duration="1000"
          :style="{'width': isMobile ? '300px' : '500px'}"
        >
          <span>
            We would love to hear from you! Feel free to share suggestions, feedback, and excitement.
          </span>
        </div>

        <!-- Form -->
        <v-row justify="center" data-aos="fade-left" data-aos-duration="1000">
          <div class="form-card" :style="{'width': windowWidth < 800 ? '90%' : windowWidth < 1000 ? '75%' : null}">
            <form class="form-content"
              :action="'https://submit-form.com/d3Vbd7FJ'"
              :style="{'margin': isMobile ? '30px 20px' : null}"
            >
              <input type="hidden" name="_redirect" value="https://deltaapps.dev/contact" />
              <input type="text"
                class="text-field"
                style="grid-row-start: 1; grid-column-start: 1; grid-column-end: 3;"
                v-model="name"
                name="name"
                placeholder="Name"
                required
              >
              <input type="email"
                class="text-field"
                style="grid-row-start: 1; grid-column-start: 3; grid-column-end: 5;"
                v-model="email"
                name="email"
                placeholder="Email"
                required
              >
              <textarea type="text"
                class="text-area"
                style="grid-row-start: 2; grid-row-end: 4; grid-column-start: 1; grid-column-end: 5;"
                v-model="message"
                name="message"
                rows="5"
                placeholder="Your message here..."
                required
              ></textarea>
              <v-btn
                class="send-btn"
                type="submit"
                style="grid-row-start: 4; grid-column-start: 2; grid-column-end: 4;"
              >
                Send
                <v-icon right>mdi-send</v-icon>
              </v-btn>
            </form>
          </div>
        </v-row>
      </div>
    </v-col>
  </div>
</template>

<script>
import aosMixin from '~/mixins/aos'
export default {
  name: 'ContactPage',
  mixins: [aosMixin],
  
  async created () {
    window.addEventListener('resize', this.resizeHandler)
    if (this.$route.query.email != null) {
      await this.$router.replace({query: {}})
      alert('Thank you for your submission! We will respond to you as soon as we can.')
    }
  },

  data() {
    return {
      reachOut: 'We would love to hear from you! Feel free to share suggestions, feedback, and excitement.',
      name: '',
      email: '',
      message: '',
      windowWidth: window.innerWidth,
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
    }
  },
}
</script>

<style scoped>
@import '~/assets/style.css';

.description {
  margin: 30px auto;
}

.form-card {
  margin-bottom: 40px;
  justify-content: center;
  background: #2B2E36;
  border-radius: 6px;
  width: 50%;
  padding: 20px 40px;
}

.form-content {
  justify-content: center;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 25% 25% 25% 25%;
  grid-gap: 10px;
}

.text-field {
  padding: 6px;
  background-color: #fcfcfc !important;
  border-style: solid;
  border-width: 3px;
  border-image: linear-gradient(134.94deg, #233DFF 4.82%, #4986FF 29.27%, #A4B9FF 56.61%, #E2E6FC 70.28%, #F4F6FC 78.15%) 1;
}

.text-area {
  border-style: solid;
  border-width: 3px;
  border-image: linear-gradient(134.94deg, #233DFF 4.82%, #4986FF 29.27%, #A4B9FF 56.61%, #E2E6FC 70.28%, #F4F6FC 78.15%) 1;
  background-color: #fcfcfc !important;
  padding: 6px;
}

.send-btn {
  background-color: #5CB6F9 !important;
  border-radius: 6px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #000000;
}

</style>
