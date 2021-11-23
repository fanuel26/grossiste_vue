
<template>
  <div>
    <Header></Header>

    <section class="container py-4" data-aos="fade-up" data-aos-delay="100">
      <div class="mt-4 text-center">
        <h5 class="text-center title" data-aos="fade-up" data-aos-delay="100">
          Création de Catégories et sous-catégories
        </h5>
        <div class="flex" data-aos="fade-up" data-aos-delay="150">
          <div class="bar">
            <div class="bar-in"></div>
          </div>
        </div>
      </div>
      <div class="mt-4 row">
        <div class="col-md-3">
          <div class="p-4 card">
            <h5 class="text-center">Creer une categorie</h5>
            <form class="mt-4" method="post" @submit.prevent="categorie_create">
              <div class="form-group">
                <label for="">Nom de categorie</label>
                <input
                  type="text"
                  placeholder="Nom de categorie"
                  class="form-control"
                  v-model="nom"
                />
              </div>
              <div class="mt-2 form-group d-flex justify-content-end">
                <button type="submit" class="btn btn-primary">
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-3">
          <div class="p-4 card">
            <h5 class="text-center">Creer une sous-categorie</h5>
            <form
              class="mt-4"
              method="post"
              @submit.prevent="sous_categorie_create"
            >
              <div class="mb-3 form-group">
                <label for="">Selectionner la categorie</label>
                <select v-model="cat" class="form-control" id="">
                  <option
                    v-bind:value="cat.id"
                    v-for="cat in categories"
                    :key="cat.id"
                  >
                    {{ cat.nom }}
                  </option>
                </select>
              </div>
              <div class="form-group">
                <label for="">Nom de sous-categorie</label>
                <input
                  type="text"
                  v-model="s_nom"
                  placeholder="Nom de categorie"
                  class="form-control"
                />
              </div>
              <div class="mt-2 form-group d-flex justify-content-end">
                <button class="btn btn-primary">Enregistrer</button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-3">
          <div class="p-4 card">
            <h5 class="text-center">Creer un sous-categorie 2</h5>
            <form class="mt-4" method="post" @submit.prevent="sous1_categorie_create">
              <div class="mb-3 form-group">
                <label for="">Selectionner la categorie</label>
                <select
                  v-model="cat_n1"
                  @change="recherche_s"
                  class="form-control"
                  id="">
                  <option
                    v-bind:value="cat.id"
                    v-for="cat in categories"
                    :key="cat.id"
                  >
                    {{ cat.nom }}
                  </option>
                </select>
              </div>
              <div class="mb-3 form-group">
                <label for="">Selectionner la sous-categorie</label>
                <select v-model="s_cat_n1" class="form-control" id="">
                  <option
                    v-bind:value="cat.id"
                    v-for="cat in s_categories"
                    :key="cat.id"
                  >
                    {{ cat.nom }}
                  </option>
                </select>
              </div>
              <div class="form-group">
                <label for="">Nom</label>
                <input
                  type="text"
                  v-model="s_nom_n1"
                  placeholder="Nom de categorie"
                  class="form-control"
                />
              </div>
              <div class="mt-2 form-group d-flex justify-content-end">
                <button class="btn btn-primary">Enregistrer</button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-3">
          <div class="p-4 card">
            <h5 class="text-center">Creer un sous-categorie 3</h5>
            <form class="mt-4" method="post" @submit.prevent="sous2_categorie_create">
              <div class="mb-3 form-group">
                <label for="">Selectionner la categorie</label>
                <select
                  v-model="s_cat_n2"
                  @change="recherche_s2"
                  class="form-control"
                  id="">
                  <option
                    v-bind:value="cat.id"
                    v-for="cat in categories"
                    :key="cat.id"
                  >
                    {{ cat.nom }}
                  </option>
                </select>
              </div>
              <div class="mb-3 form-group">
                <label for="">Selectionner la sous-categorie</label>
                <select v-model="s_cat_n3" 
                  @change="recherche_s3" class="form-control" id="">
                  <option
                    v-bind:value="cat.id" 
                    v-for="cat in s2_categories"
                    :key="cat.id"
                  >
                    {{ cat.nom }}
                  </option>
                </select>
              </div>
              <div class="mb-3 form-group">
                <label for="">Selectionner la sous-categorie 2</label>
                <select v-model="s_cat_n4" class="form-control" id="">
                  <option
                    v-bind:value="cat.id"
                    v-for="cat in s3_categories"
                    :key="cat.id"
                  >
                    {{ cat.nom }}
                  </option>
                </select>
              </div>
              <div class="form-group">
                <label for="">Nom de categorie</label>
                <input
                  type="text" v-model="s_nom_n2"
                  placeholder="Nom de categorie"
                  class="form-control"
                />
              </div>
              <div class="mt-2 form-group d-flex justify-content-end">
                <button class="btn btn-primary">Enregistrer</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="container py-4" data-aos="fade-up" data-aos-delay="100">
      <div class="mt-4 text-center">
        <h5 class="text-center title" data-aos="fade-up" data-aos-delay="100">
          Liste des Catégories et sous-catégories
        </h5>
        <div class="flex" data-aos="fade-up" data-aos-delay="150">
          <div class="bar">
            <div class="bar-in"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="my-4 col-md-12">
          <div class="table-responsive">
            <table class="table table-striped table-hover display">
              <thead class="text-white bg-secondary">
                <tr>
                  <th>Date de création</th>
                  <th>Nom de categorie</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="cat in categories" :key="cat.id">
                  <td>{{ cat.created_at }}</td>
                  <td>{{ cat.nom }}</td>
                  <td class="d-flex justify-content-center">
                    <button class="mx-2 btn btn-info btn-sm">
                      Voir ses sous categorie
                    </button>
                    <button class="mx-2 btn btn-success btn-sm">
                      Modifier
                    </button>
                    <button class="mx-2 btn btn-sm btn-primary">
                      Supprimer
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
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
import "datatables.net-responsive-bs4";

