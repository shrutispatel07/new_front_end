export class subcat
{
  constructor(
    public subcat_id:number,
    public subcat_name:string,
    public fk_cat_id:number,
    public category_id?:number,
    public category_name?:string
  ){}
}
