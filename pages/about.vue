<template>
  <v-row justify="center" align="center">
    <v-col>
      <h2>How It Started</h2>
      <hr :style="{'height': '3px', 'border-radius': '5px', 'background-color': '#dddddd'}">
      <v-spacer style="margin-top: 1%;"/>

      <p class="description" data-aos="fade-left">
        Delta Apps was founded by 
        <a href="https://www.linkedin.com/in/andrew-thibaudeau/">Andrew Thibaudeau</a> and 
        <a href="https://www.linkedin.com/in/travisreynertson/">Travis Reynertson</a>. 
        We started as BYU students that met in the Marriott School's 
        <a href="https://creators.byu.edu/sandbox">Sandbox Program</a>, 
        a Y Combinator-like program. It was during this time that we first learned about entrepreneurship and 
        created our first products.
      </p>
      <p class="description" data-aos="fade-right">
        We struggled throughout the school year to find traction among our many 
        ideas, but we eventually found mutual passion in creating software applications that would make a 
        difference in peoples lives. This began the birth of what is now Delta Apps.
      </p>

      <h2>Who We Are</h2>
      <hr :style="{'height': '3px', 'border-radius': '5px', 'background-color': '#dddddd'}">
      <v-spacer style="margin-top: 1%;"/>

      <v-row class="picture-row text-center" justify="center" align="top">
        <v-col class="picture-col" v-for="(person, i) in team" :key="i">
            <img class="team-img"
                :src="require(`~/assets/images/${person.imgBlob}`)"
                :data-aos="i == 0 ? 'fade-right' : 'fade-left'"
            />
            <v-spacer />
            <div :data-aos="i == 0 ? 'fade-right' : 'fade-left'">
                <span class="name-text">{{person.name}}</span>
                <v-spacer />
                <span class="role-text">{{person.title}}</span>
                <v-spacer />
                <span class="role-text">{{person.role}}</span>
            </div>
            <hr data-aos="fade-up" :style="{'height': '1px', 'border-radius': '10px', 'background-color': '#dddddd'}">
            <p class="intro" :data-aos="i == 0 ? 'fade-up-right' : 'fade-up-left'">{{person.intro}}</p>
        </v-col>
      </v-row>

      <h2>Our Mission</h2>
      <hr :style="{'height': '3px', 'border-radius': '5px', 'background-color': '#dddddd'}">
      <v-spacer style="margin-top: 1%;"/>

      <p class="description" data-aos="fade-up">
        We strive to utilize technology to build platforms and resources to help make a lasting positive impact. This desire is derived from our name. In mathematics, the term &ldquo;delta&rdquo; is defined as the difference or change between two variables. Our desire is similar. The apps that we build are centered in three categories: Productivity, Self-Improvement, and Social Good. We want the delta between your life without our products verses your life with our products to be drastically positive. If we fail in that endeavor, help us know what we can do to make your life better!
      </p>

      <h2>Coming Soon</h2>
      <hr :style="{'height': '3px', 'border-radius': '5px', 'background-color': '#dddddd'}">
      <v-spacer style="margin-top: 1%;"/>

      <ul class="description">
        <li data-aos="fade-left">We are currently finishing Penguin Board's payment system</li>
        <li data-aos="fade-right">Write Now will be redeployed and ready for use</li>
        <li data-aos="fade-left">The full-scale portal for Make Me Quit is next on our agenda</li>
        <li data-aos="fade-right">Easy Aid will soon be under development</li>
        <li data-aos="fade-left">Homebase will soon be under development</li>
      </ul>

    </v-col>
  </v-row>
</template>

<script>
import aosMixin from '~/mixins/aos'
export default {
  name: 'AboutPage',
  mixins: [aosMixin],

  created () {
    window.addEventListener('resize', this.resizeHandler)
  },

  data () {
    return {
      windowWidth: window.innerWidth,
      team: [
        {
          name: 'Andrew Thibaudeau',
          img: 'andrew.jpg',
          imgBlob: 'andrew-blob.png',
          role: 'Software Engineer',
          title: 'Co-Founder',
          intro: 'Andrew was born and raised in Minnesota. From a young age, he was fascinated by technology and knew he wanted to learn how it all works. Though starting his college career in Computer Engineering, he quickly discovered Information Technology and fell in love with all the possibilities that path held. He loves seeing his creations come to life in front of his eyes through mobile and web applications, and wants to use those skills to make life easier for everyone. He is a husband and father to a beautiful wife and wonderful son.',
        },
        {
          name: 'Travis Reynertson',
          img: 'travis.jpg',
          imgBlob: 'travis-blob.png',
          role: 'Software Engineer',
          title: 'Co-Founder',
          intro: 'Travis is a California native with a passion for the great outdoors and a wide range of adventurous activities, from rock climbing and mountain biking to surfing and tennis.\nIn addition to his outdoor pursuits, Travis is a talented student who is currently pursuing a bachelor\'s degree in Computer Engineering with minors in Mathematics, Computer Science, and Entrepreneurship. He is determined to use his skills to make a positive impact in the world.\nWhen he\'s not busy studying, Travis enjoys traveling and visiting new places and experiencing different cultures firsthand.',
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
    }
  },
}
</script>

<style scoped>
@import '~/assets/style.css';

.description {
    text-align: left;
    margin-bottom: 20px;
    /* margin: 20px 0px; */
}

a {
  color: white !important;
}

.picture-col {
    margin: 20px 20px;
}

.team-img {
  width: 175px;
  margin: 0 auto;
}

.name-text {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 150%;
  text-align: center;
  color: #f1f2fa;
}

.role-text {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-style: normal;
  font-size: 20px;
  line-height: 150%;
  color: #f1f2fa;
}

.intro {
    margin: 20px 20px;
    font-size: 17px;
}

.background-row {
    margin-top: 8%;
    margin-bottom: 8%;
}

</style>