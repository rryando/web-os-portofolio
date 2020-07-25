import React, {useState} from 'react'
import PropTypes from "prop-types";

const ToolbarLayout = ({children}) => {
  const [currentTime] = useState(new Date())
  const formatDate = (dateObj) => {
    const formatOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }

    return dateObj.toLocaleTimeString('en-gb', formatOptions)
  }
  return ( 
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <div className="h-6 inset-x-0 top-0 flex toolbar-bg">
        <div className="toolbar-content font-semibold text-left flex-1 px-2">Application</div>
        <div className="toolbar-content font-semibold capitalize text-center flex-1 px-2">{formatDate(currentTime)}</div>
        <div className="toolbar-content font-semibold text-right flex-1 px-2">Application</div>
      </div>
      {children}
    </div>
   );
}
 
ToolbarLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ToolbarLayout;