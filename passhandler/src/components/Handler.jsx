import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const Handler = () => {
    const [form, setForm] = useState({ URL: "", Username: "", password: "" });
    const [passwordArray, setPasswordArray] = useState([]);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords));
        }
    }, []);

    const copyText = (text) => {
        toast('Copied to clipboard!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        navigator.clipboard.writeText(text)
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const savePassword = () => {
        setPasswordArray(prevPasswords => [...prevPasswords, { ...form, id: uuidv4() }]); // Use callback form of setState
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]));
        console.log([...passwordArray, form])
        toast('Password saved', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    };
    const DeletePassword = (id) => {
        let c = confirm("Do you want to delete password")
        if (c) {

            setPasswordArray(passwordArray.filter(item => item.id !== id)); // Use callback form of setState

            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)));
            toast('Password Deleted', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }


    };
    const EditPassword = (id) => {
       
        setForm(passwordArray.filter(i => i.id === id)[0])
        setPasswordArray(passwordArray.filter(item => item.id !== id)); // Use callback form of setState
        // localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id:uuidv4()}]));
        console.log("edit pass with id", id)


    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />
            <div className="absolute top-0 -z-10 h-full w-full ">
                <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#ad6df480] opacity-50 blur-[80px]"></div>
            </div>
            <div className=" p-2 md-p-0 md:mycontainer">
                <h1 className='text-4xl font-bold text-center'>
                    <span className='text-green-800'>**</span>Pass
                    <span className='text-violet-500'>Handler</span>
                    <span className='text-green-800'>**</span>
                </h1>
                <p className='text-violet-800 text-lg font-bold text-center'>Make it Easy to Handle Pass...</p>
                <div className=" flex flex-col p-4 text-black gap-8">
                    <input value={form.URL} onChange={handleChange} placeholder='Enter Website URL' type="text" className='rounded-full border border-violet-500 w-full p-3 py-1' name="URL" id="URL" />
                    <div className="flex flex-col md:flex-row w-full justify-between gap-10">
                        <input value={form.Username} onChange={handleChange} placeholder='Enter Username' type="text" className='rounded-full border border-violet-500 w-full p-3 py-1' name="Username" id="username" />
                        <div className="relative">
                            <input value={form.password} onChange={handleChange} placeholder='Enter Password' type={showPassword ? 'text' : 'password'} className='rounded-full border border-violet-500 w-full p-3 py-1' name="password" />
                            <span className='absolute right-[3px] top-[4px] cursor-pointer' onClick={togglePasswordVisibility}>
                                <img className='p-1' width={26} src={showPassword ? "/icons/eye.png" : "/icons/eyecross.png"} alt="view" />
                            </span>
                        </div>
                    </div>
                    <button onClick={savePassword} className='flex justify-center items-center bg-violet-300 rounded-full px-4 py-1 m-auto border-3 hover:text-white gap-3 font-bold hover:bg-violet-500 hover:border-violet-950'>
                        <lord-icon src="https://cdn.lordicon.com/jgnvfzqg.json" trigger="hover"></lord-icon>
                        Save Password
                    </button>
                </div>
                <div className="password">
                    <h1 className='font-bold text-2xl text-green-800 py-4'>Your Passkeys</h1>
                    {passwordArray.length === 0 && <div className=' text-xl font-bold'>No Passwords to show </div>}
                    {passwordArray.length !== 0 &&
                        <table className="table-auto w-full rounded-xl overflow-hidden ">
                            <thead className=' bg-violet-700 text-white'>
                                <tr className='border border-bottom-white' >
                                    <th className='p-2'>Username</th>
                                    <th className='p-2'>URL</th>
                                    <th className='p-2'>Password</th>
                                    <th className='p-2'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='bg-violet-200'>
                                {passwordArray.map((item, index) => {
                                    return (<tr className='' key={index} >
                                        <td className='border text-center justify-center py-2 p-3'>
                                            <div className='flex items-center justify-between'>
                                                <span>{item.Username}</span><i onClick={() => { copyText(item.Username) }} className="fas fa-copy cursor-pointer "></i>
                                            </div>
                                        </td>
                                        <td className=' border text-center  py-2 p-3'>
                                            <div className='flex items-center justify-between gap-2 '>
                                                <a href={item.URL} target='_blank'><span>{item.URL}</span></a><i onClick={() => { copyText(item.URL) }} className="fas fa-copy cursor-pointer "></i>
                                            </div>
                                        </td>
                                        <td className=' border text-center py-2  p-3'>
                                            <div className='flex justify-between items-center gap-2 '>
                                                <span>{item.password}</span><i onClick={() => { copyText(item.password) }} className="fas fa-copy cursor-pointer "></i>
                                            </div>
                                        </td>
                                        <td className=' border text-center py-2  p-3'>
                                            <div className='flex justify-center items-center gap-2'>

                                                <span>
                                                    <i onClick={() => { EditPassword(item.id) }} className="fas fa-edit cursor-pointer "></i>

                                                </span>
                                                <span onClick={() => { DeletePassword(item.id) }} ><lord-icon
                                                    src="https://cdn.lordicon.com/skkahier.json"
                                                    trigger="hover"
                                                    style={{ "width": "25px", "hight": "25px" }}
                                                >
                                                </lord-icon></span>

                                            </div>
                                        </td>
                                    </tr>)
                                })}
                            </tbody>
                        </table>}
                </div>
            </div>
        </>
    );
};

export default Handler;
