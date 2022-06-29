

var listBusinessAccount = [
  {
    id: 255697,
    name: 'Account 1'
  },
  {
    id: 582235,
    name: 'Account 2'
  },
  {
    id: 9789564,
    name: 'Account 3'
  },
  {
    id: 524756,
    name: 'Account 4'
  }
]

var listPixelAccount = [
  {
    id: 1,
    parentId: 255697,
    name: 'Pixel 1'
  },
  {
    id: 2,
    parentId: 582235,
    name: 'Pixel 2'
  },
  {
    id: 3,
    parentId: 582235,
    name: 'Pixel 3'
  },
  {
    id: 4,
    parentId: 255697,
    name: 'Pixel 4'
  },
  {
    id: 5,
    parentId: 9789564,
    name: 'Pixel 5'
  },
  {
    id: 6,
    parentId: 255697,
    name: 'Pixel 6'
  },
  {
    id: 7,
    parentId: 582235,
    name: 'Pixel 7'
  },
  {
    id: 8,
    parentId: 9789564,
    name: 'Pixel 8'
  },
  {
    id: 9,
    parentId: 255697,
    name: 'Pixel 9'
  },
  {
    id: 10,
    parentId: 582235,
    name: 'Pixel 10'
  },
  {
    id: 11,
    parentId: 9789564,
    name: 'Pixel 11'
  },
  {
    id: 12,
    parentId: 255697,
    name: 'Pixel 12'
  }
]

var vm = new Vue({
  el: '#body',
  data: {
    radios: 'true',
    accounts: listBusinessAccount,
    pixels: listPixelAccount,

    errors: {
      name: '',
      id: '',
    },
    user: {
      name: '',
      id: '',
    },
    // business select value
    businessSelected: "",

    // pixel select value
    pixelSelected: "",

    pixelArrayCorrectParentId: [],
  },
  methods: {


    onChangeBusiness: function () {
      let pixelSelect = document.querySelector("#pixel");
      // let buss = document.getElementById("#bussiness");
      if (this.businessSelected) {
        document.querySelector("#messageErrAcc").style.display = "none";

        this.pixelArrayCorrectParentId = [];
        pixelSelect.removeAttribute('disabled');
        listPixelAccount.forEach(el => {
          if (el.parentId == this.businessSelected) {

            this.pixelArrayCorrectParentId.push(el);

            document.querySelector("#messageErrPixel").style.display = "none";

          }

        })
      }
      if (this.pixelArrayCorrectParentId.length==0) {
        document.querySelector("#messageErrPixel").style.display = "flex";
      }



    },
    resetForm: function () {
      document.querySelector("#body").reset();
      document.querySelector("#pixel").setAttribute('disabled', '');
      document.querySelector("#messageErrPixel").style.display = "flex";
      document.querySelector("#messageErrAcc").style.display = "flex";
      document.querySelector("#errName").style.display = "none";
      document.querySelector("#errID").style.display = "none";


      // const name = document.querySelector("#name");
      // const id = document.querySelector("#id");

      // if(name.length == 0){
      //   document.querySelector("#errmess").style.display = "none";
      // }
      // if(id.length == 0){
      //   document.querySelector("#errmess").style.display = "none";
      // }

    },
    validate: function () {
      this.errors = {
        name: '',
        id: '',
      }
      if (!this.user.name) {
        this.errors.name = 'Name is required!!!';
      }
      else if (!isNaN(this.user.name)) {
        this.errors.name = 'Name is tring!!!';
      };
      if (!this.user.id) {
        this.errors.id = 'ID is required!!!';
      }
      else if (isNaN(this.user.id)) {
        this.errors.id = 'ID is number!!!';
      }
    },
    save() {
      console.log('ok');
      this.validate();
    }

  }
})