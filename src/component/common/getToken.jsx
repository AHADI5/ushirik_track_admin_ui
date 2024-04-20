
import { jwtDecode } from "jwt-decode";
export default function getToken() {
    const token = localStorage.getItem("token");
    var decodedToken = "" 

    if (token) {
        decodedToken = jwtDecode(token);
        console.log(decodedToken);
        // Use the decoded token here
    } else {
        // Handle case when token is not present in localStorage
        console.error("Token is missing in localStorage");
    }

return decodedToken;
    
}