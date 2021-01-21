<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-white shadow-sm">
    <div id="maxwidth" class="container-fluid">
      <router-link class="navbar-brand fw700" to="/">
        <img src="/logo.png" height="30" class="me-2" alt="Полный контроль" />
        Полный контроль
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link to="/reshen" class="nav-link">Reshen</router-link>
          </li>
          <li class="nav-item"></li>

          <li class="nav-item dropdown">
            <Progress v-if="!napravs.length" class="mt-2" />
            <router-link
              v-else
              to="/naprav"
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >Направления</router-link
            >

            <div
              class="dropdown-menu shadow-sm"
              aria-labelledby="navbarDropdown"
            >
              <router-link
                v-for="naprav in napravs"
                :key="naprav.id"
                :to="'/naprav/' + naprav.alias"
                class="dropdown-item"
                >{{ naprav.title }}</router-link
              >
            </div>
          </li>

          <li class="nav-item">
            <router-link to="/rtsp" class="nav-link">RTSP</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link
              v-if="!user"
              to="/login"
              class="nav-link btn btn-sm btn-light border text-muted"
              >Войти</router-link
            >
          </li>
          <li>
            <button
              v-if="user"
              class="nav-link d-none d-sm-inline btn btn-sm btn-light border text-muted"
              title="Выйти"
              @click="logOut"
            >
              Выйти
            </button>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Progress from '@/components/Progress'
import { auth } from '@/firebase.js'

export default {
  components: {
    Progress,
  },
  computed: {
    user() {
      return this.$store.getters.user
    },
    napravs() {
      return this.$store.getters.napravs
    },
  },
  methods: {
    logOut() {
      auth
        .signOut()
        .then(() => {
          this.$store.dispatch('logOut')
        })
        .catch(function (error) {
          console.error(error)
        })
    },
  },
}
</script>

<style scoped>
#maxwidth {
  max-width: 1130px;
}

.dropdown-menu {
  margin-top: -5px;
  border: none;
  transition: 0.5s;
}

@media (min-width: 768px) {
  .dropdown:hover div.dropdown-menu {
    display: block;
  }
}

.dropdown-item:active {
  color: #212529;
  background-color: #f2f2f2;
}
</style>
