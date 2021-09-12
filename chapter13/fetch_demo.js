const https = require("https");

function getText(url,callback)
{
    request = https.get(url);
    request.on("response",response=>{ //callback 1
        let httpStatusCode = response.statusCode;
        response.setEncoding("utf-8");
        let body = "";

        response.on("data",chunk=>{ //call back 2 second level
            console.log("Data arrived=>");
            body+= chunk;
        });
        response.on("end",()=>{ //call back 3 second level
            if( httpStatusCode == 200)
            {
                callback(null,body);
            }
            else
            {
                callback(httpStatusCode,null);
            }
        })
    });
}
function callBack(error,data)
{
    if(error)
    {
        console.log("got error")
    }
    else
    {
        console.log("Process data ",data);
    }
}
getText("https://www.google.com",callBack);