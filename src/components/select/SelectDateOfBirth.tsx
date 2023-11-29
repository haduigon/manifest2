import { days, months, years } from '../../helpers/date';
import { useSearchParams } from "react-router-dom";
import './select.scss';
import Select from "react-select";

export const LocalSelect: React.FC = () => {

  const horoSigns = [
    'Aries',
    'Taurus',
    'Gemini',
    'Cancer',
    'Leo',
    'Virgo',
    'Libra',
    'Scorpio',
    'Sagittarius',
    'Capricorn',
    'Aquarius',
    'Pisces',
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const params = new URLSearchParams(searchParams);

  type SingleValue = {
    value: string | number,
    label: string | number
  }

  const arrayDay: SingleValue[] = [{ value: 'day', label: 'day' }];
  days.map(day => {
    const temp = { value: day, label: day }
    arrayDay.push(temp);
  })

  const arrayMonth: SingleValue[] = [{ value: 'month', label: 'month' }];
  months.map(month => {
    const temp = { value: month, label: month }
    arrayMonth.push(temp);
  })

  const arrayYear: SingleValue[] = [{ value: 'year', label: 'year' }];
  years.map(year => {
    const temp = { value: year, label: year }
    arrayYear.push(temp);
  })

  function handleSelectDay(value: SingleValue) {

    if (value.value === 'day') {
      params.delete('day')
    } else {
      params.set('day', String(value.value));
    }

    setSearchParams(params);

  }
  function handleSelectMonth(value: any) {

    if (value.value === 'month') {
      params.delete('month')
    } else {
      params.set('month', String(value.value));
    }

    setSearchParams(params);

  }
  function handleSelectYear(value: SingleValue) {

    if (value.value === 'year') {
      params.delete('year')
    } else {
      params.set('year', String(value.value));
    }

    setSearchParams(params);

  }

  return (
    <div>

      <form>
        <div className="select mt-2 is-normal pr-1" style={{width: '100px'}}>
          <Select
            options={arrayDay}
            onChange={(event) => handleSelectDay}
            placeholder="day"
            isSearchable={false}
          />
        </div>
        <div className="select mt-2 is-normal pr-1" style={{width: '100px'}}>
         <Select
            options={arrayMonth}
            onChange={handleSelectMonth}
            placeholder="month"
            isSearchable={false}
          />
        </div>
        <div className="select mt-2 is-normal pr-1" style={{width: '100px'}}>
          <Select
            options={arrayYear}
            onChange={() => handleSelectYear}
            placeholder="year"
            isSearchable={false}
          />
        </div>
      </form>


      <div>
        
      </div>

    </div>
  )
}