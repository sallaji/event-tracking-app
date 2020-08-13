// import React, {forwardRef, useEffect, useRef, useState} from 'react';
// import styled from "styled-components";
// import ReactDatepicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
// import {registerLocale, setDefaultLocale} from "react-datepicker";
// import _ from "lodash";
// import de from 'date-fns/locale/de';
// import {Input} from "./index";
// import {Dialog} from "../dialogs";
// registerLocale('de', de);
// const DatepickerComponent = styled.div`
// .datepicker-wrapper{
// display: grid;
// justify-content: center;
// align-items: center;
// }
// .react-datepicker {
//   font-size: 1em;
// }
// .react-datepicker__header {
//   padding-top: 0.8em;
// }
// .react-datepicker__month {
//   margin: 0.4em 1em;
// }
// .react-datepicker__day-name, .react-datepicker__day {
//   width: 1.9em;
//   line-height: 1.9em;
//   margin: 0.166em;
// }
// .react-datepicker__current-month {
//   font-size: 1em;
// }
// .react-datepicker__navigation {
//   top: 1em;
//   line-height: 1.7em;
//   border: 0.45em solid transparent;
// }
// .react-datepicker__navigation--previous {
//   border-right-color: #ccc;
//   left: 1em;
// }
// .react-datepicker__navigation--next {
//   border-left-color: #ccc;
//   right: 1em;
// }
//
// @media only screen and (orientation: landscape) {
// .datepicker-wrapper{
// transform: translate(0,-6rem);
// }
// }
// `;
//
// export const Datepicker = (
//     {
//       id, name, value = '', type, labelText, width, padding, margin, placeholder,
//       className, onChange, onClick, onFocus, inputWidth, readOnly = false,
//       error, pattern
//     }) => {
//   const [openDialog, setOpenDialog] = useState(true);
//   const openOrClose = () => setOpenDialog(!openDialog);
//   let picker = useRef(null);
//   useEffect(()=>{
//     if(openDialog){
//       console.log(picker)
//       // picker.setOpen(true);
//     }
//   },[openDialog]);
//   const changeDate = (date) => {
//     const dateAsDate = new Date(date).getTime();
//     if (!readOnly) {
//       const fakeTarget = {
//         target: {
//           name: name,
//           value: dateAsDate
//         }
//       };
//       // picker.setSelected(dateAsDate)
//       (onChange || _.identity)(fakeTarget)
//     }
//   };
//
//   const CustomDatepickerInput = forwardRef(({value, onClick},
//       _ref) => (
//       <div onClick={onClick}
//            ref={_ref}
//       >{value}</div>
//   ));
//
//   const renderDatepicker = () => <Dialog close={openOrClose} title="Datum wählen" >
//     <div className="datepicker-wrapper">
//     <ReactDatepicker
//         ref={c => picker = c}
//         selected={value}
//         onChange={date => changeDate(date)}
//         name={name}
//         locale="de"
//         showTimeInput
//         // dateFormatCalendar={"MMM yyyy"}
//         //TODO Handle this min and max date with momentjs
//         // minDate={subMonths(new Date(), 6)}
//         // maxDate={addMonths(new Date(), 6)}
//         // showMonthYearDropdown
//         //TODO see when events will take place
//         // highlightDates={[subDays(new Date(), 7), addDays(new Date(), 7)]}
//         disabled={readOnly}
//         inline
//         // customInput={<CustomDatepickerInput ref={ref}/>}
//     />
//     </div>
//   </Dialog>;
//
//   return (
//       <DatepickerComponent>
//         {!openDialog &&
//         <Input onClick={openOrClose} onChange={()=> {}} value={value}/>}
//         {openDialog && renderDatepicker()}
//       </DatepickerComponent>
//   )
// };