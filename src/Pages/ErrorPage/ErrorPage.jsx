import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center pt-40">
            <h2 className="text-5xl mb-10 font-bold ">Oops!!!</h2>
            <Link to="/" className="btn text-xl font-semibold">Go Back to Home</Link>
        </div>
    );
};

export default ErrorPage;