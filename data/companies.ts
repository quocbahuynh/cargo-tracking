import { apiLinks } from "../utils";
import { Company } from "./types";


const companiesList: Company[] = [
    {
        name: "Maersk",
        icon: "",
        api: apiLinks.companies.maersk.api,
        status: true
    },
    {
        name: "Cosco",
        icon: "",
        api: apiLinks.companies.cosco.api,
        status: false
    },
    {
        name: "MSC",
        icon: "",
        api: apiLinks.companies.msc.api,
        status: false
    }
]

export default companiesList;