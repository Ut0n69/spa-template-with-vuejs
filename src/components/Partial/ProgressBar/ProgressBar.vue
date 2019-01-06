<template>
  <div class="progress-bar-bg"><div class="progress-bar"></div></div>
</template>

<style lang="scss" scoped>
.progress-bar-bg {
  background: #eee;
  .progress-bar {
    overflow: no-display;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: #1496ed;
    background-position: 100px 100px;
    animation-name: moveIndeterminate;
    animation-duration: 7s;
    animation-timing-function: all 7s cubic-bezier(0.235, 0.285, 0.975, 0.055);
  }
}

@keyframes moveIndeterminate {
  0% {
    width: 0;
  }
  10% {
    width: 15%;
  }
  100% {
    width: 100%;
  }
}
</style>
