package collect;


public class collections extends Abstractcollect  {
       private final int length_i=16;
      private int size;
      private Object a[]=new Object[length_i];
      public int size() {return size;}
      
      public boolean add(Object obj) {
    	  if(size==a.length)
    		  return false;
    	 
    	  a[size++]=obj;
    	
    	  return true;
      }
      public Iterat iterat() {
  		return new Iterat() {
  		private int i=0;
  		private boolean okToRemove=false;
  		public boolean hasnext() {
  			return (i<size);
  		}
  		public Object next() {
  			if(i==size)
  				throw new RuntimeException();
  			okToRemove=true;
  			return a[i++];
  		}
  		public void remove() {
  			if(!okToRemove)
  				throw new IllegalStateException();
  			a[--i]=a[--size];
  			a[size]=null;
  			okToRemove=false;
  		}
  		
  		};
  		
  	}
public static void main(String arg[]) {
	collections bag=new collections();
	System.out.println("Size is "+bag.size());
	bag.add(2);
	bag.add(4);
	bag.add(6);
	bag.add("Amaar");
	bag.add("kashif");
	bag.add("Ali");
	System.out.println("Size is "+bag.size());
	System.out.println(bag);
//	bag.remove("Amaar");
	Iterat it=bag.iterat();
	
	it.remove();
//	System.out.println(bag.contains("Kashif"));
	
	
	
	
}



}
