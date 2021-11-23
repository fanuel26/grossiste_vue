<template>
  <div>
    <section
      class="sm-hidden bg-light border-bottom"
      data-aos="zoom-out"
      data-aos-delay="50"
      id="top"
    >
      <div class="container">
        <div class="row">
          <div
            class="mt-3 col-md-12 d-lg-flex justify-content-lg-end align-items-center"
          >
            <p class="text-black">
              <a href="#" class="a">Tel: +228 22 26 56 53</a>
            </p>
            <p class="mx-4 text-black">|</p>
            <p class="text-black">
              <a href="#" class="a">Email: admin@gmail.com</a>
            </p>
            <p class="mx-4 text-black">|</p>
            <p class="mx-2 text-primary">
              <a href="#" class="a icon"><i class="fab fa-facebook-f"></i></a>
            </p>
            <p class="mx-2 text-primary">
              <a href="#" class="a icon"><i class="fab fa-instagram"></i></a>
            </p>
            <p class="mx-2 text-primary">
              <a href="#" class="a icon"><i class="fab fa-twitter"></i></a>
            </p>
            <p class="mx-2 text-primary">
              <a href="#" class="a icon"><i class="fab fa-whatsapp"></i></a>
            </p>
            <p class="mx-4 text-black">|</p>
            <p class="text-black">
              <a href="#" class="a"
                ><i class="mx-2 far fa-user"></i> Mon Compte
                <i class="mx-2 fas fa-caret-down"></i
              ></a>
            </p>

            <p class="mx-4 text-black">|</p>

            <p class="text-black">TOGO - Français - XOF</p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="pt-2 bg-white border-bottom"
      data-aos="zoom-out"
      data-aos-delay="100"
      id="bar-first"
    >
      <div class="container-fluid">
        <div class="row d-sm-flex">
          <div class="col-md-3 col-sm-8 col-8">
            <a href="index.html" class="a">
              <div class="logo d-flex justify-content-start align-items-center">
                <p class="first">
                  <i class="fab fa-opencart icon-logo"></i> TOGO
                </p>
                <p class="second">GROSSISTE</p>
              </div>
            </a>
          </div>
          <div class="col-9">
            <nav class="navbar navbar-expand-sm navbar-light">
              <button
                class="navbar-toggler d-lg-none"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
              ></button>
              <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="pt-2 navbar-nav mt-lg-0">
                  <li class="nav-item active">
                    <router-link :to="{ name: 'vendeur_liste' }" class="mx-2 a"
                      >Liste des Vendeurs</router-link
                    >
                  </li>
                  <li class="nav-item active">
                    <router-link :to="{ name: 'vendeur_create' }" class="mx-2 a"
                      >Creation des Vendeurs</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link
                      :to="{ name: 'categorie_create' }"
                      class="mx-2 a"
                      >Catégories & sous-categories</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link
                      :to="{ name: 'marque_create' }"
                      class="mx-2 a"
                      >Marques</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link
                      :to="{ name: 'couleur_create' }"
                      class="mx-2 a"
                      >Couleurs</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link
                      :to="{ name: 'size_create' }"
                      class="mx-2 a"
                      >Sizes</router-link
                    >
                  </li>
                </ul>
                <ul class="pt-2 mx-4 mr-auto navbar-nav mt-lg-0">
                  <li class="nav-item active">
                    <a class="mx-4 a" href="#">Deconnexion</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>