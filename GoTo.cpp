#include <iostream>

using namespace std;


int main()
{
    int a = 1;
   
    loop:
    cout<<"A is "<< a<<endl;
    a ++;
    if( a < 10)
        goto loop;
        
}
