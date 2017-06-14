/* eslint-disable no-unused-vars */

var products = [
  {
    image: 'images/turquoise.jpg',
    title: 'Something With Turquoise'
  },
  {
    image: 'images/rolling.jpg',
    title: 'Risible Rollings'
  },
  {
    image: 'images/serpentine.jpg',
    title: 'Serpentine and Sarcastic'
  },
  {
    image: 'images/claws.jpg',
    title: 'Corpulent Claws'
  },
  {
    image: 'images/scarlet.jpg',
    title: 'Scarlet Sartorial Sense'
  },
  {
    image: 'images/fulsome.jpg',
    title: 'Fulsome Fur'
  },
  {
    image: 'images/zealous.jpg',
    title: 'Zealous Eater'
  },
  {
    image: 'images/fuschia.jpg',
    title: 'Flaming Fuschia'
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
