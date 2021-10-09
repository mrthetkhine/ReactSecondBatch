import React from "react";
class FormDemo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title :'',
            description:'',
            genre:'Si-Fi',
        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleGenreChange = this.handleGenreChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleTitleChange(event){
        //console.log("Event ",event.target.value);
        //console.log("This ",this);
        this.setState({
            title : event.target.value
        })
    }
    handleDescriptionChange(event){
        this.setState({
            description:event.target.value
        })
    }
    handleGenreChange(event){
        this.setState({
            genre:event.target.value
        })
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        console.log("Form submit ",this.state);
        event.preventDefault();
    }
    render() {
        console.log("Render");
        return(<div className="container col-6">
            <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Title</label>
                    <input type="text" id="title"
                           className="form-control"
                           value={this.state.title}
                           onChange={this.handleTitleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea type="text" id="description"
                           className="form-control"
                           value={this.state.description}
                           onChange={this.handleDescriptionChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="genre" className="form-label">Genre</label>
                    <select id="genre"
                            className="form-control"
                            value={this.state.genre}
                            onChange={this.handleInputChange}>
                        <option >Si-Fi</option>
                        <option>Crime</option>
                        <option selected>Drama</option>
                        <option>Mango</option>
                    </select>
                </div>
                <div className="">
                    <input type="submit" className="btn btn-primary" value="Submit" />
                </div>

            </form>
        </div>);
    }


}
export default FormDemo;