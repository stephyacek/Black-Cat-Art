/* eslint-disable no-unused-vars */

var products = [
  {
    image: 'images/turquoise.jpg',
    title: 'Something With Turquoise',
    description: 'This original signed photograph is professionally printed at a lab on archival photography paper.',
    size:
    { small: 'Small: 8x8 inches Unframed Print (approx 20.3cm sq.)',
      medium: 'Medium: 10x10 inches Unframed Print (approx 25.4cm sq.)',
      large: 'Large: 12x12 inches Unframed Print (approx 30.4cm sq.)'
    },
    price:
    { small: 'Small: $16.99 |',
      medium: 'Medium: $19.99 |',
      large: 'Large: $22.99'
    }
  },
  {
    image: 'images/rolling.jpg',
    title: 'Risible Rollings',
    description: 'This original signed photograph is professionally printed at a lab on archival photography paper.',
    size:
    { small: 'Small: 8x8 inches Unframed Print (approx 20.3cm sq.)',
      medium: 'Medium: 10x10 inches Unframed Print (approx 25.4cm sq.)',
      large: 'Large: 12x12 inches Unframed Print (approx 30.4cm sq.)'
    },
    price:
    { small: 'Small: $16.99 |',
      medium: 'Medium: $19.99 |',
      large: 'Large: $22.99'
    }
  },
  {
    image: 'images/serpentine.jpg',
    title: 'Serpentine and Sarcastic',
    description: 'This original signed photograph is professionally printed at a lab on archival photography paper.',
    size:
    { small: 'Small: 8x8 inches Unframed Print (approx 20.3cm sq.)',
      medium: 'Medium: 10x10 inches Unframed Print (approx 25.4cm sq.)',
      large: 'Large: 12x12 inches Unframed Print (approx 30.4cm sq.)'
    },
    price:
    { small: 'Small: $16.99 |',
      medium: 'Medium: $19.99 |',
      large: 'Large: $22.99'
    }
  },
  {
    image: 'images/claws.jpg',
    title: 'Corpulent Claws',
    description: 'This original signed photograph is professionally printed at a lab on archival photography paper.',
    size:
    { small: 'Small: 8x8 inches Unframed Print (approx 20.3cm sq.)',
      medium: 'Medium: 10x10 inches Unframed Print (approx 25.4cm sq.)',
      large: 'Large: 12x12 inches Unframed Print (approx 30.4cm sq.)'
    },
    price:
    { small: 'Small: $16.99 |',
      medium: 'Medium: $19.99 |',
      large: 'Large: $22.99'
    }
  },
  {
    image: 'images/scarlet.jpg',
    title: 'Scarlet Sartorial Sense',
    description: 'This original signed photograph is professionally printed at a lab on archival photography paper.',
    size:
    { small: 'Small: 8x8 inches Unframed Print (approx 20.3cm sq.)',
      medium: 'Medium: 10x10 inches Unframed Print (approx 25.4cm sq.)',
      large: 'Large: 12x12 inches Unframed Print (approx 30.4cm sq.)'
    },
    price:
    { small: 'Small: $16.99 |',
      medium: 'Medium: $19.99 |',
      large: 'Large: $22.99'
    }
  },
  {
    image: 'images/fulsome.jpg',
    title: 'Fulsome Fur',
    description: 'This original signed photograph is professionally printed at a lab on archival photography paper.',
    size:
    { small: 'Small: 8x8 inches Unframed Print (approx 20.3cm sq.)',
      medium: 'Medium: 10x10 inches Unframed Print (approx 25.4cm sq.)',
      large: 'Large: 12x12 inches Unframed Print (approx 30.4cm sq.)'
    },
    price:
    { small: 'Small: $16.99 |',
      medium: 'Medium: $19.99 |',
      large: 'Large: $22.99'
    }
  },
  {
    image: 'images/zealous.jpg',
    title: 'Zealous Eater',
    description: 'This original signed photograph is professionally printed at a lab on archival photography paper.',
    size:
    { small: 'Small: 8x8 inches Unframed Print (approx 20.3cm sq.)',
      medium: 'Medium: 10x10 inches Unframed Print (approx 25.4cm sq.)',
      large: 'Large: 12x12 inches Unframed Print (approx 30.4cm sq.)'
    },
    price:
    { small: 'Small: $16.99 |',
      medium: 'Medium: $19.99 |',
      large: 'Large: $22.99'
    }
  },
  {
    image: 'images/fuschia.jpg',
    title: 'Flaming Fuschia',
    description: 'This original signed photograph is professionally printed at a lab on archival photography paper.',
    size:
    { small: 'Small: 8x8 inches Unframed Print (approx 20.3cm sq.)',
      medium: 'Medium: 10x10 inches Unframed Print (approx 25.4cm sq.)',
      large: 'Large: 12x12 inches Unframed Print (approx 30.4cm sq.)'
    },
    price:
    { small: 'Small: $16.99 |',
      medium: 'Medium: $19.99 |',
      large: 'Large: $22.99'
    }
  }
]

var $artworkSection = document.querySelector('.artwork')

document.addEventListener('DOMContentLoaded', function () {
  renderPhotos(products)
})

function createEachProduct(products) {
  var $product = document.createElement('span')
  var $productDescription = document.createElement('span')
  var $image = document.createElement('img')
  $productDescription.setAttribute('class', 'product-description')
  $image.setAttribute('src', products.image)
  $product.setAttribute('class', 'product')
  $product.appendChild($image)
  $product.appendChild($productDescription)
  $productDescription.textContent = products.title
  return $product
}

function renderPhotos(products) {
  for (var i = 0; i < products.length; i++) {
    var $product = createEachProduct(products[i])
    $artworkSection.appendChild($product)
  }
}
