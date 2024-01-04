import React from "react";
import TaskDate from "./TaskDate";
import "./TaskItem.css";

export default class TaskItem extends React.Component {

    render() {
        return (
            <div className="task-item">
                <TaskDate date={this.props.date} />
                <div >{this.props.date.toISOString()}</div>
                <div className="task-item__description">
                    <h2>{this.props.title}</h2>
                    <div className="task-item__priority">{this.props.priority}</div>
                </div>
            </div>
            )
    };

};