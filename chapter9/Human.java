public class Human{
    String name;
    int age;

    Human(String name,int age)
    {
        this.name = name;
        this.age  = age;
    }
    public void work()
    {
        System.out.println("Human work");
    }
    public static void main(String args[])
    {
        Human h = new Human("Tk",37);
        //System.out.println("Name "+h.name+ " Age "+h.age);

        h.work();
        
        h = new Doctor("Tint Swe",67,"General");
        h.work(); //Subtyping

        //Doctor d  = h;
    }
}
class Doctor extends Human{
    String speciality;

    Doctor(String name, int age , String speciality)
    {
        super(name,age);
        this.speciality = speciality;
    }
    public void work()
    {
        System.out.println("Doctor work");
    }
}