export default function convertHoursToMinutes(time:string) {
    //08:00
    const [hour, minutes] = time.split(':').map(Number);
    // hour = 8
    // minutes = 0
    const timeInMinutes = (hour * 60) + minutes;
    // (8 * 60) + 0 = 480 minutos
    return timeInMinutes;
}