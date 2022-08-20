import React, { Component } from "react";
import { connect } from "react-redux";
import { createTrail } from "../slices/trails";
class AddTrail extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTrail = this.saveTrail.bind(this);
    this.newTrail = this.newTrail.bind(this);
    this.state = {
      id: null,
      name: "",
      date: "",
      submitted: false,
    };
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeDate(e) {
    this.setState({
      date: e.target.value,
    });
  }
  saveTrail() {
    const { title, description } = this.state;
    this.props
      .createTrail({ title, description })
      .unwrap()
      .then((data) => {
        this.setState({
          id: data.id,
          name: data.title,
          date: data.description,
          submitted: true,
        });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  newTrail() {
    this.setState({
      id: null,
      name: "",
      date: "",
      submitted: false,
    });
  }
  render() {
    return (
      <form>
        <div class="grid-container">
          <div class="grid-x grid-padding-x">
            <div class="medium-6 cell">
              <label>
                Name
                <input
                  type="text"
                  placeholder=".medium-6.cell"
                  required
                  value={this.state.name}
                  onChange={this.onChangeName}
                  name="name"
                />
              </label>
            </div>
            <div class="medium-6 cell">
              <label>
                Input Label
                <input
                  type="date"
                  placeholder=".medium-6.cell"
                  required
                  value={this.state.title}
                  onChange={this.onChangeDate}
                  name="date"
                />
              </label>
            </div>
          </div>
        </div>
        <button onClick={this.saveTrail} className="btn btn-success">
          Submit
        </button>
      </form>
    );
  }
}
export default connect(null, { createTrail })(AddTrail);
