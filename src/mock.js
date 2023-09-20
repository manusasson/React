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
    image: "assets/img/messi.jpg",
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
    image: "ruta/a/la/imagen2.jpg",
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
    image: "ruta/a/la/imagen3.jpg",
    rating: {
      rate: 4,
      count: 120
    }
  },
  {
    id: 4,
    title: "Kylian Mbappé",
    price: 192,
    equipo: "Paris Saint-Germain",
    valoracion: 90,
    posicion: "Delantero",
    pais: "Francia",
    image: "ruta/a/la/imagen4.jpg",
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
    image: "ruta/a/la/imagen5.jpg",
    rating: {
      rate: 4.2,
      count: 13
    }
  },
  {
    id: 6,
    title: "Sergio Ramos",
    price: 140,
    equipo: "Paris Saint-Germain",
    valoracion: 89,
    posicion: "Defensa",
    pais: "España",
    image: "ruta/a/la/imagen6.jpg",
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
    image: "ruta/a/la/imagen7.jpg",
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
  },
  {
    id: 9,
    title: "Luka Modric",
    price: 500,
    equipo: "Real Madrid",
    valoracion: 89,
    posicion: "Centrocampista",
    pais: "Croacia",
    image: "ruta/a/la/imagen9.jpg",
    rating: {
      rate: 4.9,
      count: 1020
    }
  },

  {
    id: 10,
    title: "Harry Kane",
    price: 400,
    equipo: "Tottenham Hotspur",
    valoracion: 89,
    posicion: "Delantero",
    pais: "Inglaterra",
    image: "ruta/a/la/imagen10.jpg",
    rating: {
      rate: 4,
      count: 8
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