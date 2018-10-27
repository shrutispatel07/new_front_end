export class order
{
  constructor(
    public order_id:number,
    public qty:number,
    public price:number,
    public status:string,
    public date:string,
    public fk_email_id:string,
    public fk_item_id:number
  ){}
}
