var typed = new Typed(".typing",{
    strings:["web designer","web developer","graphic designer"],
    typespeed:100,
    BackSpeed:50,
    loop:true

})
/* ==================================== Aside ========================== */
const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavlist = navList.length;
for(let i=0; i<totalNavlist; i++)
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click",function()
    {
        for(let j=0; j<totalNavlist; j++)
            {
                navList[j].querySelector("a").classList.remove("active");
            }
        this.classList.add("active")
    })
    }
    function showSection(element)
    {
        for(let i=0; i<totalSection; i++)
            {
                allSection[i].classList.remove("active");
            }
            const target = element.getAttribute("href").split("#")[1];
            document.querySelector("#" + target).classList.add("active")
    }