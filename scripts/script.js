const project1 = new Swiper('.project1 .swiper',{
    slidesPerView:1,
    autoplay:{delay:3000,},
})
const project2 = new Swiper('.project2 .swiper',{
    slidesPerView:4,
    spaceBetween:10,
    autoplay:{delay:2000,},
    loop:true,
})
const project3 = new Swiper('.project3 .swiper',{
    slidesPerView:3,
    spaceBetween:10,
    autoplay:{delay:2000,},
    loop:true,
})
const project4 = new Swiper('.project4 .swiper',{
    slidesPerView:4,
    spaceBetween:10,
    autoplay:{delay:2000,},
    loop:true,
})
// 팝업=======================
const popup_card = document.querySelector('.popup_card')
const popup_de = document.querySelector('.popup_de')
popup_card.style.display = 'none'
popup_de.style.display = 'none'

// 카드뉴스, 상세페이지 swiper-slide 클릭대상
const card_list = document.querySelectorAll('.project3 .swiper-slide img')
const de_list = document.querySelectorAll('.project4 .swiper-slide img')
//카드
for(let card of card_list){
    card.addEventListener('click',()=>{
        popup_card.style.display = 'flex';
        popup_card.children[0].scrollTo(0,0)
        popup_card.children[0].children[0].src = card.src
        document.body.style.overflow = 'hidden';
    })
}
popup_card.addEventListener('click',()=>{
    popup_card.style.display = 'none';
    document.body.style.overflow = '';
})
// 상세
for(let de of de_list){
    de.addEventListener('click',()=>{
        popup_de.style.display = 'flex';
        popup_de.children[0].scrollTo(0,0)
        popup_de.children[0].children[0].src = de.src
        document.body.style.overflow = 'hidden';
    })
}
popup_de.addEventListener('click',()=>{
    popup_de.style.display = 'none';
    document.body.style.overflow = '';
})