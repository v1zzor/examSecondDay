let apartaments = [
    {
        img: "img/1_1.jpg",
        apartNum: 1,
        rooms: 1,
        street: " Салавата Юлаева, 17а ",
        area: " Калининский район",
        apartamentSize: " 34 м2",
        floor: " 7 / 10 этаж",
        price: " 9 500 р/мес",
    },
    {
        img: "img/2_1.jpg",
        apartNum: 2,
        rooms: 1,
        street: "Свободы, 104а",
        area: " Советский район",
        apartamentSize: " 60 м2",
        floor: " 2 / 5 этаж",
        price: "9 000 р/мес ",
    },
    {
        img: "img/3_1.jpg",
        apartNum: 3,
        rooms: 1,
        street: "Ереванская, 14 ",
        area: " Ленинский район",
        apartamentSize: "40 м2 ",
        floor: " 3 / 9 этаж",
        price: "9 000 р/мес ",
    },
    {
        img: "img/4_1.jpg",
        apartNum: 4,
        rooms: 1,
        street: "  Дарвина, 107 ",
        area: " Советский район",
        apartamentSize: "31 м2 ",
        floor: " 5 / 5 этаж",
        price: "9 000 р/мес ",
    },
    {
        img: "img/5_1.jpg",
        apartNum: 5,
        rooms: 1,
        street: " Молодогвардейцев, 21",
        area: "Курчатовский район ",
        apartamentSize: " 40 м2",
        floor: " 8 / 10 этаж",
        price: " 10 000 р/мес",
    },
    {
        img: "img/6_1.jpg",
        apartNum: 6,
        rooms: 1,
        street: " Двинская, 3",
        area: " Калининский район",
        apartamentSize: " 49 м2",
        floor: "10 / 10 этаж ",
        price: "11 500 р/мес ",
    },
    {
        img: "img/7_1.jpg",
        apartNum: 7,
        rooms: 1,
        street: " Набережная, 5а ",
        area: " Калининский район",
        apartamentSize: " 24 м2",
        floor: " 7 / 10 этаж",
        price: " 10 000 р/мес",
    },
    {
        img: "img/8_1.jpg",
        apartNum: 8,
        rooms: 1,
        street: " Комарова, 112 ",
        area: " Тракторозаводский район",
        apartamentSize: " 34 м2",
        floor: " 6 / 9 этаж",
        price: " 7 500 р/мес",
    },
    {
        img: "img/no_img.png",
        apartNum: 9,
        rooms: 1,
        street: " Котина, 21 ",
        area: " Тракторозаводский район",
        apartamentSize: " 34 м2",
        floor: " 4 / 10 этаж",
        price: " 8 000 р/мес",
    },
    {
        img: "img/10_1.jpg",
        apartNum: 10,
        rooms: "2",
        street: " Ленина проспект, 28 ",
        area: " Центральный район",
        apartamentSize: "60 м2 ",
        floor: "4 / 10 этаж ",
        price: "17 000 р/мес ",
    },
    {
        img: "img/11_1.jpg",
        apartNum: 11,
        rooms: 3,
        street: " Петра Сумина, 2 ",
        area: " Центральный район",
        apartamentSize: " 84 м2",
        floor: " 15 / 19 этаж",
        price: "15 000 р/мес ",
    },
    {
        img: "img/12_1.jpg",
        apartNum: 12,
        rooms: 2,
        street: " Комарова, 114а ",
        area: " Тракторозаводский район",
        apartamentSize: " 50 м2",
        floor: " 7 / 9 этаж",
        price: " 11 000 р/мес",
    },
    {
        img: "img/13_1.jpg",
        apartNum: 13,
        rooms: 2,
        street: " Свободы, 92а",
        area: " Центральный район",
        apartamentSize: " 54 м2",
        floor: " 2 / 5 этаж",
        price: " 12 000 р/мес",
    },
    {
        img: "img/no_img.png",
        apartNum: 14,
        rooms: 1,
        street: " Академика Сахарова, 22 ",
        area: " Центральный район",
        apartamentSize: "43 м2 ",
        floor: "7 / 10 этаж ",
        price: "14 000 р/мес ",
    },
    {
        img: "img/15_1.jpg",
        apartNum: 15,
        rooms: 1,
        street: " Академика Сахарова, 30",
        area: " Центральный район",
        apartamentSize: " 43 м2",
        floor: " 3 / 10 этаж",
        price: "13 000 р/мес ",
    },
]

// create card
let windPics = document.getElementById('test');
function printPhoto(event) {
    windPics.innerHTML = "";
    for (let i = 0; i < apartaments.length; i++) {
        let app = document.createElement("div");
        app.classList.add("col");
        app.innerHTML = (`
        <div class="card" style="width: 18rem; height: 24rem; margin: 0 auto;  margin-top: 25px;" data-id=${apartaments[i].apartNum}">


        <div class="w-100">
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
           <img src="${apartaments[i].img}" class="card-img-top d-block h-25" alt="...">
    </div>
    <div class="carousel-item">
         <img src="${apartaments[i].img}" class="card-img-top  d-block h-25" alt="...">
    </div>
    <div class="carousel-item">
    <img src="${apartaments[i].img}" class="card-img-top h-75" alt="...">
    </div>
  </div>
</div>
</div>
            <div class="card-body">
             <div class="row">
                <div class="col">
                <p style="margin:0;";><b>Квартира:</b></p>
                <p class="card-text">${apartaments[i].street}<br> ${apartaments[i].rooms}-к, ${apartaments[i].apartamentSize} <br> ${apartaments[i].floor} <br> ${apartaments[i].price}</p>
                </div>
                <div class="col-2">
                    <i class="bi bi-star"></i>
                </div>
                
             </div>
                
            </div>
         </div>
        `);
        windPics.append(app);
    }
}
printPhoto(event);


let modalWindow = document.getElementById('exampleModal');
let modalBody = modalWindow.querySelector('.modal-body');
let bodyHtml1 = document.querySelector("body");
function openModal(elem) {
    for (let i = 0; i < apartaments.length; i++) {

        bodyHtml1.style = " overflow: hidden;";
        modalBody.innerHTML = `<img src="${apartaments[i].img}" class="card-img-top h-50" alt="...">
        <p style="margin:0;";><b>Квартира:</b></p>
        <p class="card-text">${apartaments[i].street}<br> ${apartaments[i].rooms}-к, ${apartaments[i].apartamentSize} <br> ${apartaments[i].floor} <br> ${apartaments[i].price}</p>`;
        modalWindow.classList.remove("fade");
        modalWindow.style = "display:block;";
        
    }
}
windPics.addEventListener("click", () => {
    let elem = event.target;
    elem = elem.closest(".card");
    if (elem !== null) openModal(elem);
   

});
function closeModal() {
    modalWindow.classList.add("fade");
    modalWindow.style = "";
    bodyHtml1.style = " overflow: visible;";

}

let closeModalBtn = modalWindow.querySelector(".close");
closeModalBtn.addEventListener("click", () => {
    closeModal();
});
