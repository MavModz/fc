<template>
  <div>
    <!-- Conditionally render Google Sign-In button -->
    <div v-if="!isLoggedIn" id="google-signin-button"></div>

    <!-- Display logout button once logged in -->
    <button v-if="isLoggedIn" @click="handleLogout">Logout</button>
  </div>

  <GoogleSignInButton @success="handleLoginSuccess" />
  <div class="card flex justify-content-center">
    <Dialog v-model:visible="visible" modal :closable="false">
      <div class="card flex justify-content-center">
        <ProgressSpinner />
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import type { CredentialResponse } from "vue3-google-signin";
import { GoogleSignInButton, decodeCredential } from "vue3-google-signin";
import { useRouter, useRoute } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const route = useRoute();
const visible = ref(false);
const isLoggedIn = ref(false);

const setCookie = (name: string, value: string, days: number): void => {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
};

const handleLogout = (): void => {
  localStorage.removeItem("token");
  setCookie('token', '', -1);
  isLoggedIn.value = false;
  router.replace('/');
};

const handleLoginSuccess = async (response: CredentialResponse): Promise<void> => {
  const { credential } = response;
  const decodedCredential = decodeCredential(credential);
  await callback({ ...decodedCredential });
  isLoggedIn.value = true;
};

const callback = async (userData: { email: string; name: string }): Promise<void> => {
  const data = {
    email: userData.email,
    name: userData.name,
  };

  visible.value = true;
  try {
    const response = await homePost('/google-signin', data);
    if (response?.data?.token && typeof response.data.token === 'string') {
      localStorage.setItem("token", response.data.token);
      useNuxtApp().token = response.data.token;
      setCookie('token', response.data.token, 180);

      if (route.query.fromaddlisting) {
        const role = response.data.user?.role || '';
        if (role === 'Admin') {
          router.replace('/admin/categories');
        } else {
          if(response.data.isUser) {
            router.replace('/user/profile');
          } else {
            router.replace(`/${role.toLowerCase()}/profile?newUser=true`);
          }
        }
      } else {
        if (response.data.isUser) {
          router.replace(`/${response.data.user.role.toLowerCase()}/dashboard`);
        } else {
          router.replace(`/${response.data.user.role.toLowerCase()}/profile?newUser=true`);
        }
      }
    }
  } catch (error) {
    console.error(error);
  } finally {
    visible.value = false;
  }
};
</script>
