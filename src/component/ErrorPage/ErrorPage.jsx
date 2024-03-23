import { Link } from "react-router-dom";




const ErrorPage = () => {

    return (
        <div>
            <h1>Thes is not fount 404</h1>
            <Link to="/">Go back to home</Link>
        </div>
    );
};

export default ErrorPage;