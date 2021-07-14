import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">HardCo.Social</h3>
                    <span className="loginDesc">
                        和朋友以及周圍的世界在HardCo.Social上建立連結吧.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="電子郵件" className="loginInput" />
                        <input placeholder="密碼" className="loginInput" />
                        <button className="loginButton">登入</button>
                        <span className="loginForgot">忘記密碼？</span>
                        <button className="loginRegisterButton">
                            創建帳號
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
