const modal = () => {
   const modal = document.querySelector(".search-model")
   const modalBtn = document.querySelector(".icon_search")
   const modalClose = modal.querySelector(".search-close-switch")
   const modalSearch = modal.querySelector(".search-model-form")
   const wrapper = document.querySelector(".search-model-result")

   wrapper.style.maxWidth = "500px"
   wrapper.style.width = "100%"

   const renderFunc = (items) => {
      wrapper.innerHTML = ""
      items.forEach((item) => {
         wrapper.insertAdjacentHTML(
            "afterbegin",
            `<a class="pt-2" href="/anime-details.html" target="_blank">${item.title}</a>`
         )
      })
   }

   const searchFunc = (searchStr) => {
      const API_URL =
         "https://test-abec8-default-rtdb.firebaseio.com/anime.json"

      fetch(API_URL)
         .then((responce) => {
            if (responce.status === 200) {
               return responce.json()
            } else {
               throw new Error(responce.status)
            }
         })
         .then((data) => {
            const filteredData = data.filter((dataItem) => {
               return (
                  dataItem.title
                     .toLowerCase()
                     .includes(searchStr.toLowerCase()) ||
                  dataItem.description
                     .toLowerCase()
                     .includes(searchStr.toLowerCase())
               )
            })

            renderFunc(filteredData.slice(0, 5))
         })
         .catch((error) => {
            console.dir(error)
            alert(`Произошла ошибка, код статуса ${error.message}`)
         })
   }

   modalBtn.addEventListener("click", () => {
      modal.style.display = "block"
   })

   modalClose.addEventListener("click", () => {
      modalSearch.value = ""
      modal.style.display = "none"
      wrapper.innerHTML = ""
   })

   modalSearch.addEventListener("input", (e) => {
      searchFunc(e.target.value)
   })
}

modal()
