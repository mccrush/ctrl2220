<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-white shadow-sm">
    <div id="maxwidth" class="container-fluid">
      <router-link class="navbar-brand fw700" to="/">
        <img src="/logo.png" height="30" class="mr-2" alt="Полный контроль" />
        Полный контроль
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/reshen" class="nav-link">Reshen</router-link>
          </li>
          <li class="nav-item"></li>

          <li class="nav-item dropdown">
            <router-link to="/naprav" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Naprav</router-link>
            <div class="dropdown-menu shadow-sm" aria-labelledby="navbarDropdown">
              <router-link to="/naprav/internet" class="dropdown-item">Internet</router-link>
              <div class="dropdown-divider"></div>
              <router-link to="/naprav/video" class="dropdown-item">Video</router-link>
            </div>
          </li>

          <li class="nav-item">
            <router-link to="/rtsp" class="nav-link">RTSP</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin" class="nav-link">-=Admin=-</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

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
