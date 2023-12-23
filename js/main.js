const d = document;

const $carouselManagement = d.querySelector(".carousel-management");
const $carouselItem = d.querySelectorAll(".carousel-item");

const $carouselButton = d.querySelectorAll(".carousel-indicators > button");
const $carouselIndicators = d.querySelector(".carousel-indicators");

$carouselManagement.addEventListener("click", () => {
    $carouselManagement.classList.toggle("pause");
    
    if ($carouselManagement.classList.contains("pause")){
        $carouselManagement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#ffffff" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>`;

        $carouselItem.forEach((el) => {
            if (el.classList.contains("active")){
                el.classList.remove("carousel-item");
                let $img = el.querySelector("img");
                    $img.style.height = "100%";
                    el.style.height = "100%";
            }
        })

        $carouselIndicators.addEventListener("click", (e) => {

                let buttoon = $carouselIndicators.querySelectorAll("button");
                console.log(buttoon);

                console.log("Verdadero");
                buttoon.forEach((bt) => {
                    if (e.target === bt){
                        e.target.classList.add("active");
                        e.target.setAttribute("aria-current", "true");
                    } else {
                        bt.classList.remove("active");
                        bt.removeAttribute("aria-current");
                    }  
                })

                
        })

        $carouselButton.forEach(element => {
            element.addEventListener("click", (e) => {
                $carouselItem.forEach((el) => {
                    el.classList.add("carousel-item");
                    el.classList.remove("active");
                })
               
                let number = e.target.getAttribute("data-bs-slide-to");
                $carouselItem[number].classList.remove("carousel-item");
                $carouselItem[number].classList.add("active");

                if($carouselItem[number].classList.contains("active")){
                    let $img = $carouselItem[number].querySelector("img");
                    $img.style.height = "100%";
                    $carouselItem[number].style.height = "100%";
                }
            })
        })
    }
    

    if (!$carouselManagement.classList.contains("pause")){
        $carouselManagement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#ffffff" d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>`;

        $carouselItem.forEach((el) => {
            el.classList.add("carousel-item");
        })
    }
})