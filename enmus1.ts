enum statuscode{
   NotFound = 404,
   Success = 200,
   Accepted = 202,
   Created = 201,
   Badrequest = 400
}


const response = {
    url : "www.abc.com",
    type : "get",
    data : "some string",
    status : statuscode.Accepted
}

console.log(response)

// o/p -:
// {
//     "url": "www.abc.com",
//     "type": "get",
//     "data": "some string",
//     "status": 202
//   } 