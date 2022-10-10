import { HistoryCardInterface } from "../components/history";
import { currentTime } from "./time";

export const keyLocalHistory = "cargohistory"

export const isExsitHistory = (): boolean => {
    if (localStorage.getItem(keyLocalHistory)) {
        return true
    } else {
        return false
    }
}

export const createHistory = (): void => {
    localStorage.setItem(keyLocalHistory, "[]")
}

export const pushHistory = (num: string): void => {
    if (!isExsitHistory()) {
        createHistory();
    }

    const historyList = JSON.parse(localStorage.getItem(keyLocalHistory) || "{}");
    const historyFilter = historyList.filter((item: any) => item.container_num !== num)
    const newItem = {
        container_num: num,
        time: currentTime().numberTime,
    }
    const newHistory = [...historyFilter, newItem]
    localStorage.setItem(keyLocalHistory, JSON.stringify(newHistory))

}

export const removeHistory = (num: string): void => {
    if (isExsitHistory()) {
        const historyList = JSON.parse(localStorage.getItem(keyLocalHistory) || "{}");
        const historyFilter = historyList.filter((item: any) => item.container_num !== num)
        const newHistory = [...historyFilter]
        localStorage.setItem(keyLocalHistory, JSON.stringify(newHistory))
    }
}