import heart from "../assets/heart.svg"
export default function Footer() {
    return (
        <footer className="bg-snow">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 md:flex md:items-center md:justify-center lg:px-8">
                <div className=" md:mt-0 md:order-1 flex justify-center items-center">
                    <p className="text-center text-lg inline-flex text-black font-bold">Made by  <span className="text-green-700 text-lg px-2"> { " " }Walter Zaninetti </span> with <img src={heart} className="w-6 h-6" alt="cuore"/></p>
                </div>
            </div>
        </footer>
    )
}
