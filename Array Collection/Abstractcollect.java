package collect;

public abstract class Abstractcollect implements collect {
 
   protected Abstractcollect(){}
   public abstract int size();
   public abstract Iterat iterat();
   public boolean add(Object obj) {
	   throw new UnsupportedOperationException();
   }
   
  public boolean Isempty() {return (size()==0);}
  
  public String toString() {
	  if(Isempty())return "Collection is empty";
	  Iterat its=iterat();
	  StringBuffer buffs= new StringBuffer("["+its.next());
	  while(its.hasnext())
		  buffs.append(","+its.next());
	  return (buffs+"]");
  }
  
  public void clear() {
	  for(Iterat its=iterat(); its.hasnext();) {
		  its.next();
		  its.remove();
	  }
  }
  
  public boolean remove(Object obj) {
	  Iterat it=iterat();
	  if(obj==null)
		  while(it.hasnext())
		  if(it.next()==null) {
	 		  it.remove();
			  return true;
		  }
		  else
			  while(it.hasnext())
				  if(obj.equals(it.next())) {
					it.remove();
					return true;
				  }
			  
		  return false;
  }
 
  
  public boolean contains(Object obj) {
	  Iterat it=iterat();
	  if(obj==null)
		  while(it.hasnext())
		  if(it.next()==null) {
//			  it.remove();
			  return true;
		  }
		  else
			  while(it.hasnext())
				  if(obj.equals(it.next())) {
//					it.remove();
					return true;
				  }
			  
		  return false;
  }
}
