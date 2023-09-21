const products = [
    {
      id: 12,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      rating: {
        rate: 3.9,
        count: 120
      }
    },
    {  
    id: 1,
    title: "Lionel Messi",
    price: 280,
    equipo: "Paris Saint-Germain",
    valoracion: 93,
    posicion: "Delantero",
    pais: "Argentina",
    image: 'https://i.pinimg.com/originals/87/94/1a/87941ac819e41e54e5eb04fa4b8ccce1.jpg',
    rating: {
      rate: 5,
      count: 120
    }
  },
  {
    id: 2,
    title: "Cristiano Ronaldo",
    price: 270,
    equipo: "Manchester United",
    valoracion: 92,
    posicion: "Delantero",
    pais: "Portugal",
    image: "https://i.pinimg.com/originals/a4/c9/8b/a4c98b2d9e3053fb5972e89caf43e3d5.jpg",
    rating: {
      rate: 4.9,
      count: 12
    }
  },
  {
    id: 3,
    title: "Neymar Jr.",
    price: 180,
    equipo: "Paris Saint-Germain",
    valoracion: 91,
    posicion: "Delantero",
    pais: "Brasil",
    image: "https://i.pinimg.com/originals/25/d7/5a/25d75a163e0f299765006da99ecd8b35.jpg",
    rating: {
      rate: 4,
      count: 120
    }
  },
  {
    id: 4,
    title: "Armando Maradona",
    price: 192,
    equipo: "Napoli",
    valoracion: 90,
    posicion: "Delantero",
    pais: "Argentino",
    image: "https://i.pinimg.com/originals/d6/0f/07/d60f07850cf61499717f5b7a868525b7.jpg",
    rating: {
      rate: 4.8,
      count: 200
    }
  },
  {
    id: 5,
    title: "Kevin De Bruyne",
    price: 300,
    equipo: "Manchester City",
    valoracion: 91,
    posicion: "Centrocampista",
    pais: "Bélgica",
    image: "https://i.pinimg.com/originals/03/56/ae/0356ae7efeeeef4f9ba1548b276a5b35.jpg",
    rating: {
      rate: 4.2,
      count: 13
    }
  },
  {
    id: 6,
    title: "Sterling",
    price: 140,
    equipo: "Manchester City",
    valoracion: 89,
    posicion: "Delantero",
    pais: "Inglaterra",
    image: "https://i.pinimg.com/originals/e0/ff/07/e0ff0751ae008a5a1a0aa86e73c93550.jpg",
    rating: {
      rate: 3.9,
      count: 20
    }
  },
  {
    id: 7,
    title: "Robert Lewandowski",
    price: 100,
    equipo: "Bayern Munich",
    valoracion: 92,
    posicion: "Delantero",
    pais: "Polonia",
    image: "https://i.pinimg.com/originals/37/d7/c2/37d7c26dd6be58af5d8928299ab9d898.jpg",
    rating: {
      rate: 4.5,
      count: 43
    }
  },
  {
    id: 8,
    title: "Mohamed Salah",
    price: 98,
    equipo: "Liverpool",
    valoracion: 90,
    posicion: "Delantero",
    pais: "Egipto",
    image: "ruta/a/la/imagen8.jpg",
    rating: {
      rate: 5,
      count: 120
    }
  }
  

  ]
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(products)
      }, 10)
    })
  }
  
  export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log({products, id})
        const product = products.find((p) => p.id === id)
        if (product) return resolve(product)
        // eslint-disable-next-line prefer-promise-reject-errors
        return reject({ error: 'No encontrado' })
      }, 10)
    })
  }