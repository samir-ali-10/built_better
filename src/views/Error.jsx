import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div>
            <h1>This is invalid page</h1>
            <Link to="/">Home page</Link>
        </div>
    )
}
