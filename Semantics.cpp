#include <iostream>

using namespace std;


int main()
{
    int a = 20;
    int *ptr = &a;
    cout<<"Ptr is "<< ptr<<endl;
    ptr++;
    cout<<"Ptr now is "<< ptr << endl;
}
