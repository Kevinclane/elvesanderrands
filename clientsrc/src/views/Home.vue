<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row py-2">
        <div
          class="col-md-5 offset-md-1 order-2 order-md-1 fontCabin d-flex flex-column justify-content-center"
        >
          <h1>A magic place for getting the right service at the right price</h1>
          <h4>A money saving neighbor to neighbor liason between those who do good work, those who need good work done – safe, efficient, effective and usually cheaper than anywhere else.</h4>
        </div>
        <div class="col-md-5 order-1 order-md-2 text-center">
          <img src="../assets/mainHelpFour.jpg" alt="error loading image" class="mainImg" />
        </div>
      </div>
    </div>
    <div class="container-fluid bg-gray py-2">
      <div class="row py-2 d-flex justify-content-around">
        <div class="col-md-5 col-12 my-2 d-flex align-items center justify-content-center">
          <button
            class="btn btn-success btn-lg w-100 rounded-button-lg boxShadowCstm"
          >I need some help</button>
        </div>
        <div class="col-md-5 col-12 my-2 d-flex align-items center justify-content-center">
          <button
            class="btn btn-success btn-lg w-100 rounded-button-lg boxShadowCstm"
          >I'm looking for jobs</button>
        </div>
      </div>
      <div class="row my-2 d-flex justify-content-around">
        <h3 class="col-12 text-center">Browse our catagories</h3>
        <div class="col-md-3 col-10 m-3">
          <div class="card boxShadowCstm cardHeight">
            <img
              src="../assets/errandsFour.jpg"
              class="card-img-top cardImg"
              alt="error loading image"
            />
            <div class="card-body d-flex align-items-end justify-content-center">
              <h5 class="card-title">Errands/Small Tasks</h5>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-10 m-3">
          <div class="card boxShadowCstm cardHeight">
            <img
              src="../assets/cleaningSeven.jpg"
              class="card-img-top cardImg"
              alt="error loading image"
            />
            <div class="card-body d-flex align-items-end justify-content-center">
              <h5 class="card-title">Household Chores</h5>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-10 m-3">
          <div class="card boxShadowCstm cardHeight">
            <img
              src="../assets/mechanicTwo.jpg"
              class="card-img-top cardImg"
              alt="error loading image"
            />
            <div class="card-body d-flex align-items-end justify-content-center">
              <h5 class="card-title">Automotive Mechanic</h5>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-10 m-3">
          <div class="card boxShadowCstm cardHeight">
            <img
              src="../assets/contractorOne.jpg"
              class="card-img-top cardImg"
              alt="error loading image"
            />
            <div class="card-body d-flex align-items-end justify-content-center">
              <h5 class="card-title">Contractor</h5>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-10 m-3">
          <div class="card boxShadowCstm cardHeight">
            <img
              src="../assets/babysitterOne.jpg"
              class="card-img-top cardImg"
              alt="error loading image"
            />
            <div class="card-body d-flex align-items-end justify-content-center">
              <h5 class="card-title">Babysitter</h5>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-10 m-3">
          <div class="card boxShadowCstm cardHeight">
            <img
              src="../assets/otherOne.jpg"
              class="card-img-top cardImg"
              alt="error loading image"
            />
            <div class="card-body d-flex align-items-end justify-content-center">
              <h5 class="card-title">Other Services</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cabin&display=swap");
.mainImg {
  max-height: 40vh;
}
.bgImg {
  background: url(../assets/mainHelpFive.jpg) no-repeat center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin: 0 auto;
  overflow-x: hidden;
  user-select: none;
  height: 50vh;
}
.fontCabin {
  font-family: "Cabin", sans-serif;
}
.bg-gray {
  background-color: rgb(221, 221, 221);
}
.btn-green {
  background-color: #7ca25e;
}
.rounded-button-lg {
  border-radius: 25px;
}
.cardImg {
  max-width: 100%;
  max-height: 80%;
}
.boxShadowCstm {
  box-shadow: 4px 4px 5px black;
  border: 1px solid black;
}
.borderSm {
  border: 1px solid black;
}
.cardHeight {
  height: 40vh;
}
.mainImg {
  max-width: 90vw;
}
</style>