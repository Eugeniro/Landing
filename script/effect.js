/*header*/
const _Header = document.querySelector(".MainHeader");
const HedearLogo = document.querySelector(".MainHeader_Logo");
const Navigation = document.querySelectorAll('.MainHeader_navigation li')
const ButtonArrow = document.querySelector(".Top_button");
const ArrowLeft = document.querySelector(".Top_button_ArrowLeft");
const ArrowRight = document.querySelector(".Top_button_ArrowRight");
const MainHeaderUl = document.querySelector(".MainHeader ul");
/*About*/
const _About = document.querySelector(".About");
const DetailAboutItem = document.querySelectorAll('.DetailAbout_head_list .Item');
const _Contain = document.querySelector(".Container_Body");
/*SERVISEC*/
const Services = document.querySelector(".Services");
const ServicesText = document.querySelector(".Services_About_Text");
const ServicesList = document.querySelectorAll(".Services_About_List .Item")
/*Portfolio*/
const Portfolio = document.querySelector(".Portfolio");
/*Team*/
const Team = document.querySelector(".Team");
const TeamChose = document.querySelectorAll(".Team .Team_chose_Item")
const ImgTeam = document.querySelector(".Team_About_Img");
const NameTeam = document.querySelector(".Team_About_Characteristic_Name h3");
const RankTeam = document.querySelector(".Team_About_Characteristic_Name h4");
const FistSkill = document.querySelector("#FistSkill");
const SecondSkill = document.querySelector("#SecondSkill");
const ThirdSkill = document.querySelector("#ThirdSkill");
const Skill_Item = document.querySelectorAll(".Skill_Item");
/*Testimonials*/
const CommentChose = document.querySelectorAll(".Testimonials .Team_chose_Item")
const CommentPhoto = document.querySelector(".Testimonials_body_Photo")
const CommentName = document.querySelector(".Testimonials_body h3")
const CommentJob = document.querySelector(".Testimonials_body h4")
const CommentComents = document.querySelector(".Testimonials_body p")
/*News*/
const News = document.querySelector(".News");
const NewsChose = document.querySelectorAll('.News_body .Team_chose_Item')
const NewsBody = document.querySelector('.News_body_content')
const NewsHead = document.querySelector('.News_Head')
/*OurPrice*/
const OurPriceItem = document.querySelectorAll('.OurPrice_Chose_item')
const OurPriceChosePrice = document.querySelectorAll('.OurPrice_Chose_Price')
const OurPriceButton = document.querySelectorAll('.OurPrice_Chose_Price button')
/*Contact*/
const ContancMap=document.querySelector(".ContactUs_Map");
const MapShow = document.querySelector('.ContactUs_Shadow .Top_button')
const Contact = document.querySelector(".Contact");
/**/
let OnTop = true;
let HeightAbout = 0;
let HeightTop = document.querySelector(".Top").clientHeight;
let VideoButton=""
let MapLoaded=false;
const VideoYou=`<iframe style="width: 100%;height: 350px;" src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&showinfo=0&autoplay=1" title="Отзывы о нас" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
function ClickPlay()
{
    NewsBody.innerHTML=VideoYou;
}
/*header*/
if (window.screen.width < "800") {
    MainHeaderUl.className = `MainHeader_navigation_Burger`;
} else MainHeaderUl.className = `MainHeader_navigation`;
HedearLogo.addEventListener("click", () => {
    window.scrollTo(0, 0)
})
Navigation.forEach((elem) => {
    elem.addEventListener("click", () => {
        for (let i = 0; i < Navigation.length; i++) {
            Navigation[i].removeAttribute("class")
        }
        switch (elem.innerHTML) {
            case "Home":
                window.scrollTo(0, 0)
                break;
            case "About":
                window.scrollTo(0, _About.offsetTop + HeightTop)
                break;
            case "Services":
                window.scrollTo(0, Services.offsetTop + HeightTop)
                break;
            case "Portfolio":
                window.scrollTo(0, Portfolio.offsetTop + HeightTop)
                break;
            case "Team":
                window.scrollTo(0, Team.offsetTop + HeightTop)
                break;
            case "Blog":
                window.scrollTo(0, News.offsetTop + HeightTop)
                break;
            case "Contact":
                window.scrollTo(0, Contact.offsetTop + HeightTop)
                break;

        }
    })
})

DetailAboutItem.forEach((e, index) => {
    switch (index) {
        case 0: e.addEventListener("click", () => {
            DetailAboutItem.forEach((ev, ind) => {
                if (ev.classList.contains("ActiveItem") && index != ind) {
                    ev.classList.remove("ActiveItem")
                    return;
                }
            })
            e.classList.add("ActiveItem")
        })
            return;
        case 1:
            e.addEventListener("click", () => {
                DetailAboutItem.forEach((ev, ind) => {
                    if (ev.classList.contains("ActiveItem") && index != ind) {
                        ev.classList.remove("ActiveItem")
                        return;
                    }
                })
                e.classList.add("ActiveItem")
            })
            return;
        case 2:
            e.addEventListener("click", () => {
                DetailAboutItem.forEach((ev, ind) => {
                    if (ev.classList.contains("ActiveItem") && index != ind) {
                        ev.classList.remove("ActiveItem")
                        return;
                    }
                })
                e.classList.add("ActiveItem")
            })
            return;
    }
})
ServicesList.forEach((e, index) => {
    switch (index) {
        case 0: e.addEventListener("click", () => {
            ServicesList.forEach((ev, ind) => {
                if (ev.classList.contains("ActiveItem") && index != ind) {
                    ev.classList.remove("ActiveItem")
                    return;
                }
            })
            e.classList.add("ActiveItem")
            ServicesText.innerHTML = `<h3>Tools Design</h3>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum nam inventore id expedita dolor? In quam necessitatibus iste doloribus? Aperiam assumenda 
    laborum veniam? Fuga, ex soluta aspernatur incidunt dolor sed.</p>`

        })
            return;
        case 1:
            e.addEventListener("click", () => {
                ServicesList.forEach((ev, ind) => {
                    if (ev.classList.contains("ActiveItem") && index != ind) {
                        ev.classList.remove("ActiveItem")
                        return;
                    }
                })
                e.classList.add("ActiveItem")
                ServicesText.innerHTML = `<h3>Graphic Design</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum nam inventore id expedita dolor? In quam necessitatibus iste doloribus? Aperiam assumenda 
        laborum veniam? Fuga, ex soluta aspernatur incidunt dolor sed.</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet veritatis explicabo id ab impedit illum obcaecati ipsa, itaque nobis vero reiciendis aliquam libero 
        inventore corrupti consequuntur officia quos hic laudantium.</p>`
            })
            return;
        case 2:
            e.addEventListener("click", () => {
                ServicesList.forEach((ev, ind) => {
                    if (ev.classList.contains("ActiveItem") && index != ind) {
                        ev.classList.remove("ActiveItem")
                        return;
                    }
                })
                e.classList.add("ActiveItem")
                ServicesText.innerHTML = `<h3>For Gamers</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum nam inventore id expedita dolor? In quam necessitatibus iste doloribus? Aperiam assumenda 
        laborum veniam? Fuga, ex soluta aspernatur incidunt dolor sed.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum nam inventore id expedita dolor? In quam necessitatibus iste doloribus? Aperiam assumenda 
        laborum veniam? Fuga, ex soluta aspernatur incidunt dolor sed.</p>`
            })
            return;
        case 3:
            e.addEventListener("click", () => {
                ServicesList.forEach((ev, ind) => {
                    if (ev.classList.contains("ActiveItem") && index != ind) {
                        ev.classList.remove("ActiveItem")
                        return;
                    }
                })
                e.classList.add("ActiveItem")
                ServicesText.innerHTML = `<h3>Fork Design</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum nam inventore id expedita dolor? In quam necessitatibus iste doloribus? Aperiam assumenda 
        laborum veniam? Fuga, ex soluta aspernatur incidunt dolor sed.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum nam inventore id expedita dolor? In quam necessitatibus iste doloribus? Aperiam assumenda 
        laborum veniam? Fuga, ex soluta aspernatur incidunt dolor sed.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum nam inventore id expedita dolor? In quam necessitatibus iste doloribus? Aperiam assumenda 
        laborum veniam? Fuga, ex soluta aspernatur incidunt dolor sed.</p>`
            })
            return;
    }
})
TeamChose.forEach((e, index) => {
    switch (index) {
        case 0: e.addEventListener("click", () => {
            TeamChose.forEach((ev, ind) => {
                if (ev.classList.contains("ActiveTeam") && index != ind) {
                    ev.classList.remove("ActiveTeam")
                    return;
                }
            })
            e.classList.add("ActiveTeam")
            NameTeam.innerHTML = `Sidney`;
            RankTeam.innerHTML = `Creative Director,Code Cafe`
            FistSkill.innerHTML = `<h4>Brnding</h4>
            <span>80%</span>`
            SecondSkill.innerHTML = `<h4>Web Design</h4>
    <span>65%</span>`
            ThirdSkill.innerHTML = ` <h4>User Interface</h4> 
    <span>75%</span>`
            Skill_Item[0].className = `Skill_Item ComplBranding`
            Skill_Item[1].className = `Skill_Item ComplDesign`
            Skill_Item[2].className = `Skill_Item ComplUser`
            ImgTeam.innerHTML = `<picture>
            <source type="image/avif" srcset="images/sid.avif 1x,images/sid@2x.avif 2x,images/sid@3x.avif 3x">
            <source type="image/webp" srcset="images/sid.webp 1x,images/sid@2x.webp 2x,images/sid@3x.webp 3x">
            <img src="images/sid.jpg" srcset="images/sid@2x.jpg 2x,images/sid@3x.jpg 3x" alt="Pic">
        </picture>`

        })
            return
        case 1: e.addEventListener("click", () => {
            TeamChose.forEach((ev, ind) => {
                if (ev.classList.contains("ActiveTeam") && index != ind) {
                    ev.classList.remove("ActiveTeam")
                    return;
                }
            })
            e.classList.add("ActiveTeam")
            NameTeam.innerHTML = `The Bear`;
            RankTeam.innerHTML = `Security Director,Code Cafe`;
            FistSkill.innerHTML = `<h4>Chase</h4>
        <span>50%</span>`;
            SecondSkill.innerHTML = `<h4>Power</h4>
        <span>100%</span>`;
            ThirdSkill.innerHTML = `<h4>Reaction</h4>
        <span>70%</span>`;
            Skill_Item[0].className = `Skill_Item ComplChase`
            Skill_Item[1].className = `Skill_Item ComplPower`
            Skill_Item[2].className = `Skill_Item ComplReaction`
            ImgTeam.innerHTML = `<picture>
            <source type="image/avif" srcset="images/TheBear.avif 1x,images/TheBear@2x.avif 2x,images/TheBear@3x.avif 3x">
            <source type="image/webp" srcset="images/TheBear.webp 1x,images/TheBear@2x.webp 2x,images/TheBear@3x.webp 3x">
            <img src="images/TheBear.jpg" srcset="images/TheBear@2x.jpg 2x,images/TheBear@3x.jpg 3x" alt="TheBear">
        </picture>`
        })
            return
        case 2: e.addEventListener("click", () => {

            TeamChose.forEach((ev, ind) => {
                if (ev.classList.contains("ActiveTeam") && index != ind) {
                    ev.classList.remove("ActiveTeam")
                    return;
                }
            })
            e.classList.add("ActiveTeam")
            NameTeam.innerHTML = `Master Shifu`;
            RankTeam.innerHTML = `TeamLead of Code Cafe`
            FistSkill.innerHTML = `<h4>Intelligence</h4>
            <span>100%</span>`
            SecondSkill.innerHTML = `<h4>Communication</h4>
            <span>100%</span>`
            ThirdSkill.innerHTML = `<h4>Web Developer</h4>
            <span>100%</span>`
            Skill_Item[0].className = `Skill_Item ComplINT`
            Skill_Item[1].className = `Skill_Item ComplCOM`
            Skill_Item[2].className = `Skill_Item ComplDEV`
            ImgTeam.innerHTML = `<picture>
            <source type="image/avif" srcset="images/sensei.avif 1x,images/sensei@2x.avif 2x,images/sensei@3x.avif 3x">
            <source type="image/webp" srcset="images/sensei.webp 1x,images/sensei@2x.webp 2x,images/sensei@3x.webp 3x">
            <img src="images/sensei.jpg" srcset="images/sensei@2x.jpg 2x,images/sensei@3x.jpg 3x" alt="sensei">
        </picture>`
        })
            return
    }
})
CommentChose.forEach((e, index) => {
    switch (index) {
        case 0: e.addEventListener("click", () => {
            CommentChose.forEach((ev, ind) => {
                if (ev.classList.contains("ActiveTeam") && index != ind) {
                    ev.classList.remove("ActiveTeam")
                    return;
                }
            })
            e.classList.add("ActiveTeam")
            CommentPhoto.innerHTML = `    <picture>
            <source type="image/avif" srcset="images/Manni.avif">
            <source type="image/webp" srcset="images/Manni.webp">
            <img src="images/Manni.jpg" alt="Manfred">
        </picture>`;
            CommentName.innerHTML = `Manfred`;
            CommentJob.innerHTML = `FOUNDER, ARTWAYS BD`;
            CommentComents.innerHTML = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
     Omnis, inventore. Nostrum rerum quaerat voluptas similique labore! Possimus tempore minus quibusdam architecto, 
     exercitationem necessitatibus a delectus ratione 
     laboriosam? Accusamus, provident numquam.`

        })
            return
        case 1: e.addEventListener("click", () => {
            CommentChose.forEach((ev, ind) => {
                if (ev.classList.contains("ActiveTeam") && index != ind) {
                    ev.classList.remove("ActiveTeam")
                    return;
                }
            })
            e.classList.add("ActiveTeam");
            CommentPhoto.innerHTML = `    <picture>
            <source type="image/avif" srcset="images/sponge.avif">
            <source type="image/webp" srcset="images/sponge.webp">
            <img src="images/sponge.jpg" alt="sponge">
        </picture>`;
            CommentName.innerHTML = `SpongeBob`;
            CommentJob.innerHTML = `Diver`;
            CommentComents.innerHTML = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
         Omnis, inventore. Nostrum rerum quaerat voluptas.Lorem ipsum, dolor sit amet consectetur adipisicing elit.`
        })
            return
        case 2: e.addEventListener("click", () => {

            CommentChose.forEach((ev, ind) => {
                if (ev.classList.contains("ActiveTeam") && index != ind) {
                    ev.classList.remove("ActiveTeam")
                    return;
                }
            })
            e.classList.add("ActiveTeam");
            CommentPhoto.innerHTML = `    <picture>
            <source type="image/avif" srcset="images/Melman.avif">
            <source type="image/webp" srcset="images/Melman.webp">
            <img src="images/Melman.jpg" alt="Melman">
        </picture>`;
            CommentName.innerHTML = `Melman`;
            CommentJob.innerHTML = `travel blogger`;
            CommentComents.innerHTML = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
             Omnis, inventore. Nostrum rerum quaerat voluptas.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
             Omnis, inventore. Nostrum rerum quaerat voluptas.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
             Omnis, inventore. Nostrum rerum quaerat voluptas.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
             Omnis, inventore. Nostrum rerum quaerat voluptas.Lorem ipsum, dolor sit amet consectetur adipisicing elit. `
        })
            return
    }
})
NewsChose.forEach((e, index) => {
    switch (index) {
        case 0: e.addEventListener("click", () => {
            NewsChose.forEach((ev, ind) => {
                if (ev.classList.contains("ActiveTeam") && index != ind) {
                    ev.classList.remove("ActiveTeam")
                    return;
                }
            })
            if (VideoButton)
            {
                VideoButton.removeEventListener("click",ClickPlay)
                VideoButton="";
             }
            e.classList.add("ActiveTeam")
            if (NewsBody.classList.contains("News_body_Play")) NewsBody.removeAttribute(`class`)
            NewsHead.innerHTML = ` <h2>LATEST NEWS</h2>
     <p >Lorem ipsum dolor sit amet 
     consectetur adipisicing elit. Obcaecati qui sequi ducimus.</p>`;
            NewsBody.innerHTML = `<div class="News_body_Author">
     <h2>The trending Landing Pages</h2>
     <h3>by <span class="greenText">Sidney</span> </h3>
     <span>6950 Likes - 243 Comments - 703 shares</span>
 </div>
 <div class="News_body_text">
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, 
         reprehenderit quod vitae nostrum nihil non sapiente 
         voluptate quis in soluta quidem iusto
          commodi quibusdam repudiandae fugit quisquam mollitia maxime quae.
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, 
           perferendis earum illum nostrum quas nobis ipsam, minima alias quos 
           asperiores ducimus aliquid eveniet laboriosam 
          blanditiis impedit rem adipisci voluptatem voluptatibus.</p>
 </div>
<div>
<a href="">+ Read More</a>
</div>`
        })
            return
        case 1: e.addEventListener("click", () => {
            NewsChose.forEach((ev, ind) => {
                if (ev.classList.contains("ActiveTeam") && index != ind) {
                    ev.classList.remove("ActiveTeam")
                    return;
                }
            })
            e.classList.add("ActiveTeam");
            NewsHead.innerHTML = `  <h2>LATEST Videos</h2>
         <p >Lorem ipsum dolor sit amet 
         consectetur adipisicing elit. Obcaecati qui sequi ducimus.</p>`;
            NewsBody.classList.add("News_body_Play")
            NewsBody.innerHTML = `<div class="PlayVideo">
            <picture>
            <source type="image/avif" srcset="images/NewsPlay.avif">
            <source type="image/webp" srcset="images/NewsPlay.webp">
            <img src="images/NewsPlay.png" alt="NewsPlay">
        </picture>
          </div>`
          VideoButton=document.querySelector(".PlayVideo");
        VideoButton.addEventListener("click",ClickPlay)
        })
            return
        case 2: e.addEventListener("click", () => {

            NewsChose.forEach((ev, ind) => {
                if (ev.classList.contains("ActiveTeam") && index != ind) {
                    ev.classList.remove("ActiveTeam")
                    return;
                }
            })
            if (VideoButton)
            {
                VideoButton.removeEventListener("click",ClickPlay)
                VideoButton="";
             }
            e.classList.add("ActiveTeam");
            if (NewsBody.classList.contains("News_body_Play")) NewsBody.removeAttribute(`class`)
            NewsHead.innerHTML = ` <h2>LATEST NEWS</h2>
             <p >Lorem ipsum dolor sit amet 
             consectetur adipisicing elit.</p>`;
            NewsBody.innerHTML = `<div class="News_body_Author">
             <h2>Цитаты Великого Мастера</h2>
             <h3>by <span class="greenText">Mster Shifu</span> </h3>
             <span>124950 Likes - 1535 Comments - 6703 shares</span>
         </div>
         <div class="News_body_text">
         <ul>
         <li>Если делать только то, что умеешь, никогда не сможешь превзойти самого себя.</li>
         <li>Никто не моет подмышки в озере святых слез.</li>
         <li>Настоящий воин никогда не бросает начатое.</li>
         <li>...</li>
         </ul>
         </div>
        <div>
        <a href="">+ Read More</a>
        </div>`

        })
            return
    }
})
ButtonArrow.addEventListener("click", () => {
    if (!ArrowLeft.classList.contains("Open") && !ArrowRight.classList.contains("Open")) {
        ArrowLeft.classList.add("Open");
        ArrowRight.classList.add("Open");
        _About.classList.add("close")
        _Contain.classList.add("close")
        HeightAbout = 505;
        return;
    }
    ArrowLeft.classList.remove("Open");
    ArrowRight.classList.remove("Open");
    _About.classList.remove("close");
    _Contain.classList.remove("close")
    HeightAbout = 0;
})
MapShow.addEventListener("click", () => {
    document.querySelector('.ContactUs_Shadow').style.display = "none";
})
OurPriceItem.forEach((e, index) => {
    e.addEventListener("mouseenter", () => {

        OurPriceChosePrice[index].style.top=`${e.clientHeight-OurPriceButton[index].clientHeight}px`
        OurPriceButton[index].innerHTML = `lets Start >`
        OurPriceButton[index].style.textTransform = "none"
        OurPriceButton[index].style.boxShadow = "0px -3px 5px black"

    })
})
OurPriceItem.forEach((e, index) => {
    e.addEventListener("mouseleave", () => {
        if (OurPriceChosePrice[index].hasAttribute("style"))
            OurPriceChosePrice[index].removeAttribute("style")

        if (OurPriceButton[index].hasAttribute("style"))
            OurPriceButton[index].removeAttribute("style")

        if (index === 0)
            OurPriceButton[index].innerHTML = `STANDART`

        if (index === 1)
            OurPriceButton[index].innerHTML = `premium`

        if (index === 2)
            OurPriceButton[index].innerHTML = `exclusive`
    })

})
MainHeaderUl.addEventListener("click", () => {
    if (MainHeaderUl.classList.contains(`MainHeader_navigation_Burger`)) {
        let BurgerLi = document.querySelectorAll(".MainHeader_navigation_Burger li");
        BurgerLi.forEach((e, index) => {
            if (!e.hasAttribute("style")) {
                e.style.display = `block`;
                return;
            } else {
                BurgerLi[index].removeAttribute(`style`)
                return;
            }
        })

    } return
})

