<template>
  <div justify="center" align="center">
    <v-col>
      <!-- Products -->
      <h2 data-aos="fade-up" data-aos-duration="1000">Our Products</h2>
      <hr :style="{'height': '3px', 'border-radius': '5px', 'background-color': '#dddddd'}">
      <v-row justify="center" style="margin: 20px;">
        <v-card
            class="card"
            v-for="(product, i) in products"
            :key="i"
            width="300px"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <v-card-title class="text-center">
                <!-- <v-avatar size="60"> -->
                  <img class="avatar" :src="product.avatar" />
                <!-- </v-avatar> -->
                <span class="title">{{product.title}}</span>
            </v-card-title>

            <v-card-subtitle class="description text-center">
                {{product.description}}
            </v-card-subtitle>

            <v-card-actions>
                <v-spacer />
                <a target="_blank" :href="product.link" style="text-decoration: none;">
                    <v-btn class="button">Visit Site</v-btn>
                </a>
                <v-spacer />
            </v-card-actions>

            <!-- <div class="legal-docs text-center">
              <a target="_blank" :href="product.privacy">Privacy Policy</a>
              <span>&ensp;</span>
              <a target="_blank" :href="product.terms">Terms</a>
            </div> -->
        </v-card>
      </v-row>

      <div style="margin-top: 50px;"></div>

      <!-- Clients -->
      <h2 data-aos="fade-up" data-aos-duration="1000">Our Clients</h2>
      <hr :style="{'height': '3px', 'border-radius': '5px', 'background-color': '#dddddd'}">
      <v-row justify="center" style="margin: 10px;">
        <v-card
            class="card"
            v-for="(client, i) in clients"
            :key="i"
            width="300px"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <v-card-title class="text-center">
                <!-- <v-avatar size="60"> -->
                  <img class="avatar" style="border-radius: 10px;" :src="client.avatar" />
                <!-- </v-avatar> -->
                <span class="title">{{client.title}}</span>
            </v-card-title>

            <v-card-subtitle class="description text-center">
                {{client.description}}
            </v-card-subtitle>

            <v-card-actions>
                <v-spacer />
                <a target="_blank" :href="client.link" style="text-decoration: none;">
                    <v-btn class="button">Visit Site</v-btn>
                </a>
                <v-spacer />
            </v-card-actions>
        </v-card>
      </v-row>

      <div style="margin-top: 50px;"></div>

      <h2 data-aos="fade-up" data-aos-duration="1000">Product Status</h2>
      <hr :style="{'height': '3px', 'border-radius': '5px', 'background-color': '#dddddd'}">
      <v-spacer style="margin-top: 1%;"/>

      <ul class="description">
        <li data-aos="fade-left" data-aos-duration="1000">GOAT Notes was recently updated and has ongoing support</li>
        <li data-aos="fade-right" data-aos-duration="1000">Ripple is under development - stay tuned for beta test</li>
        <li data-aos="fade-left" data-aos-duration="1000">Togetherly is under development - stay tuned for beta test</li>
        <li data-aos="fade-right" data-aos-duration="1000">Write Now has been moved to low priority</li>
        <li data-aos="fade-left" data-aos-duration="1000">Penguin Board has been moved to low priority</li>
        <li data-aos="fade-right" data-aos-duration="1000">Make Me Quit has been moved to low priority</li>
      </ul>
    </v-col>
  </div>
</template>

<script>
import aosMixin from '~/mixins/aos'
export default {
  name: 'ProductsPage',
  mixins: [aosMixin],

  created () {
    window.addEventListener('resize', this.resizeHandler)
  },

  data () {
    return {
      windowWidth: window.innerWidth,
      products: [
        {
            avatar: 'goatnotes/goat-notes-logo.png',
            title: 'Goat Notes',
            description: 'Note-taking and studying tool made better with AI.',
            link: 'https://goatnotes.net',
            privacy: 'goatnotes/privacy_policy.pdf',
            terms: 'goatnotes/terms_conditions.pdf'
        },
        {
            avatar: 'ripple/ripple-logo.png',
            title: 'Ripple',
            description: 'Round up your purchases to donate to charity.\n(Coming soon)',
            link: 'https://forms.gle/RM6BdK2YnegKn3ib8',
        },
        {
            avatar: 'togetherly/logo.png',
            title: 'Togetherly',
            description: 'Manage chores, calendars, and rewards for your family!\n(Coming soon)',
            link: 'https://forms.gle/spjWCBCkKUUG6dGK9',
        },
        {
            avatar: 'penguinboard/penguin-icon.png',
            title: 'Penguin Board',
            description: 'Customizable virtual greeting cards platform.',
            link: 'https://master.d3q0ytjlir01he.amplifyapp.com',
        },
        {
            avatar: 'writenow/write-now-logo.png',
            title: 'Write Now',
            description: 'Online journal with daily shareable prompts.',
            link: 'https://joinwritenow.netlify.app',
        },
        {
            avatar: 'makemequit/make-me-quit-logo.png',
            title: 'Make Me Quit',
            description: 'Set and control preferences to filter future job offers.',
            link: 'https://makemequit.netlify.app',
        },
      ],
      clients: [
        {
            avatar: 'maupinhomes/maupin-homes-logo.jpg',
            title: 'Maupin Homes',
            description: 'Freelance web development for Maupin Homes, LLC',
            link: 'https://maupinhomesco.com'
        },
        {
            avatar: 'kbfacials/kb-facials-logo.png',
            title: 'KB Facials',
            description: 'Freelance web development for KB Facials',
            link: 'https://kbfacials.com'
        },
        {
            avatar: 'patrickthib/logo.png',
            title: 'Patrick Thibaudeau',
            description: 'Freelance web development for Patrick Thibaudeau',
            link: 'https://patrickthibaudeau.com'
        },
        {
            avatar: 'thearena/the-arena-logo.png',
            title: 'The Arena',
            description: 'Freelance web development for The Arena',
            link: 'https://stepinarena.netlify.com'
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

.card {
    margin-right: 15px;
    margin-top: 15px;
    /* background-color: #5b5e7a; */
}

.title {
    margin-left: 15px;
    font-family: 'Aileron Regular', sans-serif !important;
    font-size: 22px !important;
    color: #f1f2fa;
}

.avatar {
  height: 50px;
}

.description {
    padding: 15px;
    font-family: 'Aileron Regular', sans-serif !important;
}

.button {
    font-family: 'Aileron Regular', sans-serif !important;
    /* color: #f1f2fa; */
}

.legal-docs {
  margin-bottom: 5px;
}

</style>
