import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">TitanNet</h3>
                    <span className="loginDesc">Connecting intelligent minds across the Globe </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" type="Email" className="loginInput" />
                        <input placeholder="Enter Password" type="Password" className="loginInput" />
                        <button className="loginButton">Login</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
