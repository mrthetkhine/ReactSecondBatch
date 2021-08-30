function Module()
{
    function internalAPI()
    {
        console.log("Internal API method 1");
    }
    function method1()
    {
        internalAPI();
        console.log("Module method 1");
    }
    return {
        api : method1
    }
}