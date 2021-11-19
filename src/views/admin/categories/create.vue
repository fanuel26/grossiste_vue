
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
      <div class="row mt-4">
        <div class="col-md-3">
          <div class="card p-4">
            <h5 class="text-center">Creer un categorie</h5>
            <form action="" class="mt-4" method="post">
              <div class="form-group">
                <label for="">Nom de categorie</label>
                <input
                  type="text"
                  placeholder="Nom de categorie"
                  class="form-control"
                />
              </div>
              <div class="form-group d-flex justify-content-end mt-2">
                <button class="btn btn-primary">Enregistrer</button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card p-4">
            <h5 class="text-center">Creer un sous-categorie</h5>
            <form action="" class="mt-4" method="post">
              <div class="form-group">
                <label for="">Nom de categorie</label>
                <input
                  type="text"
                  placeholder="Nom de categorie"
                  class="form-control"
                />
              </div>
              <div class="form-group d-flex justify-content-end mt-2">
                <button class="btn btn-primary">Enregistrer</button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card p-4">
            <h5 class="text-center">Creer un sous-categorie 2</h5>
            <form action="" class="mt-4" method="post">
              <div class="form-group">
                <label for="">Nom de categorie</label>
                <input
                  type="text"
                  placeholder="Nom de categorie"
                  class="form-control"
                />
              </div>
              <div class="form-group d-flex justify-content-end mt-2">
                <button class="btn btn-primary">Enregistrer</button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card p-4">
            <h5 class="text-center">Creer un sous-categorie 3</h5>
            <form action="" class="mt-4" method="post">
              <div class="form-group">
                <label for="">Nom de categorie</label>
                <input
                  type="text"
                  placeholder="Nom de categorie"
                  class="form-control"
                />
              </div>
              <div class="form-group d-flex justify-content-end mt-2">
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
          <div class="table-responsive col-md-12 my-4">
              <table></table>
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
import 'datatables.net-responsive-bs4'

export default {
  components: {
    Header,
  },
};
</script>