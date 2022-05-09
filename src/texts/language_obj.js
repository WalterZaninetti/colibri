import italy_icon from "../assets/italy.svg";
import english_icon from "../assets/united-kingdom.svg";
import france_icon from "../assets/france.svg";
import german_icon from "../assets/germany.svg";
import {italian} from "./italian";
import {english} from "./english";
import {german} from "./german";
import {french} from "./french";

export const language_obj = [
    {
        id: 1,
        name: "Italiano",
        avatar:italy_icon,
        texts : italian
    },
    {
        id: 2,
        name: "English",
        avatar:english_icon,
        texts : english
    },
    {
        id: 3,
        name: "French",
        avatar:france_icon,
        texts : french
    },
    {
        id: 4,
        name: "German",
        avatar:german_icon,
        texts : german
    },
]