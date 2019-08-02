import { User } from '../users/user.model';

export class Item {
    public Title : string;
    public  Description : string;
    public Images : string[];
    public Price : Number;
    public User : User;
    public Location : string;
    public Category : string; 

    /**
     *
     */
    constructor(title:string,description:string,images:string[],price:number,user:User,location:string,category:string) {
        
        this.Title=title;
        this.Description=description;
        this.Images=images;
        this.Price=price;
        this.User=user;
        this.Location=location;
        this.Category=category;
    }

}