import { days, months, years } from '../../helpers/date';
// import { useSearchParams } from "react-router-dom";
import './select.scss';
import Select, { SingleValue } from "react-select";
// import { FbAnimation } from '../../pages/fbChatLp/animation/FbAnimation';
// import { Typewriter } from 'react-simple-typewriter'

type SelectOption = {
  value: string | number | null,
  label: string | number
}
type Props = {
  onChange: (value: SingleValue<SelectOption>, param: string) => void,
}

export const LocalSelect2: React.FC<Props> = ({ onChange }) => {

  // const horoSigns = [
  //   'Aries',
  //   'Taurus',
  //   'Gemini',
  //   'Cancer',
  //   'Leo',
  //   'Virgo',
  //   'Libra',
  //   'Scorpio',
  //   'Sagittarius',
  //   'Capricorn',
  //   'Aquarius',
  //   'Pisces',
  // ];

  // const [searchParams, setSearchParams] = useSearchParams();
  // const params = new URLSearchParams(searchParams);


  const arrayDay: SelectOption[] = days.map((day) => ({ value: day, label: day }))


  const arrayMonth: SelectOption[] = months.map((month) => ({ value: month, label: month }))


  const arrayYear: SelectOption[] = years.map((year) => ({ value: year, label: year }))
  years.map(year => {
    const temp = { value: year, label: year }
    arrayYear.push(temp);
  })

  const selectOptionStyles = {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center'
  }

  return (
    <div className='custom-select'>
      {/* <form> */}
      <div className="select mt-2 is-normal pr-1 custom-font" style={{ width: '120px' }}>
        <Select
          options={arrayDay}
          styles={{
            control: (baseStyle) => ({
              ...baseStyle,
              cursor: 'pointer',
            }),
            option: () => (selectOptionStyles)
          }}
          menuPlacement="top"
          onChange={(event) => onChange(event, 'day')}
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
          menuPlacement="top"
          options={arrayMonth}
          onChange={(event) => onChange(event, 'month')}
          placeholder="month"
          isSearchable={false}
        />
      </div>
      <div className="select mt-2 is-normal pr-1 custom-font" style={{ width: '120px' }}>
        <Select
          options={arrayYear}
          styles={{
            control: (baseStyle) => ({
              ...baseStyle,
              cursor: 'pointer',
            }),
            option: () => (selectOptionStyles)
          }}
          menuPlacement="top"
          onChange={(event) => onChange(event, 'year')}
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