public class ThreadDemo extends Thread
{
    static int count=0;
    String name;
    ThreadDemo(String name)
    {
        this.name = name;
    }
    public void run()
    {
        for(int i=0;i<50000;i++)
        {
            count ++;
            System.out.println("Thread "+this.name+" i "+i);
        }
    }
    public static void main(String[]args)
    {
        ThreadDemo t1 = new ThreadDemo("One");
        ThreadDemo t2 = new ThreadDemo("Two");
        ThreadDemo t3 = new ThreadDemo("Three");

        try {
            t1.start();
            t2.start();
            t3.start();

            t1.join();
            t2.join();
            t3.join();
            System.out.println("Count "+ThreadDemo.count);    
        } catch (Exception e) {
        
        }
            
    }    
}