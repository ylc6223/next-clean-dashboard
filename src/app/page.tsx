import Image from 'next/image'
import CInput from "@/app/components/c-input"
export default function Home() {
    return (
        <div className="flex items-center justify-center w-screen min-h-screen bg-[#F4F9FD]">
            <div className="relative flex m-auto min-w-[1360px] h-[944px] rounded-[24px] bg-[#FFFFFF] border-black border border-solid overflow-auto">
                <div className="flex flex-col min-w-[720px] h-full bg-[#3F8CFF]">
                    <span className="text-[40px] font-bold text-white mt-32 ml-16">Hi！你好！</span>
                    <span className="text-[40px] font-bold text-white mt-2 ml-16">欢迎进入数据管理平台</span>
                    <Image className="max-w-[500px] max-h-[373px] mt-16 mx-16" src="/Index/login.png" alt="welcome to data monitor platform"/>
                </div>
                <div className="relative flex-1 flex flex-col items-center h-full">
                    <span className="mt-32 text-[#0A1629] font-bold text-2xl text-center">欢迎回来</span>
                    <div className="mt-10">
                        <span className="text-[#7D8592] text-sm mb-4 block self-start">Email</span>
                        <CInput width={404}  id="email" type="text" placeholder="Enter your Email" defaultValue=""></CInput>
                    </div>
                    <div className="my-4">
                        <span className="text-[#7D8592] text-sm mb-4 block self-start">密码</span>
                        <CInput width={404} id="pwd" type="password" placeholder="Enter your password" defaultValue=""></CInput>
                    </div>
                    {/*<div className="w-[403px] h-[50px]">*/}
                    {/*    <label htmlFor="email"></label>*/}
                    {/*    <input  className="box-border outline-0 w-full h-full px-[18px] py-5 bg-white rounded-[14px] border border-[#D8E0F0] border-solid focus:border-[#3F8CFF] focus:shadow-[0_0_3px_0_#3F8CFF]" id="email" type="text" placeholder="jinjinuidesign@hotma"/>*/}
                    {/*</div>*/}
                    {/*<div className="w-[403px] h-[50px]">*/}
                    {/*    <label htmlFor="pwd"></label>*/}
                    {/*    <input className="box-border outline-0 w-full h-full px-[18px] py-5 bg-white rounded-[14px]  border border-[#D8E0F0] border-solid focus:border-[#3F8CFF] focus:shadow-[0_0_3px_0_#3F8CFF]" id="pwd" type="password" value="123456"/>*/}
                    {/*</div>*/}
                    <button className="justify-self-end bg-[#3F8CFF] text-white w-[404px] h-[56px] rounded-[14px]">立即登录</button>
                </div>
            </div>
        </div>
    )
}
