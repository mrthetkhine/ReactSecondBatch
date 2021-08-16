class PrivateData
{
    private int data;

    public void method()
    {
        System.out.println("Method called");
    }
}
public class Demo{
    public static void main(String args[])
    {
        PrivateData obj = new PrivateData();
        //obj.data = 122;
        obj.method();
    }
}