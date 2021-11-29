<template>
    <div>
        
    <section
      class="py-4 bg-light border-top"
      data-aos="zoom-out"
      data-aos-delay="100"
      id="top"
    >
      <div class="container mt-4">
        <div class="row">
          <div class="col-md-3 sm-hidden">
            <div
              class="p-4 bg-white card"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div class="card-head">
                <h5 class="text-black bold">
                  <i class="fas fa-align-left"></i> Tous les categories
                </h5>
                <hr />
              </div>
              <div class="card-body">
                <p class="text-black" v-for="cat in categories" :key="cat.id">
                  <a href="#" class="a">- {{ cat.nom }}</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-9">
            <div class="row">
              <div class="mb-4 col-md-12">
                <div
                  class="p-4 bg-white card cardy-first"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <img
                      src="../../assets/images/event.png"
                      class="img-fluid bonus-img sm-hidden"
                      alt=""
                    />
                    <h3 class="my-2 text-center text-dark bold">
                      50% <span>de</span> BONUS <span>pour chaque</span> 10
                      Douzaines <span>Achetés.</span>
                    </h3>
                    <img
                      src="../../assets/images/event.png"
                      class="img-fluid bonus-img sm-hidden"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-8">
                <div
                  class="bg-light card"
                  data-aos="fade-up"
                  data-aos-delay="250"
                >
                  <Hooper :itemsToShow="1" :centerMode="false" pagination="no">
                    <Slide class="Slide">
                      <img
                        src="../../assets/images/pub/a1.jpg"
                        class="img-fluid pubs-img"
                        alt=""
                      />
                    </Slide>
                    <Slide class="Slide">
                      <img
                        src="../../assets/images/pub/a2.jpg"
                        class="img-fluid pubs-img"
                        alt=""
                      />
                    </Slide>
                    <Slide class="Slide">
                      <img
                        src="../../assets/images/pub/a3.jpg"
                        class="img-fluid pubs-img"
                        alt=""
                      />
                    </Slide>
                    <Slide class="Slide">
                      <img
                        src="../../assets/images/pub/a4.jpg"
                        class="img-fluid pubs-img"
                        alt=""
                      />
                    </Slide>

                    <hooper-navigation slot="hooper-addons"></hooper-navigation>
                  </Hooper>
                </div>

                <div class="mt-2" data-aos="fade-up" data-aos-delay="300">
                  <Hooper :itemsToShow="5" :infiniteScroll="true" :centerMode="false" pagination="no">
                    <Slide class="mx-2">
                      <a href="product.html" class="link">
                        <div class="bg-white card">
                          <img
                            src="../../assets/images/products/1.jpeg"
                            class="img-fluid prod"
                            alt=""
                          />
                          <p class="mt-2 text-center text-primary">
                            15 000 XOF
                          </p>
                        </div>
                      </a>
                    </Slide>
                    <Slide class="mx-2">
                      <a href="product.html" class="link">
                        <div class="bg-white card">
                          <img
                            src="../../assets/images/products/125001d1.jpg"
                            class="img-fluid prod"
                            alt=""
                          />
                          <p class="mt-2 text-center text-primary">
                            15 000 XOF
                          </p>
                        </div>
                      </a>
                    </Slide>
                    <Slide class="mx-2">
                      <a href="product.html" class="link">
                        <div class="bg-white card">
                          <img
                            src="../../assets/images/products/185003e10.jpg"
                            class="img-fluid prod"
                            alt=""
                          />
                          <p class="mt-2 text-center text-primary">
                            15 000 XOF
                          </p>
                        </div>
                      </a>
                    </Slide>
                    <Slide class="mx-2">
                      <a href="product.html" class="link">
                        <div class="bg-white card">
                          <img
                            src="../../assets/images/products/185003e2.jpg"
                            class="img-fluid prod"
                            alt=""
                          />
                          <p class="mt-2 text-center text-primary">
                            15 000 XOF
                          </p>
                        </div>
                      </a>
                    </Slide>
                    <Slide class="mx-2">
                      <a href="product.html" class="link">
                        <div class="bg-white card">
                          <img
                            src="../../assets/images/products/25003e8.jpg"
                            class="img-fluid prod"
                            alt=""
                          />
                          <p class="mt-2 text-center text-primary">
                            15 000 XOF
                          </p>
                        </div>
                      </a>
                    </Slide>
                    <Slide class="mx-2">
                      <a href="product.html" class="link">
                        <div class="bg-white card">
                          <img
                            src="../../assets/images/products/25003e9.jpg"
                            class="img-fluid prod"
                            alt=""
                          />
                          <p class="mt-2 text-center text-primary">
                            15 000 XOF
                          </p>
                        </div>
                      </a>
                    </Slide>
                    <Slide class="mx-2">
                      <a href="product.html" class="link">
                        <div class="bg-white card">
                          <img
                            src="../../assets/images/products/95003b1.jpg"
                            class="img-fluid prod"
                            alt=""
                          />
                          <p class="mt-2 text-center text-primary">
                            15 000 XOF
                          </p>
                        </div>
                      </a>
                    </Slide>
                  </Hooper>
                </div>
              </div>
              <div class="col-md-4 sm-hidden">
                <div
                  class="card cardy-second"
                  data-aos="fade-up"
                  data-aos-delay="250"
                >
                  <div class="p-4 bg-white-tr">
                    <div class="text-center">
                      <img
                        src="../../assets/images/profile/avatar-s-10.png"
                        class="img-fluid img-profile"
                        alt=""
                      />
                      <div class="certif">
                        <i class="fas fa-check"> </i>
                      </div>
                    </div>
                    <div class="mt-2 text-center">
                      <h5 class="text-black">Grâce BRAM</h5>
                      <p>bram1234@gmail.com</p>
                    </div>
                    <div class="mt-4">
                      <div class="row">
                        <div class="mb-4 col-md-6">
                          <button class="btn btn-primary w-100">
                            <i class="fab fa-opencart"></i> Mes achats
                          </button>
                        </div>
                        <div class="mb-4 col-md-6">
                          <button class="btn btn-secondary w-100">
                            <i class="far fa-user"></i> Mon compte
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="mt-4">
                      <p class="text-justify text-black">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor maiores inventore consequuntur quasi temporibus
                        debitis voluptatibus animi itaque iure aliquid autem
                        amet veritatis...
                      </p>
                    </div>
                  </div>
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
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";

export default {
  components: {
    Hooper,
    Slide, 
    HooperNavigation
  },
  data() {
    return {
      callback: "http://127.0.0.1:8000/api",
      categories: null,
    };
  },

  mounted() {
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