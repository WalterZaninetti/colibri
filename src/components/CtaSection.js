export default function CtaSection(){
    return(
    <div className="bg-snow">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-2xl font-extrabold tracking-tight text-black sm:text-4xl">
                <span className="block">Pronto per una fantastica vacanza?</span>
                <span className="-mb-1 pb-1 block text-red-site bg-clip-text text-transparent">
                Contattaci per scoprire le nostre disponibilita
              </span>
            </h2>
            <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
                <a
                    href="#"
                    className="flex items-center justify-center bg-red-site px-4 py-3 text-base font-medium rounded-md shadow-sm"
                >
                    Scopri di
                </a>
                <a
                    href="#"
                    className="flex items-center justify-center px-4 py-3 text-black bg-snow text-base font-medium rounded-md shadow-sm"
                >
                    Get started
                </a>
            </div>
        </div>
    </div>
    );
}