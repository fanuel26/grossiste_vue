
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
      <div class="row mt-4">
        <div class="col-md-12">
          <div class="card p-4">
            <form action="" class="mt-4" method="post">
              <div class="row">
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-md-6 mb-4 form-group">
                      <label for="">Nom du produit</label>
                      <input
                        type="text"
                        placeholder="Nom de categorie"
                        class="form-control"
                      />
                    </div>

                    <div class="col-md-6 mb-4 form-group">
                      <label for="">Selectionner un categorie</label>
                      <select name="" id="" class="form-control select">
                        <option value="#">Lorem, ipsum.</option>
                      </select>
                    </div>

                    <div class="col-md-6 mb-4 form-group">
                      <label for="">Selectionner un sous-categorie</label>
                      <select name="" id="" class="form-control select">
                        <option value="#">Lorem, ipsum.</option>
                      </select>
                    </div>

                    <div class="col-md-6 mb-4 form-group">
                      <label for="">Selectionner un sous-categorie 1</label>
                      <select name="" id="" class="form-control select">
                        <option value="#">Lorem, ipsum.</option>
                      </select>
                    </div>

                    <div class="col-md-6 mb-4 form-group">
                      <label for="">Selectionner un sous-categorie 2</label>
                      <select name="" id="" class="form-control select">
                        <option value="#">Lorem, ipsum.</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 mb-4 form-group">
                    <label for="">Description de produit</label>
                    <textarea name="" id="" cols="30" class="form-control" placeholder="Description de produit" rows="7"></textarea>
                </div>

                <div class="col-md-12">
                  <div class="row">
                    <div class="col-md-4 px-4 mb-4">
                      <h5 class="mb-2">Gestionnaire de prix</h5>
                      <div class="mb-4 input-group">
                        <select name="" id="" class="form-control select">
                          <option value="#">1 ou 2</option>
                          <option value="#">6</option>
                          <option value="#">12</option>
                          <option value="#">24</option>
                        </select>
                        <input
                          type="number"
                          class="form-control"
                          placeholder="Prix"
                        />
                        <button class="btn btn-primary">
                          <i class="fa fa-plus"></i>
                        </button>
                      </div>
                      <div class="container">
                        <ul>
                          <li class="d-flex justify-content-between">
                            <p>1 ou 2 pieces - 2500 XOF</p>
                            <a href="#" class="a"
                              ><i class="fa fa-trash"></i
                            ></a>
                          </li>
                          <li class="d-flex justify-content-between">
                            <p>6 pieces - 10 000 XOF</p>
                            <a href="#" class="a"
                              ><i class="fa fa-trash"></i
                            ></a>
                          </li>
                          <li class="d-flex justify-content-between">
                            <p>12 pieces - 18 000 XOF</p>
                            <a href="#" class="a"
                              ><i class="fa fa-trash"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-md-4 px-4 mb-4">
                      <h5 class="mb-2">Gestionnaire de couleurs</h5>
                      <div class="mb-4 input-group">
                        <select name="" id="" class="form-control select">
                          <option value="#">Bleu</option>
                          <option value="#">Blanc</option>
                          <option value="#">Noire</option>
                          <option value="#">Jaune</option>
                          <option value="#">Rouge</option>
                        </select>
                        <button class="btn btn-primary">
                          <i class="fa fa-plus"></i>
                        </button>
                      </div>
                      <div class="container">
                        <ul>
                          <li class="d-flex justify-content-between">
                            <p>Jaune</p>
                            <a href="#" class="a"
                              ><i class="fa fa-trash"></i
                            ></a>
                          </li>
                          <li class="d-flex justify-content-between">
                            <p>Rouge</p>
                            <a href="#" class="a"
                              ><i class="fa fa-trash"></i
                            ></a>
                          </li>
                          <li class="d-flex justify-content-between">
                            <p>Blanc</p>
                            <a href="#" class="a"
                              ><i class="fa fa-trash"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-md-4 px-4 mb-4">
                      <h5 class="mb-2">Gestionnaire de taille</h5>
                      <div class="mb-4 input-group">
                        <select name="" id="" class="form-control select">
                          <option value="#">M</option>
                          <option value="#">S</option>
                          <option value="#">L</option>
                          <option value="#">XL</option>
                          <option value="#">XXL</option>
                          <option value="#" disabled></option>
                          <option value="#">40</option>
                          <option value="#">41</option>
                          <option value="#">42</option>
                          <option value="#">43</option>
                          <option value="#">44</option>
                          <option value="#">45</option>
                        </select>
                        <button class="btn btn-primary">
                          <i class="fa fa-plus"></i>
                        </button>
                      </div>
                      <div class="container">
                        <ul>
                          <li class="d-flex justify-content-between">
                            <p>M</p>
                            <a href="#" class="a"
                              ><i class="fa fa-trash"></i
                            ></a>
                          </li>
                          <li class="d-flex justify-content-between">
                            <p>X</p>
                            <a href="#" class="a"
                              ><i class="fa fa-trash"></i
                            ></a>
                          </li>
                          <li class="d-flex justify-content-between">
                            <p>XL</p>
                            <a href="#" class="a"
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
                        <button class="btn btn-secondary">
                          Image principal
                        </button>
                        <div>
                          <img src="#" class="img-fluid pub-img" alt="" />
                        </div>
                      </div>
                      <div class="col-md-3">
                        <button class="btn btn-secondary">
                          Image secondaire
                        </button>
                        <div>
                          <img src="#" class="img-fluid pub-img" alt="" />
                        </div>
                      </div>
                      <div class="col-md-3">
                        <button class="btn btn-secondary">
                          Image secondaire
                        </button>
                        <div>
                          <img src="#" class="img-fluid pub-img" alt="" />
                        </div>
                      </div>
                      <div class="col-md-3">
                        <button class="btn btn-secondary">
                          Image secondaire
                        </button>
                        <div>
                          <img src="#" class="img-fluid pub-img" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="form-group col-md-12 d-flex justify-content-end my-4"
                >
                  <button class="btn btn-primary">Enregistrer</button>
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
export default {
  components: {
    Header,
  },
};
</script>