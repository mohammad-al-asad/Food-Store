import { useParams } from 'react-router'
import { GoHome } from "react-icons/go";


function productPage() {
  const product = {
  "id": "251594",
  "name": "Chinese Cabbage",
  "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.",
  "price": {
  "original_price": "$48.00",
  "discounted_price": "$17.28",
  "discount_percentage": 64
  },
  "availability": "In Stock",
  "sku": "251594",
  "brand": "Farmary",
  "category": "Vegetables",
  "tags": ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  "additional_information": {
  "weight": "100g",
  "organic": true,
  "nutrition": "100 g of fresh leaves provides 20% of daily Vitamin C."
  },
  "images": [
  "./products/cabbage.jpg",
  "https://example.com/images/product-image-2.jpg"
  ]
  }
    const param = useParams()
  return (
    <div>
      <p className='flex justify-center items-center'><GoHome/> {` > catagory > ${product.category} > ${product.name}`}</p>
    </div>
  )
}

export default productPage