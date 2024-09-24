import { useNavigate, useParams } from "react-router-dom";
import { getCookie } from "../utils/saveCookie";
import { useEffect, useState } from "react";
import { validate } from "../api/validate";
import { ErrorPopup } from "../components/ErrorPopup";

export const UserPage = () => {
    const [error, setError] = useState<string | null>(null);

    const { email } = useParams<{ email: string }>();
    const token = getCookie("jwtToken");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            if (!email || !token) {
                setError("Invalid user");
                navigate("/");
                return;
            } else {
                const valid = await validate(email, token);
                if (!valid) {
                    setError("Invalid request");
                    navigate('/');
                }
            }
        };

        fetchData();
    }, [email, token, navigate]);

    return (
        <div>
            {error && <ErrorPopup message={error} onClose={() => setError(null)} />}

        </div>
    )
};