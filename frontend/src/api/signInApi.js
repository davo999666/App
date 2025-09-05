// import {API_URL} from "../config.js";
//
// export async function login(emailOrUsername, password) {
//     const response = await fetch(`${API_URL}/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//             login: emailOrUsername, // use the key your backend expects
//             password: password }),
//     });
//     if (!response.ok) {
//         throw new Error("Login failed. Please check your credentials.");
//     }
//     return response.json();
// }
