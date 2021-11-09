import "./register.css"

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">TitanNet</h3>
                    <span className="loginDesc">Connecting intelligent minds across the Globe </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Username" type="Email" className="loginInput" />
                        <input placeholder="Email" type="Email" className="loginInput" />
                        <input placeholder="Password" type="Email" className="loginInput" />
                        <input placeholder="Password Confirmation" type="Password" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">Login An Existing Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
