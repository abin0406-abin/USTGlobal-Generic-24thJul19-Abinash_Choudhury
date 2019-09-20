package com.dev.abstraction;

/*public interface Abs3 implements Abs,Abs2{              //Show error : Can't implement interface to  interface

}*/
/*public interface Abs3 extends E{                        //Show error : Can't extend class to interface

}*/

public interface Abs3 extends Abs,Abs2{					  // Can extend interface to interface. 

}
