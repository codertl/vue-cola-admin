<script setup lang="ts">
import { computed, ref } from 'vue'
import avatar from '@/assets/login/cola.svg?component'
// 插画
import illustration1 from '@/assets/login/illustration1.svg?component'
import illustration2 from '@/assets/login/illustration2.svg?component'
import illustration3 from '@/assets/login/illustration3.svg?component'
import illustration4 from '@/assets/login/illustration4.svg?component'
import illustration5 from '@/assets/login/illustration5.svg?component'
import illustration6 from '@/assets/login/illustration6.svg?component'
import illustration7 from '@/assets/login/illustration7.svg?component'


import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
// 周一至周日都会切换不同的插画
const currentIllustration = computed(() => {
  switch (new Date().getDay()) {
    case 1:
      return illustration1
      break
    case 2:
      return illustration2
      break

    case 3:
      return illustration3
      break

    case 4:
      return illustration4
      break

    case 5:
      return illustration5
      break

    case 6:
      return illustration6
      break

    default:
      return illustration7
  }
})

// 账号、密码
const user = ref('coderwhy')
const password = ref('123456')

const handleLoginBtn = () => {
  userStore.getLoginData({
    name: user.value,
    password: password.value
  })
}
</script>

<template>
  <img
    src="@/assets/login/bg.png"
    class="login-bg"
    alt=""
    v-motion
    :initial="{
      opacity: 0,
      x: 0
    }"
    :enter="{
      opacity: 1,
      x: 0,
      transition: {
        delay: 100
      }
    }"
  />
  <main class="login-container">
    <div class="img">
      <component
        :is="currentIllustration"
        v-motion
        :initial="{
          opacity: 0,
          y: 100
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 200
          }
        }"
      ></component>
    </div>
    <div class="login-box">
      <form class="login-form" action="javascript:">
        <avatar width="64" height="64" />
        <h2
          v-motion
          :initial="{
            opacity: 0,
            y: 100
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 100
            }
          }"
        >
          cola admin
        </h2>
        <div
          class="input-group"
          v-motion
          :initial="{
            opacity: 0,
            y: 100
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 200
            }
          }"
        >
          <div class="icon">
            <svg
              t="1651217036870"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4400"
              width="20"
              height="20"
            >
              <path
                d="M164.655 68.977l0 0 0 0zM866.321 769.149q0 59.804-36.377 94.437t-96.684 34.632l-435.544 0q-60.293 0-96.684-34.632t-36.377-94.437q0-26.414 1.744-51.573t6.977-54.321 13.2-54.069 21.432-48.586 30.892-40.367 42.614-26.665 55.563-9.963q4.479 0 20.931 10.717t37.131 23.916 53.819 23.916 66.531 10.717 66.531-10.717 53.819-23.916 37.131-23.916 20.931-10.717q30.405 0 55.563 9.963t42.614 26.665 30.893 40.367 21.432 48.586 13.2 54.069 6.977 54.321 1.744 51.573zM706.846 324.131q0 79.242-56.065 135.292t-135.293 56.065-135.293-56.065-56.065-135.292 56.065-135.293 135.293-56.065 135.293 56.065 56.065 135.293z"
                p-id="4401"
                fill="#1296db"
              ></path>
            </svg>
          </div>
          <div class="input">
            <h5>用户名</h5>
            <input type="text" v-model="user" />
          </div>
        </div>
        <div
          class="input-group"
          v-motion
          :initial="{
            opacity: 0,
            y: 100
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 300
            }
          }"
        >
          <div class="icon">
            <svg
              t="1651216948163"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3501"
              width="15"
              height="15"
            >
              <path
                d="M851.450696 21.647662l-399.545757 399.609756c-117.438165-55.551132-262.011906-35.007453-359.162388 62.143029-123.646068 123.646068-123.646068 324.218934 0 447.865002s324.218934 123.646068 447.865002 0c97.150482-97.150482 117.630162-241.660224 62.143029-359.226387l151.741629-151.741629 96.382494 96.382494c28.79955 28.79955 75.51882 28.863549 104.382369 0l43.51932-43.51932c28.79955-28.79955 28.863549-75.51882 0-104.382369l-54.463149-54.463149 0.063999-0.063999-41.983344-41.791347 99.966438-99.966438c28.79955-28.79955 28.863549-75.51882 0-104.382369l-46.463274-46.463274c-28.863549-28.863549-75.582819-28.863549-104.446368 0zM392.065874 782.787769c-41.663349 41.663349-109.182294 41.59935-150.781644-0.063999-41.663349-41.663349-41.663349-109.182294 0-150.845643s109.182294-41.59935 150.781644 0.063999 41.727348 109.118295 0 150.845643z"
                p-id="3502"
                fill="#1296db"
              ></path>
            </svg>
          </div>
          <div class="input">
            <h5>密码</h5>
            <input type="password" v-model="password" autocomplete="off" />
          </div>
        </div>
        <button
          class="btn"
          v-motion
          :initial="{
            opacity: 0,
            y: 10
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 400
            }
          }"
          @click="handleLoginBtn"
        >
          立即登录
        </button>
      </form>
    </div>
  </main>
</template>

<style scoped lang="less">
.login-bg {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}
.login-container {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 18rem;
  padding: 0 2rem;
  box-sizing: border-box;

  .img {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .login-box {
    display: flex;
    align-items: center;
    text-align: center;
    .login-form {
      width: 380px;
      h2 {
        margin: 10px 0;
        margin-bottom: 50px;
        text-transform: uppercase;
        color: #999;
        font-size: 30px;
      }
      .input-group {
        position: relative;
        display: grid;
        grid-template-columns: 7% 93%;
        margin: 30px 0;
        padding: 5px 0;
        border-bottom: 2px solid #d9d9d9;
        div {
          position: relative;
          height: 45px;
        }
        .icon {
          display: flex;
          align-items: center;
        }
        .input {
          h5 {
            position: absolute;
            top: -100%;
            z-index: 1;
            color: #d9d9d9;
            font-weight: 500;
            left: 10px;
          }
          input {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            padding: 0;
            background: none;
            color: #555;
            padding-left: 10px;
          }
        }
      }
      .btn {
        width: 100%;
        height: 50px;
        border-radius: 25px;
        border: none;
        background-image: linear-gradient(to right, #567dbe, #5392f0, #567dbe);
        cursor: pointer;
        color: #fff;
        background-size: 200%;
        transition: 0.5s;
      }
      .btn:hover {
        background-position: right;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .login-container {
    grid-template-columns: 1fr;
  }
  .login-bg {
    display: none;
  }
  .login-container > .img {
    display: none;
  }
  .login-box {
    justify-content: center;
  }
}
</style>
