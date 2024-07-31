export type Review = {
  rating: 1|2|3|4|5
  comment: string
}

export type Product = {
  id: number           
  name: string        
  description: string      
  price: number            
  category: string         
  imageUrl: string         
  availability: boolean; 
  preparationTime: number   
  rating: number    
  reviews: Review[]            
}

export type NavLinkProps = {
  text: string
  url: string
  onClick?: () => void
}