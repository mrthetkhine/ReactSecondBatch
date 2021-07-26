/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pldemo.type;

import java.util.ArrayList;
import java.util.Optional;

/**
 *
 * @author thetkhine
 */
//Super Type
class Human{
    public void work(){
    }
}
//SubType
class Doctor extends Human{
     public void work()
     {
         System.out.println("Doctor treat patient");
     }
}
//Subtype
class Engineer extends Human{
    public void work()
     {
         System.out.println("Engineer build thing");
     }
}
interface Flyable 
{
    abstract void fly();
}
class Aeroplane implements Flyable
{
    public void fly()
    {
        System.out.println("Aeroplane fly");
    }
}
class Bird implements Flyable
{
    public void fly()
    {
        System.out.println("Birdy fly");
    }
}
public class Polymorphism {

    public static void main(String[] args) {
        Human h = new Doctor();
        h.work();
        
        h = new Engineer();
        h.work();
        
        Flyable f = new Bird();
        f.fly();
        
        f = new Aeroplane();
        f.fly();
    }
}
