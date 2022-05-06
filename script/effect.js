const ButtonArrow = document.querySelector(".Top_button");
const ArrowLeft = document.querySelector(".Top_button_ArrowLeft");
const ArrowRight = document.querySelector(".Top_button_ArrowRight");
const _About = document.querySelector(".About");
const DetailAboutItem=document.querySelectorAll('.DetailAbout_head_list div.Item');
const _Header = document.querySelector("#_Header");
const Navigation = document.querySelectorAll('.MainHeader_navigation li')
const _Contain = document.querySelector(".Container_Body");
const ServicesText = document.querySelector(".Services_About_Text");
const ServicesList = document.querySelectorAll("div.Services_About_List div.Item")
const TeamChose = document.querySelectorAll(".Team div.Team_chose_Item")
const ImgTeam = document.querySelector(".Team_About_Img");
const NameTeam = document.querySelector(".Team_About_Characteristic_Name h3");
const RankTeam = document.querySelector(".Team_About_Characteristic_Name h4");
const FistSkill = document.querySelector("#FistSkill");
const SecondSkill = document.querySelector("#SecondSkill");
const ThirdSkill = document.querySelector("#ThirdSkill");
const Skill_Item = document.querySelectorAll(".Skill_Item");
const CommentChose = document.querySelectorAll(".Testimonials div.Team_chose_Item")
const CommentPhoto = document.querySelector(".Testimonials_body_Photo")
const CommentName = document.querySelector(".Testimonials_body h3")
const CommentJob = document.querySelector(".Testimonials_body h4")
const CommentComents = document.querySelector(".Testimonials_body p")
const NewsChose = document.querySelectorAll('div.News_body div.Team_chose_Item')
const NewsBody = document.querySelector('.News_body>div')
const NewsHead = document.querySelector('.News_Head')
const OurPriceItem = document.querySelectorAll('.OurPrice_Chose_item')
const OurPriceChosePrice = document.querySelectorAll('.OurPrice_Chose_Price')
const OurPriceButton = document.querySelectorAll('.OurPrice_Chose_Price button')
const MapShow = document.querySelector('.ContactUs_Shadow .Top_button')
const MainHeaderUl = document.querySelector(".MainHeader ul");
const Services = document.querySelector(".Services");
const Portfolio = document.querySelector(".Portfolio");
const Team = document.querySelector(".Team");
const News = document.querySelector(".News");
const Contact = document.querySelector(".Contact");
let OnTop=true;
let WidthAbout=0;

