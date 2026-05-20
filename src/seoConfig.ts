export const seoKeywords = ["tattoo", "tattoo-studio"];

export const seoLocations = [
  "greiz", "mohlsdorf", "plauen", "weida", "reichenbach", "zwickau", "gera", "elsterberg", "werdau", "crimmitschau", 
  "fraureuth", "hohenleuben", "leubnitz", "berga", "neumark", "lichtentanne", "netzschkau", "mylau", "treuen", 
  "lengenfeld", "auerbach", "ronneburg", "wuenschendorf", "langenwetzendorf", "wilkau-hasslau", "kirchberg", 
  "meerane", "glauchau", "muelsen", "oelsnitz-vogtland", "falkenstein", "rodewisch", "schmoelln", "goessnitz", 
  "bad-koestritz", "muenchenbernsdorf", "kraftsdorf", "seelingstaedt", "neumuehle", "teichwolframsdorf", 
  "heinsdorfergrund", "steinberg", "ellefeld", "neukirchen", "crinitzberg", "hirschfeld", "rosenbach", "pausa", 
  "wildenfels", "hartenstein", "crossen", "stenn", "ebersbrunn"
];

export const formatSeoText = (text: string) => {
  return text.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};