window.onscroll = () => {

    if (window.pageYOffset>ContancMap.offsetTop- HeightAbout-1000 && !MapLoaded)
    {
        ContancMap.insertAdjacentHTML("beforeend",` <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.2631792127577!2d37.61860631593065!3d55.75393028055367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5a738fa419%3A0x7c347d506b52311f!2z0JrRgNCw0YHQvdCw0Y8g0J_Qu9C-0YnQsNC00Yw!5e0!3m2!1sru!2sru!4v1651341136577!5m2!1sru!2sru"
        width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>`)
        MapLoaded=true;
    }
    if (window.pageYOffset > 0 && OnTop) {
        _Header.style.backgroundColor = "rgba(0,0,0,0.2)";
        OnTop=false
        return
    } else if (window.pageYOffset === 0 && !OnTop) {
        _Header.style.backgroundColor = "transparent";
        OnTop=true;
        if (window.screen.width >= "800") {
            for (let i = 0; i < Navigation.length; i++) {
                if (Navigation[i].innerHTML === "Home") 
                {
                    if (!Navigation[i].classList.contains("class")) Navigation[i].classList.add("Active")
                } 
                else 
                Navigation[i].removeAttribute("class")
            }
        }
    }
    if (window.screen.width!==window.innerWidth)
    {if (window.innerWidth >= "800"&&!Navigation[1].classList.contains("Active") && window.pageYOffset >=_About.offsetTop + HeightTop - HeightAbout &&
    window.pageYOffset < _About.offsetTop +_About.clientHeight + HeightTop - HeightAbout ) {
    for (let i = 0; i < Navigation.length; i++) {
        if (Navigation[i].innerHTML === "About") 
        {
            if (!Navigation[i].classList.contains("Active")) Navigation[i].classList.add("Active")
        } 
        else 
        Navigation[i].removeAttribute("class")
    }
    return
}
if (window.innerWidth >= "800" &&!Navigation[2].classList.contains("Active") && window.pageYOffset >= Services.offsetTop + HeightTop - HeightAbout &&
    window.pageYOffset <Services.offsetTop + Services.clientHeight + HeightTop - HeightAbout) {
        for (let i = 0; i < Navigation.length; i++) {
            if (Navigation[i].innerHTML === "Services") 
            {
                if (!Navigation[i].classList.contains("Active")) Navigation[i].classList.add("Active")
            } 
            else 
            Navigation[i].removeAttribute("class")
        }
    return
}
if (window.innerWidth >= "800" &&!Navigation[3].classList.contains("Active") && window.pageYOffset >= Portfolio.offsetTop + HeightTop - HeightAbout &&
    window.pageYOffset < Portfolio.offsetTop + Portfolio.clientHeight + HeightTop - HeightAbout) {
        for (let i = 0; i < Navigation.length; i++) {
            if (Navigation[i].innerHTML === "Portfolio") 
            {
                if (!Navigation[i].classList.contains("Active")) Navigation[i].classList.add("Active")
            } 
            else 
            Navigation[i].removeAttribute("class")
        }
    return
}
if (window.innerWidth >= "800" &&!Navigation[4].classList.contains("Active") && window.pageYOffset >= Team.offsetTop + HeightTop - HeightAbout &&
    window.pageYOffset < Team.offsetTop +Team.clientHeight + HeightTop - HeightAbout) {
        for (let i = 0; i < Navigation.length; i++) {
            if (Navigation[i].innerHTML === "Team") 
            {
                if (!Navigation[i].classList.contains("Active")) Navigation[i].classList.add("Active")
            } 
            else 
            Navigation[i].removeAttribute("class")
        }
        return
}
if (window.innerWidth >= "800" &&!Navigation[5].classList.contains("Active") && window.pageYOffset >= News.offsetTop + HeightTop - HeightAbout &&
    window.pageYOffset <News.offsetTop + News.clientHeight + HeightTop - HeightAbout) {
        for (let i = 0; i < Navigation.length; i++) {
            if (Navigation[i].innerHTML === "Blog") 
            {
                if (!Navigation[i].classList.contains("Active")) Navigation[i].classList.add("Active")
            } 
            else 
            Navigation[i].removeAttribute("class")
        }
    return
}
if (window.innerWidth >= "800" && !Navigation[6].classList.contains("Active") &&window.pageYOffset >= Contact.offsetTop + HeightTop - HeightAbout &&
    window.pageYOffset < Contact.offsetTop +Contact.clientHeight + HeightTop - HeightAbout) {
        for (let i = 0; i < Navigation.length; i++) {
            if (Navigation[i].innerHTML === "Contact") 
            {
                if (!Navigation[i].classList.contains("Active")) Navigation[i].classList.add("Active")
            } 
            else 
            Navigation[i].removeAttribute("class")
        }
    return
}

    }else
  { if (window.screen.width >= "800"&&!Navigation[1].classList.contains("Active") && window.pageYOffset >=_About.offsetTop + HeightTop - HeightAbout &&
        window.pageYOffset < _About.offsetTop +_About.clientHeight + HeightTop - HeightAbout ) {
        for (let i = 0; i < Navigation.length; i++) {
            if (Navigation[i].innerHTML === "About") 
            {
                if (!Navigation[i].classList.contains("Active")) Navigation[i].classList.add("Active")
            } 
            else 
            Navigation[i].removeAttribute("class")
        }
        return
    }
    if (window.screen.width >= "800" &&!Navigation[2].classList.contains("Active") && window.pageYOffset >= Services.offsetTop + HeightTop - HeightAbout &&
        window.pageYOffset <Services.offsetTop + Services.clientHeight + HeightTop - HeightAbout) {
            for (let i = 0; i < Navigation.length; i++) {
                if (Navigation[i].innerHTML === "Services") 
                {
                    if (!Navigation[i].classList.contains("Active")) Navigation[i].classList.add("Active")
                } 
                else 
                Navigation[i].removeAttribute("class")
            }
        return
    }
    if (window.screen.width >= "800" &&!Navigation[3].classList.contains("Active") && window.pageYOffset >= Portfolio.offsetTop + HeightTop - HeightAbout &&
        window.pageYOffset < Portfolio.offsetTop + Portfolio.clientHeight + HeightTop - HeightAbout) {
            for (let i = 0; i < Navigation.length; i++) {
                if (Navigation[i].innerHTML === "Portfolio") 
                {
                    if (!Navigation[i].classList.contains("Active")) Navigation[i].classList.add("Active")
                } 
                else 
                Navigation[i].removeAttribute("class")
            }
        return
    }
    if (window.screen.width >= "800" &&!Navigation[4].classList.contains("Active") && window.pageYOffset >= Team.offsetTop + HeightTop - HeightAbout &&
        window.pageYOffset < Team.offsetTop +Team.clientHeight + HeightTop - HeightAbout) {
            for (let i = 0; i < Navigation.length; i++) {
                if (Navigation[i].innerHTML === "Team") 
                {
                    if (!Navigation[i].classList.contains("Active")) Navigation[i].classList.add("Active")
                } 
                else 
                Navigation[i].removeAttribute("class")
            }
            return
    }
    if (window.screen.width >= "800" &&!Navigation[5].classList.contains("Active") && window.pageYOffset >= News.offsetTop + HeightTop - HeightAbout &&
        window.pageYOffset <News.offsetTop + News.clientHeight + HeightTop - HeightAbout) {
            for (let i = 0; i < Navigation.length; i++) {
                if (Navigation[i].innerHTML === "Blog") 
                {
                    if (!Navigation[i].classList.contains("Active")) Navigation[i].classList.add("Active")
                } 
                else 
                Navigation[i].removeAttribute("class")
            }
        return
    }
    if (window.screen.width >= "800" && !Navigation[6].classList.contains("Active") &&window.pageYOffset >= Contact.offsetTop + HeightTop - HeightAbout &&
        window.pageYOffset < Contact.offsetTop +Contact.clientHeight + HeightTop - HeightAbout) {
            for (let i = 0; i < Navigation.length; i++) {
                if (Navigation[i].innerHTML === "Contact") 
                {
                    if (!Navigation[i].classList.contains("Active")) Navigation[i].classList.add("Active")
                } 
                else 
                Navigation[i].removeAttribute("class")
            }
        return
    }}

}
(window.onresize = () => {
    console.log(window.screen.width)
    console.log(window.innerWidth)
    if (window.screen.width!==window.innerWidth)
  {  if (window.innerWidth < 800) {
        MainHeaderUl.className = `MainHeader_navigation_Burger`;
        let BurgerLi = document.querySelectorAll(".MainHeader_navigation_Burger li");
        BurgerLi.forEach((e) => {
            if (e.hasAttribute(`class`)) e.removeAttribute('class');

        })
    }else MainHeaderUl.className = `MainHeader_navigation`
}else 
   { if (window.screen.width < "800") {
        MainHeaderUl.className = `MainHeader_navigation_Burger`;
        let BurgerLi = document.querySelectorAll(".MainHeader_navigation_Burger li");
        BurgerLi.forEach((e) => {
            if (e.hasAttribute(`class`)) e.removeAttribute('class');

        })
    }
    else MainHeaderUl.className = `MainHeader_navigation`;}
})()