if (window.screen.width < "800")
 {MainHeaderUl.className=`MainHeader_navigation_Burger`;
}else MainHeaderUl.className=`MainHeader_navigation`;
window.onscroll = () => {
    if (window.pageYOffset > _Header.offsetTop && OnTop) {
        console.log(`pi`)
        _Header.style.backgroundColor = "rgba(0,0,0,0.2)";
        OnTop = false;
        return
    } else if (window.pageYOffset === _Header.offsetTop && !OnTop) 
    {
        _Header.style.backgroundColor = "";
        OnTop = true;
        if(window.screen.width >= "800")
        {let AllreadyClear=false;
        Navigation.forEach((e,index)=>{
            if (!AllreadyClear && e.classList.contains("Active") && index != 0) {
                e.classList.remove("Active")
                AllreadyClear=true;
            }
            if (index === 0) e.classList.add("Active")
            return
        })}
    }
    if (window.screen.width >= "800" && window.pageYOffset >= _About.offsetTop+736-WidthAbout &&
        window.pageYOffset<_About.offsetTop+836-WidthAbout) 
    {
        let AllreadyClear=false;
        Navigation.forEach((e,index)=>{
            if (!AllreadyClear && e.classList.contains("Active") && index != 1) {
                e.classList.remove("Active");
                AllreadyClear=true;
            }
            if (index === 1) e.classList.add("Active")
            
        })
        return
    }
    if (window.screen.width >= "800" && window.pageYOffset >= Services.offsetTop+736-WidthAbout &&
        window.pageYOffset<Services.offsetTop+836-WidthAbout ) 
    {
        let AllreadyClear=false;
        Navigation.forEach((e,index)=>{
            if (!AllreadyClear && e.classList.contains("Active") && index != 2) {
                e.classList.remove("Active");
                AllreadyClear=true;
            }
            if (index === 2) e.classList.add("Active")
            
        })
        return
    }
    if (window.screen.width >= "800" && window.pageYOffset >= Portfolio.offsetTop+736-WidthAbout &&
        window.pageYOffset<Portfolio.offsetTop+836-WidthAbout ) 
    {
        let AllreadyClear=false;
        Navigation.forEach((e,index)=>{
            if (!AllreadyClear && e.classList.contains("Active") && index != 3) {
                e.classList.remove("Active");
                AllreadyClear=true;
            }
            if (index === 3) e.classList.add("Active")
            
        })
        return
    }
    if (window.screen.width >= "800" && window.pageYOffset >= Team.offsetTop+736-WidthAbout &&
        window.pageYOffset<Team.offsetTop+836-WidthAbout ) 
    {
        let AllreadyClear=false;
        Navigation.forEach((e,index)=>{
            if (!AllreadyClear && e.classList.contains("Active") && index != 4) {
                e.classList.remove("Active");
                AllreadyClear=true;
            }
            if (index === 4) e.classList.add("Active")
            
        })
    }
    if (window.screen.width >= "800" && window.pageYOffset >= News.offsetTop+736-WidthAbout &&
        window.pageYOffset<News.offsetTop+836-WidthAbout ) 
    {
        let AllreadyClear=false;
        Navigation.forEach((e,index)=>{
            if (!AllreadyClear && e.classList.contains("Active") && index != 5) {
                e.classList.remove("Active");
                AllreadyClear=true;
            }
            if (index === 5) e.classList.add("Active")
            
        })
        return
    }
    if (window.screen.width >= "800" && window.pageYOffset >= Contact.offsetTop+736-WidthAbout &&
        window.pageYOffset<Contact.offsetTop+836-WidthAbout ) 
    {
        let AllreadyClear=false;
        Navigation.forEach((e,index)=>{
            if (!AllreadyClear && e.classList.contains("Active") && index != 6) {
                e.classList.remove("Active");
                AllreadyClear=true;
            }
            if (index === 6) e.classList.add("Active")
            
        })
        return
    }

}
window.onresize = ()=>
{
   if (window.screen.width < "800")
   {MainHeaderUl.className=`MainHeader_navigation_Burger`;
   let BurgerLi=document.querySelectorAll(".MainHeader_navigation_Burger li");
   BurgerLi.forEach((e)=>{
       if (e.hasAttribute(`class`))e.removeAttribute('class');
       
   })
}
   else MainHeaderUl.className=`MainHeader_navigation`;
}
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
            ImgTeam.innerHTML = `<img src="images/sid.jfif" alt="Sid">`
            console.log("ya tut")

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
            ImgTeam.innerHTML = `<img src="images/TheBear.jpg" alt="TheBear">`
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
            ImgTeam.innerHTML = `<img src="images/sensei.jpg" alt="Sensei">`
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
            CommentPhoto.innerHTML = `<img src="images/Manni.jpg" alt="Manfred">`;
            CommentName.innerHTML = `Manfred`;
            CommentJob.innerHTML = `FOUNDER, ARTWAYS BD`;
            CommentComents.innerHTML = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
     Omnis, inventore. Nostrum rerum quaerat voluptas similique labore! Possimus tempore minus quibusdam architecto, 
     exercitationem necessitatibus a delectus ratione 
     laboriosam? Accusamus, provident numquam.`
            console.log("ya tut")

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
            CommentPhoto.innerHTML = `<img src="images/sponge.jpeg" alt="Sponge">`;
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
            CommentPhoto.innerHTML = `<img src="images/Melman.jpeg" alt="Melman">`;
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
            NewsBody.innerHTML = `<div>
         <img src="images/NewsPlay.png" alt="Play">
          </div>`
        })
            return
        case 2: e.addEventListener("click", () => {

            NewsChose.forEach((ev, ind) => {
                if (ev.classList.contains("ActiveTeam") && index != ind) {
                    ev.classList.remove("ActiveTeam")
                    return;
                }
            })
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
        WidthAbout=505;
        console.log(_About.offsetTop)
        console.log(Services.offsetTop)
        return;
    }
    ArrowLeft.classList.remove("Open");
    ArrowRight.classList.remove("Open");
    _About.classList.remove("close");
    _Contain.classList.remove("close")
    WidthAbout=0;
})
MapShow.addEventListener("click", () => {
    document.querySelector('.ContactUs_Shadow').style.display = "none";
})
OurPriceItem.forEach((e, index) => {
    e.addEventListener("mouseenter", () => {

        OurPriceChosePrice[index].classList.add("ActivePrice")
        OurPriceButton[index].innerHTML = `lets Start >`
        OurPriceButton[index].style.textTransform = "none"
        OurPriceButton[index].style.boxShadow = "0px -3px 5px black"

    })
})
OurPriceItem.forEach((e, index) => {
    e.addEventListener("mouseleave", () => {
        if (OurPriceChosePrice[index].classList.contains("ActivePrice"))
            OurPriceChosePrice[index].classList.remove("ActivePrice")

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
MainHeaderUl.addEventListener("click",()=>{
    if (MainHeaderUl.classList.contains(`MainHeader_navigation_Burger`))
    {
        let BurgerLi=document.querySelectorAll(".MainHeader_navigation_Burger li");
        BurgerLi.forEach((e,index)=>{
            if( !e.hasAttribute("style"))
            {
                e.style.display=`block`;
                return;
            }else
            {
                console.log("no")
                BurgerLi[index].removeAttribute(`style`)
                return;
            }
        })
     
    }return
})
