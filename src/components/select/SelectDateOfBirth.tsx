import { days, months, years } from '../../helpers/date';
import { useSearchParams } from "react-router-dom";
import './select.scss';
import Select, { SingleValue } from "react-select";
import { FbAnimation } from '../../animation/FbAnimation';
import { Typewriter } from 'react-simple-typewriter'


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

  function handleSelectDay(value: SingleValue<SelectOption>) {

    if (value?.value === 'day') {
      params.delete('day')
    } else {
      params.set('day', String(value?.value));
    }

    setSearchParams(params);

  }
  function handleSelectMonth(value: SingleValue<SelectOption>) {

    if (value?.value === 'month') {
      params.delete('month')
    } else {
      params.set('month', String(value?.value));
    }

    setSearchParams(params);

  }
  function handleSelectYear(value: SingleValue<SelectOption>) {

    if (value?.value === 'year') {
      params.delete('year')
    } else {
      params.set('year', String(value?.value));
    }

    setSearchParams(params);

  }

  return (
    <div>
      <FbAnimation text='Your destiny is typing'/>
     <div className='custom-font'>
     <Typewriter
            words={['Very long sentence is heeereee !!']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
     </div>
      <form>
        <div className="select mt-2 is-normal pr-1 custom-font" style={{ width: '100px' }}>
          <Select
            options={arrayDay}
            styles={{
              control: (baseStyle) => ({
                ...baseStyle,
                cursor: 'pointer',
              }),
              option: () => ({
                cursor: 'pointer'
              })
            }}
            onChange={handleSelectDay}
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
              option: () => ({
                cursor: 'pointer'
              })
            }}
            options={arrayMonth}
            onChange={handleSelectMonth}
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
              option: () => ({
                cursor: 'pointer'
              })
            }}
            onChange={handleSelectYear}
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