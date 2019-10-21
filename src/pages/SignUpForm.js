import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
            weight: '',
            age: '',
            gender: '',
            heightInches: '',
            exerciseDays: '',
            healthGoal: '',
            hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
              <div className="FormField flex-row">
                  <div className = "flex-column">
                    <label className="FormField__Label" htmlFor="weight">Current Weight</label>
                    <input type="number" id="weight" className="FormField__Input" placeholder="Lbs" name="weight" value={this.state.weight} onChange={this.handleChange} />
                  </div>
                  <div className = "flex-column">
                    <label className="FormField__Label" htmlFor="age">Age</label>
                    <input type="number" id="age" className="FormField__Input" placeholder="Years" name="age" value={this.state.age} onChange={this.handleChange} />
                  </div>
                  <div className = "flex-row">
                      <div className = "gender">
                        <label className="FormField__Label" htmlFor="gender">Male</label>
                        <input type="radio" id="genderMale" className="FormField__Input" placeholder="Gender" name="gender" value="Male" onChange={this.handleChange} />
                      </div>
                      <div className = "gender">
                        <label className="FormField__Label" htmlFor="gender">Female</label>
                        <input type="radio" id="genderFemale" className="FormField__Input" placeholder="Gender" name="gender" value="Female" onChange={this.handleChange} />
                      </div>
                  </div>
              </div>
              <div className = "flex-row">
                <div className ="flex-column">
                    <label className = "FormField__Label"
                    htmlFor="heightInches">Height</label>
                    <select id="heightSelect" className="FormField__Input" placeholder="Height"
                    name="heightInches" value={this.state.heightInches} onChange={this.handleChange}>
                        <option value ="Not entered">Height</option>
                        <option value ="48">4'0"</option>
                        <option value ="49">4'1"</option>
                        <option value ="50">4'2"</option>
                        <option value ="51">4'3"</option>
                        <option value ="52">4'4"</option>
                        <option value ="53">4'5"</option>
                        <option value ="54">4'6"</option>
                        <option value ="55">4'7"</option>
                        <option value ="56">4'8"</option>
                        <option value ="57">4'9"</option>
                        <option value ="58">4'10"</option>
                        <option value ="59">4'11"</option>
                        <option value ="60">5'0"</option>
                        <option value ="61">5'1"</option>
                        <option value ="62">5'2"</option>
                        <option value ="63">5'3"</option>
                        <option value ="64">5'4"</option>
                        <option value ="65">5'5"</option>
                        <option value ="66">5'6"</option>
                        <option value ="67">5'7"</option>
                        <option value ="68">5'8"</option>
                        <option value ="69">5'9"</option>
                        <option value ="70">5'10"</option>
                        <option value ="71">5'11"</option>
                        <option value ="72">6'0"</option>
                        <option value ="73">6'1"</option>
                        <option value ="74">6'2"</option>
                        <option value ="75">6'3"</option>
                        <option value ="76">6'4"</option>
                        <option value ="77">6'5"</option>
                        <option value ="78">6'6"</option>
                        <option value ="79">6'7"</option>
                        <option value ="80">6'8"</option>
                        <option value ="81">6'9"</option>
                        <option value ="82">6'10"</option>
                        <option value ="83">6'11"</option>
                        <option value ="84">7'0"</option>
                    </select>
                </div>
                <div className = "centered">
                    <label className = "FormField__Label"
                    htmlFor="exerciseDays">Available Exercise Days</label>
                    <select id="exerciseDaysSelect" className="FormField__Input" placeholder="Days"
                    name="exerciseDays" value={this.state.exerciseDays} onChange={this.handleChange}>
                        <option value ="Not entered">Days Available</option>
                        <option value ="0">None</option>
                        <option value ="1-2">1-2 Days</option>
                        <option value ="3-4">3-4 Days</option>
                        <option value ="5-6">5-6 Days</option>
                        <option value ="7">7 Days</option>
                    </select>
                </div>
                <div className="centered">
                <label className = "FormField__Label"
                    htmlFor="healthGoal">Health Goal</label>
                    <select id="healthGoal" className="FormField__Input" placeholder="Health Goal"
                    name="healthGoal" value={this.state.healthGoal} onChange={this.handleChange}>
                        <option value ="Not entered">Goal</option>
                        <option value ="20% Deficit">Aggressive Weight Loss</option>
                        <option value ="15% Deficit">Moderate Weight Loss</option>
                        <option value ="10% Deficit">Mild Weight Loss</option>
                        <option value ="0%">Maintain Healthy Weight</option>
                        <option value ="10% Surplus">Moderate Weight Gain</option>
                        <option value ="15% Surplus">Aggressive Weight Gain</option>
                    </select>
                </div>
            </div>

              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                </label>
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
              </div>
            </form>
          </div>
        );
    }
}
export default SignUpForm;