import Pedigree from "../assets/imagenes/pedigree.png";
import Proplan from "../assets/imagenes/proplan.png";
import RoyalCanin from "../assets/imagenes/royalcanin.png";
import Whiskas from "../assets/imagenes/whiskas.png";

export default [
  {
    id: 1, 
    name: "PEDIGREE", 
    price: 1500, 
    description: "Alimento con minerales de alta nutrición", 
    category: "perros",
    stock: 5, 
    image: Pedigree,
  },
  {
    id: 2, 
    name: "PROPLAN", 
    price: 2100, 
    description: "Alimento para necesidades nutrimentales", 
    category: "gatos",
    stock: 5, 
    image: Proplan,
  },
  {
    id: 3, 
    name: "ROYAL CANIN", 
    price: 1950, 
    description: "Alimentos con componentes naturales", 
    category: "perros",
    stock: 5, 
    image: RoyalCanin,
  },
  {
    id: 4, 
    name: "WHISKAS", 
    price: 1600, 
    description: "Alimento para el tracto urinario sano", 
    category: "gatos",
    stock: 5, 
    image: Whiskas,
  },
];


