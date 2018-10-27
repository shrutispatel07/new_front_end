export class itemcat
{
  constructor(
    public item_id:number,
    public item_name:string,
    public fk_category_id:number,
    public price:number,
    public qty:number,
    public description:string,
    public item_img:string,
    public size:string,
    public colours:string,
    public category_id:number,
    public category_name:string
  ){}
}
