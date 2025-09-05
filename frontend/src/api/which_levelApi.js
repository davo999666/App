// import {addSentences} from "../gamefighter/features/word/sentencesSlice.js";
// import {API_URL} from "../config.js";
//
//
// export const FetchSentences = async (dispatch, currentUser) => {
//     try {
//         const token = currentUser.token || localStorage.getItem("token");
//         if (!token) {
//             console.error("No token found");
//             return;
//         }
//         const { level, know, learn } = currentUser;
//         if (!level || !know || !learn) {
//             return;
//         }
//         const url = `${API_URL}/games/sentence?level=${level}&know=${know}&learn=${learn}`;
//         const response = await fetch(url, {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": `Bearer ${token}`
//             }
//         });
//
//         if (!response.ok) {
//             const text = await response.text();
//             console.error("Server error:", text);
//             return;
//         }
//         const data = await response.json();
//         dispatch(addSentences(data));
//
//     } catch (error) {
//         console.error("FetchSentences error:", error);
//     }
// };
//
