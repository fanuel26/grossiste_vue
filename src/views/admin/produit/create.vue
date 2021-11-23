
<template>
  <div>
    <Header></Header>

    <section class="container py-4" data-aos="fade-up" data-aos-delay="100">
      <div class="mt-4 text-center">
        <h5 class="text-center title" data-aos="fade-up" data-aos-delay="100">
          Publication de produit
        </h5>
        <div class="flex" data-aos="fade-up" data-aos-delay="150">
          <div class="bar">
            <div class="bar-in"></div>
          </div>
        </div>
      </div>
      <div class="mt-4 row">
        <div class="col-md-12">
          <div class="p-4 card">
            <form @submit.prevent="create_produit" class="mt-4" method="post">
              <div class="row">
                <div class="col-md-6">
                  <div class="row">
                    <div class="mb-4 col-md-6 form-group">
                      <label for="">Nom du produit*</label>
                      <input
                        type="text"
                        v-model="nom"
                        placeholder="Nom de categorie"
                        class="form-control"
                      />
                    </div>

                    <div class="mb-4 col-md-6 form-group">
                      <label for="">Selectionner une categorie*</label>
                      <select
                        v-model="s_cat_n1"
                        @change="recherche_s1"
                        class="form-control"
                        id=""
                      >
                        <option
                          v-bind:value="cat.id"
                          v-for="cat in categories"
                          :key="cat.id"
                        >
                          {{ cat.nom }}
                        </option>
                      </select>
                    </div>

                    <div class="mb-4 col-md-6 form-group">
                      <label for="">Selectionner un sous-categorie*</label>
                      <select
                        v-model="s_cat_n2"
                        @change="recherche_s2"
                        class="form-control"
                        id=""
                      >
                        <option
                          v-bind:value="cat.id"
                          v-for="cat in s2_categories"
                          :key="cat.id"
                        >
                          {{ cat.nom }}
                        </option>
                      </select>
                    </div>

                    <div class="mb-4 col-md-6 form-group">
                      <label for="">Selectionner un sous-categorie 1</label>
                      <select
                        v-model="s_cat_n3"
                        @change="recherche_s3"
                        class="form-control"
                        id=""
                      >
                        <option
                          v-bind:value="cat.id"
                          v-for="cat in s3_categories"
                          :key="cat.id"
                        >
                          {{ cat.nom }}
                        </option>
                      </select>
                    </div>

                    <div class="mb-4 col-md-6 form-group">
                      <label for="">Selectionner un sous-categorie 2</label>
                      <select v-model="s_cat_n4" class="form-control" id="">
                        <option
                          v-bind:value="cat.id"
                          v-for="cat in s4_categories"
                          :key="cat.id"
                        >
                          {{ cat.nom }}
                        </option>
                      </select>
                    </div>

                    <div class="mb-4 col-md-6 form-group">
                      <label for="">Selectionner la marque</label>
                      <select v-model="marque" class="form-control" id="">
                        <option
                          v-bind:value="cat.id"
                          v-for="cat in marques"
                          :key="cat.id"
                        >
                          {{ cat.nom }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="mb-4 col-md-6 form-group">
                  <label for="">Description de produit</label>
                  <textarea
                    v-model="description"
                    cols="30"
                    class="form-control"
                    placeholder="Description de produit"
                    rows="7"
                  ></textarea>
                </div>

                <div class="col-md-12">
                  <div class="row">
                    <div class="px-4 mb-4 col-md-4">
                      <h5 class="mb-2">Gestionnaire de prix</h5>
                      <div class="mb-4 input-group">
                        <select v-model="nbr" class="form-control select">
                          <option
                            v-bind:value="nbr"
                            v-for="nbr in nbrs"
                            :key="nbr.id"
                          >
                            {{ nbr }}
                          </option>
                        </select>
                        <input
                          type="number"
                          v-model="price"
                          class="form-control"
                          placeholder="Prix"
                        />
                        <button
                          type="button"
                          @click="add_price"
                          class="btn btn-primary"
                        >
                          <i class="fa fa-plus"></i>
                        </button>
                      </div>
                      <div class="container">
                        <ul>
                          <li
                            v-for="prix in prices_choise"
                            :key="prix.id"
                            class="d-flex justify-content-between"
                          >
                            <p>{{ prix.nbr }} pieces - {{ prix.price }} XOF</p>
                            <a
                              href="#"
                              @click="delete_price(prix.nbr)"
                              class="a"
                              ><i class="fa fa-trash"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="px-4 mb-4 col-md-4">
                      <h5 class="mb-2">Gestionnaire de couleurs</h5>
                      <div class="mb-4 input-group">
                        <select v-model="couleur" class="form-control select">
                          <option
                            v-bind:value="col"
                            v-for="col in couleurs"
                            :key="col.id"
                          >
                            {{ col.nom }}
                          </option>
                        </select>
                        <button
                          type="button"
                          @click="add_color"
                          class="btn btn-primary"
                        >
                          <i class="fa fa-plus"></i>
                        </button>
                      </div>

                      <div class="container">
                        <ul>
                          <li
                            v-for="col in colors_choise"
                            :key="col.id"
                            class="d-flex justify-content-between"
                          >
                            <p>{{ col.nom }}</p>
                            <div
                              class="colo"
                              :style="{ 'background-color': col.code }"
                            ></div>
                            <a href="#" @click="delete_color(col.id)" class="a"
                              ><i class="fa fa-trash"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="px-4 mb-4 col-md-4">
                      <h5 class="mb-2">Gestionnaire de taille</h5>
                      <div class="mb-4 input-group">
                        <select v-model="size" class="form-control select">
                          <option
                            v-bind:value="size"
                            v-for="size in sizes"
                            :key="size.id"
                          >
                            {{ size.nom }}
                          </option>
                        </select>
                        <button
                          type="button"
                          @click="add_size"
                          class="btn btn-primary"
                        >
                          <i class="fa fa-plus"></i>
                        </button>
                      </div>
                      <div class="container">
                        <ul>
                          <li
                            v-for="size in sizes_choise"
                            :key="size.id"
                            class="d-flex justify-content-between"
                          >
                            <p>{{ size.nom }}</p>
                            <a href="#" @click="delete_size(size.id)" class="a"
                              ><i class="fa fa-trash"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-12">
                    <div class="row">
                      <div class="col-md-3">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          id="imagebtn"
                        >
                          <span class="fa fa-edit"></span> image produit
                        </button>

                        <input
                          type="file"
                          name="photo1"
                          id="addprofile"
                          hidden
                        />

                        <img
                          src=""
                          id="imgprofile"
                          class="my-4 w-100 img-fluid"
                          style="border-radius: 10px"
                          alt=""
                        />
                      </div>
                      <div class="col-md-3">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          id="imagebtn1"
                        >
                          <span class="fa fa-edit"></span> image secondary
                        </button>

                        <input type="file" id="addprofile1" hidden />

                        <img
                          src=""
                          id="imgprofile1"
                          class="my-4 w-100 img-fluid"
                          style="border-radius: 10px"
                          alt=""
                        />
                      </div>
                      <div class="col-md-3">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          id="imagebtn2"
                        >
                          <span class="fa fa-edit"></span> image secondary
                        </button>

                        <input type="file" id="addprofile2" hidden />

                        <img
                          src=""
                          id="imgprofile2"
                          class="my-4 w-100 img-fluid"
                          style="border-radius: 10px"
                          alt=""
                        />
                      </div>
                      <div class="col-md-3">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          id="imagebtn3"
                        >
                          <span class="fa fa-edit"></span> image secondary
                        </button>

                        <input type="file" id="addprofile3" hidden />

                        <img
                          src=""
                          id="imgprofile3"
                          class="my-4 w-100 img-fluid"
                          style="border-radius: 10px"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="my-4 form-group col-md-12 d-flex justify-content-end"
                >
                  <button type="submit" class="btn btn-lg btn-primary d-flex align-items-center">
                    <span class="mx-4 save">Enregistrer</span> 
                    <half-circle-spinner v-if="vis == 1"
                      :animation-duration="1000"
                      :size="30"
                      color="#fff"
                    />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <footer class="p-4 bg-white top">
      <div class="container">
        <div class="row">
          <div class="col-md-6"></div>
          <div class="col-md-6">
            <div class="my-4 text-center">
              <h5
                class="text-center title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Contactez-nous
              </h5>
              <div class="flex" data-aos="fade-up" data-aos-delay="150">
                <div class="bar">
                  <div class="bar-in"></div>
                </div>
              </div>
            </div>
            <div class="top">
              <form action="">
                <div class="row">
                  <div class="mb-4 col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Votre nom"
                      class="form-control form-control-lg input"
                    />
                  </div>
                  <div class="mb-4 col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Votre prénom"
                      class="form-control form-control-lg input"
                    />
                  </div>
                  <div class="mb-4 col-md-12 form-group">
                    <input
                      type="email"
                      placeholder="Votre adresse email"
                      class="form-control form-control-lg input"
                    />
                  </div>
                  <div class="mb-4 col-md-12 form-group">
                    <textarea
                      name=""
                      class="form-control form-control-lg input"
                      placeholder="Votre message"
                      id=""
                      cols="30"
                      rows="3"
                    ></textarea>
                  </div>
                  <div
                    class="mb-4 d-flex justify-content-end col-md-12 form-group"
                  >
                    <button class="btn btn-primary btn-lg">Envoyer</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Header from "../layouts/header.vue";
import $ from "jquery";
import { HalfCircleSpinner } from "epic-spinners";

function upload(addprofile, imgprofile, imagebtn) {
  let sending = false;

  $(`#${addprofile}`).on("change", () => {
    var profile = document.getElementById(addprofile);
    if (profile.files && profile.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $(`#${imgprofile}`).attr("src", e.target.result);
      };
      reader.readAsDataURL(profile.files[0]);
    }

    sending = true;
    $(`#${imagebtn}`).html("<span class='fa fa-check'></span> Image valide");
    $(`#${imagebtn}`).removeClass("btn-secondary").addClass("btn-dark");
  });

  $(`#${imagebtn}`).on("click", () => {
    if (!sending) {
      $(`#${addprofile}`).click();
    }
  });
}
export default {
  created() {},
  components: {
    Header,
    HalfCircleSpinner,
  },

  data() {
    return {
      vis: 0,
      callback: "http://127.0.0.1:8000/api",
      nbrs: [1, 2, 6, 12, 24, 36, 48, 60, 72, 84, 96, 108, 120],
      marques: null,
      couleurs: null,
      couleur: null,
      colors_choise: [],
      sizes: null,
      size: null,
      sizes_choise: [],
      prices: null,
      price: null,
      nbr: null,
      prices_choise: [],
      marque: null,
      description: null,
      categories: null,
      nom: null,
      cat_n1: null,
      s_cat_n1: null,
      cat_n2: null,
      s_cat_n2: null,
      cat_n3: null,
      s_cat_n3: null,
      s_cat_n4: null,
      s2_categories: null,
      s3_categories: null,
      s4_categories: null,
    };
  },

  mounted() {
    upload("addprofile", "imgprofile", "imagebtn");
    upload("addprofile1", "imgprofile1", "imagebtn1");
    upload("addprofile2", "imgprofile2", "imagebtn2");
    upload("addprofile3", "imgprofile3", "imagebtn3");

    this.$http.get(`${this.callback}/categories`, {}).then(
      (response) => {
        let data = response.body;

        console.log(data);
        if (data.status == true) {
          this.categories = data.data;
        }
      },
      (response) => {
        console.log(response);
      }
    );

    this.$http.get(`${this.callback}/marque`, {}).then(
      (response) => {
        let data = response.body;

        console.log(data);
        if (data.status == true) {
          this.marques = data.data;
        }
      },
      (response) => {
        console.log(response);
      }
    );

    this.$http.get(`${this.callback}/couleur`, {}).then(
      (response) => {
        let data = response.body;

        console.log(data);
        if (data.status == true) {
          this.couleurs = data.data;
        }
      },
      (response) => {
        console.log(response);
      }
    );

    this.$http.get(`${this.callback}/size`, {}).then(
      (response) => {
        let data = response.body;

        console.log(data);
        if (data.status == true) {
          this.sizes = data.data;
        }
      },
      (response) => {
        console.log(response);
      }
    );
  },

  methods: {
    create_produit() {
      this.vis = 1
    },
    
    recherche_s1() {
      if (this.s_cat_n1 != null) {
        this.$http.get(`${this.callback}/cat_sous/${this.s_cat_n1}`, {}).then(
          (response) => {
            let data = response.body;

            console.log(data);
            if (data.status == true) {
              this.s2_categories = data.data;
            }
          },
          (response) => {
            console.log(response);
          }
        );
      } else {
        this.$swal("Error!", "Veuillez selectionner un categorie", "error");
      }
    },

    recherche_s2() {
      if (this.s_cat_n2 != null) {
        this.$http.get(`${this.callback}/cat_sous1/${this.s_cat_n2}`, {}).then(
          (response) => {
            let data = response.body;

            console.log(data);
            if (data.status == true) {
              this.s3_categories = data.data;
            }
          },
          (response) => {
            console.log(response);
          }
        );
      } else {
        this.$swal("Error!", "Veuillez selectionner un categorie", "error");
      }
    },

    recherche_s3() {
      if (this.s_cat_n3 != null) {
        this.$http.get(`${this.callback}/cat_sous2/${this.s_cat_n3}`, {}).then(
          (response) => {
            let data = response.body;

            console.log(data);
            if (data.status == true) {
              this.s4_categories = data.data;
            }
          },
          (response) => {
            console.log(response);
          }
        );
      } else {
        this.$swal("Error!", "Veuillez selectionner un categorie", "error");
      }
    },

    add_color() {
      if (this.couleur != null) {
        this.colors_choise.push(this.couleur);
        this.$swal("Success!", "Couleur ajouter avec success", "success");
      } else {
        this.$swal("Error!", "Veuillez selectionner une couleur", "error");
      }
    },
    delete_color(id) {
      let data = this.colors_choise;

      this.colors_choise = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].id != id) {
          this.colors_choise.push(data[i]);
        }
      }
    },

    add_size() {
      if (this.size != null) {
        this.sizes_choise.push(this.size);
        this.$swal("Success!", "Couleur ajouter avec success", "success");
      } else {
        this.$swal("Error!", "Veuillez selectionner une couleur", "error");
      }
    },
    delete_size(id) {
      let data = this.sizes_choise;

      this.sizes_choise = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].id != id) {
          this.sizes_choise.push(data[i]);
        }
      }
    },

    add_price() {
      if (this.price != null && this.nbr != null) {
        this.prices_choise.push({ nbr: this.nbr, price: this.price });
        console.log(this.prices_choise);
        this.$swal("Success!", "Couleur ajouter avec success", "success");
      } else {
        this.$swal(
          "Error!",
          "Veuillez mettre le prix et le nombre de pieces",
          "error"
        );
      }
    },
    delete_price(nbr) {
      let data = this.prices_choise;

      this.prices_choise = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].nbr != nbr) {
          this.prices_choise.push(data[i]);
        }
      }
    },
  },
};
</script>