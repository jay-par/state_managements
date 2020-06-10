import React from 'react';

const Notebar = () => {
  return (
    <div className="ui segment search-bar">
      <form className="ui form">
        <div className="field">
          <label>Add a note</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
};

export default Notebar;
