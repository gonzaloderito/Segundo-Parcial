
import moment from "moment";

export const BirthdayCardModel = {
  getAge: () => {
    return moment().diff(moment([2000, 9, 27]), "years");
  },

  getDaysUntilBirthday: () => {
    let year = moment().year();
    let month = moment().month() + 1;
    let day = moment().date();

    if (month > 5 && day > 23) year += 1;

    let birthday = moment([year, 9, 27]);
    return birthday.diff(moment(), "days");
  },
};
