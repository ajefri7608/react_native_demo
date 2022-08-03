import axiosInstance from "./axiosInstance";

// async function login(userName: String, password: String) {
//     try {
//         const response = await axiosInstance.post('users/login', {
//             "userName": "root1",
//             "email": "ajefri76108@gmail.com",
//             "password": "root",
//             "name": "jefri",
//             "userRole": "admin",
//         });

//         console.log(response.data.data);
//     } catch (error) {
//         console.log("adq")
//     }
// }


export function login(userName: String, password: String) {
    return axiosInstance.post('users/login', {
        "userName": "root1",
        "email": "ajefri76108@gmail.com",
        "password": "root",
        "name": "jefri",
        "userRole": "admin",
    }).then(function (response: any) {
        return response
    })
        .catch(function (error: any) {
            return error
        })

}