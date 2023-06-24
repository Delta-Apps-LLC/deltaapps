<template>
  <div class="floating-button">
    <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
            <button
                @click="$emit('click')"
                v-on="on"
                v-bind="attrs"
            >
                Donate
            </button>
        </template>
        <div style="max-width: 200px;">
            <span>
                We love being able to provide our apps to all users, but development is not free. We would greatly appreciate any kind donation you are able to offer to help us with development costs so we can continue to help as many people as possible!
            </span>
        </div>
    </v-tooltip>
  </div>
</template>

<script>
export default {
    name: 'DonateButton',
}
</script>


<style>
.floating-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
}

.floating-button button {
  /* background-color: #233bfa; */
  background-image: linear-gradient(to bottom, #233bfa, #5bb3fa);
  color: #f1f2fa;
  padding: 20px;
  border: none;
  border-radius: 50%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 20px;
  cursor: pointer;
}

.floating-button button:hover {
  /* background-color: #0060c0; */
  background-image: linear-gradient(to bottom, #1b2fcb, #488dc6);
}
</style>
