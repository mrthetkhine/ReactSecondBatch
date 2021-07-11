#include <iostream>

using namespace std;

class Human
{
    public:
     string name;
     int age;
};

int main()
{
    Human h;
    h.name = "TK";
    h.age = 20;

    Human h2;
    h2 = h;
    h.name = "Change";

    cout<< "H "<<h.name << " "<<h.age<< endl;
    cout<< "H2 "<<h2.name << " "<<h2.age<< endl;
}
