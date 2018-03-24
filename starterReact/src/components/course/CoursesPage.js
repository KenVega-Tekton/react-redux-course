import React, { Proptypes, Component } from 'react';

class CoursesPage extends Component {

  state = {
    course : {title : ""}
  };

  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave() {
    alert(`Saving ${this.state.course.title}`);
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={onTitleChange}
          value={state.course.title}
          />
        <input
          type="submit"
          value="save"
          onClick={onClickSave}
          />
      </div>
    );
  }
}

export default CoursesPage;

