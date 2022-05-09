import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import montagna from "../assets/foto3.jpg"
export default function Contatti() {
    return (
        <div className="bg-snow" id="contatti">
            <div className="relative bg-red-site">
                <div className="absolute inset-0">
                    <img
                        className="w-full h-full object-cover"
                        src={montagna}
                        alt=""
                    />
                    <div className="absolute inset-0 bg-red-500 mix-blend-multiply" aria-hidden="true" />
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-center">Contatti</h1>
                    <p className="mt-6 text-xl text-snow text-center">
                        Scrivi una mail all'indirizzo qui sotto oppure chiama al numero di telefono sotto indicato per scoprire disponibilita' e costi per la tua vacanza in montagna!
                    </p>
                    <div className="mt-9">
                        <div className="flex items-center justify-center">
                            <div className="flex-shrink-0">
                                <PhoneIcon className="h-10 w-10 text-snow" aria-hidden="true" />
                            </div>
                            <div className="ml-3 text-xl text-snow">
                                <p>+39 3494997450</p>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center justify-center">
                            <div className="flex-shrink-0">
                                <MailIcon className="h-10 w-10 text-snow" aria-hidden="true" />
                            </div>
                            <div className="ml-3 text-xl text-snow">
                                <p>zaninettiwalter@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
