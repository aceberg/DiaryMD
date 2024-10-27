import { createSignal } from "solid-js";
import { apiSaveWorkSpaces } from "./api";

export const [allWorkSpaces, setAllWorkSpaces] = createSignal([]);
export const [nowWorkSpace, setNowWorkSpace] = createSignal(null);

let wspChanged = false;

export function editWorkSpace(name, wsp) {

    const all = allWorkSpaces();
    let newAll = [];

    for (let i in all) {
        if (all[i].Name != name) {
            newAll.push(all[i]);
        } 
    }
    newAll.push(wsp);
    setAllWorkSpaces(newAll);
    wspChanged = true;
}

export function saveWspToFile() {

    const interval = setInterval(function () {
        if (wspChanged) {
            wspChanged = false;
            const wsps = allWorkSpaces();
            apiSaveWorkSpaces(wsps);
        }
    }, 5000);
}