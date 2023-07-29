const mainData = () => {
   const API_URL = "https://test-abec8-default-rtdb.firebaseio.com/anime.json"

   const renderTopAnime = (array) => {
      const wrapper = document.querySelector(".filter__gallery")

      wrapper.innerHTML = ""
      array.forEach((item) => {
         wrapper.insertAdjacentHTML(
            "afterbegin",
            `<div class="product__sidebar__view__item set-bg mix" data-setbg="${item.image}">
               <div class="ep">${item.rating} / 10</div>
               <div class="view"><i class="fa fa-eye"></i>${item.views}</div>
               <h5><a href="/anime-details.html">${item.title}</a></h5>
            </div>`
         )

         wrapper.querySelectorAll(".set-bg").forEach((elem) => {
            elem.style.backgroundImage = `url(${elem.dataset.setbg})`
         })
      })
   }

   const renderAnimeList = (array, ganres) => {
      console.log(ganres)
   }

   fetch(API_URL)
      .then((responce) => {
         if (responce.status === 200) {
            return responce.json()
         } else {
            throw new Error(responce.status)
         }
      })
      .then((data) => {
         const ganres = new Set()

         data.forEach((item) => ganres.add(item.ganre))

         renderTopAnime(data.sort((a, b) => b.views - a.views).slice(0, 5))
         renderAnimeList(data, ganres)
      })
      .catch((error) => {
         console.dir(error)
         alert(`Произошла ошибка, код статуса ${error.message}`)
      })
}

mainData()
