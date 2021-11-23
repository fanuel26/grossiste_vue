
<template>
  <div>
    <Header></Header>

    <section class="container py-4" data-aos="fade-up" data-aos-delay="100">
      <div class="mt-4 text-center">
        <h5 class="text-center title" data-aos="fade-up" data-aos-delay="100">
          Liste des Vendeurs
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
                  <th>Nom de la boutique</th>
                  <th>Nom du vendeur</th>
                  <th>Numero</th>
                  <th>Quartier</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="cat in vendeurs" :key="cat.id">
                  <td>{{ cat.created_at }}</td>
                  <td>{{ cat.nom_boutique }}</td>
                  <td>{{ cat.nom_vendeur }}</td>
                  <td>{{ cat.numero }}</td>
                  <td>{{ cat.quartier }}</td>
                  <td class="d-flex justify-content-center">
                    <router-link
                      :to="{ name: 'vendeur_detail', params: { id: cat.id } }"
                      class="mx-2 btn btn-info btn-sm"
                    >
                      Details
                    </router-link>
                    <button class="mx-2 btn btn-success btn-sm">
                      Modifier
                    </button>
                    <button class="mx-2 btn btn-sm btn-primary">Bloquer</button>
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
      vendeurs: null,
    };
  },
  mounted() {
    this.$http.get(`${this.callback}/vendeurs`, {}).then(
      (response) => {
        let data = response.body;

        console.log(data);
        this.vendeurs = data.data;

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
  },

  methods: {},
};
</script>