export default {
  components: {
    Header,
  },
  data() {
    return {
      callback: "http://127.0.0.1:8000/api",
      // categorie liste
      categories: null,

      // creation categorie creat
      nom: null,
      cat: null,
      s_nom: null,

      // sous ccategorie
      cat_n1: null,
      s_cat_n1: null,
      s_nom_n1: null,

      sous2_categorie: null,

      // code other 
      cat_n2: null,
      s_cat_n2: null,
      s_nom_n2: null,

      
      cat_n3: null,
      s_cat_n3: null,
      s_cat_n4: null,
      s_nom_n3: null,
      s_categories: null,
      s1_categories: null,
      s2_categories: null,
      s3_categories: null
    };
  },
  mounted() {
    this.$http.get(`${this.callback}/categories`, {}).then(
      (response) => {
        let data = response.body;

        console.log(data);
        if (data.status == true) {
          this.categories = data.data;

          setTimeout(() => {
            $("table.display").DataTable({
              responsive: true,
              language: {
                url: "https://cdn.datatables.net/plug-ins/1.10.21/i18n/French.json",
              },
              order: [[0, "asc"]],
            });
          }, 1000);
        }
      },
      (response) => {
        console.log(response);
      }
    );
  },
  methods: {
    // recherche de sous categories
    recherche_s() {
      
      console.log(this.cat_n1);
      if (this.cat_n1 != null) {
        this.$http.get(`${this.callback}/cat_sous/${this.cat_n1}`, {}).then(
          (response) => {
            let data = response.body;

            if (data.status == true) {
              this.s_categories = data.data;
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

    // recherche sous1_categories
    recherche_s1() {
      if (this.cat_n2 != null) {
        this.$http.get(`${this.callback}/cat_sous1/${this.cat_n2}`, {}).then(
          (response) => {
            let data = response.body;

            if (data.status == true) {
              this.s1_categories = data.data;
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
        this.$http.get(`${this.callback}/cat_sous/${this.s_cat_n2}`, {}).then(
          (response) => {
            let data = response.body;

            console.log(data)
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

  // recherche de categorie2

    recherche_s3() {
      if (this.s_cat_n3 != null) {
        this.$http.get(`${this.callback}/cat_sous1/${this.s_cat_n3}`, {}).then(
          (response) => {
            let data = response.body;

            console.log(data)
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
    
    categorie_create() {
      if (this.nom != null) {
        this.$http.post(`${this.callback}/categories`, { nom: this.nom }).then(
          (response) => {
            let data = response.body;

            console.log(data);
            if (data.status == true) {
              this.$swal("Success!", data.message, "success");
            }
          },
          (response) => {
            console.log(response);
          }
        );
      } else {
        this.$swal("Error!", "Veuillez remplir tous les champs", "error");
      }
    },
    sous_categorie_create() {
      if (this.cat != null && this.s_nom != null) {
        this.$http
          .post(`${this.callback}/sous_categories`, {
            id_cat: this.cat,
            nom: this.s_nom,
          })
          .then(
            (response) => {
              let data = response.body;

              console.log(data);
              if (data.status == true) {
                this.$swal("Success!", data.message, "success");
              }
            },
            (response) => {
              console.log(response);
            }
          );
      } else {
        this.$swal("Error!", "Veuillez remplir tous les champs", "error");
      }
    },
    sous1_categorie_create() {
      if (this.s_cat_n1 != null && this.s_nom_n1 != null) {
        this.$http
          .post(`${this.callback}/sous1_categories`, {
            id_cat: this.s_cat_n1,
            nom: this.s_nom_n1,
          })
          .then(
            (response) => {
              let data = response.body;

              console.log(data);
              if (data.status == true) {
                this.$swal("Success!", data.message, "success");
              }
            },
            (response) => {
              console.log(response);
            }
          );
      } else {
        this.$swal("Error!", "Veuillez remplir tous les champs", "error");
      }
    },
    
    sous2_categorie_create() {
      if (this.s_cat_n4 != null && this.s_nom_n2 != null) {
        this.$http
          .post(`${this.callback}/sous2_categories`, {
            id_cat: this.s_cat_n4,
            nom: this.s_nom_n2,
          })
          .then(
            (response) => {
              let data = response.body;

              console.log(data);
              if (data.status == true) {
                this.$swal("Success!", data.message, "success");
              }
            },
            (response) => {
              console.log(response);
            }
          );
      } else {
        this.$swal("Error!", "Veuillez remplir tous les champs", "error");
      }
    },
  },
};
</script>