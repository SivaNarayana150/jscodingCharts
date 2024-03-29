// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByGender = props => {
  const {vaccinationGenderDetails} = props
  return (
    <div>
      <h1>Vaccination by gender</h1>
      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="60%"
          data={vaccinationGenderDetails}
          startAngle={180}
          endAngle={0}
          innerRadius="30%"
          outerRadius="60%"
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="other" fill="#2cc6c6" />
        </Pie>
      </PieChart>

      <Legend
        iconType="circle"
        layout="horizontal"
        verticalAlign="bottom"
        align="center"
        wrapperStyle={{fontFamily: 'Roboto', fontSize: 12}}
      />
    </div>
  )
}

export default VaccinationByGender
