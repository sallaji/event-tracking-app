import React, {useState} from 'react';
import utils from '@date-io/moment';
import moment from "moment";
import "moment/locale/de";
import {
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import _ from 'lodash'
import { lime } from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
moment.locale("de");


const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: lime,
  },
});


const Datepicker = ({value, onChange, readOnly=false, name}) => {
  const [selectedDate, setSelectedDate] = useState(new Date(value).getTime());
  const [locale, setLocale] = useState("de");

  const handleDateChange = date => {
    if (!readOnly) {
      const dateAsObjectDate = new Date(date).getTime();
      const fakeTarget = {
        target: {
          name: name,
          value: dateAsObjectDate
        }
      };
      setSelectedDate(dateAsObjectDate);
      (onChange || _.identity)(fakeTarget)
    }
  };
  return (
      <ThemeProvider theme={defaultMaterialTheme}>
      <MuiPickersUtilsProvider
          libInstance={moment}
          utils={utils}
          locale={locale}
      >
        <DateTimePicker value={selectedDate}
                        disabled={readOnly}
                        onChange={date => handleDateChange(date)}
        />

      </MuiPickersUtilsProvider>
      </ThemeProvider>
  );
};
export default Datepicker