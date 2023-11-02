<script >
import { RouterLink } from 'vue-router'
export default {
    data() {
        return {
            accountActive: false
        }
    },
    methods: {
        toggleAccount() {
            this.accountActive = !this.accountActive
        }
    },
    components: {
        RouterLink,
    }
}
</script>

<template>
    <nav>
        <div class="container">
            <i class="fa-solid fa-code"></i>
            <RouterLink to="/" class="link">ToDox</RouterLink>

            <div class="account" @click="toggleAccount">
                <img src="../assets/logo.png" alt="avatar" />
            </div>
        </div>
        <div v-if="accountActive">
            <div class="item">
                <RouterLink to="/login">Login</RouterLink>
            </div>
        </div>
    </nav>
</template>

<style>
nav {
    background-color: var(--navbar-bg);
    padding: 8px 16px;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}

.link {
    font-size: larger;
    font-weight: 700;
    color: var(--navbar-text);
}

.account {
    display: flex;
    justify-content: center;
    align-items: center;
}

.account img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
}</style>