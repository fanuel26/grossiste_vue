
<template>
  <div>
    <Header></Header>

    <section class="container py-4" data-aos="fade-up" data-aos-delay="100">
      <div class="mt-4 text-center">
        <h5 class="text-center title" data-aos="fade-up" data-aos-delay="100">
          Liste de la boutique
        </h5>
        <div class="flex" data-aos="fade-up" data-aos-delay="150">
          <div class="bar">
            <div class="bar-in"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="my-4 col-md-12">
          <div class="p-4 card">
            <div class="row">
              <div class="col-md-7">
                <div class="row">
                  <div class="col-md-12">
                    <p>
                      Date de creation:
                      <strong>{{ vendeur.created_at }}</strong>
                    </p>
                  </div>
                  <div class="col-md-6">
                    <p>
                      Nom de la boutique:
                      <strong>{{ vendeur.nom_boutique }}</strong>
                    </p>
                  </div>
                  <div class="col-md-6">
                    <p>
                      Nom du vendeur: <strong>{{ vendeur.nom_vendeur }}</strong>
                    </p>
                  </div>
                  <div class="col-md-6">
                    <p>
                      Numero de téléphone: <strong>{{ vendeur.numero }}</strong>
                    </p>
                  </div>
                  <div class="col-md-6">
                    <p>
                      Quartier: <strong>{{ vendeur.quartier }}</strong>
                    </p>
                  </div>
                  <div class="col-md-6">
                    <p>
                      Latitude: <strong>{{ vendeur.lat }}</strong>
                    </p>
                  </div>
                  <div class="col-md-6">
                    <p>
                      Longitude: <strong>{{ vendeur.long }}</strong>
                    </p>
                  </div>
                  <div class="mt-4 col-md-6">
                    <button class="btn btn-secondary">
                      Localiser le point de vente
                    </button>
                  </div>
                  <div class="mt-4 col-md-6">
                    <router-link
                      :to="{
                        name: 'produit_create',
                        params: { id: vendeur.id },
                      }"
                      class="btn btn-primary"
                    >
                      Publier un produit du vendeur
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="col-md-5">
                <form action="" method="post">
                  <div class="mb-3 from-group">
                    <label for="">Selectionner la catégories</label>

                    <div class="input-group">
                      <select v-model="cat" class="form-control select" id="">
                        <option
                          v-bind:value="cat.id"
                          v-for="cat in categories"
                          :key="cat.id"
                        >
                          {{ cat.nom }}
                        </option>
                      </select>
                      <button type="button" class="btn btn-primary">
                        <i class="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div class="form-group">
                      <ul>
                          <li></li>
                      </ul>
                  </div>
                  <div class="form-group d-flex justify-content-end">
                      <button type="submit" class="btn btn-primary">
                          Enregistrer
                      </button>
                  </div>
                </form>
              </div>
            </div>
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
      vendeur: null,
      categories: null,
    };
  },
  mounted() {
    let id = this.$route.params.id;
    this.$http.get(`${this.callback}/vendeurs/${id}`, {}).then(
      (response) => {
        let data = response.body;

        console.log(data);
        this.vendeur = data.data;

        setTimeout(() => {
          $("table.display").DataTable({
            responsive: true,
            language: {
              url: "https://cdn.datatables.net/plug-ins/1.10.21/i18n/French.json",
            },
            order: [[0, "asc"]],
          });
        }, 1000);
      },
      (response) => {
        console.log(response);
      }
    );

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
  },

  methods: {},
};
</script>