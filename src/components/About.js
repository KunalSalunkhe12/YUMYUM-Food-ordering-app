import { Outlet, Link } from "react-router-dom"
import Logo from "../../assets/yumyum-background.png"


const About = () => {
    return (
        <>
            <div className="flex flex-col gap-2 items-center my-24 p-3">
                <img src={Logo} alt="Yumyum logo" className="w-20" />
                <h2 className="text-xl font-bold">WelCome to YumYum!</h2>
                <p className="md:w-1/2 my-6 text-center">
                    At YumYum, we believe that good food brings people together. We are an innovative online food ordering platform designed to satisfy your cravings and deliver delicious meals right to your doorstep. Whether you're in the mood for a piping hot pizza, a scrumptious burger, a hearty bowl of pasta, or some exotic sushi, YumYum has got you covered.
                </p>
                <p className="md:w-1/2 my-6 text-center">
                    Our mission is to make food ordering convenient, effortless, and enjoyable. With just a few clicks or taps, you can explore a wide variety of cuisines, discover new flavors, and have your favorite dishes delivered straight to you. Say goodbye to long waits and limited choices. YumYum brings a world of culinary delights to your fingertips.
                </p>
                <div>
                    <span>Made by: </span>
                    <Link className="font-medium text-blue-500" to="/about/my-profile">Kunal Salunkhe</Link>
                </div>
            </div>
            <Outlet />

        </>

    )
}

export default About