// import { API_URL } from "../config.js";
//
//
// export const sendVerifyCode = async (email, code) => {
//     try {
//         const res = await fetch(`${API_URL}/verifyCode`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ email, code }),
//         });
//         return await res.json();
//     } catch (err) {
//         return { success: false, error: err.message };
//     }
// };
//
