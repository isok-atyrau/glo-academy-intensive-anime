const mainData = () => {
   //    const API_URL = './db.json'

   // ДЗ
   const API_URL = "https://test-abec8-default-rtdb.firebaseio.com/anime.json"

   fetch(API_URL)
      .then((responce) => {
         if (responce.status === 200) {
            return responce.json()
         } else {
            throw new Error(responce.status)
         }
      })
      .then((data) => {
         console.log(data)
      })
      .catch((error) => {
         console.dir(error)
         alert(`Произошла ошибка, код статуса ${error.message}`)
      })
}

mainData()
