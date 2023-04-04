<template>
  <div class="icon-container" id="container">
    <div class="icon" id="icon"></div>
  </div>
</template>

<script>
export default {
    mounted() {
        const container = document.getElementById('container')
        const logo = document.getElementById('icon')
        setTimeout(() => {
            container.style.zIndex = '1'
            logo.style.zIndex = '1'
        }, 2500);
    }
}
</script>


<style>
.icon-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.icon {
  width: 400px;
  height: 400px;
  background-image: url('/icon.png');
  background-repeat: no-repeat;
  background-size: contain;
  animation: logo-in 3s ease-in-out forwards;
}

@keyframes logo-in {
  0% {
    opacity: 0;
    transform: scale(2);
  }
  50% {
    opacity: 1;
    transform: scale(1.5);
  }
  100% {
    opacity: 1;
    transform: scale(0);
  }
}
</style>
