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
              <router-link :to="{name: 'produit_create'}" class="a"
                ><i class="mx-2 far fa-user"></i> Mon Compte
                <i class="mx-2 fas fa-caret-down"></i
              ></router-link>
            </p>

            <p class="mx-4 text-black">|</p>

            <p class="text-black">TOGO - Français - XOF</p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="sm-block bg-light border-bottom"
      data-aos="zoom-out"
      data-aos-delay="50"
      id="top"
    >
      <div class="container">
        <div class="row">
          <div
            class="mt-3 col-md-12 d-flex justify-content-start align-items-center"
          >
            <p class="text-black">
              <a href="#" class="a">Tel: +228 22 26 56 53</a>
            </p>
            <p class="mx-4 text-black">|</p>
            <p class="text-black">
              <a href="#" class="a">Email: admin@gmail.com</a>
            </p>
          </div>
          <div
            class="col-md-12 d-flex justify-content-start align-items-center"
          >
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
          </div>
        </div>
      </div>
    </section>

    <section
      class="py-4 bg-white"
      data-aos="zoom-out"
      data-aos-delay="100"
      id="bar-first"
    >
      <div class="container">
        <div class="row d-sm-flex">
          <div class="mt-2 col-md-3 col-sm-8 col-8">
            <a href="index.html" class="a">
              <div class="logo d-flex justify-content-start align-items-center">
                <p class="first">
                  <i class="fab fa-opencart icon-logo"></i> TOGO
                </p>
                <p class="second">GROSSISTE</p>
              </div>
              <small class="-mt-4 text-black"
                >Achat d'article rapide en gros...</small
              >
            </a>
          </div>
          <div class="mt-2 col-md-7 sm-hidden">
            <form action="" method="post">
              <div class="input-group">
                <input
                  type="text"
                  placeholder="Recherchez vos produits ici..."
                  class="form-control input"
                  autofocus
                />
                <div class="input-group-prepend">
                  <select type="text" class="form-control">
                    <option value="" selected disabled>
                      Tous les Catégories
                    </option>
                    <option value="">Cosmétiques</option>
                    <option value="">Vêtements & Chaussures</option>
                    <option value="">Phone & Télécommunication</option>
                    <option value="">Electro-menagères</option>
                  </select>
                </div>
                <div class="input-group-prepend">
                  <button class="input-group-text" id="">Rechercher</button>
                </div>
              </div>
              <div class="mx-2 form-group">
                <a href="#" class="mt-2 a"><small>Cosmétiques</small></a>
                <small class="text-light">|</small>
                <a href="#" class="mt-2 a"
                  ><small>Vêtements & Chaussures</small></a
                >
                <small class="text-light">|</small>
                <a href="#" class="mt-2 a"
                  ><small>Phone & Télécommunication</small></a
                >
                <small class="text-light">|</small>
                <a href="#" class="mt-2 a"><small>Electro-menagères</small></a>
              </div>
            </form>
          </div>
          <div
            class="px-4 mt-3 col-md-2 col-sm-3 col-3 d-flex justify-content-center"
          >
            <div class="cart-div">
              <a href="panier.html" class="relative">
                <p class="text-black cart">
                  <i class="fab fa-opencart" style="font-size: 30px;"></i>
                </p>
                <p class="nbr"><small>0</small></p>
              </a>
            </div>
          </div>

          <div class="mt-3 col-12 sm-block">
            <form action="" method="post">
              <div class="input-group">
                <input
                  type="text"
                  placeholder="Recherchez vos produits ici..."
                  class="form-control input"
                  autofocus
                />
                <div class="input-group-prepend">
                  <button class="input-group-text" id="">Rechercher</button>
                </div>
              </div>
              <div class="mx-2 form-group">
                <a href="#" class="mt-2 a"><small>Cosmétiques</small></a>
                <small class="text-light">|</small>
                <a href="#" class="mt-2 a"
                  ><small>Vêtements & Chaussures</small></a
                >
                <small class="text-light">|</small>
                <a href="#" class="mt-2 a"><small>Electro-menagères</small></a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section
      class="hidden pt-4 bg-white shadow sm-hidden sticky-top"
      data-aos="zoom-out"
      data-aos-delay="100"
      id="bar-second"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-3 d-flex justify-content-center align-items-start">
            <a href="index.html" class="a">
              <div class="logo d-flex justify-content-start align-items-center">
                <p class="first">
                  <i class="fab fa-opencart icon-logo"></i> TOGO
                </p>
                <p class="second">GROSSISTE</p>
              </div>
            </a>

            <div class="relative">
              <button class="mx-4 mt-2 btn btn-light" id="btn-drop">
                <i class="fas fa-align-left" id="icon-drop"></i>
              </button>
            </div>
          </div>
          <div class="mt-1 col-md-7">
            <form action="" method="post">
              <div class="input-group">
                <input
                  type="text"
                  placeholder="Recherchez vos produits ici..."
                  class="form-control input"
                  autofocus
                />
                <div class="input-group-prepend">
                  <select type="text" class="form-control">
                    <option value="" selected disabled>
                      Tous les Catégories
                    </option>
                    <option value="">Cosmétiques</option>
                    <option value="">Vêtements & Chaussures</option>
                    <option value="">Phone & Télécommunication</option>
                    <option value="">Electro-menagères</option>
                  </select>
                </div>
                <div class="input-group-prepend">
                  <button class="input-group-text" id="">Rechercher</button>
                </div>
              </div>
            </form>
          </div>
          <div class="px-4 col-md-2 d-flex justify-content-center">
            <div class="cart">
              <a href="panier.html" class="relative">
                <p class="text-black cart">
                  <i class="fab fa-opencart" style="font-size: 30px;"></i>
                </p>
                <p class="nbr"><small>0</small></p>
              </a>
            </div>
          </div>
          <div
            class="hidden py-4 mt-4 col-md-12 border-top"
            id="drop-categorie"
          >
            <div class="container">
              <div class="row">
                <div class="col-md-3">
                  <p class="text-black">
                    <a href="#" class="a">- Shopping Femmes</a>
                  </p>
                  <p class="text-black">
                    <a href="#" class="a">- Shopping Hommes</a>
                  </p>
                  <p class="text-black">
                    <a href="#" class="a">- Shopping Enfants</a>
                  </p>
                </div>
                <div class="col-md-3">
                  <p class="text-black">
                    <a href="#" class="a">- Cosmétiques</a>
                  </p>
                  <p class="text-black">
                    <a href="#" class="a">- Vêtements & Chaussures</a>
                  </p>
                  <p class="text-black">
                    <a href="#" class="a">- Phone & Télécommunication</a>
                  </p>
                </div>
                <div class="col-md-3">
                  <p class="text-black">
                    <a href="#" class="a">- Electro-menagères</a>
                  </p>
                  <p class="text-black">
                    <a href="#" class="a">- Immobiliers</a>
                  </p>
                  <p class="text-black">
                    <a href="#" class="a">- Agro-alimentaiires</a>
                  </p>
                </div>
                <div class="col-md-3">
                  <p class="text-black">
                    <a href="#" class="a">- Accessoires de cuissine</a>
                  </p>
                  <p class="text-black">
                    <a href="#" class="a">- Bijouteries & Montres</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
</template>

<script>
export default {
    
}
</script>