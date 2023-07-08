/*Start shuffle*/
let allButtons = document.querySelectorAll(".feature-work button")
let allImg = document.querySelectorAll(".feature-work .shuffel .row .col-md img");
allButtons.forEach(function(ele) {
    ele.onclick = function(){
        allButtons.forEach(function(btn) {
            btn.classList.remove("active")
        })
        ele.classList.add("active")
        if(ele.dataset.class === ".all")
        {
            allImg.forEach(function(img) {
                img.style.opacity = "1"
            });
        } else {
            allImg.forEach(function(img) {
                img.style.opacity = "0.09"
            });  
            document.querySelectorAll(ele.dataset.class).forEach(function(ele) {
                ele.style.opacity = 1
            })
        }
    }
});
/*
// work in mobile screen => featured work section 
document.querySelector(".feature-work").style.paddingBottom = "0"
allButtons.forEach(function(ele) {
    ele.onclick = function(){
        allButtons.forEach(function(btn) {
            btn.classList.remove("active")
        })
        allImg.forEach(img => {
            img.style.display = "none"
        })
        ele.classList.add("active")
        if(ele.dataset.class === ".all")
        {
            allImg.forEach(function(img) {
                img.style.display = "flex"
            })
        } else {
            document.querySelectorAll(ele.dataset.class).forEach(function(ele) {
                ele.style.display = "flex"
            })
        }
    }
});*/
var mql = window.matchMedia('(max-width: 768px)');

function screenTest(e) {
  if (e.matches) {
    document.querySelector(".feature-work").style.paddingBottom = "0"
    allButtons.forEach(function(ele) {
        ele.onclick = function(){
            allButtons.forEach(function(btn) {
                btn.classList.remove("active")
            })
            allImg.forEach(img => {
                img.style.display = "none"
            })
            ele.classList.add("active")
            if(ele.dataset.class === ".all")
            {
                allImg.forEach(function(img) {
                    img.style.display = "flex"
                })
            } else {
                document.querySelectorAll(ele.dataset.class).forEach(function(ele) {
                    ele.style.display = "flex"
                })
            }
        }
    });
  } else {
    /* the viewport is more than than 600 pixels wide */
    allButtons.forEach(function(ele) {
        ele.onclick = function(){
            allButtons.forEach(function(btn) {
                btn.classList.remove("active")
            })
            ele.classList.add("active");
            allImg.forEach(img => {
                img.style.display = "flex";
                img.style.opacity = "1"
            })
            if(ele.dataset.class === ".all")
            {
                allImg.forEach(function(img) {
                    img.style.opacity = "1"
                });
            } else {
                allImg.forEach(function(img) {
                    img.style.opacity = "0.09"
                });
                
                document.querySelectorAll(ele.dataset.class).forEach(function(ele) {
                    ele.style.opacity = 1
                })
            }
        }
    })
  }
}

mql.addListener(screenTest);
/*End shuffle*/
