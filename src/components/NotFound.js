import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 3000)
    }, []);

    return <p>404! Nothing at this URL! <br /> Redirecting you to Home in a few seconds...</p>
}

export default NotFound;