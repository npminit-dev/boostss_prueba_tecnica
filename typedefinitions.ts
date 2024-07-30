interface Review {
  rating: 1|2|3|4|5;
  comment: string;
}

interface Product {
  id: number;            
  name: string;         
  description: string;        
  price: number;              
  category: string;           
  imageUrl: string;           
  availability: boolean;   
  preparationTime: number;    
  rating: number;      
  reviews: Review[];              
}