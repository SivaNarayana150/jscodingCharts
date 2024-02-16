// Write your code here
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

const VaccinationCoverage = props => {
  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString
  }
  const {vaccinationCoverageDetails} = props
  return (
    <div>
      <h1>Vaccination Coverage</h1>
      <BarChart
        width={900}
        height={400}
        data={vaccinationCoverageDetails}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="vaccinationData"
          tick={{
            stroke: '#6c757c',
            strokeWidth: 1,
            fontSize: 14,
            fontFamily: 'Roboto',
          }}
        />
        <YAxis
          tickFormatter={dataFormatter}
          tick={{
            stroke: '#6c757c',
            strokeWidth: 0.5,
            fontSize: 15,

            fontFamily: 'Roboto',
          }}
        />

        <Legend
          wrapperStyle={{
            paddingTop: 20,
            textAlign: 'center',
            fontSize: 12,
            fontFamily: 'Roboto',
          }}
        />

        <Bar
          dataKey="dose1"
          name="dose1"
          fill="#5a8dee"
          radius={[10, 10, 0, 0]}
          barSize="20%"
        />

        <Bar
          dataKey="dose2"
          name="dose2"
          fill="#f54394"
          radius={[5, 5, 0, 0]}
          barSize="20%"
        />
      </BarChart>
    </div>
  )
}
export default VaccinationCoverage
