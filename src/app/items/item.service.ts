import { Item } from './item.model';
import { User } from '../users/user.model';

export class ItemService {

 items:Item[]=
 [
    new Item
    (
        'Bedroom set',
        'A used bedroom set composed of several items, which can be sold together or separately',
        ["https://www.furniturerow.com/fr/images/products/B4-EBABSK.JPG",
        "https://secure.img1-fg.wfcdn.com/im/57880242/resize-h600-w600%5Ecompr-r85/5627/56279455/Xan+Standard+4+Piece+Bedroom+Set.jpg"],
        300000,
        {Username : "Miraj",Email:"test@gmail.com"},
        "Kandy",
        "Furniture"
    ),
    new Item
    (
        'Sisil Fridge','Two Door SISIL MX345 Fridge that was used for 3 years. Good condition. CFC Free',
        ["https://www.lg.com/au/images/fridges/md05271020/gallery/GF-B620PL_01_Large.jpg",
        "https://i.pinimg.com/originals/9d/7e/ef/9d7eefaef5bd215e57e5b4b524ed7f92.jpg"],
        65000,
        {Username : "Miraj",Email:"test@gmail.com"},
        "Kandy",
        "Electronics"
    ),
    new Item
    (
        'Orbitrek Exercise Machine ','Used Orbitreek ellyptical exercise machine. Good condition',
        ["https://images-na.ssl-images-amazon.com/images/I/61szus4yh8L._SX425_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/I/41ZeVE1Q0GL.jpg"],
        20000,
        {Username : "Miraj",Email:"test@gmail.com"},
        "Kandy",
        "Exercise Accessories"
    ),
    new Item
    (
        'Audi S5','Brand New Audi S5. Zero mileage and zero emission. Fully automatic',
        ["https://upload.wikimedia.org/wikipedia/commons/7/7d/2018_Audi_S5_TFSi_Quattro_Automatic_3.0_Front.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/b/bd/2018_Audi_S5_TFSi_Quattro_Automatic_3.0_Rear.jpg"],
        5500000,
        {Username : "Miraj",Email:"test@gmail.com"},
        "Kurunegala",
        "Vehicle"
    ),
    new Item
    (
        'Wooden Chess Board','Used wooden chess board in good condition. All pieces available',
        ["https://images-na.ssl-images-amazon.com/images/I/716TagzoyNL._SX466_.jpg",
        "https://cdn.shopify.com/s/files/1/1297/3303/products/21-ambassador-wooden-chess-set-21507060673_grande.jpg?v=1548113589"],
        3000,
        {Username : "Miraj",Email:"test@gmail.com"},
        "Colombo",
        "Games"
    ),
 ];

 GetItems()
 {
     return this.items.slice();
 }

 GetItemById(id: number)
 {
     return this.items[id];
 }
}