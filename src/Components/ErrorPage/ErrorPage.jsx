import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    const navigate = useNavigate()
    const handleGoHome = () => {
        navigate('/')
    }
    return (
        <div>
            <h1 className="text-4xl">Oops!</h1>
            <p>you are nove</p>
            <p>{error.status || error.statusText}</p>
            {
                error.status === 404 && 
                <div>
                    <h1>Your provided url is not valid</h1>
                    <p>Please go home</p>
                    <button onClick={handleGoHome} className="btn btn-error">Go home</button>
                </div>
            }
        </div>
    );
};

export default ErrorPage;