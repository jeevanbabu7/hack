export interface Product {
    id: string
    created_at: string
    image_url: string
    description: string
    name: string
    price: number
  }
  
  export interface CartItem extends Product {
    quantity: number
  }
  
  export interface BillingDetails {
    fullName: string
    email: string
    address: string
    city: string
    state: string
    zipCode: string
    cardNumber: string
    expiryDate: string
    cvv: string
  }