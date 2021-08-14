import java.util.*;
class Multiple
{
    public static void method(HashMap<String,Object> params)
    {
        System.out.println("Parm color "+params.get("color"));
        System.out.println("Parm background "+params.get("background"));
    }
    public static void main(String[]args)
    {
        HashMap<String,Object> map = new HashMap<String,Object>();
        map.put("color","red");
        map.put("background",1);
        method(map);
    }
}