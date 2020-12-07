<template>
  <div class="building_info">
    <div class="building_img">
      <img src="@/assets/icon.png" alt="">
      <p>功能还在建设中</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "building"
}
</script>

<style scoped>
.building_info {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f8f8f8;
}
.building_img {
  margin-top: 50%;
  width: 50%;
  text-align: center;
  margin-left: 50%;
  transform: translateX(-50%);
img {
  width: 100%;
}
p {
  margin-top: 7px;
  color: #666;
  letter-spacing: 0.1em;
  font-size: 14px;
}
}
</style>
