export class orderuser
{
  constructor(
    public order_id:number,
    public qty:number,
    public price:number,
    public status:string,
    public date:Date,
    public fk_email_id:string,
    public fk_item_id:number,
    public email_id:string,
    public password?:string,
    public name?:string,
    public address?:string,
    public mobile_no?:string,
    public state?:string,
    public gender?:string,
    public country?:string,
    public type?:string
  ){}
}
