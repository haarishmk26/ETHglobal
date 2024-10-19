export default function LoginPage(){
    return(
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-32"> 
                <h1 className="text-4xl text text-center mb-4">Login</h1>
                <form className="max-w-md mx-auto">
                    <input type="email" placeholder={"your@email.com"}/>
                    <input type="password" placeholder={"password"}/>
                    <button className="primary">Login</button>
                </form>
            </div>
        </div> 
    );
}
//I left the login page here Last changed the mb-32.

