
<template>
  <div>
    <Header></Header>

    <section class="container py-4" data-aos="fade-up" data-aos-delay="100">
      <div class="mt-4 text-center">
        <h5 class="text-center title" data-aos="fade-up" data-aos-delay="100">
          Création de la boutique
        </h5>
        <div class="flex" data-aos="fade-up" data-aos-delay="150">
          <div class="bar">
            <div class="bar-in"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="my-4 col-md-8 offset-md-2">
          <div class="p-4 card">
            <form method="post" @submit.prevent="create">
              <div class="row">
                <div class="mb-3 form-group col-md-6">
                  <label for="">Nom de la boutique</label>
                  <input
                    type="text"
                    v-model="nom_boutique"
                    placeholder="Nom de la boutique"
                    class="form-control"
                  />
                </div>
                <div class="mb-3 form-group col-md-6">
                  <label for="">Nom du vendeur</label>
                  <input
                    type="text"
                    v-model="nom_vendeur"
                    placeholder="Nom du vendeur"
                    class="form-control"
                  />
                </div>
                <div class="mb-3 form-group col-md-6">
                  <label for="">Numero de téléphone</label>
                  <input
                    type="tel"
                    v-model="numero"
                    placeholder="Numéro de téléphone"
                    class="form-control"
                  />
                </div>
                <div class="col-md-6"></div>
                <div class="mb-3 form-group col-md-6">
                  <label for="">Ville</label>
                  <select name="" id="" class="form-control">
                    <option value=""></option>
                  </select>
                </div>
                <div class="mb-3 form-group col-md-6">
                  <label for="">Quartier</label>
                  <select name="" v-model="quartier" id="" class="form-control">
                    <option value="ADIDOGOME">ADIDOGOME</option>
                  </select>
                </div>
                <div class="mb-3 form-group col-md-6">
                  <label for="">Latitude</label>
                  <input
                    type="text"
                    v-model="lat"
                    placeholder="Latitude"
                    disabled
                    class="form-control"
                  />
                </div>
                <div class="mb-3 form-group col-md-6">
                  <label for="">Longitude</label>
                  <input
                    type="text"
                    v-model="long"
                    placeholder="Longitude"
                    disabled
                    class="form-control"
                  />
                </div>
                <div
                  class="mb-3 form-group col-md-12 d-flex justify-content-end"
                >
                  <button type="submit" class="btn btn-primary">
                    Enregistrer
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
// import $ from "jquery";
import "datatables.net-responsive-bs4";

export default {
  components: {
    Header,
  },
  data() {
    return {
      callback: "http://127.0.0.1:8000/api",
      lat: null,
      long: null,
      nom_boutique: null,
      nom_vendeur: null,
      numero: null,
      quartier: null,
    };
  },
  mounted() {
    navigator.geolocation.getCurrentPosition((pos) => {
      this.lat = pos.coords.latitude;
      this.long = pos.coords.longitude;
    });
  },

  methods: {
    create() {
      if (
        this.nom_boutique != null &&
        this.nom_vendeur != null &&
        this.numero != null &&
        this.quartier != null &&
        this.lat != null &&
        this.long != null
      ) {
        let data = {
          nom_boutique: this.nom_boutique,
          nom_vendeur: this.nom_vendeur,
          numero: this.numero,
          quartier: this.quartier,
          lat: this.lat,
          long: this.long,
        };

        this.$http.post(`${this.callback}/vendeurs`, data).then(
          (response) => {
            let data = response.body;

            console.log(data);
            if (data.status == true) {
              this.nom_boutique = null;
              this.nom_vendeur = null;
              this.numero = null;
              this.quartier = null;

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