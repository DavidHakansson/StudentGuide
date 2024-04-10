export interface EventObject {
  id: string;
  title: string;
  date: string;
  time: string;
  category: string;
  nation: string;

  description: string;

  imageUrl: string;
}

export interface EventNationOption {
  readonly value: string;
  readonly label: string;
}
export const EventNationOptions: readonly EventNationOption[] = [
  { value: "Stockholms nation", label: "Stockholms nation" },
  { value: "Uplands nation", label: "Uplands nation" },
  {value: "Gästrike-Hälsinge nation", label: "Gästrike-Hälsinge nation"},
  { value: "Östgöta nation", label: "Östgöta nation" },
  { value: "Västgöta nation", label: "Västgöta nation" },
  { value: "Södermanland-Nerikes nation", label: "Södermanland-Nerikes nation"},
  { value: "Västmanlands-Dala nation", label: "Västmanlands-Dala nation" },
  { value: "Smålands nation", label: "Smålands nation" },
  { value: "Göteborgs nation", label: "Göteborgs nation" },
  { value: "Kalmar nation", label: "Kalmar nation" },
  { value: "Värmlands nation", label: "Värmlands nation" },
  { value: "Norrlands nation", label: "Norrlands nation" },
  { value: "Gotlands nation", label: "Gotlands nation" }
];

export const DefaultNationOptions = [
  EventNationOptions[0], // Stockholms nation
  EventNationOptions[1], // Gästrike-Hälsninglands nation
  EventNationOptions[2], // Västmanlands-Dala nation
  EventNationOptions[3], // Värmlands nation
  EventNationOptions[4], // Gotlands nation
  EventNationOptions[5], // Östgöta nation
  EventNationOptions[6], // Norrlands nation
  EventNationOptions[7], // Södermanland-Nerikes nation
  EventNationOptions[8], // Uplands nation
  EventNationOptions[9], // Göteborgs nation
  EventNationOptions[10], // Västgöta nation
  EventNationOptions[11], // Smålands nation
  EventNationOptions[12],
]; // Kalmar nation
