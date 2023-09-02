import { format } from "date-fns";

import { CONFIG } from "@/shared/const/config";

export function getUrl(city: string, type: string) {
    return `${CONFIG.API}${type}?q=${city}&appid=${CONFIG.KEY}&cnt=${CONFIG.NUMBER_FORECASTS}&units=metric`;
}

export function getTime(param: number) {
    return format(new Date(param * 1000), "HH:mm");
}

export function getDate(param: number) {
    return format(new Date(param * 1000), "d LLL");
}
