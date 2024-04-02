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
    {value: 'Pub', label: 'Pub'},
    {value: 'Restaurant', label: 'Restaurant'},
    {value: 'Club', label: 'Club'},
    {value: 'Gasque', label: 'Gasque'},
    {value: 'Sport', label: 'Sport'},
    {value: 'ReceptionHours', label: 'Reception Hours'},
    {value: 'Other', label: 'Other'}
];

export const DefaultCategoryOptions = [
    EventCategoryOptions[0], // Breakfast
    EventCategoryOptions[2], // Lunch 
    EventCategoryOptions[3], // Fika
    EventCategoryOptions[4], // Pub
    EventCategoryOptions[6]] // Club

