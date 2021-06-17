import React from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Oh! Something went wrong from our end</h1>
                    <Link to="/" onClick={() => this.setState({ hasError: false })}>
                        <div>Go To Home</div>
                    </Link>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
