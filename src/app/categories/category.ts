export class Category
{
	id: number;
	name = '';
	
	consturctor(values: Object = {})
	{
		Object.assign(this, values);
	}
}
