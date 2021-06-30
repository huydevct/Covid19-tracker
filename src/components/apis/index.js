import axios from "axios";

export default function getCountries(){
   return axios.get("https://api.covid19api.com/countries");
}
  
