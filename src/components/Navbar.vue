<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-white shadow-sm">
    <router-link to="/" class="navbar-brand">Ctrl22</router-link>
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
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
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
  </nav>
</template>


