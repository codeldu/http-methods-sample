let url = 'http://localhost:3000/api/'

// let obj1 = {
//     first_name: "Xedice",
//     last_name: "Mirzoeva",
// };




// // GET METHOD

// // with fetch

// function getAllwithFetch() {
//     fetch(url)
//         .then(res => res.json())
//         .then(data => console.log(data))
// }

// function getByIdFetch(id) {
//     fetch(url + id)
//         .then(res => res.json())
//         .then(data => console.log(data))
// }

// //with axios
// function getAllwithAxios() {
//     axios.get(url)
//         .then(res => console.log(res.data))
// }

// function getByIdAxios(id) {
//     axios.get(url + id)
//         .then(res => console.log(res.data))
// }

// // POST 

// //with fetch

// function postWithFetch(obj) {
//     fetch(url, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(obj)
//     }).then(res=>res.json()).then(data => console.log(data))
// }

// //with axios 

// function postWithAxios(obj){
//     axios.post(url, obj).then(res=> console.log(res.data))
// }


// //PUT Method
// //with fetch
// function putWithFetch(id, obj){
//     fetch(url+id, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(obj)
//     }).then(res=>res.json()).then(data => console.log(data))
// }

// //with axios
// function putwithaxios(id, obj){
//     axios.put(url+id, obj)
//     .then(res => console.log(res.data))
// }



// //PATCH METHOD

// //with fetch

// function patchWithFetch(id, obj){
//     fetch(url+id, {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(obj)
//     }).then(res=>res.json()).then(data => console.log(data))
// }

// //with axios
// function patchwithaxios(id, obj){
//     axios.patch(url+id, obj)
//     .then(res => console.log(res.data))
// }

// //DELETE METHOD

// function deletewithAxios(id){
//     axios.delete(url+id)
//     .then(res=> console.log( res.data))
// }


// function deletewithFetch(id){
//     fetch(url+id, {
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json"
//         },
        
//     }).then(res=>res.json()).then(data => console.log(data))
// }


// function getOldMethod(){
    
//     let request = new XMLHttpRequest;

//     request.open('GET', url);

//     request.send();

//     request.onload= function(){console.log(JSON.parse(request.responseText)

//         )}

// }


// getOldMethod()





// patchwithaxios(3 , obj1)
// putwithaxios(5 , obj1)
// getByIdFetch(5)
// getByIdAxios(5)
// getAllwithFetch()
// getAllwithAxios();
// postWithFetch(obj1);
//  postWithAxios(obj1);
// putWithFetch(5, obj1);
// patchWithFetch(4,obj1)
// deletewithAxios(4);
// deletewithFetch(6)