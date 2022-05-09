import castello from "../assets/foto3.jpg"
import pista from "../assets/foto2.jpg"

export default function Informazioni() {

  const info_alloggi = [
    {
      info : "Posto auto nei 50mt comunale. Possibilita' di noleggio bici e sci nelle vicinanze. Meravigliosi castelli (ad esempio fenis)Courmayer cervinia cogne la tauille. Prezzi dell'alloggio x 3 persone varia periodo. da 450 a 1200 a settimana. persona in piu 20 euro al giorno. luce gas pulizia finale tutto compreso. 1 asciugamano doccia + viso e lenzuola 10 euro a persona (settimana)",
      descrizione : "Villa mafi si trova a nus nel centro della valle d'aosta posizione strategia per poter visitare la valle a 360 gradi. Dista a pochi km da aosta-st vincent e funivia pila. Nus osservatorio e altro. in paese si trovano negozi,ristoranti,mezzi pubblici tutto in 200mt. Pista ciclabile dove e possibile percorrere il 50% della valle centrale. nelle vicinanze piste da sci,piscine,maneggi,golf,escurisioni,rafting.",
      alloggi : "Alloggi bifamigliari composti da zona giorno attrezzata di cucina e zona notte 3 o 4 posti letto,giardino di appartenenza utilizzabile in vari modi",
    }
  ]

  const informazioni =
    {
      cultura : {
        titolo : "Scopri la cultura millenaria della valle",
        descrizione : ""
      },
      divertimento : {
        titolo : "Divertimento e benessere a portata di mano",
        descrizione : ""
      }
    }


  return (
    <div className="relative pt-8 pb-8 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-1">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-black">
                  {informazioni.cultura.titolo}
                </h2>
                <p className="mt-4 text-lg text-black">
                  Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis
                  bibendum malesuada faucibus lacinia porttitor. Pulvinar
                  laoreet sagittis viverra duis. In venenatis sem arcu pretium
                  pharetra at. Lectus viverra dui tellus ornare pharetra.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className=" sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={castello}
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-black">
                  {informazioni.divertimento.titolo}
                </h2>
                <p className="mt-4 text-lg text-black">
                  Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis
                  bibendum malesuada faucibus lacinia porttitor. Pulvinar
                  laoreet sagittis viverra duis. In venenatis sem arcu pretium
                  pharetra at. Lectus viverra dui tellus ornare pharetra.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="  sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={pista}
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
