export default function Register() {
    return (
        <div className="grid h-screen place-items-center">
            <div className="p-4 w-full max-w-lg bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" action="#">
                    <div className= "text-2xl text-gray-900 text-center dark:text-white font-semibold">
                        <h2 ><span className="text-blue-300">Register </span>Page</h2>
                    </div>
                    <h5 className="text-xl font-medium text-gray-900 text-center dark:text-white">Create Your Account</h5>
                    <div className="lg:flex lg:space-y-0 space-y-6 justify-between">
                        <div>
                            <label placeholder="First Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First Name</label>
                            <input type="First Name" name="First Name" id="First Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:w-50 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="First Name"/>
                        </div>
                        <div>
                            <label placeholder="Last Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last Name</label>
                            <input type="Last Name" name="Last Name" id="Last Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:w-60 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Last Name"/>
                        </div>
                    </div>
                    <div>
                        <label placeholder="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Email"/>
                    </div>
                    <div>
                        <label placeholder="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
                    </div>
                    <div className="pb-6">
                        <label placeholder="Confirmpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm Password</label>
                        <input type="Confirmpassword" name="Confirmpassword" id="Confirmpassword" placeholder="Confirm Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-800 dark:focus:ring-blue-500">Register</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        do you have an account? <a href="/" className="text-blue-700 hover:underline dark:text-blue-500">Sign In</a>
                    </div>
                </form>
            </div>
        </div>
      )
}