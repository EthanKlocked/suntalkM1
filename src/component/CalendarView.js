//------------------------------ MODULE --------------------------------
import {LocaleConfig, Agenda} from 'react-native-calendars';
import { View, Text} from 'react-native';

//------------------------------ SETTING --------------------------------
/* LOCATION CONFIG
LocaleConfig.locales['fr'] = {
monthNames: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'
],
monthNamesShort: ['1월.', '2월.', '3월', '4월', '5월', '6월', '7월.', '8월', '9월', '10월', '11월', '12월'],
dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
today: "Aujourd'hui"
};
LocaleConfig.defaultLocale = 'fr';
*/

//---------------------------- COMPONENT -------------------------------
export default function Scheduler(){

    //init
    // Get the current date
    const currentDate = new Date();

    // Get the date three months earlier
    const threeMonthsEarlier = new Date();
    threeMonthsEarlier.setMonth(currentDate.getMonth() - 3);

    // Get the date three months ahead
    const threeMonthsLater = new Date();
    threeMonthsLater.setMonth(currentDate.getMonth() + 3);

    // Format the dates if needed
    const td = currentDate.toDateString('YYYY-MM-DD');
    const sd = threeMonthsEarlier.toDateString('YYYY-MM-DD');
    const ed = threeMonthsLater.toDateString('YYYY-MM-DD');
    
    //render
    return (
        <Agenda
            // The list of items that have to be displayed in agenda. If you want to render item as empty date
            // the value of date key has to be an empty array []. If there exists no value for date key it is
            // considered that the date in question is not yet loaded
            items={{
                '2023-04-22': [{name: 'item 1 - any js object'}],
                '2023-05-23': [
                    {name: 'item 1 - any js object', height: 80},
                    {name: 'item 3 - any js object', height: 80},
                ],
                '2023-06-24': [],
                '2023-07-25': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
            }}
            // Callback that gets called when items for a certain month should be loaded (month became visible)
            loadItemsForMonth={month => {
                console.log('trigger items loading');
            }}
            // Callback that fires when the calendar is opened or closed
            onCalendarToggled={calendarOpened => {
                console.log(calendarOpened);
            }}
            // Callback that gets called on day press
            onDayPress={day => {
                console.log('day pressed');
            }}
            // Callback that gets called when day changes while scrolling agenda list
            onDayChange={day => {
                console.log('day changed');
            }}
            // Initially selected day
            selected={td}
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            minDate={sd}
            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
            maxDate={ed}
            // Max amount of months allowed to scroll to the past. Default = 50
            pastScrollRange={3}
            // Max amount of months allowed to scroll to the future. Default = 50
            futureScrollRange={3}
            // Specify how each item should be rendered in agenda
            renderItem={(item, firstItemInDay) => {
                return <View ><Text>test</Text></View>;
            }}
            // Specify how each date should be rendered. day can be undefined if the item is not first in that day
            renderDay={(day, item) => {
                return <View />;
            }}
            // Specify how empty date content with no items should be rendered
            renderEmptyDate={() => {
                return <View />;
            }}
            // Specify how agenda knob should look like
            renderKnob={() => {
                return <View><Text>Knob</Text></View>;
            }}
            // Specify what should be rendered instead of ActivityIndicator
            renderEmptyData={() => {
                return <View />;
            }}
            // Specify your item comparison function for increased performance
            rowHasChanged={(r1, r2) => {
                return r1.text !== r2.text;
            }}
            // Hide knob button. Default = false
            hideKnob={false}
            // When `true` and `hideKnob` prop is `false`, the knob will always be visible and the user will be able to drag the knob up and close the calendar. Default = false
            showClosingKnob={true}
            // By default, agenda dates are marked if they have at least one item, but you can override this if needed
            markedDates={{
                '2023-05-16': {selected: true, marked: true},
                '2023-05-17': {marked: true},
                '2023-05-18': {disabled: true}
            }}
            // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
            disabledByDefault={true}
            // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly
            onRefresh={() => console.log('refreshing...')}
            // Set this true while waiting for new data from a refresh
            refreshing={false}
            // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView
            refreshControl={null}


            
            /* EXTRA OPTIONS
            // Override inner list with a custom implemented component
            renderList={listProps => {
                return <MyCustomList {...listProps} />;
            }}            
            // Agenda theme
            theme={{
                //...calendarTheme,
                agendaDayTextColor: 'yellow',
                agendaDayNumColor: 'green',
                agendaTodayColor: 'red',
                agendaKnobColor: 'blue'
            }}
            // Agenda container style
            style={{}}
            */
        />
    )
}
