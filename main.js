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
    price: 'Small: $16.99 | Medium: $19.99 | Large: $22.99',
    id: 0
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
    price: 'Small: $16.99 | Medium: $19.99 | Large: $22.99',
    id: 1
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
    price: 'Small: $16.99 | Medium: $19.99 | Large: $22.99',
    id: 2
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
    price: 'Small: $16.99 | Medium: $19.99 | Large: $22.99',
    id: 3
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
    price: 'Small: $16.99 | Medium: $19.99 | Large: $22.99',
    id: 4
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
    price: 'Small: $16.99 | Medium: $19.99 | Large: $22.99',
    id: 5

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
    price: 'Small: $16.99 | Medium: $19.99 | Large: $22.99',
    id: 6
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
    price: 'Small: $16.99 | Medium: $19.99 | Large: $22.99',
    id: 7
  },
  {
    image: 'images/chiaroscuro.jpg',
    title: 'Chiaroscuro',
    description: 'This original signed photograph is professionally printed at a lab on archival photography paper.',
    size:
    { small: 'Small: 8x8 inches Unframed Print (approx 20.3cm sq.)',
      medium: 'Medium: 10x10 inches Unframed Print (approx 25.4cm sq.)',
      large: 'Large: 12x12 inches Unframed Print (approx 30.4cm sq.)'
    },
    price: 'Small: $16.99 | Medium: $19.99 | Large: $22.99',
    id: 8
  }
]

var $artworkSection = document.querySelector('.artwork')
var $product = document.getElementsByClassName('product')

document.addEventListener('DOMContentLoaded', function () {
  renderPhotos(products)
  renderDetails(products)
})

function createEachProduct(products, productId) {
  var $product = document.createElement('span')
  var $productDescription = document.createElement('span')
  var $image = document.createElement('img')
  $productDescription.setAttribute('class', 'product-description')
  $image.setAttribute('src', products.image)
  $product.setAttribute('class', 'product')
  $product.setAttribute('id', productId)
  $product.appendChild($image)
  $product.appendChild($productDescription)
  $productDescription.textContent = products.title
  return $product
}

function renderPhotos(products) {
  for (var i = 0; i < products.length; i++) {
    var $product = createEachProduct(products[i], i)
    products.textContent = products[i].id.value
    $artworkSection.appendChild($product)
  }
}

var $artDetailPage = document.querySelector('.artwork-detail-page')

function renderArtwork(artwork) {
  // create span containing image
  var $printContainer = document.createElement('span')
  var $print = document.createElement('img')
  $printContainer.setAttribute('class', 'product-detail hidden')
  $print.setAttribute('src', artwork.image)
  $printContainer.appendChild($print)

  // create text description of the image
  var $productDetailsContainer = document.createElement('span')
  $productDetailsContainer.setAttribute('class', 'product-details-container hidden')
  var $titleContainer = document.createElement('span')
  var $title = document.createElement('h2')
  $titleContainer.setAttribute('class', 'product-title-detail')
  $title.textContent = artwork.title
  $titleContainer.appendChild($title)
  $productDetailsContainer.appendChild($titleContainer)
  $productDetailsContainer.appendChild(createArtDetail('product-summary-detail', artwork.description))
  $productDetailsContainer.appendChild(createArtDetail('product-size-detail', artwork.size.small))
  $productDetailsContainer.appendChild(createArtDetail('product-size-detail', artwork.size.medium))
  $productDetailsContainer.appendChild(createArtDetail('product-size-detail', artwork.size.large))
  $productDetailsContainer.appendChild(createArtDetail('product-price-detail', artwork.price))

  // append both the image and the description to the detail page
  $artDetailPage.appendChild($printContainer)
  $artDetailPage.appendChild($productDetailsContainer)

}

function renderDetails(products) {
  for (var i = 0; i < products.length; i++) {
    renderArtwork(products[i])
  }
}

function createArtDetail(className, detail) {
  var artDetail = document.createElement('span')
  artDetail.setAttribute('class', className)
  artDetail.textContent = detail
  return artDetail
}
