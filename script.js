/*
Setting up two instance of the Typed object
because on looping back, the original text 
just appears out of nowhere instead of 
smoothly being removed and typed out again.

Source: https://stackoverflow.com/questions/49476387/typed-js-initialize-with-existing-text-and-then-loop-it

*/
function setupTypedReplace() {
    // the text node to type in
    var typed_class = "typing";
  
    // the original text content to replace, but also use
    var replace_text = "web designer";
  
    var options = {
      strings: ["web developer", "graphic designer", replace_text], // existing text goes at the end
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 1000,
      loop: true,
      smartBackspace: false,
      cursorChar: '|',
      attr: null
    };
  
    // clear out the existing text gracefully then setup the loop
    new Typed('.' + typed_class, {
      strings: [replace_text, ''],
      backSpeed: options.backSpeed,
      backDelay: options.backDelay,
      cursorChar: options.cursorChar,
      attr: options.attr,
      startDelay: 700,
      onComplete: function (t) {
        // existing text has now been removed so let's actually clear everything out
        // and setup the proper Typed loop we want. If we don't do this, the original
        // text content breaks the flow of the loop.
        t.destroy();
        document.getElementsByClassName(typed_class)[0].textContent = '';
        new Typed('.' + typed_class, options);
      }
    });
  }
  
  setupTypedReplace();

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