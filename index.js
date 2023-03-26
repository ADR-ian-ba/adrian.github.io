const open = document.querySelector(".menu")
      const close = document.querySelector(".close")
      const nav = document.querySelector("nav")

      open.addEventListener("click", ()=>{
        nav.classList.add("open")
      })

      close.addEventListener("click", () =>{
        nav.classList.remove("open")
      })


      