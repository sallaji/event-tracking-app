import React, {useEffect, useState} from 'react';
import utils from '@date-io/moment';
import moment from "moment";
import "moment/locale/de";
import {
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import _ from 'lodash'
import {lime} from "@material-ui/core/colors";
import {makeStyles} from '@material-ui/core/styles'
import {Input} from '../inputs/index'
import theme from "../../styles/theme";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";

moment.locale("de");

const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: theme.palette.primary
  },
  typography: {
    fontFamily: theme.typography.fontFamily,
  },
});

const Datepicker = ({value, onChange, readOnly = false, name, className, label}) => {
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
                          className={className}
                          label={label}
                          name={name}
          />

        </MuiPickersUtilsProvider>
      </ThemeProvider>
  );
};
export default Datepicker