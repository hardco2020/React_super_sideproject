import "./register.css"

export default function Register() {
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
                        <input placeholder="用戶名稱" className="loginInput" />
                        <input placeholder="電子郵件" className="loginInput" />
                        <input placeholder="密碼" className="loginInput" />
                        <input placeholder="再一次輸入密碼" className="loginInput" />
                        <button className="loginButton">註冊</button>
                        <button className="loginRegisterButton">
                            去登入
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
