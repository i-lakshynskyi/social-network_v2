import React, { Component } from 'react';

class ProfileStatus extends Component {
   state = {
      editMode: false,
      status: this.props.status,
   };

   activateEditMode = () => {
      this.setState({ editMode: !this.state.editMode });
   };
   deactivateEditMode = () => {
      this.setState({ editMode: !this.state.editMode });
      this.props.updateStatus(this.state.status);
   };
   onStatusChange = (e) => {
      this.setState({ status: e.currentTarget.value });
   };
   render() {
      return (
         <div>
            {!this.state.editMode && (
               <div>
                  <span onMouseOver={this.activateEditMode}>{this.props.status ? this.props.status : 'Status...'}</span>
               </div>
            )}
            {this.state.editMode && (
               <div>
                  <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}  value={this.state.status} />
               </div>
            )}
         </div>
      );
   }
}

export default ProfileStatus;
