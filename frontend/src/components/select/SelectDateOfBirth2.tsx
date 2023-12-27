import { days, months, years } from '../../helpers/date';
import { useSearchParams } from "react-router-dom";
import './select.scss';
import Select, { SingleValue } from "react-select";
import { FbAnimation } from '../../pages/fbChatLp/animation/FbAnimation';
import { Typewriter } from 'react-simple-typewriter'


export const LocalSelect2: React.FC = () => {

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

  type SelectOption = {
    value: string | number | null,
    label: string | number
  }

  const arrayDay: SelectOption[] = days.map((day) => ({ value: day, label: day }))


  const arrayMonth: SelectOption[] = months.map((month) => ({ value: month, label: month }))


  const arrayYear: SelectOption[] = years.map((year) => ({ value: year, label: year }))
  years.map(year => {
    const temp = { value: year, label: year }
    arrayYear.push(temp);
  })

  function handleSelectParam(value: SingleValue<SelectOption>, param: string) {

    if (value?.value === param) {
      params.delete(param)
    } else {
      params.set(param, String(value?.value));
    }

    setSearchParams(params);

  }

  const selectOptionStyles = {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center'
  }



  return (
    <div>
      {/* <form> */}
        <div className="select mt-2 is-normal pr-1 custom-font" style={{ width: '100px' }}>
          <Select
            options={arrayDay}
            styles={{
              control: (baseStyle) => ({
                ...baseStyle,
                cursor: 'pointer',
              }),
              option: () => (selectOptionStyles)
            }}
            onChange={(event) => handleSelectParam(event, 'day')}
            placeholder="day"
            isSearchable={false}
          />
        </div>
        <div className="select mt-2 is-normal pr-1 custom-font" style={{ width: '120px' }}>
          <Select
            styles={{
              control: (baseStyle) => ({
                ...baseStyle,
                cursor: 'pointer',
              }),
              option: () => (selectOptionStyles)
            }}
            options={arrayMonth}
            onChange={(event) => handleSelectParam(event, 'month')}
            placeholder="month"
            isSearchable={false}
          />
        </div>
        <div className="select mt-2 is-normal pr-1 custom-font" style={{ width: '100px' }}>
          <Select
            options={arrayYear}
            styles={{
              control: (baseStyle) => ({
                ...baseStyle,
                cursor: 'pointer',
              }),
              option: () => (selectOptionStyles)
            }}
            onChange={(event) => handleSelectParam(event, 'year')}
            placeholder="year"
            isSearchable={false}
          />
        </div>
      {/* </form> */}


      <div>

      </div>

    </div>
  )
}