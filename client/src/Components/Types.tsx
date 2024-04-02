export interface EventObject{
    id: string;
    title: string;
    date: string;
    time: string;
    category: string;
    nation: string;

    description: string;

    imageUrl: string;
}

export interface EventCategoryOption {
    
    readonly value: string;
    readonly label: string;


}
export const EventCategoryOptions: readonly EventCategoryOption[] = [


    {value: 'Breakfast', label: 'Breakfast'},
    {value: 'Brunch', label: 'Brunch'},
    {value: 'Lunch', label: 'Lunch'},
    {value: 'Fika', label: 'Fika'},
    {value: 'Restaurant', label: 'Restaurant'},
    {value: 'Pub', label: 'Pub'},
    {value: 'Club', label: 'Club'},
    {value: 'Gasque', label: 'Gasque'},
    {value: 'Sport', label: 'Sport'},
    {value: 'ReceptionHours', label: 'Reception Hours'},
    {value: 'Other', label: 'Other'}
];

export const nationImageMap = {
    'Stockholms nation': 'Stockholm.png',
    'Uplands nation': 'Uplands.png',
    'Gästrike-Hälsinge nation': 'GH.png', // Assuming GH stands for Gästrike-Hälsinge
    'Östgöta nation': 'Ostgota.png',
    'Västgöta nation': 'Vastgota.png',
    'Södermanlands-Nerikes nation': 'Snerike.png',
    'Västmanlands-Dala nation': 'Vdala.png',
    'Smålands nation': 'Smalands.png',
    'Göteborgs nation': 'Goteborg.gif',
    'Kalmar nation': 'kalmar.png',
    'Värmlands nation': 'Varmlands.png',
    'Norrlands nation': 'Norrland.png',
    'Gotlands nation': 'Gotland.gif',
};

