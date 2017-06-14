/* eslint-disable no-unused-vars */

var product = [
  { image: 'images/photo1.jpg',
    title: 'Something With Turquoise'
  },
  { image: 'images/photo2.jpg',
    title: 'Risible Rollings'
  },
  { image: 'images/photo3.jpg',
    title: 'Serpentine and Sarcastic'
  },
  { image: 'images/photo4.jpg',
    title: 'Corpulent Claws'
  },
  { image: 'images/photo5.jpg',
    title: 'Scarlet Sartorial Sense'
  },
  { image: 'images/photo6.jpg',
    title: 'Fulsome Fur'
  },
  { image: 'images/photo7.jpg',
    title: 'Zealous Eater'
  },
  { image: 'images/photo8.jpg',
    title: 'Flaming Fuschia'
  }
]

var $artworkSection = document.querySelector('.artwork')

document.addEventListener('DOMContentLoaded', renderPhotos(product))

function createEachProduct(product) {
  var $span = document.createElement('span')
  var $productDescription = document.createElement('span')
  var $image = document.createElement('img')
  $productDescription.setAttribute('class', 'product-description')
  $image.setAttribute('src', product.image)
  $span.setAttribute('class', 'product')
  $span.appendChild($image)
  $span.appendChild($productDescription)
  $productDescription.textContent = product.title
  return $span
}

function renderPhotos(product) {
  for (var i = 0; i < product.length; i++) {
    var eachProduct = createEachProduct(product[i])
    $artworkSection.appendChild(eachProduct)
  }
}
