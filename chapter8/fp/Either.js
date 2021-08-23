const Nothing = function(value)
{
    this.value = value;
}
Nothing.of = function(value)
{
    return new Nothing(value);
}
Nothing.prototype.map = function(fn)
{
    return this;
}
const Some = function(value)
{
    this.value = value;
}
Some.of = function(value)
{
    return new Some(value);
}
Some.prototype.map = function(fn)
{
    return Some.of(fn(this.value));
}
const Either = {
    Some: Some,
    Nothing : Nothing
};
let getReddit = (type)=>{
    let response;
    try
    {
        let url = 'https://www.reddit.com/r/subreddits/'+type+'.json?limit=2';
        response = Some.of(JSON.parse(request('GET',url).getBody('utf-8')));
    }
    catch(err)
    {
        console.log(err);
        response = Nothing.of({ message: "Something went wrong" , errorCode:
                err['statusCode'] });
    }
    return response;
}
console.log(getReddit('new'));