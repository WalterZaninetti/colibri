import {
  ChatAltIcon,
  DocumentReportIcon,
  HeartIcon,
  InboxIcon,
  PencilAltIcon,
  ReplyIcon,
  TrashIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Contatti from "../components/Contatti";
import casa from "../assets/foto3.jpg"
import Informazioni from "../components/Informazioni";
import {useState} from "react";
import {language_obj} from "../texts/language_obj";

const features = [
  {
    name: "Unlimited Inboxes",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: InboxIcon,
  },
  {
    name: "Manage Team Members",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: UsersIcon,
  },
  {
    name: "Spam Report",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: TrashIcon,
  },
  {
    name: "Compose in Markdown",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: PencilAltIcon,
  },
  {
    name: "Team Reporting",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: DocumentReportIcon,
  },
  {
    name: "Saved Replies",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ReplyIcon,
  },
  {
    name: "Email Commenting",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ChatAltIcon,
  },
  {
    name: "Connect with Customers",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: HeartIcon,
  },
];

export default function Home() {

  const [selectedLanguage , setSelectedLanguage] = useState(language_obj[0])

  return (
    <div className="bg-snow">
      <Navigation languageArray={language_obj} selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}/>
      <main>
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src={casa}
                  alt="Foto della casa dall'alto"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-400 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white font-bold">Libreria Colibri Cuorgne</span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center font-bold text-xl text-white sm:max-w-3xl">
                  La libreria che ci voleva!
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-red-site bg-snow  sm:px-8"
                    >
                      Fotogallery
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-site"
                    >
                      Contatti
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Informazioni/>
        {/*<Fotogallery/>*/}
        {/*<div className="bg-red-site">*/}
        {/*  <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">*/}
        {/*    <h2 className="text-3xl font-extrabold text-snow tracking-tight">*/}
        {/*      Inbox support built for efficiency*/}
        {/*    </h2>*/}
        {/*    <p className="mt-4 max-w-3xl text-lg text-black">*/}
        {/*      Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et*/}
        {/*      magna sit morbi lobortis. Blandit aliquam sit nisl euismod mattis*/}
        {/*      in.*/}
        {/*    </p>*/}
        {/*    <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">*/}
        {/*      {features.map((feature) => (*/}
        {/*        <div key={feature.name}>*/}
        {/*          <div>*/}
        {/*            <span className="flex items-center justify-center h-12 w-12 rounded-md bg-snow bg-opacity-10">*/}
        {/*              <feature.icon*/}
        {/*                className="h-6 w-6 text-black"*/}
        {/*                aria-hidden="true"*/}
        {/*              />*/}
        {/*            </span>*/}
        {/*          </div>*/}
        {/*          <div className="mt-6">*/}
        {/*            <h3 className="text-lg font-medium text-snow font-bold">*/}
        {/*              {feature.name}*/}
        {/*            </h3>*/}
        {/*            <p className="mt-2 text-base text-black">*/}
        {/*              {feature.description}*/}
        {/*            </p>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      ))}*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<CtaSection />*/}
        <Contatti/>
      </main>
      <Footer />
    </div>
  );
}
