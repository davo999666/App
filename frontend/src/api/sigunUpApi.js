// import {API_URL} from "../config.js";
//
// export async function registerUser(userData) {
//     const response = await fetch(`${API_URL}/register`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(userData),
//     });
//
//     if (!response.ok) {
//         throw new Error("Registration failed. Please try again.");
//     }
//
//     return response.json();
// }