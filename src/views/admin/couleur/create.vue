
<template>
  <div>
    <Header></Header>

    <section class="container py-4" data-aos="fade-up" data-aos-delay="100">
      <div class="mt-4 text-center">
        <h5 class="text-center title" data-aos="fade-up" data-aos-delay="100">
          Création & Liste de couleur
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
            <h5 class="text-center">Creer une couleur</h5>
            <form class="mt-4" method="post" @submit.prevent="couleur_create">
              <div class="mb-3 form-group">
                <label for="">Nom de couleur</label>
                <input
                  type="text"
                  placeholder="Nom de couleur"
                  class="form-control"
                  v-model="nom"
                />
              </div>
              <div class="mb-3 form-group">
                <label for="">Code couleur</label>
                <input type="color" v-model="code" class="form-control" />
              </div>
              <div class="mt-2 form-group d-flex justify-content-end">
                <button type="submit" class="btn btn-primary">
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="my-4 col-md-9">
          <div class="table-responsive">
            <table class="table table-striped table-hover display">
              <thead class="text-white bg-secondary">
                <tr>
                  <th>Date de création</th>
                  <th>Nom de couleur</th>
                  <th>Code couleur</th>
                  <th>Couleur</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="cat in couleurs" :key="cat.id">
                  <td>{{ cat.created_at }}</td>
                  <td>{{ cat.nom }}</td>
                  <td>{{ cat.code }}</td>
                  <td>
                    <div class="colo" :style="{ 'background-color': cat.code }"></div>
                  </td>
                  <td>
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
      couleurs: [{}],
      nom: null,
      cat: null,
      s_nom: null,
      code: null,
    };
  },
  mounted() {
    this.$http.get(`${this.callback}/couleur`, {}).then(
      (response) => {
        let data = response.body;

        console.log(data);
        if (data.status == true) {
          this.couleurs = data.data;

          setTimeout(() => {
            $("table.display").DataTable({
              responsive: true,
              language: {
                url: "https://cdn.datatables.net/plug-ins/1.10.21/i18n/French.json",
              },
              order: [[0, "desc"]],
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
    liste_color() {
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
    },
    couleur_create() {
      if (this.nom != null && this.code != null) {
        this.$http.post(`${this.callback}/couleur`, { nom: this.nom, code: this.code }).then(
          (response) => {
            let data = response.body;

            console.log(data);
            if (data.status == true) {
              this.liste_color();
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