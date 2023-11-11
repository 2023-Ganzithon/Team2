import axios from "axios";

export const BASCI_URL =
  "https://port-0-mirthon2-5yc2g32mlol3abmv.sel5.cloudtype.app/";

export const basicAPI = axios.create({
  baseURL: BASCI_URL,
});
