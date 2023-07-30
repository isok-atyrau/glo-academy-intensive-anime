const datailData = () => {
   const preloder = document.querySelector(".preloder")

   const renderGanreList = (ganres) => {
      const dropdown = document.querySelector(".header__menu .dropdown")

      ganres.forEach((ganre) => {
         dropdown.insertAdjacentHTML(
            "beforeend",
            `<li><a href="./categories.html?ganre=${ganre}">${ganre}</a></li>`
         )
      })
   }

   const renderAnimeDetails = (array, itemId) => {
      const animeObj = array.find((item) => item.id == itemId)
      const imageBlock = document.querySelector(".anime__details__pic")
      const viewBlock = imageBlock.querySelector(".view")
      const animeTitle = document.querySelector(".anime__details__title h3")
      const animeSubTitle = document.querySelector(
         ".anime__details__title span"
      )
      const animeText = document.querySelector(".anime__details__text p")
      const widjetList = document.querySelectorAll(
         ".anime__details__widget ul li"
      )
      const breadcrumb = document.querySelector(".breadcrumb__links span")

      if (animeObj) {
         animeTitle.textContent = animeObj.title
         animeSubTitle.textContent = animeObj["original-title"]
         animeText.textContent = animeObj.description

         imageBlock.dataset.setBg = animeObj.image
         viewBlock.insertAdjacentHTML(
            "beforeend",
            `<div class="view"><i class="fa fa-eye"></i> ${animeObj.views}</div>`
         )

         breadcrumb.textContent = animeObj.ganre

         widjetList[0].insertAdjacentHTML(
            "beforeend",
            `<span>Date aired:</span> ${animeObj.date}`
         )
         widjetList[1].insertAdjacentHTML(
            "beforeend",
            `<span>Rating:</span> ${animeObj.rating} / 10`
         )
         widjetList[2].insertAdjacentHTML(
            "beforeend",
            `<span>Genre:</span>${animeObj.tags.join(", ")}`
         )

         document.querySelectorAll(".set-bg").forEach((elem) => {
            elem.style.backgroundImage = `url(${elem.dataset.setbg})`
         })

         setTimeout(() => {
            preloder.classList.remove("active")
         }, 500)
      } else {
         console.log("42222222222")
      }
   }

   fetch("https://test-abec8-default-rtdb.firebaseio.com/anime.json")
      .then((responce) => {
         if (responce.status === 200) {
            return responce.json()
         } else {
            throw new Error(responce.status)
         }
      })
      .then((data) => {
         const ganres = new Set()
         const params = new URLSearchParams(window.location.search).get(
            "itemId"
         )

         data.forEach((item) => ganres.add(item.ganre))

         if (params) {
            renderAnimeDetails(data, params)
         } else {
            console.log("422222222222222")
         }

         renderGanreList(ganres)
      })
      .catch((error) => {
         console.dir(error)
         alert(`Произошла ошибка, код статуса ${error.message}`)
      })
}

datailData()
