import Logo from "../../assets/yumyum-background.svg"


const About = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-32 mx-auto my-10">
                <img src={Logo} alt="YumYum Logo" />
            </div>
            <h2 className="text-xl font-bold">WelCome to YumYum!</h2>
            <p className="w-1/2 my-6 text-center font-semibold">
                At YumYum, we believe that good food brings people together. We are an innovative online food ordering platform designed to satisfy your cravings and deliver delicious meals right to your doorstep. Whether you're in the mood for a piping hot pizza, a scrumptious burger, a hearty bowl of pasta, or some exotic sushi, YumYum has got you covered.
            </p>
            <p className="w-1/2 my-6 text-center font-semibold">
                Our mission is to make food ordering convenient, effortless, and enjoyable. With just a few clicks or taps, you can explore a wide variety of cuisines, discover new flavors, and have your favorite dishes delivered straight to you. Say goodbye to long waits and limited choices. YumYum brings a world of culinary delights to your fingertips.
            </p>
        </div>
    )
}

export default About