import {Fragment} from "react";
import {Listbox, Transition} from "@headlessui/react";
import {CheckIcon} from "@heroicons/react/solid";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LanguageSelect({languageArray , selectedLanguage,setSelectedLanguage}) {


  return (
    <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
      {({ open }) => (
        <>
          <div className="mt-1 relative">
            <Listbox.Button className="relative border border-black  w-full bg-white rounded-md shadow-sm px-8 py-2 cursor-default sm:text-sm">
              <span className="flex items-center justify-center">
                <img
                  src={selectedLanguage.avatar}
                  alt=""
                  className="flex-shrink-0 h-8 w-8 rounded-full"
                />
                <span className="ml-3 block text-lg truncate">{selectedLanguage.name}</span>
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {languageArray.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-red-site" : "text-black",
                        "cursor-default select-none relative py-2 pl-3 pr-9"
                      )
                    }
                    value={person}
                  >
                    {({ selectedLanguage, active }) => (
                      <>
                        <div className="flex items-center">
                          <img
                            src={person.avatar}
                            alt=""
                            className="flex-shrink-0 h-6 w-6 rounded-full"
                          />
                          <span
                            className={classNames(
                              selectedLanguage ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selectedLanguage ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5 text-black" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
